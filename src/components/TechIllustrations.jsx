// Hand-built SVG "app screen" mockups standing in for real screenshots inside
// the phone frame of the tech-step modal. Index matches `t.techSteps`.
const GOLD = "#C8974A";
const CREAM = "#F5E4C3";
const PAPER = "#FDFAF5";
const INK = "#0D0B08";

function Screen({ children }) {
    return (
        <svg viewBox="0 0 200 360" className="h-full w-full" role="img" aria-hidden="true">
            <rect x="0" y="0" width="200" height="360" fill={INK} fillOpacity="0.35" />
            {children}
        </svg>
    );
}

// 0 — Learning Program: a lesson-list screen with a status bar and progress
function LearningProgram() {
    const rows = [
        { done: true },
        { done: true },
        { done: false, active: true },
        { done: false },
        { done: false },
    ];
    return (
        <Screen>
            <rect x="14" y="18" width="120" height="10" rx="5" fill={PAPER} fillOpacity="0.75" />
            <rect x="14" y="34" width="80" height="7" rx="3.5" fill={CREAM} fillOpacity="0.4" />

            <rect x="14" y="56" width="172" height="6" rx="3" fill={CREAM} fillOpacity="0.12" />
            <rect x="14" y="56" width="112" height="6" rx="3" fill={GOLD} fillOpacity="0.75" />

            {rows.map((row, i) => {
                const y = 82 + i * 48;
                return (
                    <g key={i}>
                        <rect
                            x="14"
                            y={y}
                            width="172"
                            height="38"
                            rx="10"
                            fill={row.active ? GOLD : CREAM}
                            fillOpacity={row.active ? 0.16 : 0.05}
                            stroke={row.active ? GOLD : "none"}
                            strokeOpacity="0.5"
                        />
                        <circle
                            cx="34"
                            cy={y + 19}
                            r="11"
                            fill={row.done ? GOLD : "none"}
                            fillOpacity={row.done ? 0.85 : 1}
                            stroke={GOLD}
                            strokeOpacity="0.6"
                            strokeWidth="1.5"
                        />
                        {row.done && (
                            <path
                                d={`M28 ${y + 19} l4 4 8 -8`}
                                fill="none"
                                stroke={INK}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        )}
                        <rect x="56" y={y + 10} width="100" height="7" rx="3.5" fill={PAPER} fillOpacity="0.6" />
                        <rect x="56" y={y + 22} width="64" height="5" rx="2.5" fill={CREAM} fillOpacity="0.3" />
                    </g>
                );
            })}
        </Screen>
    );
}

// 1 — App + Device: live tuner/analysis screen with a circular gauge and LED string indicators
function AppAndDevice() {
    const strings = [true, true, false];
    return (
        <Screen>
            <rect x="14" y="18" width="90" height="10" rx="5" fill={PAPER} fillOpacity="0.75" />
            <rect x="14" y="34" width="120" height="7" rx="3.5" fill={CREAM} fillOpacity="0.4" />

            <circle cx="100" cy="150" r="60" fill="none" stroke={CREAM} strokeOpacity="0.12" strokeWidth="10" />
            <circle
                cx="100"
                cy="150"
                r="60"
                fill="none"
                stroke={GOLD}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="260 377"
                transform="rotate(-90 100 150)"
            />
            <text x="100" y="144" textAnchor="middle" fontSize="22" fill={PAPER} fontFamily="serif">
                A4
            </text>
            <text x="100" y="164" textAnchor="middle" fontSize="10" fill={GOLD} fontFamily="sans-serif">
                IN TUNE
            </text>

            {strings.map((on, i) => (
                <g key={i} transform={`translate(${40 + i * 64},250)`}>
                    <rect x="-16" y="0" width="32" height="14" rx="7" fill={on ? GOLD : CREAM} fillOpacity={on ? 0.85 : 0.12} />
                    <rect x="-3" y="16" width="6" height="26" fill={CREAM} fillOpacity="0.25" />
                </g>
            ))}
            <rect x="14" y="300" width="172" height="6" rx="3" fill={CREAM} fillOpacity="0.12" />
            <rect x="14" y="300" width="118" height="6" rx="3" fill={GOLD} fillOpacity="0.75" />
        </Screen>
    );
}

// 2 — Gamification: level card, streak flame, and a badge grid
function Gamification() {
    const badges = [true, true, true, false, false, false];
    return (
        <Screen>
            <rect x="14" y="18" width="172" height="58" rx="14" fill={GOLD} fillOpacity="0.14" stroke={GOLD} strokeOpacity="0.4" />
            <text x="30" y="42" fontSize="16" fill={PAPER} fontFamily="serif">
                Level 7
            </text>
            <text x="30" y="60" fontSize="9" fill={CREAM} fillOpacity="0.6" fontFamily="sans-serif">
                420 XP · NEXT LEVEL 580 XP
            </text>
            <path
                d="M168 30 c0 8 -8 10 -8 18 a8 8 0 1 0 16 0 c0 -8 -8 -10 -8 -18 Z"
                fill={GOLD}
                fillOpacity="0.85"
            />

            <rect x="14" y="90" width="172" height="8" rx="4" fill={CREAM} fillOpacity="0.12" />
            <rect x="14" y="90" width="126" height="8" rx="4" fill={GOLD} fillOpacity="0.8" />

            {badges.map((unlocked, i) => {
                const col = i % 3;
                const row = Math.floor(i / 3);
                const cx = 46 + col * 54;
                const cy = 150 + row * 66;
                return (
                    <g key={i} transform={`translate(${cx},${cy})`}>
                        <circle r="22" fill={unlocked ? GOLD : CREAM} fillOpacity={unlocked ? 0.22 : 0.06} stroke={GOLD} strokeOpacity={unlocked ? 0.6 : 0.2} strokeWidth="1.5" />
                        <path
                            d="M0,-10 L2.9,-3.1 10,-3.1 4.5,1.2 6.2,8.1 0,4 -6.2,8.1 -4.5,1.2 -10,-3.1 -2.9,-3.1 Z"
                            fill={GOLD}
                            fillOpacity={unlocked ? 0.9 : 0.25}
                        />
                    </g>
                );
            })}
        </Screen>
    );
}

const ILLUSTRATIONS = [LearningProgram, AppAndDevice, Gamification];

export default function TechIllustration({ index }) {
    const Illustration = ILLUSTRATIONS[index % ILLUSTRATIONS.length] ?? LearningProgram;
    return <Illustration />;
}
