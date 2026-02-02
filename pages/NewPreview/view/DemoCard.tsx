"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";

type DemoParticipant = {
  id: string;
  name: string;
  initial: string;
  type: "member" | "you";
};

const MOBILE_BREAKPOINT = 768;

export default function DemoCard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsMobile(typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Demo state
  const [mode, setMode] = useState<"participants" | "contribution">("participants");
  const [userHasContributed, setUserHasContributed] = useState(false);
  const [isContributeBusy, setIsContributeBusy] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isCovered, setIsCovered] = useState(false);
  const [winnerRevealed, setWinnerRevealed] = useState(false);
  const TOTAL_CYCLES = 5;
  const [cycle, setCycle] = useState(0);
  const [activeWinnerCycle, setActiveWinnerCycle] = useState<number | null>(null);
  const [winnersById, setWinnersById] = useState<Record<string, number>>({});
  const [activeWinnerId, setActiveWinnerId] = useState<string | null>(null);
  const [goldWinnerId, setGoldWinnerId] = useState<string | null>(null);
  const [runId, setRunId] = useState(0);
  const [showEndSummary, setShowEndSummary] = useState(false);

  const totalBefore = 4800;
  const contributionAmount = 1200;
  const totalAfter = totalBefore + contributionAmount;
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

  const [order, setOrder] = useState<string[]>(() => participants.map((p) => p.id));

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

  // FLIP animation refs
  const rowElsRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const prevTopsRef = useRef<Map<string, number>>(new Map());

  useLayoutEffect(() => {
    const els = rowElsRef.current;
    if (els.size === 0) return;
    const nextTops = new Map<string, number>();
    els.forEach((el, id) => {
      nextTops.set(id, el.getBoundingClientRect().top);
    });
    els.forEach((el, id) => {
      const prevTop = prevTopsRef.current.get(id);
      const nextTop = nextTops.get(id);
      if (prevTop == null || nextTop == null) return;
      const dy = prevTop - nextTop;
      if (dy === 0) return;
      el.style.transition = "transform 0s";
      el.style.transform = `translateY(${dy}px)`;
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
    setOrder(participants.map((p) => p.id));
  }, [participants]);

  const formatCurrency = useMemo(() => {
    const nf = new Intl.NumberFormat("en-US");
    return (n: number) => `$${nf.format(n)}`;
  }, []);

  useEffect(() => {
    setDisplayTotal(totalBefore);
  }, []);

  // Cycle animation effect
  useEffect(() => {
    if (runId === 0 || !activeWinnerId || cycle === 0) return;

    const cycleWonSoFar = winnersById;
    const isWon = (id: string) => cycleWonSoFar[id] != null;
    const pinned = Object.entries(cycleWonSoFar)
      .sort((a, b) => a[1] - b[1])
      .map(([id]) => id);

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

    const prevContribution = (cycle - 1) * contributionAmount;
    const nextContribution = cycle * contributionAmount;
    const fromTotal = totalBefore;
    const toTotal = totalAfter;

    setDisplayTotal(fromTotal);
    setDisplayContribution(prevContribution);

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

    timeouts.push(
      window.setTimeout(() => {
        setWinnerRevealed(false);
        setIsCovered(true);
        setIsShuffling(true);
        setOrder((prev) => shuffleEligible(prev));

        const steps = [300, 650, 1050, 1500, 1950, 2350];
        steps.forEach((ms) => {
          timeouts.push(window.setTimeout(() => setOrder((prev) => shuffleEligible(prev)), ms));
        });

        timeouts.push(
          window.setTimeout(() => {
            setOrder((prev) => placeWinnerInEligible(prev));
            setIsShuffling(false);
          }, 2750)
        );

        timeouts.push(
          window.setTimeout(() => {
            setWinnerRevealed(true);
            setIsCovered(false);
            setGoldWinnerId(activeWinnerId);

            setWinnersById((prev) => {
              const next = { ...prev, [activeWinnerId]: cycle };
              const pinnedNext = Object.entries(next)
                .sort((a, b) => a[1] - b[1])
                .map(([id]) => id);
              setOrder((prevOrder) => [
                ...pinnedNext,
                ...prevOrder.filter((id) => !pinnedNext.includes(id)),
              ]);
              return next;
            });

            if (activeWinnerId === "you") {
              setDisplayAccessed(totalAfter);
            }

            if (cycle === TOTAL_CYCLES) {
              timeouts.push(window.setTimeout(() => setShowEndSummary(true), 2500));
            }

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

  const onMainButtonClick = () => {
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
    const eligible = participants.map((p) => p.id).filter((id) => won[id] == null);

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
  };

  return (
    <>
      <style jsx>{`
        .countUp {
          display: inline-block;
          animation: pop 450ms ease-out;
        }
        .pendingIn,
        .pendingOut,
        .contribIn,
        .contribOut {
          display: inline-block;
        }
        .pendingIn {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 350ms ease, transform 350ms ease;
        }
        .pendingOut {
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity 350ms ease, transform 350ms ease;
          position: absolute;
          pointer-events: none;
        }
        .contribOut {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 450ms ease, transform 450ms ease;
          position: absolute;
          pointer-events: none;
        }
        .contribIn {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 450ms ease, transform 450ms ease;
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
          0% { background-position: 0% 40%; }
          50% { background-position: 100% 60%; }
          100% { background-position: 0% 40%; }
        }
        .winnerNotice {
          animation: winnerNoticeIn 520ms ease-out both;
        }
        @keyframes winnerNoticeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .endSummary {
          animation: endSummaryIn 620ms ease-out both;
        }
        @keyframes endSummaryIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .shuffleRow {
          animation: shuffleJitter 260ms ease-in-out infinite;
        }
        @keyframes shuffleJitter {
          0% { opacity: 1; }
          35% { opacity: 0.92; }
          70% { opacity: 0.96; }
          100% { opacity: 1; }
        }
        .turnNotice {
          animation: turnIn 520ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
        }
        .turnNoticeStrong {
          color: rgba(255, 255, 255, 0.96);
          animation: turnGlow 1400ms ease-in-out infinite;
        }
        .turnNoticeRest {
          display: inline-block;
          opacity: 0;
          transform: translateY(4px);
          animation: turnRestIn 520ms ease-out 180ms forwards;
        }
        @keyframes turnIn {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes turnRestIn {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes turnGlow {
          0%, 100% { text-shadow: 0 0 0 rgba(193, 255, 53, 0); }
          50% { text-shadow: 0 0 14px rgba(193, 255, 53, 0.22); }
        }
      `}</style>

      <section
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "48px 24px",
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-instrument-serif), "Instrument Serif", Georgia, serif',
            fontSize: "clamp(34px, 6vw, 62px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: "1.15",
            color: "rgb(255, 255, 255)",
            margin: 0,
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Car Down Payment
        </h2>

        {/* Demo card container */}
        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              padding: "1px",
              background:
                "linear-gradient(to bottom right, rgba(255, 255, 255, 0.6) 0%, rgba(144, 144, 144, 0.6) 50%, rgba(255, 255, 255, 0.6) 100%)",
              borderRadius: "16px",
            }}
          >
            <div
              style={{
                padding: "20px",
                background: "linear-gradient(to bottom, #181818, #000000)",
                borderRadius: "15px",
                position: "relative",
                height: isMobile ? "540px" : "470px",
                overflow: "hidden",
              }}
            >
              {!showEndSummary && (
                <>
                  {/* Total display */}
                  <div
                    style={{
                      fontFamily: 'var(--font-instrument-serif), "Instrument Serif", serif',
                      fontWeight: 400,
                      color: "rgb(255, 255, 255)",
                      fontSize: isMobile ? "clamp(22px, 4vw, 32px)" : "clamp(20px, 4vw, 30px)",
                      letterSpacing: "-0.02em",
                      marginBottom: "2px",
                    }}
                  >
                    <span className={isContributeBusy ? "countUp" : undefined}>
                      {formatCurrency(displayTotal)}
                    </span>
                  </div>

                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: isMobile ? "14px" : "13px",
                      color: "rgb(200, 200, 200)",
                      marginBottom: "2px",
                    }}
                  >
                    Already pooled • Funds rotate automatically
                  </div>

                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: isMobile ? "14px" : "13px",
                      color: "rgb(200, 200, 200)",
                      marginBottom: "10px",
                    }}
                  >
                    Cycle {cycle} out of {TOTAL_CYCLES}
                  </div>

                  {/* Participants label */}
                  <div
                    style={{
                      fontFamily: 'var(--font-instrument-serif), "Instrument Serif", serif',
                      fontWeight: 400,
                      color: "rgb(255, 255, 255)",
                      fontSize: isMobile ? "clamp(18px, 2.5vw, 24px)" : "clamp(16px, 2.5vw, 22px)",
                      marginBottom: "8px",
                    }}
                  >
                    Participants
                  </div>

                  {/* Participant rows */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      opacity: isShuffling ? 0.5 : 1,
                      transition: "opacity 260ms ease",
                    }}
                  >
                    {order
                      .map((id) => participants.find((p) => p.id === id))
                      .filter(Boolean)
                      .map((p) => {
                        const participant = p as DemoParticipant;
                        const cycleWon = winnersById[participant.id];
                        const isWon = cycleWon != null;
                        const isGold = goldWinnerId === participant.id;
                        const isWinner = isGold;

                        const tileOuterStyle: CSSProperties = {
                          padding: "1px",
                          background:
                            "linear-gradient(to bottom right, rgba(255, 255, 255, 0.6) 0%, rgba(144, 144, 144, 0.6) 50%, rgba(255, 255, 255, 0.6) 100%)",
                          borderRadius: "6px",
                          height: isMobile ? "40px" : "36px",
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
                                borderRadius: "5px",
                                display: "flex",
                                alignItems: "center",
                                padding: "0 10px",
                                transition: "background 650ms ease, box-shadow 650ms ease",
                                boxShadow: isWinner
                                  ? "0 0 0 1px rgba(255, 215, 120, 0.35), 0 10px 24px rgba(0,0,0,0.35)"
                                  : "none",
                              }}
                              className={isWinner ? "winnerRow" : undefined}
                            >
                              <div
                                style={{
                                  width: isMobile ? "28px" : "26px",
                                  height: isMobile ? "28px" : "26px",
                                  borderRadius: "50%",
                                  backgroundColor: isWinner
                                    ? "rgba(0, 0, 0, 0.12)"
                                    : "rgba(255, 255, 255, 0.2)",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginRight: "8px",
                                  color: isWinner ? "rgb(17, 14, 8)" : "white",
                                  fontSize: isMobile ? "14px" : "13px",
                                  fontWeight: 500,
                                  flexShrink: 0,
                                }}
                              >
                                {isCovered && !isWon ? "" : participant.initial}
                              </div>

                              {isCovered && !isWon ? (
                                <div
                                  style={{
                                    flex: 1,
                                    height: "10px",
                                    borderRadius: "999px",
                                    background: "rgba(255,255,255,0.14)",
                                  }}
                                />
                              ) : (
                                <div
                                  style={{
                                    flex: 1,
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: isMobile ? "14px" : "13px",
                                    color: nameColor,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {participant.name}
                                </div>
                              )}

                              <div
                                style={{
                                  fontFamily: "Inter, sans-serif",
                                  fontSize: isMobile ? "13px" : "12px",
                                  color: rightColor,
                                  position: participant.type === "you" ? "relative" : "static",
                                  minWidth: "90px",
                                  textAlign: "right",
                                  flexShrink: 0,
                                }}
                              >
                                {isCovered && !isWon ? (
                                  <div
                                    style={{
                                      height: "10px",
                                      borderRadius: "999px",
                                      background: "rgba(255,255,255,0.14)",
                                      width: "60px",
                                      marginLeft: "auto",
                                    }}
                                  />
                                ) : isWinner ? (
                                  <span style={{ fontWeight: 400 }}>
                                    Cycle {activeWinnerCycle ?? cycle} - Won {formatCurrency(totalAfter)}
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
                                      <span style={{ color: "rgb(200, 200, 200)" }}>Contributed </span>
                                      <span style={{ color: "#C1FF35" }}>$1,200</span>
                                    </span>
                                  </>
                                ) : (
                                  <>
                                    <span style={{ color: "rgb(200, 200, 200)" }}>Contributed </span>
                                    <span style={{ color: "#C1FF35" }}>$1,200</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>

                  {/* Turn notice */}
                  {mode === "contribution" && !userHasContributed && !isContributeBusy && (
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: isMobile ? "14px" : "13px",
                        color: "rgb(200, 200, 200)",
                        marginTop: "8px",
                        textAlign: "center",
                      }}
                      className="turnNotice"
                    >
                      <span className="turnNoticeStrong">It&apos;s your turn</span>
                      <span className="turnNoticeRest"> — contribute to begin the first cycle.</span>
                    </div>
                  )}

                  {/* Winner notice */}
                  {winnerRevealed && (
                    <div
                      className="winnerNotice"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: isMobile ? "14px" : "13px",
                        color: "rgb(220, 220, 220)",
                        marginTop: "8px",
                        textAlign: "center",
                      }}
                    >
                      <span style={{ color: "rgb(255, 255, 255)" }}>{winnerName}</span>{" "}
                      {activeWinnerId === "you" ? (
                        <>
                          won the total amount <span style={{ color: "#C1FF35" }}>$6,000</span> pooled.
                          You contributed{" "}
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
                          won the total amount <span style={{ color: "#C1FF35" }}>$6,000</span> pooled.
                        </>
                      )}
                    </div>
                  )}

                  {/* Contribution progress */}
                  {mode === "contribution" && (
                    <div
                      style={{
                        marginTop: "10px",
                        paddingTop: "10px",
                        borderTop: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "85px 1fr 55px",
                          alignItems: "center",
                          gap: "6px",
                          marginBottom: "6px",
                        }}
                      >
                        <div style={{ fontFamily: "Inter, sans-serif", fontSize: isMobile ? "12px" : "11px", color: "rgb(255, 255, 255)" }}>
                          Contribution
                        </div>
                        <div
                          style={{
                            height: "5px",
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
                            fontSize: isMobile ? "12px" : "11px",
                            color: "rgba(255,255,255,0.75)",
                            textAlign: "right",
                          }}
                        >
                          {formatCurrency(displayContribution)}
                        </div>
                      </div>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "85px 1fr 55px",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <div style={{ fontFamily: "Inter, sans-serif", fontSize: isMobile ? "12px" : "11px", color: "rgb(255, 255, 255)" }}>
                          Accessed capital
                        </div>
                        <div
                          style={{
                            height: "5px",
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
                            fontSize: isMobile ? "12px" : "11px",
                            color: "rgba(255,255,255,0.75)",
                            textAlign: "right",
                          }}
                        >
                          {formatCurrency(displayAccessed)}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* End summary */}
              {showEndSummary && (
                <div
                  className="endSummary"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    paddingTop: "30px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: isMobile ? "13px" : "12px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.55)",
                      marginBottom: "8px",
                    }}
                  >
                    You received
                  </div>

                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: isMobile ? "clamp(38px, 8vw, 58px)" : "clamp(34px, 8vw, 54px)",
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
                      fontSize: isMobile ? "16px" : "14px",
                      color: "rgba(255,255,255,0.9)",
                      marginTop: "6px",
                    }}
                  >
                    in month two
                  </div>

                  <div
                    style={{
                      width: "100px",
                      height: "1px",
                      background: "rgba(255,255,255,0.18)",
                      marginTop: "16px",
                      marginBottom: "16px",
                    }}
                  />

                  <div
                    style={{
                      fontFamily: 'var(--font-instrument-serif), "Instrument Serif", serif',
                      fontSize: isMobile ? "clamp(20px, 3vw, 28px)" : "clamp(18px, 3vw, 26px)",
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    Saving it alone would take 5 months.
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-instrument-serif), "Instrument Serif", serif',
                      fontSize: isMobile ? "clamp(20px, 3vw, 28px)" : "clamp(18px, 3vw, 26px)",
                      fontWeight: 700,
                      color: "rgb(255,255,255)",
                      marginTop: "4px",
                    }}
                  >
                    Cube cuts that time in half.
                  </div>

                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: isMobile ? "14px" : "13px",
                      color: "rgba(255,255,255,0.45)",
                      marginTop: "14px",
                    }}
                  >
                    Based on 5 members • $1,200/mo contribution
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        {showEndSummary ? (
          <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
            <button
              type="button"
              onClick={resetDemoToStart}
              style={{
                alignItems: "center",
                borderRadius: "36px",
                display: "inline-flex",
                height: "44px",
                justifyContent: "center",
                padding: "0px 24px",
                backgroundColor: "rgb(0, 0, 0)",
                border: "1px solid rgba(255,255,255,0.85)",
                color: "rgb(255, 255, 255)",
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
              }}
            >
              Preview again
            </button>
            <a
              href="#"
              style={{
                textDecoration: "none",
                alignItems: "center",
                borderRadius: "36px",
                display: "inline-flex",
                height: "44px",
                justifyContent: "center",
                padding: "0px 24px",
                backgroundColor: "rgb(204, 255, 0)",
                border: "1px solid rgb(204, 255, 0)",
                color: "rgb(17, 14, 8)",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
              }}
            >
              Create a cube
            </a>
          </div>
        ) : (
          (mode === "participants" || !isContributeBusy) &&
          !(cycle === TOTAL_CYCLES && winnerRevealed) && (
            <button
              type="button"
              onClick={onMainButtonClick}
              style={{
                marginTop: "24px",
                alignItems: "center",
                borderRadius: "36px",
                display: "inline-flex",
                height: "44px",
                justifyContent: "center",
                padding: "0px 32px",
                backgroundColor: mode === "contribution" ? "rgb(255, 255, 255)" : "rgb(204, 255, 0)",
                border: mode === "contribution" ? "1px solid rgb(0, 0, 0)" : "1px solid rgb(204, 255, 0)",
                color: "rgb(17, 14, 8)",
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
              }}
            >
              {mode === "contribution" ? "Contribute" : "Preview demo cube"}
            </button>
          )
        )}
      </section>
    </>
  );
}
