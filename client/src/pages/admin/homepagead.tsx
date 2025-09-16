// src/pages/AdminDashboard.tsx
import {
    ChartBarIcon,
    ClockIcon,
    UsersIcon,
    RectangleGroupIcon,
    ForwardIcon,
    ArrowPathIcon,
} from "@heroicons/react/24/outline";

type Ticket = {
    id: string;
    number: string;
    status: "serving" | "waiting";
    wait: string;
    joined: string;
};

export default function AdminDashboard() {
    // ----- MOCK DATA -----
    const stats = {
        waitingCount: 24,
        nowServing: "A007",
        avgWait: "12m",
        todayTotal: 156,
    };

    const activities = [
        { id: "a1", text: "A006 completed", time: "2 minutes ago" },
        { id: "a2", text: "A007 called", time: "3 minutes ago" },
        { id: "a3", text: "A008 joined queue", time: "5 minutes ago" },
    ];

    const rows: Ticket[] = [
        { id: "1", number: "A007", status: "serving", wait: "12m", joined: "10:30 AM" },
        { id: "2", number: "A008", status: "waiting", wait: "8m", joined: "10:35 AM" },
    ];

    return (
        <div className="space-y-6">
            {/* Title */}
            <div>
                <h1 className="text-xl font-semibold text-gray-900">Queue Dashboard</h1>
                <p className="text-sm text-gray-500">
                    Real-time overview of your queue management system
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                <StatCard
                    icon={<UsersIcon className="size-5" />}
                    label="Current Queue"
                    value={String(stats.waitingCount)}
                />
                <StatCard
                    icon={<RectangleGroupIcon className="size-5" />}
                    label="Now Serving"
                    value={stats.nowServing}
                />
                <StatCard
                    icon={<ClockIcon className="size-5" />}
                    label="Avg Wait Time"
                    value={stats.avgWait}
                />
                <StatCard
                    icon={<ChartBarIcon className="size-5" />}
                    label="Today's Total"
                    value={String(stats.todayTotal)}
                />
            </div>

            {/* Main grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* LEFT */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Activity */}
                    <section className="rounded-xl bg-white/70 backdrop-blur-md shadow-lg">
                        <header className="px-4 py-3 border-b border-white/30">
                            <h2 className="text-sm font-semibold text-gray-900">Queue Activity</h2>
                        </header>
                        <div className="p-4">
                            <div className="h-44 rounded-lg border border-dashed border-gray-300 grid place-items-center text-sm text-gray-500">
                                Queue activity chart visualization
                            </div>
                        </div>
                    </section>

                    {/* Current Queue table */}
                    <section className="rounded-xl bg-white/70 backdrop-blur-md shadow-lg overflow-hidden">
                        <header className="px-4 py-3 border-b border-white/30">
                            <h2 className="text-sm font-semibold text-gray-900">Current Queue</h2>
                        </header>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50/60 text-gray-600">
                                    <tr>
                                        <Th>Ticket</Th>
                                        <Th>Status</Th>
                                        <Th>Wait Time</Th>
                                        <Th>Joined</Th>
                                        <Th>Actions</Th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200/40">
                                    {rows.map((r) => (
                                        <tr key={r.id} className="bg-white/60">
                                            <Td>{r.number}</Td>
                                            <Td>
                                                {r.status === "serving" ? (
                                                    <span className="inline-flex items-center rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-700">
                                                        Serving
                                                    </span>
                                                ) : (
                                                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                                                        Waiting
                                                    </span>
                                                )}
                                            </Td>
                                            <Td>{r.wait}</Td>
                                            <Td>{r.joined}</Td>
                                            <Td>…</Td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>

                {/* RIGHT */}
                <div className="space-y-6">
                    {/* Quick Actions */}
                    <section className="rounded-xl bg-white/70 backdrop-blur-md shadow-lg p-4">
                        <h3 className="mb-3 text-sm font-semibold text-gray-900">Quick Actions</h3>
                        <div className="space-y-3">
                            <BtnPrimary icon={<ForwardIcon className="size-4" />}>Call Next</BtnPrimary>
                            <BtnGhost icon={<ArrowPathIcon className="size-4" />}>Reset Queue</BtnGhost>
                        </div>
                    </section>

                    {/* Recent Activity */}
                    <section className="rounded-xl bg-white/70 backdrop-blur-md shadow-lg p-4">
                        <h3 className="mb-3 text-sm font-semibold text-gray-900">Recent Activity</h3>
                        <ul className="space-y-3 text-sm">
                            {activities.map((a) => (
                                <li key={a.id} className="flex items-start gap-2">
                                    <span className="mt-1 size-1.5 rounded-full bg-gray-400" />
                                    <div>
                                        <div className="text-gray-900">{a.text}</div>
                                        <div className="text-gray-500 text-xs">{a.time}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

/* ---------- UI bits ---------- */

function StatCard({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-xl bg-white/70 backdrop-blur-md shadow-lg p-4">
            <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-600">{label}</div>
                <div className="grid size-8 place-items-center rounded-lg bg-white/50 text-gray-600 shadow-inner">
                    {icon}
                </div>
            </div>
            <div className="mt-2 text-2xl font-semibold text-gray-900">{value}</div>
        </div>
    );
}

function Th({ children }: { children: React.ReactNode }) {
    return <th className="px-3 py-2 text-left font-medium">{children}</th>;
}
function Td({ children }: { children: React.ReactNode }) {
    return <td className="px-3 py-2 text-gray-900">{children}</td>;
}

function BtnPrimary({
    icon,
    children,
}: {
    icon?: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <button
            type="button"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-black"
        >
            {icon}
            <span>{children}</span>
        </button>
    );
}
function BtnGhost({
    icon,
    children,
}: {
    icon?: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <button
            type="button"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/60 backdrop-blur-sm ring-1 ring-gray-200 px-4 py-2.5 text-sm font-semibold hover:bg-white/80"
        >
            {icon}
            <span>{children}</span>
        </button>
    );
}