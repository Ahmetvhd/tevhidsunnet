"use client";

import Image from "next/image";

interface Magazine3DProps {
    src: string;
    alt: string;
    size?: "small" | "medium" | "large";
    priority?: boolean;
    thickness?: "thin" | "medium" | "thick";
}

export function Magazine3D({ src, alt, size = "medium", priority = false, thickness = "thin" }: Magazine3DProps) {
    // Thickness configuration
    const thicknessConfig = {
        thin: "8px",
        medium: "20px",
        thick: "40px",
    };

    const sizeConfig = {
        small: "180px",
        medium: "240px",
        large: "320px",
    };

    const depth = thicknessConfig[thickness];
    const maxWidth = sizeConfig[size];

    return (
        <div
            className="group relative"
            style={{
                width: "100%",
                maxWidth: maxWidth,
                perspective: "2000px"
            }}
        >
            {/* 3D Container */}
            <div
                className="relative aspect-[3/4.2] w-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateY(-18deg) rotateX(2deg)",
                }}
            >
                {/* Main Card / Cover */}
                <div
                    className="absolute inset-0 bg-white shadow-[5px_5px_15px_rgba(0,0,0,0.1)] group-hover:shadow-[20px_20px_40px_rgba(0,0,0,0.2)] transition-all duration-700 overflow-hidden rounded-r-[2px]"
                    style={{
                        transformStyle: "preserve-3d",
                        transform: `translateZ(${depth})`,
                    }}
                >
                    {/* Cover Image */}
                    <div className="relative w-full h-full">
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-cover"
                            priority={priority}
                        />

                        {/* Realistic Lighting/Gloss */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        {/* Spine Crease */}
                        <div className="absolute inset-y-0 left-0 w-[1px] bg-black/10 z-10" />
                        <div className="absolute inset-y-0 left-1 w-[2px] bg-black/5 z-10" />
                    </div>

                    {/* Gloss Reflection Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1500 pointer-events-none translate-x-[-150%] group-hover:translate-x-[150%] bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-30deg]" />
                </div>

                {/* Spine (Left Thickness) */}
                <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-b from-neutral-700 to-neutral-800 origin-left"
                    style={{
                        width: depth,
                        transform: "rotateY(-90deg)",
                        backfaceVisibility: "visible",
                    }}
                >
                    {/* Spine Shadow Detail */}
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Right Thickness (Pages) */}
                <div
                    className="absolute right-0 top-0 h-full bg-[#fdfdfd] origin-right"
                    style={{
                        width: depth,
                        transform: "rotateY(90deg)",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent" />
                    {/* Page texture lines */}
                    <div className="w-full h-full opacity-40 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#d1d1d1_1px,#d1d1d1_2px)]" />
                </div>

                {/* Bottom Thickness (Pages) */}
                <div
                    className="absolute bottom-0 left-0 w-full bg-[#f0f0f0] origin-bottom"
                    style={{
                        height: depth,
                        transform: "rotateX(-90deg) translateZ(0px)",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
                    <div className="w-full h-full opacity-40 bg-[repeating-linear-gradient(90deg,transparent,transparent_1px,#d1d1d1_1px,#d1d1d1_2px)]" />
                </div>
            </div>

            {/* Professional Floor Shadow */}
            <div
                className="absolute -bottom-6 left-[10%] w-[80%] h-4 bg-black/20 blur-xl rounded-[100%] transition-all duration-700"
                style={{ transform: "rotateX(85deg)" }}
            />

            {/* Inline Styles for the Hover Animation - Custom property might be better but this is reliable */}
            <style jsx>{`
                div :global(.group:hover > div) {
                    transform: rotateY(-10deg) rotateX(1deg) scale(1.03) translateZ(15px) !important;
                }
            `}</style>
        </div>
    );
}

// Backward compatibility
export const Book3D = Magazine3D;
