// Lightweight hand-built SVG scenes standing in for real product screenshots.
// Each illustration mirrors the subject of its matching `appFeatures` entry.
const GOLD = "var(--gold)";
const CREAM = "var(--copy)";
const PAPER = "var(--foreground)";

function Frame({ children }) {
    return (
        <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-hidden="true">
            {children}
        </svg>
    );
}

// 0 — Progress Analytics: rising line chart over a grid, with a headline stat card
function ProgressAnalytics() {
    return (
        <Frame>
            <rect x="24" y="24" width="352" height="252" rx="18" fill="none" stroke={GOLD} strokeOpacity="0.25" />
            {[70, 112, 154, 196, 238].map((y) => (
                <line key={y} x1="48" y1={y} x2="352" y2={y} stroke={CREAM} strokeOpacity="0.08" />
            ))}
            <polyline
                points="56,220 100,190 144,205 188,150 232,165 276,100 320,120 352,70"
                fill="none"
                stroke={GOLD}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M56,220 100,190 144,205 188,150 232,165 276,100 320,120 352,70 352,238 56,238 Z"
                fill={GOLD}
                fillOpacity="0.08"
            />
            {[[56, 220], [100, 190], [144, 205], [188, 150], [232, 165], [276, 100], [320, 120], [352, 70]].map(
                ([cx, cy]) => (
                    <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill={PAPER} />
                )
            )}
            <g transform="translate(56,44)">
                <text x="0" y="0" fontSize="12" fill={CREAM} fillOpacity="0.55" fontFamily="sans-serif">
                    OVERALL PROGRESS
                </text>
                <text x="0" y="22" fontSize="20" fill={PAPER} fontFamily="serif">
                    +64%
                </text>
            </g>
        </Frame>
    );
}

// 1 — Teacher Dashboard: sidebar + student roster rows with progress bars
function TeacherDashboard() {
    const rows = [0.85, 0.55, 0.7, 0.4];
    return (
        <Frame>
            <rect x="24" y="24" width="352" height="252" rx="18" fill="none" stroke={GOLD} strokeOpacity="0.25" />
            <rect x="24" y="24" width="96" height="252" rx="18" fill={CREAM} fillOpacity="0.05" />
            {[70, 112, 154, 196, 238].map((y) => (
                <rect key={y} x="44" y={y - 12} width="56" height="24" rx="8" fill={GOLD} fillOpacity={y === 112 ? 0.35 : 0.12} />
            ))}
            {rows.map((v, i) => {
                const y = 66 + i * 44;
                return (
                    <g key={i}>
                        <circle cx="148" cy={y} r="12" fill={GOLD} fillOpacity="0.3" />
                        <rect x="172" y={y - 14} width="90" height="8" rx="4" fill={CREAM} fillOpacity="0.25" />
                        <rect x="172" y={y + 2} width="160" height="8" rx="4" fill={PAPER} fillOpacity="0.08" />
                        <rect x="172" y={y + 2} width={160 * v} height="8" rx="4" fill={GOLD} fillOpacity="0.65" />
                    </g>
                );
            })}
        </Frame>
    );
}

// 2 — Home Practice: a house outline with a dombyra silhouette and signal/feedback waves
function HomePractice() {
    return (
        <Frame>
            <rect x="24" y="24" width="352" height="252" rx="18" fill="none" stroke={GOLD} strokeOpacity="0.25" />
            <path
                d="M200 78 L296 148 L296 226 L104 226 L104 148 Z"
                fill="none"
                stroke={CREAM}
                strokeOpacity="0.3"
                strokeWidth="2.5"
                strokeLinejoin="round"
            />
            <rect x="150" y="170" width="44" height="56" rx="3" fill={GOLD} fillOpacity="0.18" stroke={GOLD} strokeOpacity="0.4" />
            {/* dombyra silhouette */}
            <g transform="translate(214,150)">
                <ellipse cx="26" cy="46" rx="24" ry="30" fill={GOLD} fillOpacity="0.55" />
                <rect x="20" y="-38" width="6" height="86" rx="3" fill={CREAM} fillOpacity="0.7" />
                <circle cx="23" cy="-40" r="6" fill={CREAM} fillOpacity="0.7" />
            </g>
            {/* feedback waves */}
            <g stroke={GOLD} strokeOpacity="0.55" strokeWidth="2" fill="none">
                <path d="M280 96 a14 14 0 0 1 20 12" />
                <path d="M280 84 a28 28 0 0 1 34 24" />
                <path d="M280 72 a42 42 0 0 1 48 36" />
            </g>
        </Frame>
    );
}

