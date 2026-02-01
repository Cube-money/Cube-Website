"use client";

import type { CSSProperties } from "react";

export type DemoParticipant = {
  id: string;
  name: string;
  initial: string;
  type: "member" | "you";
};

export type DemoCardProps = {
  showEndSummary: boolean;
  isContributeBusy: boolean;
  displayTotal: number;
  formatCurrency: (n: number) => string;
  cycle: number;
  totalCycles: number;
  order: string[];
  participants: readonly DemoParticipant[];
  winnersById: Record<string, number>;
  goldWinnerId: string | null;
  activeWinnerCycle: number | null;
  isCovered: boolean;
  isShuffling: boolean;
  userHasContributed: boolean;
  mode: "participants" | "contribution";
  winnerRevealed: boolean;
  winnerName: string;
  activeWinnerId: string | null;
  totalAfter: number;
  contributionAmount: number;
  displayContribution: number;
  displayAccessed: number;
  contributionPct: number;
  accessedPct: number;
  rowElsRef: React.MutableRefObject<Map<string, HTMLDivElement>>;
  onMainButtonClick: () => void;
  onPreviewAgainClick: () => void;
  isMobile?: boolean;
};

export function DemoCard({
  showEndSummary,
  isContributeBusy,
  displayTotal,
  formatCurrency,
  cycle,
  totalCycles,
  order,
  participants,
  winnersById,
  goldWinnerId,
  activeWinnerCycle,
  isCovered,
  isShuffling,
  userHasContributed,
  mode,
  winnerRevealed,
  winnerName,
  activeWinnerId,
  totalAfter,
  contributionAmount,
  displayContribution,
  displayAccessed,
  contributionPct,
  accessedPct,
  rowElsRef,
  onMainButtonClick,
  onPreviewAgainClick,
  isMobile = false,
}: DemoCardProps) {
  return (
    <>
      {/* Title + subtext above card */}
      <div
        style={{
          position: "absolute",
          top: isMobile ? "11%" : "18%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: isMobile ? "16px" : "22.5px",
            fontWeight: 400,
            letterSpacing: "-0.25px",
            lineHeight: isMobile ? "22px" : "26px",
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
          Inside a Cube, that same goal can arrive much sooner through
          coordinated contributions.{" "}
          <span style={{ color: "#C1FF35" }}>lets see how!</span>
        </span>
        <div
          style={{
            fontFamily:
              'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
            fontStyle: "normal",
            fontWeight: 400,
            color: "rgb(255, 255, 255)",
            fontSize: "clamp(24.5px, 3.5vw, 46.5px)",
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

      {/* Card box */}
      <div
        style={{
          position: "absolute",
          top: isMobile ? "28%" : "30%",
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "1000px",
          width: isMobile ? "92%" : "75%",
          padding: "1px",
          background:
            "linear-gradient(to bottom right, rgba(255, 255, 255, 0.6) 0%, rgba(144, 144, 144, 0.6) 50%, rgba(255, 255, 255, 0.6) 100%)",
          borderRadius: isMobile ? "16px" : "22px",
          zIndex: 3,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: isMobile ? "280px 20px 320px 20px" : "300px 120px 390px 120px",
            background: "linear-gradient(to bottom, #181818, #000000)",
            borderRadius: isMobile ? "15px" : "22px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {!showEndSummary && (
            <>
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  left: isMobile ? "20px" : "60px",
                  fontFamily:
                    'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
                  fontStyle: "normal",
                  fontWeight: 400,
                  color: "rgb(255, 255, 255)",
                  fontSize: isMobile ? "clamp(22px, 5vw, 36px)" : "clamp(28.5px, 3.5vw, 52.5px)",
                  letterSpacing: "-0.02em",
                  lineHeight: "100%",
                }}
              >
                <span className={isContributeBusy ? "countUp" : undefined}>
                  {formatCurrency(displayTotal)}
                </span>
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "90px",
                  left: isMobile ? "20px" : "60px",
                  right: isMobile ? "20px" : undefined,
                  fontFamily: "Inter, sans-serif",
                  fontSize: isMobile ? "14px" : "20.5px",
                  fontWeight: 400,
                  letterSpacing: "-0.25px",
                  lineHeight: "20px",
                  color: "rgb(200, 200, 200)",
                }}
              >
                Already pooled • Funds rotate automatically
              </div>

              <div
                style={{
                  position: "absolute",
                  top: isMobile ? "118px" : "90px",
                  ...(isMobile ? { left: "20px" } : { right: "60px" }),
                  fontFamily: "Inter, sans-serif",
                  fontSize: isMobile ? "14px" : "20.5px",
                  fontWeight: 400,
                  letterSpacing: "-0.25px",
                  lineHeight: "20px",
                  color: "rgb(200, 200, 200)",
                  textAlign: isMobile ? "left" : "right",
                }}
              >
                Cycle {cycle} out of {totalCycles}
              </div>

              <div
                style={{
                  position: "absolute",
                  top: isMobile ? "155px" : "150px",
                  left: isMobile ? "20px" : "60px",
                  fontFamily:
                    'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
                  fontStyle: "normal",
                  fontWeight: 400,
                  color: "rgb(255, 255, 255)",
                  fontSize: isMobile ? "clamp(20px, 4vw, 28px)" : "clamp(28.5px, 3.5vw, 40.5px)",
                  letterSpacing: "-0.02em",
                  lineHeight: "100%",
                  marginBottom: "20px",
                }}
              >
                Participants
              </div>

              <div
                style={{
                  position: "absolute",
                  top: isMobile ? "200px" : "200px",
                  left: isMobile ? "20px" : "60px",
                  right: isMobile ? "20px" : "60px",
                  display: "flex",
                  flexDirection: "column",
                  gap: isMobile ? "8px" : "12px",
                  opacity: isShuffling ? 0.5 : 1,
                  transition: "opacity 260ms ease",
                  overflow: "hidden",
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
                      borderRadius: "8px",
                      height: isMobile ? "48px" : "55px",
                      opacity: isWon && !isGold ? 0.55 : 1,
                    };

                    const innerBg = isWinner
                      ? "linear-gradient(135deg, #ffef9a 0%, #d6a84a 35%, #fff1b8 55%, #b8832d 100%)"
                      : isCovered && !isWon
                        ? "rgb(45, 45, 45)"
                        : "#545454";

                    const nameColor = isWinner
                      ? "rgb(17, 14, 8)"
                      : "rgb(255, 255, 255)";
                    const rightColor = isWinner
                      ? "rgb(17, 14, 8)"
                      : "rgb(255, 255, 255)";

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
                            padding: isMobile ? "0 10px" : "0 16px",
                            transition:
                              "background 650ms ease, box-shadow 650ms ease, color 650ms ease",
                            boxShadow: isWinner
                              ? "0 0 0 1px rgba(255, 215, 120, 0.35), 0 10px 24px rgba(0,0,0,0.35)"
                              : "none",
                          }}
                          className={isWinner ? "winnerRow" : undefined}
                        >
                          <div
                            style={{
                              width: isMobile ? "32px" : "40px",
                              height: isMobile ? "32px" : "40px",
                              borderRadius: "50%",
                              backgroundColor: isWinner
                                ? "rgba(0, 0, 0, 0.12)"
                                : "rgba(255, 255, 255, 0.2)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: isMobile ? "8px" : "12px",
                              color: isWinner ? "rgb(17, 14, 8)" : "white",
                              fontSize: isMobile ? "15px" : "20.5px",
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
                                fontSize: isMobile ? "15px" : "20.5px",
                                color: nameColor,
                                minWidth: 0,
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
                              fontSize: isMobile ? "13px" : "20.5px",
                              color: rightColor,
                              position:
                                participant.type === "you" ? "relative" : "static",
                              minWidth: isMobile ? "88px" : "170px",
                              textAlign: "right",
                              flexShrink: 0,
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
                                Cycle {cycleWon} - Won{" "}
                                {formatCurrency(totalAfter)}
                              </span>
                            ) : participant.type === "you" ? (
                              <>
                                <span
                                  className={
                                    !userHasContributed ? "pendingIn" : "pendingOut"
                                  }
                                >
                                  Pending
                                </span>
                                <span
                                  className={
                                    userHasContributed ? "contribIn" : "contribOut"
                                  }
                                >
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

                {mode === "contribution" &&
                  !userHasContributed &&
                  !isContributeBusy && (
                    <div
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "18.5px",
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
                      fontSize: "18.5px",
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
                        <span style={{ color: "#C1FF35" }}>${"6,000"}</span>{" "}
                        pooled. You contributed{" "}
                        <span
                          style={{
                            color: "rgb(255, 255, 255)",
                            fontWeight: 700,
                          }}
                        >
                          {formatCurrency(cycle * contributionAmount)}
                        </span>{" "}
                        and accessed{" "}
                        <span
                          style={{
                            color: "rgb(255, 255, 255)",
                            fontWeight: 700,
                          }}
                        >
                          {formatCurrency(totalAfter)}
                        </span>{" "}
                        capital upfront.
                      </>
                    ) : (
                      <>
                        won the total amount{" "}
                        <span style={{ color: "#C1FF35" }}>${"6,000"}</span>{" "}
                        pooled.
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
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "90px 1fr 70px" : "140px 1fr 120px",
                        alignItems: "center",
                        gap: isMobile ? "8px" : "12px",
                        marginBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "18.5px",
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
                          fontSize: "18.5px",
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
                        gridTemplateColumns: isMobile ? "90px 1fr 70px" : "140px 1fr 120px",
                        alignItems: "center",
                        gap: isMobile ? "8px" : "12px",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: isMobile ? "14px" : "18.5px",
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
                          fontSize: isMobile ? "14px" : "18.5px",
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
            </>
          )}

          {showEndSummary && (
            <div
              className="endSummary"
              style={{
                position: "absolute",
                top: isMobile ? "80px" : "120px",
                left: isMobile ? "20px" : "60px",
                right: isMobile ? "20px" : "60px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: isMobile ? "14px" : "18.5px",
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
                  fontSize: isMobile ? "56px" : "100.5px",
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
                  fontSize: isMobile ? "18px" : "26.5px",
                  lineHeight: isMobile ? "24px" : "32px",
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
                  fontSize: isMobile ? "28px" : "44.5px",
                  lineHeight: isMobile ? "32px" : "46px",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Saving it alone would take 5 months.
              </div>

              <div
                style={{
                  fontFamily:
                    'var(--font-instrument-serif), "Instrument Serif", "Instrument Serif Placeholder", serif',
                  fontSize: isMobile ? "28px" : "44.5px",
                  lineHeight: isMobile ? "32px" : "46px",
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
                  fontSize: isMobile ? "14px" : "20.5px",
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

      {/* Buttons below card */}
      {showEndSummary ? (
        <div
          style={{
            position: "absolute",
            top: "calc(30% + 730px)",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            display: "flex",
            gap: "14px",
          }}
        >
          <button
            type="button"
            onClick={onPreviewAgainClick}
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
                fontSize: "20.5px",
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
                fontSize: "20.5px",
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
        !(cycle === totalCycles && winnerRevealed) && (
          <div
            style={{
              position: "absolute",
              top: "calc(30% + 730px)",
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
              onClick={onMainButtonClick}
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
                  fontSize: "20.5px",
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
          </div>
        )
      )}

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
    </>
  );
}

// Default export for Next.js page route /Preview/view/DemoCard — redirect to /preview
// so the route does not try to render DemoCard without props (which causes "s is not a function").
export default function DemoCardPage() {
  return null;
}

export function getServerSideProps() {
  return { redirect: { destination: "/preview", permanent: false } };
}
