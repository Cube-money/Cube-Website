"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";

export default function Demoframe() {
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
        height: "200vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      {/* Dark overlay - 20% opacity */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          zIndex: 1,
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

      {/* Center content */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          textAlign: "center",
        }}
      >
        {/* Subtext */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "18px",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            lineHeight: "26px",
            margin: "0 auto",
            fontStyle: "normal",
            WebkitFontSmoothing: "antialiased",
            color: "rgb(255, 255, 255)",
            maxWidth: "600px",
            display: "block",
            textAlign: "center",
            width: "100%",
            marginBottom: "120px",
          }}
        >
         Inside a Cube, that same goal can arrive much sooner through coordinated contributions. <span style={{ color: "#C1FF35" }}>lets see how!</span>
        </span>
        
        <div
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            fontSize: "clamp(20px, 3.5vw, 42px)",
            letterSpacing: "-0.02em",
            lineHeight: "100%",
            textAlign: "center",
            whiteSpace: "pre-line",
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            display: "block",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
        >
          Car down payment cube
        </div>
      </div>

      {/* Container with white and black stroke */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "1000px",
          width: "75%",
          padding: "1px",
          background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.6) 0%, rgba(144, 144, 144, 0.6) 50%, rgba(255, 255, 255, 0.6) 100%)",
          borderRadius: "22px",
          zIndex: 3,
        }}
      >
        <div
          style={{
            // Extra bottom space to contain the progress rows
            padding: "300px 120px 390px 120px",
            background: "linear-gradient(to bottom, #181818, #000000)",
            borderRadius: "22px",
            position: "relative",
          }}
        >
          {/* Dollar figure - top left */}
          {!showEndSummary && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                left: "60px",
                fontFamily:
                  'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
                fontStyle: "normal",
                fontWeight: 400,
                color: "rgb(255, 255, 255)",
                fontSize: "clamp(24px, 3.5vw, 48px)",
                letterSpacing: "-0.02em",
                lineHeight: "100%",
              }}
            >
              <span className={isContributeBusy ? "countUp" : undefined}>
                {formatCurrency(displayTotal)}
              </span>
            </div>
          )}
          
          {/* Subtitle - Inter font */}
          {!showEndSummary && (
            <div
              style={{
                position: "absolute",
                top: "90px",
                left: "60px",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                letterSpacing: "-0.25px",
                lineHeight: "24px",
                color: "rgb(200, 200, 200)",
              }}
            >
              Already pooled • Funds rotate automatically
            </div>
          )}

          {/* Cycle counter (right side, same level as subtitle) */}
          {!showEndSummary && (
            <div
              style={{
                position: "absolute",
                top: "90px",
                right: "60px",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                letterSpacing: "-0.25px",
                lineHeight: "24px",
                color: "rgb(200, 200, 200)",
                textAlign: "right",
              }}
            >
              Cycle {cycle} out of {TOTAL_CYCLES}
            </div>
          )}
          
          {/* Participants header */}
          {!showEndSummary && (
            <div
              style={{
                position: "absolute",
                top: "150px",
                left: "60px",
                fontFamily:
                  'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
                fontStyle: "normal",
                fontWeight: 400,
                color: "rgb(255, 255, 255)",
                fontSize: "clamp(24px, 3.5vw, 36px)",
                letterSpacing: "-0.02em",
                lineHeight: "100%",
                marginBottom: "20px",
              }}
            >
              Participants
            </div>
          )}

          {/* Participant tiles */}
          {!showEndSummary && (
            <div
              style={{
                position: "absolute",
                top: "200px",
                left: "60px",
                right: "60px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                opacity: isShuffling ? 0.5 : 1,
                transition: "opacity 260ms ease",
              }}
            >
            {order
              .map((id) => participants.find((p) => p.id === id))
              .filter(Boolean)
              .map((p) => {
                const participant = p as (typeof participants)[number];
                const cycleWon = winnersById[participant.id];
                const isWon = cycleWon != null;
                const isGold = goldWinnerId === participant.id;
                const isWinner = isGold;

                const tileOuterStyle: CSSProperties = {
                  padding: "1px",
                  background:
                    "linear-gradient(to bottom right, rgba(255, 255, 255, 0.6) 0%, rgba(144, 144, 144, 0.6) 50%, rgba(255, 255, 255, 0.6) 100%)",
                  borderRadius: "8px",
                  height: "55px",
                  opacity: isWon && !isGold ? 0.55 : 1,
                };

                const innerBg = isWinner
                  ? "linear-gradient(135deg, #ffef9a 0%, #d6a84a 35%, #fff1b8 55%, #b8832d 100%)"
                  : isCovered && !isWon
                    ? "rgb(45, 45, 45)"
                    : "#545454";

                const nameColor = isWinner ? "rgb(17, 14, 8)" : "rgb(255, 255, 255)";
                const rightColor = isWinner ? "rgb(17, 14, 8)" : "rgb(255, 255, 255)";

                return (
                  <div
                    key={participant.id}
                    ref={(el) => {
                      const map = rowElsRef.current;
                      if (!el) {
                        map.delete(participant.id);
                        return;
                      }
                      map.set(participant.id, el);
                    }}
                    style={tileOuterStyle}
                    className={isShuffling ? "shuffleRow" : undefined}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: innerBg,
                        borderRadius: "7px",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 16px",
                        transition:
                          "background 650ms ease, box-shadow 650ms ease, color 650ms ease",
                        boxShadow: isWinner
                          ? "0 0 0 1px rgba(255, 215, 120, 0.35), 0 10px 24px rgba(0,0,0,0.35)"
                          : "none",
                      }}
                      className={isWinner ? "winnerRow" : undefined}
                    >
                      {/* Avatar */}
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          backgroundColor: isWinner
                            ? "rgba(0, 0, 0, 0.12)"
                            : "rgba(255, 255, 255, 0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "12px",
                          color: isWinner ? "rgb(17, 14, 8)" : "white",
                          fontSize: "16px",
                          fontWeight: 500,
                        }}
                      >
                        {isCovered && !isWon ? "" : participant.initial}
                      </div>

                      {/* Name / skeleton */}
                      {isCovered && !isWon ? (
                        <div
                          style={{
                            flex: 1,
                            height: "14px",
                            borderRadius: "999px",
                            background: "rgba(255,255,255,0.14)",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            flex: 1,
                            fontFamily: "Inter, sans-serif",
                            fontSize: "16px",
                            color: nameColor,
                          }}
                        >
                          {participant.name}
                        </div>
                      )}

                      {/* Right / skeleton */}
                      <div
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "16px",
                          color: rightColor,
                          position: participant.type === "you" ? "relative" : "static",
                          minWidth: "170px",
                          textAlign: "right",
                        }}
                      >
                        {isCovered && !isWon ? (
                          <div
                            style={{
                              height: "14px",
                              borderRadius: "999px",
                              background: "rgba(255,255,255,0.14)",
                              width: "160px",
                              marginLeft: "auto",
                            }}
                          />
                        ) : isWinner ? (
                          <span style={{ fontWeight: 400 }}>
                            Cycle {activeWinnerCycle ?? cycle} - Won{" "}
                            {formatCurrency(totalAfter)}
                          </span>
                        ) : isWon ? (
                          <span style={{ color: "rgba(255,255,255,0.7)" }}>
                            Cycle {cycleWon} - Won {formatCurrency(totalAfter)}
                          </span>
                        ) : participant.type === "you" ? (
                          <>
                            <span className={!userHasContributed ? "pendingIn" : "pendingOut"}>
                              Pending
                            </span>
                            <span className={userHasContributed ? "contribIn" : "contribOut"}>
                              <span style={{ color: "rgb(200, 200, 200)" }}>
                                Contributed{" "}
                              </span>
                              <span style={{ color: "#C1FF35" }}>$1,200</span>
                            </span>
                          </>
                        ) : (
                          <>
                            <span style={{ color: "rgb(200, 200, 200)" }}>
                              Contributed{" "}
                            </span>
                            <span style={{ color: "#C1FF35" }}>$1,200</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

            {mode === "contribution" && !userHasContributed && !isContributeBusy && (
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "rgb(200, 200, 200)",
                  marginTop: "8px",
                  textAlign: "center",
                  width: "100%",
                }}
                className="turnNotice"
              >
                <span className="turnNoticeStrong">It&apos;s your turn</span>
                <span className="turnNoticeRest">
                  {" "}
                  — contribute to begin the first cycle.
                </span>
              </div>
            )}

            {winnerRevealed && (
              <div
                className="winnerNotice"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "rgb(220, 220, 220)",
                  marginTop: "10px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <span style={{ color: "rgb(255, 255, 255)" }}>
                  {winnerName}
                </span>{" "}
                {activeWinnerId === "you" ? (
                  <>
                    won the total amount{" "}
                    <span style={{ color: "#C1FF35" }}>${"6,000"}</span> pooled.
                    {" "}You contributed{" "}
                    <span style={{ color: "rgb(255, 255, 255)", fontWeight: 700 }}>
                      {formatCurrency(cycle * contributionAmount)}
                    </span>{" "}
                    and accessed{" "}
                    <span style={{ color: "rgb(255, 255, 255)", fontWeight: 700 }}>
                      {formatCurrency(totalAfter)}
                    </span>{" "}
                    capital upfront.
                  </>
                ) : (
                  <>
                    won the total amount{" "}
                    <span style={{ color: "#C1FF35" }}>${"6,000"}</span> pooled.
                  </>
                )}
              </div>
            )}

            {mode === "contribution" && (
              <div
                style={{
                  marginTop: "12px",
                  paddingTop: "12px",
                  borderTop: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {/* Row 1: Contribution */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr 120px",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Contribution
                  </div>
                  <div
                    style={{
                      height: "6px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.12)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${Math.round(contributionPct * 100)}%`,
                        borderRadius: "999px",
                        background: "#C1FF35",
                        transition: "width 650ms ease",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.75)",
                      textAlign: "right",
                    }}
                  >
                    {formatCurrency(displayContribution)}
                  </div>
                </div>

                {/* Row 2: Accessed capital */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr 120px",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      color: "rgb(255, 255, 255)",
                    }}
                  >
                    Accessed capital
                  </div>
                  <div
                    style={{
                      height: "6px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.12)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${Math.round(accessedPct * 100)}%`,
                        borderRadius: "999px",
                      background:
                        displayAccessed > 0
                          ? "linear-gradient(135deg, #ffef9a 0%, #d6a84a 55%, #b8832d 100%)"
                          : "rgba(255,255,255,0.35)",
                        transition: "width 650ms ease",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.75)",
                      textAlign: "right",
                    }}
                  >
                    {formatCurrency(displayAccessed)}
                  </div>
                </div>
              </div>
            )}
            </div>
          )}

          {/* End summary (after cycle 5) */}
          {showEndSummary && (
            <div
              className="endSummary"
              style={{
                position: "absolute",
                top: "120px",
                left: "60px",
                right: "60px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: "14px",
                }}
              >
                You received
              </div>

              <div
                style={{
                  fontFamily:
                    "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
                  fontSize: "96px",
                  lineHeight: "1",
                  fontWeight: 500,
                  color: "rgb(204, 255, 0)",
                  letterSpacing: "-0.04em",
                }}
              >
                {formatCurrency(totalAfter)}
              </div>

              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "22px",
                  lineHeight: "32px",
                  color: "rgba(255,255,255,0.9)",
                  marginTop: "10px",
                }}
              >
                in month two
              </div>

              <div
                style={{
                  width: "180px",
                  height: "1px",
                  background: "rgba(255,255,255,0.18)",
                  marginTop: "22px",
                  marginBottom: "22px",
                }}
              />

              <div
                style={{
                  fontFamily:
                    'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
                  fontSize: "40px",
                  lineHeight: "46px",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Saving it alone would take 5 months.
              </div>

              <div
                style={{
                  fontFamily:
                    'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
                  fontSize: "40px",
                  lineHeight: "46px",
                  fontWeight: 700,
                  color: "rgb(255,255,255)",
                  marginTop: "8px",
                }}
              >
                Cube cuts that time in half.
              </div>

              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgba(255,255,255,0.45)",
                  marginTop: "22px",
                }}
              >
                Based on 5 members • $1,200/mo contribution
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Buttons below parent box */}
      {showEndSummary ? (
        <div
          style={{
            position: "absolute",
            top: "calc(18% + 730px)",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            display: "flex",
            gap: "14px",
          }}
        >
          <button
            type="button"
            onClick={resetDemoToStart}
            style={{
              opacity: 0.95,
              alignItems: "center",
              alignSelf: "center",
              borderRadius: "36px",
              boxSizing: "border-box",
              display: "inline-flex",
              height: "44px",
              justifyContent: "center",
              overflow: "hidden",
              padding: "0px 26px",
              position: "relative",
              textAlign: "center",
              whiteSpace: "nowrap",
              backgroundColor: "rgb(0, 0, 0)",
              border: "1px solid rgba(255,255,255,0.85)",
              color: "rgb(255, 255, 255)",
              cursor: "pointer",
              WebkitFontSmoothing: "antialiased",
              userSelect: "none",
            }}
          >
            <span
              style={{
                fontFamily:
                  "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                letterSpacing: "-0.25px",
                lineHeight: "24px",
              }}
            >
              Preview again
            </span>
          </button>

          <a
            href="/signup"
            style={{
              textDecoration: "none",
              opacity: 0.95,
              alignItems: "center",
              alignSelf: "center",
              borderRadius: "36px",
              boxSizing: "border-box",
              display: "inline-flex",
              height: "44px",
              justifyContent: "center",
              overflow: "hidden",
              padding: "0px 26px",
              position: "relative",
              textAlign: "center",
              whiteSpace: "nowrap",
              backgroundColor: "rgb(204, 255, 0)",
              border: "1px solid rgb(204, 255, 0)",
              color: "rgb(17, 14, 8)",
              cursor: "pointer",
              WebkitFontSmoothing: "antialiased",
              userSelect: "none",
            }}
          >
            <span
              style={{
                fontFamily:
                  "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                letterSpacing: "-0.25px",
                lineHeight: "24px",
              }}
            >
              Create a cube
            </span>
          </a>
        </div>
      ) : (
        (mode === "participants" || !isContributeBusy) &&
        !(cycle === TOTAL_CYCLES && winnerRevealed) && (
          <div
            style={{
              position: "absolute",
              top: "calc(18% + 730px)",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <button
              type="button"
              onClick={() => {
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

                // starting a new cycle dims the previous gold winner
                setGoldWinnerId(null);
                setCycle(nextCycle);
                setActiveWinnerCycle(nextCycle);
                setActiveWinnerId(winner);
                setIsContributeBusy(true);
                setWinnerRevealed(false);
                setShowEndSummary(false);
                setRunId((v) => v + 1);
              }}
              style={{
                opacity: 0.85,
                alignItems: "center",
                alignSelf: "center",
                borderRadius: "36px",
                boxSizing: "border-box",
                display: "inline-flex",
                height: "44px",
                justifyContent: "center",
                overflow: "hidden",
                padding: "0px 32px",
                position: "relative",
                textAlign: "center",
                whiteSpace: "nowrap",
                backgroundColor:
                  mode === "contribution"
                    ? "rgb(255, 255, 255)"
                    : "rgb(204, 255, 0)",
                border:
                  mode === "contribution"
                    ? "1px solid rgb(0, 0, 0)"
                    : "1px solid rgb(204, 255, 0)",
                color: "rgb(17, 14, 8)",
                cursor: "pointer",
                WebkitFontSmoothing: "antialiased",
                outline: "rgb(17, 14, 8) none 0px",
                userSelect: "none",
              }}
            >
              <span
                style={{
                  fontFamily:
                    "Phonic, Helvetica, system-ui, -apple-system, 'system-ui', Arial, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  letterSpacing: "-0.25px",
                  lineHeight: "24px",
                  margin: 0,
                  fontStyle: "normal",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {mode === "contribution" ? "Contribute" : "Preview demo cube"}
              </span>
            </button>

            {/* Vertical dashed line with gradient (matches `Preview.tsx`) */}
            <div
              style={{
                marginTop: "clamp(90px, 12vh, 160px)",
                width: "1px",
                height: "45vh",
                background: "linear-gradient(to bottom, #ffffff, #000000)",
                maskImage:
                  "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(to bottom, transparent, transparent 4px, black 4px, black 12px)",
              }}
            />
          </div>
        )
      )}

      {/* Mini progress rows inside the main box (under winner announcement) */}

      <style jsx>{`
        .countUp {
          display: inline-block;
          animation: pop 450ms ease-out;
          will-change: transform, opacity;
        }

        .pendingIn,
        .pendingOut,
        .contribIn,
        .contribOut {
          display: inline-block;
          will-change: transform, opacity, filter;
        }

        .pendingIn {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
          transition: opacity 350ms ease, transform 350ms ease, filter 350ms ease;
        }

        .pendingOut {
          opacity: 0;
          transform: translateY(-6px);
          filter: blur(2px);
          transition: opacity 350ms ease, transform 350ms ease, filter 350ms ease;
          position: absolute;
          pointer-events: none;
        }

        .contribOut {
          opacity: 0;
          transform: translateY(6px);
          filter: blur(2px);
          transition: opacity 450ms ease, transform 450ms ease, filter 450ms ease;
          position: absolute;
          pointer-events: none;
        }

        .contribIn {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
          transition: opacity 450ms ease, transform 450ms ease, filter 450ms ease;
        }

        @keyframes pop {
          0% {
            opacity: 0.7;
            transform: translateY(2px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .winnerRow {
          background-size: 220% 220%;
          animation: winnerShimmer 2200ms ease-in-out infinite;
        }

        @keyframes winnerShimmer {
          0% {
            background-position: 0% 40%;
          }
          50% {
            background-position: 100% 60%;
          }
          100% {
            background-position: 0% 40%;
          }
        }

        .winnerNotice {
          animation: winnerNoticeIn 520ms ease-out both;
          will-change: transform, opacity, filter;
        }

        @keyframes winnerNoticeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .endSummary {
          animation: endSummaryIn 620ms ease-out both;
          will-change: transform, opacity, filter;
        }

        @keyframes endSummaryIn {
          from {
            opacity: 0;
            transform: translateY(10px);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .shuffleRow {
          will-change: transform, filter;
          animation: shuffleJitter 260ms ease-in-out infinite;
        }

        @keyframes shuffleJitter {
          0% {
            filter: blur(0px);
            opacity: 1;
          }
          35% {
            filter: blur(0.4px);
            opacity: 0.92;
          }
          70% {
            filter: blur(0.2px);
            opacity: 0.96;
          }
          100% {
            filter: blur(0px);
            opacity: 1;
          }
        }

        .turnNotice {
          will-change: transform, opacity, filter;
          animation: turnIn 520ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
        }

        .turnNoticeStrong {
          color: rgba(255, 255, 255, 0.96);
          text-shadow: 0 0 0 rgba(193, 255, 53, 0);
          animation: turnGlow 1400ms ease-in-out infinite;
        }

        .turnNoticeRest {
          display: inline-block;
          opacity: 0;
          transform: translateY(4px);
          filter: blur(2px);
          animation: turnRestIn 520ms ease-out 180ms forwards;
        }

        @keyframes turnIn {
          0% {
            opacity: 0;
            transform: translateY(8px);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes turnRestIn {
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes turnGlow {
          0%,
          100% {
            text-shadow: 0 0 0 rgba(193, 255, 53, 0);
            transform: translateY(0);
          }
          50% {
            text-shadow: 0 0 14px rgba(193, 255, 53, 0.22);
            transform: translateY(-0.5px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .turnNotice,
          .turnNoticeStrong,
          .turnNoticeRest,
          .winnerRow,
          .winnerNotice,
          .endSummary,
          .shuffleRow {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
    </section>
  );
}