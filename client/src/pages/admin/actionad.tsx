import type { ReactNode } from "react";
import { ArrowPathIcon, CheckIcon, ForwardIcon } from "@heroicons/react/24/solid";

type Props = {
    servingNo?: string;     // เลขที่กำลังให้บริการ เช่น "A007"
    waitingCount?: number;  // จำนวนที่กำลังรอ เช่น 24
    avgWaitMin?: number;    // เวลารอเฉลี่ย (นาที) เช่น 12
    className?: string;
};

export default function QueueControlCard({
    servingNo = "A007",
    waitingCount = 24,
    avgWaitMin = 12,
    className = "",
}: Props) {
    return (
        <section className={`rounded-xl border border-gray-200 bg-white p-4 shadow-sm ${className}`}>
            <h3 className="mb-3 text-base font-semibold text-gray-900">Queue Control</h3>

            {/* สถานะคิว (ตกแต่งอย่างเดียว) */}
            <div className="mb-4 grid grid-cols-3 gap-3">
                <Stat title="Waiting" value={String(waitingCount)} />
                <Stat title="Now Serving" value={servingNo} emphasis />
                <Stat title="Avg Wait" value={`${avgWaitMin}m`} />
            </div>

            {/* ปุ่มควบคุม (UI เท่านั้น) */}
            <div className="space-y-3">
                <Button variant="primary" icon={<ForwardIcon className="size-4" />}>
                    Call Next Ticket
                </Button>
                <Button variant="ghost" icon={<ArrowPathIcon className="size-4" />}>
                    Reset Queue
                </Button>
            </div>
        </section>
    );
}

/* ====== Sub components ====== */
function Stat({ title, value, emphasis = false }: { title: string; value: string; emphasis?: boolean }) {
    return (
        <div className="rounded-lg border border-gray-200 p-3">
            <div className="text-xs font-medium text-gray-500">{title}</div>
            <div className={["mt-1 font-semibold", emphasis ? "text-2xl text-gray-900" : "text-xl text-gray-800"].join(" ")}>
                {value}
            </div>
        </div>
    );
}

function Button({
    children,
    icon,
    variant = "primary",
}: {
    children: ReactNode;
    icon?: ReactNode;
    variant?: "primary" | "ghost";
}) {
    const base =
        "w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition";
    const stylePrimary =
        "bg-gray-900 text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900";
    const styleGhost = "bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50";

    return (
        <button type="button" className={[base, variant === "primary" ? stylePrimary : styleGhost].join(" ")}>
            {icon && <span className="shrink-0">{icon}</span>}
            <span>{children}</span>
        </button>
    );
}