// 3 — Gamified Learning: level badge with streak flame and star milestones
function GamifiedLearning() {
    return (
        <Frame>
            <rect x="24" y="24" width="352" height="252" rx="18" fill="none" stroke={GOLD} strokeOpacity="0.25" />
            <circle cx="200" cy="140" r="58" fill="none" stroke={GOLD} strokeOpacity="0.35" strokeWidth="3" />
            <circle cx="200" cy="140" r="58" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="230 364" strokeLinecap="round" transform="rotate(-90 200 140)" />
            <text x="200" y="132" textAnchor="middle" fontSize="26" fill={PAPER} fontFamily="serif">
                Lvl 7
            </text>
            <text x="200" y="154" textAnchor="middle" fontSize="11" fill={CREAM} fillOpacity="0.6" fontFamily="sans-serif">
                12-DAY STREAK
            </text>
            {[[110, 230], [160, 250], [240, 250], [290, 230]].map(([cx, cy], i) => (
                <path
                    key={i}
                    d="M0,-10 L2.9,-3.1 10,-3.1 4.5,1.2 6.2,8.1 0,4 -6.2,8.1 -4.5,1.2 -10,-3.1 -2.9,-3.1 Z"
                    transform={`translate(${cx},${cy}) scale(1.1)`}
                    fill={GOLD}
                    fillOpacity={i === 1 || i === 2 ? 0.9 : 0.3}
                />
            ))}
        </Frame>
    );
}

// 4 — Transparent Progress for Parents: phone mockup with a simple report card
function ParentProgress() {
    return (
        <Frame>
            <rect x="24" y="24" width="352" height="252" rx="18" fill="none" stroke={GOLD} strokeOpacity="0.25" />
            <rect x="150" y="52" width="100" height="196" rx="16" fill={CREAM} fillOpacity="0.05" stroke={GOLD} strokeOpacity="0.4" strokeWidth="2" />
            <rect x="164" y="72" width="72" height="10" rx="5" fill={PAPER} fillOpacity="0.7" />
            {[[104], [128], [152]].map(([y], i) => (
                <g key={y}>
                    <rect x="164" y={y} width="72" height="14" rx="7" fill={CREAM} fillOpacity="0.08" />
                    <rect x="164" y={y} width={72 * [0.8, 0.55, 0.4][i]} height="14" rx="7" fill={GOLD} fillOpacity="0.6" />
                </g>
            ))}
            <circle cx="200" cy="205" r="20" fill="none" stroke={GOLD} strokeWidth="3" strokeOpacity="0.3" />
            <circle cx="200" cy="205" r="20" fill="none" stroke={GOLD} strokeWidth="3" strokeDasharray="88 126" strokeLinecap="round" transform="rotate(-90 200 205)" />
            {/* small parent + child dots to the sides */}
            <g fillOpacity="0.35" fill={CREAM}>
                <circle cx="90" cy="150" r="14" />
                <circle cx="310" cy="150" r="10" />
            </g>
        </Frame>
    );
}

const ILLUSTRATIONS = [ProgressAnalytics, TeacherDashboard, HomePractice, GamifiedLearning, ParentProgress];

export default function LMSIllustration({ index }) {
    const Illustration = ILLUSTRATIONS[index % ILLUSTRATIONS.length] ?? ProgressAnalytics;
    return <Illustration />;
}
