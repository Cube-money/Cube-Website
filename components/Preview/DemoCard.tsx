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
};

export default function DemoCard({
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
}: DemoCardProps) {
  return (
    <>
      <div
        className="demoCardWrapper"
        style={{
          position: "absolute",
          top: "18%",
          left: "50%",
          maxWidth: "1000px",
          width: "75%",
          padding: "1px",
          background:
            "linear-gradient(to bottom right, rgba(255, 255, 255, 0.6) 0%, rgba(144, 144, 144, 0.6) 50%, rgba(255, 255, 255, 0.6) 100%)",
          borderRadius: "22px",
          zIndex: 3,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "300px 120px 390px 120px",
            background: "linear-gradient(to bottom, #181818, #000000)",
            borderRadius: "22px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {!showEndSummary && (
            <>
              <div
                className="demoCardAmount"
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

              <div
                className="demoCardSubtext"
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

              <div
                className="demoCardSubtext"
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
                Cycle {cycle} out of {totalCycles}
              </div>

              <div
                className="demoCardHeading"
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
                      height: "55px",
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
                            padding: "0 16px",
                            transition:
                              "background 650ms ease, box-shadow 650ms ease, color 650ms ease",
                            boxShadow: isWinner
                              ? "0 0 0 1px rgba(255, 215, 120, 0.35), 0 10px 24px rgba(0,0,0,0.35)"
                              : "none",
                          }}
                          className={isWinner ? "winnerRow" : undefined}
                        >
                          <div
                            className="demoCardParticipantText"
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
                              className="demoCardParticipantText"
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

                          <div
                            className="demoCardParticipantText"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: "16px",
                              color: rightColor,
                              position:
                                participant.type === "you" ? "relative" : "static",
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
                      className="turnNotice demoCardNotice"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "rgb(200, 200, 200)",
                        marginTop: "8px",
                        textAlign: "center",
                        width: "100%",
                      }}
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
                    className="winnerNotice demoCardNotice"
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
                      className="demoCardProgressRow"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "140px 1fr 120px",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "10px",
                      }}
                    >
                      <div
                        className="demoCardProgressLabel"
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
                        className="demoCardProgressLabel"
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

                    <div
                      className="demoCardProgressRow"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "140px 1fr 120px",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div
                        className="demoCardProgressLabel"
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
                        className="demoCardProgressLabel"
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
            </>
          )}

          {showEndSummary && (
            <div
              className="endSummary demoCardEndSummary"
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
                className="demoCardEndSummaryLabel"
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
                className="demoCardEndSummaryAmount"
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
                className="demoCardEndSummarySub"
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
                className="demoCardEndSummaryTitle"
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
                className="demoCardEndSummaryTitle"
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
                className="demoCardEndSummaryCaption"
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

      <style jsx>{`
        .demoCardWrapper {
          transform: translateX(-50%) scale(0.94);
          transform-origin: 50% 0;
        }
        @media (max-height: 900px) {
          .demoCardWrapper {
            transform: translateX(-50%) scale(0.88);
          }
        }
        @media (max-height: 800px) {
          .demoCardWrapper {
            transform: translateX(-50%) scale(0.78);
          }
        }
        @media (max-height: 700px) {
          .demoCardWrapper {
            transform: translateX(-50%) scale(0.68);
          }
        }
        @media (max-width: 1400px) {
          .demoCardWrapper {
            transform: translateX(-50%) scale(0.88);
          }
        }
        @media (max-width: 1200px) {
          .demoCardWrapper {
            transform: translateX(-50%) scale(0.76);
          }
        }
        @media (max-width: 1024px) {
          .demoCardWrapper {
            transform: translateX(-50%) scale(0.65);
          }
        }

        @media (max-width: 1200px), (max-height: 800px) {
          .demoCardAmount {
            font-size: clamp(26px, 3.8vw, 48px) !important;
          }
          .demoCardSubtext {
            font-size: 17px !important;
            line-height: 26px !important;
          }
          .demoCardHeading {
            font-size: clamp(26px, 3.8vw, 38px) !important;
          }
          .demoCardParticipantText {
            font-size: 17px !important;
          }
          .demoCardNotice {
            font-size: 15px !important;
            line-height: 22px !important;
          }
          .demoCardProgressLabel {
            font-size: 15px !important;
          }
          .demoCardEndSummaryLabel {
            font-size: 15px !important;
          }
          .demoCardEndSummaryAmount {
            font-size: 102px !important;
          }
          .demoCardEndSummarySub {
            font-size: 24px !important;
            line-height: 34px !important;
          }
          .demoCardEndSummaryTitle {
            font-size: 42px !important;
            line-height: 48px !important;
          }
          .demoCardEndSummaryCaption {
            font-size: 17px !important;
            line-height: 26px !important;
          }
        }
        @media (max-width: 1024px), (max-height: 700px) {
          .demoCardAmount {
            font-size: clamp(28px, 4vw, 48px) !important;
          }
          .demoCardSubtext {
            font-size: 18px !important;
            line-height: 27px !important;
          }
          .demoCardHeading {
            font-size: clamp(28px, 4vw, 38px) !important;
          }
          .demoCardParticipantText {
            font-size: 18px !important;
          }
          .demoCardNotice {
            font-size: 16px !important;
            line-height: 23px !important;
          }
          .demoCardProgressLabel {
            font-size: 16px !important;
          }
          .demoCardEndSummaryLabel {
            font-size: 16px !important;
          }
          .demoCardEndSummaryAmount {
            font-size: 108px !important;
          }
          .demoCardEndSummarySub {
            font-size: 26px !important;
            line-height: 36px !important;
          }
          .demoCardEndSummaryTitle {
            font-size: 44px !important;
            line-height: 50px !important;
          }
          .demoCardEndSummaryCaption {
            font-size: 18px !important;
            line-height: 27px !important;
          }
        }

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
