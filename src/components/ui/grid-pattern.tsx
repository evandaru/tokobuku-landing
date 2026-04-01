"use client";

import { useId } from "react";

interface GridPatternProps {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    squares?: Array<[x: number, y: number]>;
    strokeDasharray?: string;
    className?: string;
    [key: string]: any;
}

export function GridPattern({
    width = 40,
    height = 40,
    x = -1,
    y = -1,
    strokeDasharray = "0",
    squares,
    className,
    ...props
}: GridPatternProps) {
    const id = useId();

    return (
        <svg
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30 ${className}`}
            {...props}
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path
                        d={`M.5 ${height}V.5H${width}`}
                        fill="none"
                        strokeDasharray={strokeDasharray}
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y]) => (
                        <rect
                            strokeWidth="0"
                            key={`${x}-${y}`}
                            width={width - 1}
                            height={height - 1}
                            x={x * width + 1}
                            y={y * height + 1}
                        />
                    ))}
                </svg>
            )}
        </svg>
    );
}

export function GridPatternBackground() {
    return (
        <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden opacity-40 bg-white">
            {/* MAIN GRID */}
            <GridPattern
                width={60}
                height={60}
                x={-1}
                y={-1}
                className="stroke-gray-200/80 [mask-image:linear-gradient(to_bottom,white,transparent_95%)]"
            />

            {/* PLUS MARKERS - Manually placed for aesthetic technical feel */}
            {/* Top Left Area */}
            <div className="absolute top-20 left-10 w-4 h-4 text-gray-300 font-thin flex items-center justify-center pointer-events-none text-xl">+</div>
            <div className="absolute top-20 right-10 w-4 h-4 text-gray-300 font-thin flex items-center justify-center pointer-events-none text-xl">+</div>

            {/* Random scatter */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 text-gray-200/50 flex items-center justify-center pointer-events-none">+</div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 text-gray-200/50 flex items-center justify-center pointer-events-none">+</div>
            <div className="absolute bottom-1/4 right-10 w-3 h-3 text-gray-200/50 flex items-center justify-center pointer-events-none">+</div>
            <div className="absolute bottom-10 left-10 w-3 h-3 text-gray-200/50 flex items-center justify-center pointer-events-none">+</div>
        </div>
    );
}
