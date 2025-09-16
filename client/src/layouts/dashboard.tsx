// src/layouts/Dashboard.tsx
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

type NavItem = {
    id: string;
    label: string;
    path: string;
};

export default function Dashboard() {
    const [open, setOpen] = useState(false);

    // ----- MOCK DATA -----
    const user = { name: "Chanon Srisa", avatar: "" };
    const navItems: NavItem[] = [
        { id: "1", label: "Dashboard", path: "/admin/" },
        { id: "2", label: "Action", path: "/admin/ActionAd" },
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 relative">
            {/* background glow */}
            <BackgroundGlow />

            {/* Top Navbar */}
            <Navbar user={user} onMenuClick={() => setOpen(true)} />

            <div className="flex flex-1">
                {/* Sidebar (desktop) */}
                <Sidebar items={navItems} />

                {/* Main Content */}
                <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
                    <div className="rounded-2xl bg-white/70 backdrop-blur-md shadow-lg p-4 sm:p-6">
                        <Outlet />
                    </div>
                </main>
            </div>

            {/* Mobile Drawer */}
            <MobileDrawer open={open} onClose={() => setOpen(false)} items={navItems} />
        </div>
    );
}

/* ---------- Components ---------- */

function BackgroundGlow() {
    return (
        <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 blur-[160px] rounded-full" />
        </div>
    );
}

function Navbar({ user, onMenuClick }: { user: { name: string; avatar: string }; onMenuClick: () => void }) {
    return (
        <header className="h-14 flex items-center justify-between px-3 bg-white/70 backdrop-blur-md shadow-lg">
            <div className="flex items-center gap-3">
                {/* Hamburger (mobile only) */}
                <button
                    onClick={onMenuClick}
                    className="md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 hover:bg-white/40"
                    aria-label="Open menu"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                <a href="/" className="flex items-center gap-0">
                    <img src="/image.png" alt="logo" className="w-10 mr-0 object-contain" />
                    <span className="text-black font-bold text-lg">NextQ</span>
                </a>
            </div>

            <div className="flex items-center gap-4">
                {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-300" />
                )}
                <span className="hidden sm:inline">{user.name}</span>
            </div>
        </header>
    );
}

function Sidebar({ items }: { items: NavItem[] }) {
    return (
        <aside className="hidden md:block w-60 p-4 bg-white/70 backdrop-blur-md shadow-lg">
            <div className="text-xs uppercase text-gray-400 font-semibold mb-2">
                Queue Management
            </div>
            <nav className="flex flex-col gap-2 text-sm">
                {items.map((item) => (
                    <Link
                        key={item.id}
                        to={item.path}
                        className="px-2 py-3 rounded hover:bg-white/40"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>

            <div className="mt-6">
                <nav className="flex flex-col gap-2 text-sm">
                    <Link to="/" className="px-2 py-3 rounded hover:bg-red-100 text-red-400">
                        log out
                    </Link>
                </nav>
            </div>
        </aside>
    );
}

function MobileDrawer({
    open,
    onClose,
    items,
}: {
    open: boolean;
    onClose: () => void;
    items: NavItem[];
}) {
    return (
        <div className={`fixed inset-0 z-40 md:hidden ${open ? "" : "pointer-events-none"}`}>
            {/* overlay */}
            <div
                onClick={onClose}
                className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"
                    }`}
            />
            {/* drawer */}
            <aside
                className={`absolute left-0 top-0 h-full w-72 transition-transform duration-300
          bg-white/70 backdrop-blur-md shadow-xl
          ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="px-4 py-3 flex items-center justify-between border-b border-white/30">
                    <div className="flex items-center gap-2">
                        <img src="/image.png" alt="logo" className="h-7 w-7" />
                        <span className="font-semibold">NextQ</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="rounded-md p-2 hover:bg-white/40"
                        aria-label="Close menu"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24">
                            <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                <div className="p-4">
                    <div className="text-xs uppercase text-gray-400 font-semibold mb-2">
                        Queue Management
                    </div>
                    <nav className="flex flex-col gap-2 text-sm">
                        {items.map((item) => (
                            <Link
                                key={item.id}
                                to={item.path}
                                onClick={onClose}
                                className="px-2 py-3 rounded hover:bg-white/40"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            to="/"
                            onClick={onClose}
                            className="mt-4 px-2 py-3 rounded hover:bg-red-100 text-red-500"
                        >
                            log out
                        </Link>
                    </nav>
                </div>
            </aside>
        </div>
    );
}