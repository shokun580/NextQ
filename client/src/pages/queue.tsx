import React, { useState } from "react";

export default function UserQueue() {
    const [ticket, setTicket] = useState<string | null>(null);
    const [ahead, setAhead] = useState<number>(0);
    const [showCancelAlert, setShowCancelAlert] = useState(false);

    const handleBook = () => {
        const num = Math.floor(Math.random() * 900 + 100); // mock เลขคิว Axxx
        setTicket(`A${num}`);
        setAhead(Math.floor(Math.random() * 20)); // mock จำนวนคิวก่อนหน้า
    };

    const confirmCancel = () => {
        setShowCancelAlert(true);
    };

    const handleCancel = () => {
        setTicket(null);
        setAhead(0);
        setShowCancelAlert(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden p-4">
            {/* background glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 blur-[160px] rounded-full" />
            </div>

            <div className="w-full max-w-md rounded-2xl bg-white/70 backdrop-blur-md shadow-xl ring-1 ring-black/5 p-6 text-center">
                {/* Logo + Title */}
                <div className="flex flex-col items-center mb-6">
                    <img src="/image.png" alt="NextQ Logo" className="h-12 w-12 mb-2" />
                    <h1 className="text-2xl font-bold text-gray-900">NextQ</h1>
                    <p className="text-sm text-gray-500">ระบบจองคิวออนไลน์</p>
                </div>

                {!ticket ? (
                    <>
                        <h2 className="text-lg font-semibold mb-4 text-gray-800">Reserve Your Queue</h2>
                        <p className="text-sm text-gray-500 mb-6">
                            กดปุ่มด้านล่างเพื่อทำการจองคิว ระบบจะแสดงหมายเลขคิวให้คุณ
                        </p>
                        <button
                            onClick={handleBook}
                            className="w-full h-11 rounded-lg bg-black text-white font-semibold hover:bg-gray-700 transition"
                        >
                            จองคิว
                        </button>
                    </>
                ) : (
                    <>
                        <h2 className="text-lg font-semibold text-gray-900">คุณได้รับคิว</h2>
                        <div className="text-5xl font-bold text-black my-4">{ticket}</div>
                        <p className="text-gray-600 mb-6">มี {ahead} คิวอยู่ก่อนหน้า</p>
                        <button
                            onClick={confirmCancel}
                            className="w-full h-11 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                        >
                            ยกเลิกคิว
                        </button>
                    </>
                )}
            </div>

            {/* Custom Alert Modal */}
            {showCancelAlert && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="w-full max-w-sm rounded-2xl bg-white/90 backdrop-blur-md shadow-xl ring-1 ring-black/5 p-6 text-center">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">ยืนยันการยกเลิกคิว</h3>
                        <p className="text-sm text-gray-600 mb-6">
                            คุณแน่ใจหรือไม่ว่าต้องการยกเลิกคิว {ticket} ?
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowCancelAlert(false)}
                                className="flex-1 h-10 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
                            >
                                กลับไป
                            </button>
                            <button
                                onClick={handleCancel}
                                className="flex-1 h-10 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
                            >
                                ยืนยัน
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}