import Image from "next/image";

interface Magazine3DProps {
    src: string;
    alt: string;
    size?: "small" | "medium" | "large";
    priority?: boolean;
    thickness?: "thin" | "medium" | "thick";
}

export function Magazine3D({ src, alt, size = "medium", priority = false, thickness = "thin" }: Magazine3DProps) {
    // Kalınlık ayarları
    const thicknessConfig = {
        thin: {
            small: "4px",
            medium: "5px",
            large: "6px",
            translateZ: { small: "2px", medium: "2.5px", large: "3px" }
        },
        medium: { // Biraz daha kalın dergi veya ince kitap
            small: "8px",
            medium: "10px",
            large: "12px",
            translateZ: { small: "4px", medium: "5px", large: "6px" }
        },
        thick: { // Kitaplar için
            small: "16px",
            medium: "20px",
            large: "24px",
            translateZ: { small: "8px", medium: "10px", large: "12px" }
        }
    };

    const sizeConfig = {
        small: {
            maxWidth: "200px",
            perspective: "1500px",
        },
        medium: {
            maxWidth: "240px",
            perspective: "1600px",
        },
        large: {
            maxWidth: "320px",
            perspective: "1800px",
        },
    };

    const config = sizeConfig[size];
    const thick = thicknessConfig[thickness];
    const currentSpineWidth = thick[size];
    const currentTranslateZ = thick.translateZ[size];

    return (
        <div
            className="relative aspect-[3/4] w-full transition-all duration-500"
            style={{
                maxWidth: config.maxWidth,
                perspective: config.perspective,
            }}
        >
            {/* 3D Container */}
            <div
                className="relative w-full h-full transition-all duration-700 group-hover:scale-[1.02]"
                style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateY(18deg) rotateX(-2deg) rotateZ(0.5deg)",
                }}
            >
                {/* Spine (Left side) */}
                <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] border-y border-black/20"
                    style={{
                        width: currentSpineWidth,
                        transform: `rotateY(-90deg) translateZ(${currentTranslateZ})`,
                    }}
                />

                {/* Front Cover Container */}
                <div
                    className="absolute inset-0 shadow-[-20px_20px_45px_rgba(0,0,0,0.5),_-8px_8px_18px_rgba(0,0,0,0.3)] group-hover:shadow-[-28px_28px_60px_rgba(0,0,0,0.6),_-12px_12px_25px_rgba(0,0,0,0.4)] transition-all duration-700 rounded-[1px] overflow-hidden border border-black/25"
                    style={{
                        transform: `translateZ(${currentTranslateZ})`,
                    }}
                >
                    {/* Cover Image */}
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover"
                        priority={priority}
                    />

                    {/* Realistic Lighting Effects */}
                    <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/8 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/12 opacity-60 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-white/12 to-transparent pointer-events-none" />

                    {/* Paper Texture Overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
                        style={{
                            backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)"/></svg>')`
                        }}
                    />
                </div>

                {/* Pages (Right side) */}
                <div
                    className="absolute top-0 right-0 h-full bg-gradient-to-l from-[#f8f8f8] to-[#f0f0f0] origin-right border-y border-black/10"
                    style={{
                        width: currentSpineWidth,
                        transform: `rotateY(90deg) translateZ(${currentTranslateZ})`,
                    }}
                >
                    {/* Sayfa çizgileri */}
                    <div className="w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#e0e0e0_1px,#e0e0e0_1.5px,transparent_1.5px)] opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/5 to-transparent" />
                </div>
            </div>

            {/* Professional Floor Shadow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[105%] h-10">
                <div className="absolute inset-0 bg-black/25 blur-[30px] rounded-[100%] opacity-60 group-hover:opacity-45 transition-all duration-700" style={{ transform: "rotateX(82deg)" }} />
                <div className="absolute inset-[20%] bg-black/35 blur-[15px] rounded-[100%] opacity-70 group-hover:opacity-55 transition-all duration-700" style={{ transform: "rotateX(82deg)" }} />
            </div>
        </div>
    );
}

// Backward compatibility
export const Book3D = Magazine3D;
