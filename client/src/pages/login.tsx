import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 1000); // mock login
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
            {/* background glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 blur-[160px] rounded-full" />
            </div>

            {/* card */}
            <div className="w-full max-w-md rounded-2xl bg-white/70 backdrop-blur-md shadow-xl ring-1 ring-black/5 p-8">
                {/* Logo + System name */}
                <div className="flex flex-col items-center mb-6">
                    <img src="/image.png" alt="NextQ Logo" className="h-12 w-12 mb-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Welcome Back!</h2>
                    <p className="text-sm text-gray-500">Sign in to NextQ system</p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    {/* Remember me + Forgot password */}
                    
                    {/* Submit button */}
                    <button
                        type="submit"
                        className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-lg bg-black text-white font-semibold hover:bg-gray-700 transition-colors disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Signing in..." : "Login"}
                        {!loading && <ArrowRightIcon className="h-4 w-4" />}
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-4 text-center text-sm text-gray-500">
                    Don&apos;t have an account?{" "}
                    <a href="/register" className="text-indigo-500 hover:underline">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;