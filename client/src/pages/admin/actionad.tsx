import type { ReactNode } from "react";
import { ArrowPathIcon, ForwardIcon } from "@heroicons/react/24/solid";

type Props = {
    servingNo?: string;
    waitingCount?: number;
    avgWaitMin?: number;
    className?: string;
};

export default function QueueControlCard({
    servingNo = "A007",
    waitingCount = 24,
    avgWaitMin = 12,
    className = "",
}: Props) {
    return (
        <section className={`rounded-2xl bg-white p-4 shadow-md ring-1 ring-black/5 ${className}`}>
            <h3 className="mb-3 text-base font-semibold text-gray-900">Queue Control</h3>

            {/* สถานะคิว — ล็อกความสูง tile ให้เท่ากัน */}
            <div className="mb-4 grid grid-cols-3 gap-3">
                <Stat title="Waiting" value={String(waitingCount)} />
                <Stat title="Queue" value={servingNo} emphasis />
                <Stat title="Avg Wait" value={`${avgWaitMin}m`} />
            </div>

            {/* ปุ่ม — ล็อกความสูง และจัดไอคอนให้อยู่กึ่งกลางบรรทัด */}
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

function Stat({
    title,
    value,
    emphasis = false,
}: {
    title: string;
    value: string;
    emphasis?: boolean;
}) {
    return (
        <div className="rounded-lg ring-1 ring-gray-200 p-3 h-20 flex flex-col justify-center">
            <div className="text-xs font-medium text-gray-500">{title}</div>
            <div className={emphasis ? "mt-1 text-2xl font-semibold text-gray-900" : "mt-1 text-xl font-semibold text-gray-800"}>
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
        "w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 h-11 text-sm font-semibold transition select-none";
    const stylePrimary =
        "bg-gray-900 text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900";
    const styleGhost =
        "bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50";

    return (
        <button type="button" className={`${base} ${variant === "primary" ? stylePrimary : styleGhost}`}>
            {icon && <span className="shrink-0 leading-none align-middle -mt-px">{icon}</span>}
            <span className="leading-none align-middle">{children}</span>
        </button>
    );
}