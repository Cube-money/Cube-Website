"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { DemoCard } from "./DemoCard";

/**
 * Frame 2: Car down payment demo — title, DemoCard, one viewport.
 */
export default function PreviewFrame2() {
  const [mode, setMode] = useState<"participants" | "contribution">(
    "participants"
  );
  const [userHasContributed, setUserHasContributed] = useState(false);
  const [isContributeBusy, setIsContributeBusy] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isCovered, setIsCovered] = useState(false);
  const [winnerRevealed, setWinnerRevealed] = useState(false);
  const TOTAL_CYCLES = 5;
  const [cycle, setCycle] = useState(0); // 0..5 (current completed/active cycle)
  const [activeWinnerCycle, setActiveWinnerCycle] = useState<number | null>(null);
  const [winnersById, setWinnersById] = useState<Record<string, number>>({}); // id -> cycleWon
  const [activeWinnerId, setActiveWinnerId] = useState<string | null>(null); // current cycle's winner (for announcement)
  const [goldWinnerId, setGoldWinnerId] = useState<string | null>(null); // highlighted winner row (persists until next cycle starts)
  const [runId, setRunId] = useState(0); // increments per Contribute click
  const [showEndSummary, setShowEndSummary] = useState(false);

  // Scale demo for viewport: keep 0.53 on small screens, scale up on large monitors
  const DEMO_HEIGHT_PX = 1100;
  const MIN_SCALE = 0.53;
  const MAX_SCALE = 0.9;
  const MOBILE_MIN_SCALE = 0.66;
  const MOBILE_MAX_SCALE = 0.86;
  const MOBILE_SCALE_BOOST = 1.14;
  const MOBILE_BREAKPOINT = 768;
  const [demoScale, setDemoScale] = useState(MIN_SCALE);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const viewportH = typeof window !== "undefined" ? window.innerHeight : 800;
      const viewportW = typeof window !== "undefined" ? window.innerWidth : 1024;
      const isNowMobile = viewportW < MOBILE_BREAKPOINT;
      const fitScale = (viewportH * 0.92) / DEMO_HEIGHT_PX;
      if (isNowMobile) {
        const boosted = fitScale * MOBILE_SCALE_BOOST;
        setDemoScale(Math.max(MOBILE_MIN_SCALE, Math.min(MOBILE_MAX_SCALE, boosted)));
      } else {
        setDemoScale(Math.max(MIN_SCALE, Math.min(MAX_SCALE, fitScale)));
      }
      setIsMobile(isNowMobile);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const totalBefore = 4800;
  const contributionAmount = 1200;
  const totalAfter = totalBefore + contributionAmount; // 6000
  const COUNTUP_MS = 2400;

  const [displayTotal, setDisplayTotal] = useState(totalBefore);
  const [displayContribution, setDisplayContribution] = useState(0);
  const [displayAccessed, setDisplayAccessed] = useState(0);

  const contributionPct = Math.min(1, displayContribution / totalAfter);
  const accessedPct = Math.min(1, displayAccessed / totalAfter);

  const participants = useMemo(
    () =>
      [
        { id: "micheal", name: "Micheal Ramirez", initial: "M", type: "member" },
        { id: "david", name: "David Kim", initial: "D", type: "member" },
        { id: "amina", name: "Amina Roberts", initial: "A", type: "member" },
        { id: "sarah", name: "Sarah Jones", initial: "S", type: "member" },
        { id: "you", name: "You", initial: "Y", type: "you" },
      ] as const,
    []
  );

  const winnerName = useMemo(() => {
    const id = activeWinnerId ?? goldWinnerId;
    return participants.find((p) => p.id === id)?.name ?? "Winner";
  }, [participants, activeWinnerId, goldWinnerId]);

  const [order, setOrder] = useState<string[]>(() =>
    participants.map((p) => p.id)
  );

  const resetDemoToStart = () => {
    setMode("participants");
    setDisplayContribution(0);
    setDisplayAccessed(0);
    setCycle(0);
    setActiveWinnerCycle(null);
    setWinnersById({});
    setActiveWinnerId(null);
    setGoldWinnerId(null);
    setWinnerRevealed(false);
    setIsCovered(false);
    setIsShuffling(false);
    setIsContributeBusy(false);
    setDisplayTotal(totalBefore);
    setUserHasContributed(false);
    setShowEndSummary(false);
    setOrder(participants.map((p) => p.id));
  };

  // FLIP animation for row reordering (smooth slide during shuffle)
  const rowElsRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const prevTopsRef = useRef<Map<string, number>>(new Map());

  useLayoutEffect(() => {
    const els = rowElsRef.current;
    if (els.size === 0) return;

    // Measure new positions
    const nextTops = new Map<string, number>();
    els.forEach((el, id) => {
      nextTops.set(id, el.getBoundingClientRect().top);
    });

    // Apply FLIP deltas
    els.forEach((el, id) => {
      const prevTop = prevTopsRef.current.get(id);
      const nextTop = nextTops.get(id);
      if (prevTop == null || nextTop == null) return;
      const dy = prevTop - nextTop;
      if (dy === 0) return;

      el.style.transition = "transform 0s";
      el.style.transform = `translateY(${dy}px)`;
      // Force reflow then animate to 0
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      el.getBoundingClientRect();
      requestAnimationFrame(() => {
        el.style.transition = "transform 320ms cubic-bezier(0.2, 0.9, 0.2, 1)";
        el.style.transform = "translateY(0)";
      });
    });

    prevTopsRef.current = nextTops;
  }, [order]);

  useEffect(() => {
    // keep order in sync if needed
    setOrder(participants.map((p) => p.id));
  }, [participants]);

  const formatCurrency = useMemo(() => {
    const nf = new Intl.NumberFormat("en-US");
    return (n: number) => `$${nf.format(n)}`;
  }, []);

  useEffect(() => {
    setDisplayTotal(totalBefore);
  }, []);

  useEffect(() => {
    if (runId === 0 || !activeWinnerId || cycle === 0) return;

    // Each cycle: count-up + progress, then cover/shuffle, then reveal.
    const cycleWonSoFar = winnersById;
    const isWon = (id: string) => cycleWonSoFar[id] != null;
    const pinned = Object.entries(cycleWonSoFar)
      .sort((a, b) => a[1] - b[1])
      .map(([id]) => id);
    const eligibleIds = participants
      .map((p) => p.id)
      .filter((id) => !isWon(id));

    const moveOne = (arr: string[]) => {
      if (arr.length < 2) return arr;
      const a = [...arr];
      const from = Math.floor(Math.random() * a.length);
      let to = Math.floor(Math.random() * a.length);
      if (to === from) to = (to + 1) % a.length;
      const [item] = a.splice(from, 1);
      a.splice(to, 0, item);
      return a;
    };

    const scramble = (arr: string[]) => {
      let next = moveOne(arr);
      next = moveOne(next);
      if (Math.random() > 0.55) next = moveOne(next);
      return next;
    };

    const shuffleEligible = (prev: string[]) => {
      const eligibleInPrev = prev.filter((id) => !isWon(id));
      const scrambled = scramble(eligibleInPrev);
      return [...pinned, ...scrambled];
    };

    const placeWinnerInEligible = (prev: string[]) => {
      const eligibleInPrev = prev.filter((id) => !isWon(id) && id !== activeWinnerId);
      const scrambled = scramble(eligibleInPrev);
      const idx = Math.floor(Math.random() * (scrambled.length + 1));
      scrambled.splice(idx, 0, activeWinnerId);
      return [...pinned, ...scrambled];
    };

    const timeouts: number[] = [];

    // Always start each cycle at $4,800 and animate to $6,000
    const prevContribution = (cycle - 1) * contributionAmount;
    const nextContribution = cycle * contributionAmount;
    const fromTotal = totalBefore;
    const toTotal = totalAfter;

    setDisplayTotal(fromTotal);
    setDisplayContribution(prevContribution);

    // Count-up + contribution progress simultaneously
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / COUNTUP_MS);
      const eased = 1 - Math.pow(1 - t, 4);
      setDisplayTotal(Math.round(fromTotal + (toTotal - fromTotal) * eased));
      setDisplayContribution(
        Math.round(prevContribution + (nextContribution - prevContribution) * eased)
      );
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    timeouts.push(window.setTimeout(() => cancelAnimationFrame(raf), COUNTUP_MS + 50));

    // After count-up finishes, cover + shuffle eligible, then reveal.
    timeouts.push(
      window.setTimeout(() => {
        setWinnerRevealed(false);
        setIsCovered(true);
        setIsShuffling(true);
        setOrder((prev) => shuffleEligible(prev));

        const steps = [300, 650, 1050, 1500, 1950, 2350];
        steps.forEach((ms) => {
          timeouts.push(
            window.setTimeout(() => setOrder((prev) => shuffleEligible(prev)), ms)
          );
        });

        // stop shuffle + settle with winner placed somewhere in eligible section
        timeouts.push(
          window.setTimeout(() => {
            setOrder((prev) => placeWinnerInEligible(prev));
            setIsShuffling(false);
          }, 2750)
        );

        // Reveal moment: unmask, gold highlight persists until next cycle starts.
        timeouts.push(
          window.setTimeout(() => {
            setWinnerRevealed(true);
            setIsCovered(false);
            setGoldWinnerId(activeWinnerId);

            setWinnersById((prev) => {
              const next = { ...prev, [activeWinnerId]: cycle };
              // pin winners to top in cycle order
              const pinnedNext = Object.entries(next)
                .sort((a, b) => a[1] - b[1])
                .map(([id]) => id);
              setOrder((prevOrder) => [
                ...pinnedNext,
                ...prevOrder.filter((id) => !pinnedNext.includes(id)),
              ]);
              return next;
            });

            // If You wins (cycle 2), fill accessed capital.
            if (activeWinnerId === "you") {
              setDisplayAccessed(totalAfter);
            }

            // End-of-demo: after the final winner announcement, swap to summary screen.
            if (cycle === TOTAL_CYCLES) {
              timeouts.push(window.setTimeout(() => setShowEndSummary(true), 2500));
            }

            // When button re-appears, reset pool total back to $4,800 (skip on last cycle)
            timeouts.push(
              window.setTimeout(() => {
                if (cycle < TOTAL_CYCLES) setDisplayTotal(totalBefore);
                setIsContributeBusy(false);
                if (!userHasContributed) setUserHasContributed(true);
              }, 550)
            );
          }, 3950)
        );
      }, COUNTUP_MS + 120)
    );

    return () => {
      timeouts.forEach((t) => window.clearTimeout(t));
      cancelAnimationFrame(raf);
    };
  }, [runId]);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        maxHeight: "100vh",
        minWidth: 0,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        zIndex: 1,
        isolation: "isolate",
        contain: "paint",
        flexShrink: 0,
        border: "1px solid white",
        boxSizing: "border-box",
      }}
    >
      {/* Dark overlay - 20% opacity; pointer-events: none so buttons remain clickable */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Vertical dashed line with gradient - at top, continuing from previous frame */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          transform: "translateX(-50%)",
          width: "1px",
          height: "2%",
          zIndex: 3,
          background: "rgba(255, 255, 255, 0.2)",
          maskImage: "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
          WebkitMaskImage: "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
        }}
      />

      {/* One-frame wrapper: fixed height, scaled to fit viewport; offset from top like frames below */}
      <div
        style={{
          position: "absolute",
          top: "clamp(60px, 10vh, 120px)",
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "1100px",
            transform: `scale(${demoScale})`,
            transformOrigin: "top center",
          }}
        >
          <DemoCard
            isMobile={isMobile}
            showEndSummary={showEndSummary}
            isContributeBusy={isContributeBusy}
            displayTotal={displayTotal}
            formatCurrency={formatCurrency}
            cycle={cycle}
            totalCycles={TOTAL_CYCLES}
            order={order}
            participants={participants}
            winnersById={winnersById}
            goldWinnerId={goldWinnerId}
            activeWinnerCycle={activeWinnerCycle}
            isCovered={isCovered}
            isShuffling={isShuffling}
            userHasContributed={userHasContributed}
            mode={mode}
            winnerRevealed={winnerRevealed}
            winnerName={winnerName}
            activeWinnerId={activeWinnerId}
            totalAfter={totalAfter}
            contributionAmount={contributionAmount}
            displayContribution={displayContribution}
            displayAccessed={displayAccessed}
            contributionPct={contributionPct}
            accessedPct={accessedPct}
            rowElsRef={rowElsRef}
            onMainButtonClick={() => {
              if (mode === "participants") {
                setShowEndSummary(false);
                setMode("contribution");
                setDisplayContribution(0);
                setDisplayAccessed(0);
                setCycle(0);
                setActiveWinnerCycle(null);
                setWinnersById({});
                setActiveWinnerId(null);
                setGoldWinnerId(null);
                setWinnerRevealed(false);
                setIsCovered(false);
                setIsShuffling(false);
                setDisplayTotal(totalBefore);
                setUserHasContributed(false);
                return;
              }
              if (cycle >= TOTAL_CYCLES) return;

              const nextCycle = cycle + 1;
              const won = winnersById;
              const eligible = participants
                .map((p) => p.id)
                .filter((id) => won[id] == null);

              let winner: string | undefined;
              if (nextCycle === 1) {
                const pool = eligible.filter((id) => id !== "you");
                winner = pool[Math.floor(Math.random() * pool.length)];
              } else if (nextCycle === 2) {
                winner = "you";
              } else {
                const pool = eligible;
                winner = pool[Math.floor(Math.random() * pool.length)];
              }

              if (!winner) return;

              setGoldWinnerId(null);
              setCycle(nextCycle);
              setActiveWinnerCycle(nextCycle);
              setActiveWinnerId(winner);
              setIsContributeBusy(true);
              setWinnerRevealed(false);
              setShowEndSummary(false);
              setRunId((v) => v + 1);
            }}
            onPreviewAgainClick={resetDemoToStart}
          />
        </div>
      </div>
    </section>
  );
}
