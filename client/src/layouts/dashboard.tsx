import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Top Navbar */}
            <header className="h-14 flex items-center justify-between bg-white border-b px-6">
                <div className="flex items-center gap-8">
                    <span className="font-bold text-lg">NextQ</span>
                    <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
                        <Link to="/admin/" className="hover:text-black px-2 py-3 rounded hover:bg-gray-100">
                            Dashboard
                        </Link>
                        <Link to="/" className="px-2 py-3 rounded hover:bg-gray-100 hover:text-black">
                            User Display
                        </Link>
                        
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    {/* ตัวอย่าง profile icon */}
                    <div className="w-8 h-8 rounded-full bg-gray-300" />
                </div>
            </header>

            <div className="flex flex-1">
                {/* Sidebar */}
                <aside className="w-60 bg-white border-r p-4 hidden md:block">
                    <div className="text-xs uppercase text-gray-400 font-semibold mb-2">
                        Queue Management
                    </div>
                    <nav className="flex flex-col gap-2 text-sm">
                        <Link to="/admin/" className="px-2 py-3 rounded hover:bg-gray-100">
                            Dashboard
                        </Link>
                        <Link to="/admin/ActionAd" className="px-2 py-3 rounded hover:bg-gray-100">
                            Action
                        </Link>
                        {/* <Link to="/admin/" className="px-2 py-3 rounded hover:bg-gray-100">
                            Staff Panel
                        </Link> */}

                    </nav>

                    {/* <div className="mt-6 text-xs uppercase text-gray-400 font-semibold mb-2">
                        Reports
                    </div>
                    <nav className="flex flex-col gap-2 text-sm">
                        <Link to="/admin/" className="px-2 py-3 rounded hover:bg-gray-100">
                            Analytics
                        </Link>
                        <Link to="/admin/" className="px-2 py-3 rounded hover:bg-gray-100">
                            History
                        </Link>
                    </nav> */}
                    <div className="mt-6 text-xs uppercase text-gray-400 font-semibold mb-2">
                        
                    </div>
                    <nav className="flex flex-col gap-2 text-sm">
                        <Link to="/" className="px-2 py-3 rounded hover:bg-red-100 text-red-400">
                            log out
                        </Link>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>


        </div>
    );
}