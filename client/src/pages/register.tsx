// src/pages/Register.tsx
import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Register: React.FC = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState(""); // xxx-xxx-xxxx
    const [loading, setLoading] = useState(false);

    // ใส่ขีดอัตโนมัติเป็น xxx-xxx-xxxx
    const handlePhoneChange = (v: string) => {
        const digits = v.replace(/\D/g, "").slice(0, 10); // เอาเฉพาะตัวเลข 10 หลัก
        const p1 = digits.slice(0, 3);
        const p2 = digits.slice(3, 6);
        const p3 = digits.slice(6, 10);
        const formatted =
            digits.length <= 3 ? p1 :
                digits.length <= 6 ? `${p1}-${p2}` :
                    `${p1}-${p2}-${p3}`;
        setPhone(formatted);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // TODO: ส่งข้อมูลสมัครสมาชิก
        setTimeout(() => setLoading(false), 1200);
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
                    <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
                    <p className="text-sm text-gray-500">Register to join NextQ</p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            autoComplete="username"
                            placeholder="yourusername"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="new-password"
                            placeholder="••••••••"
                            minLength={6}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone 
                        </label>
                        <input
                            type="tel"
                            inputMode="numeric"
                            pattern="\d{3}-\d{3}-\d{4}"
                            title="Phone must be in the format xxx-xxx-xxxx"
                            className="w-full px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm ring-1 ring-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            value={phone}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            required
                            autoComplete="tel"
                            placeholder="123-456-7890"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-lg bg-black text-white font-semibold hover:bg-gray-700 transition-colors disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Creating account..." : "Create account"}
                        {!loading && <ArrowRightIcon className="h-4 w-4" />}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <a href="/login" className="text-indigo-600 hover:underline">Sign in</a>
                </div>
            </div>
        </div>
    );
};

export default Register;