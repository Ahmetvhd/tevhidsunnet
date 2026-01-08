
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { cinzel } from "@/lib/fonts";

interface PageHeroProps {
    title: string;
    description: string;
    badge?: string;
}

export function PageHero({ title, description, badge }: PageHeroProps) {
    return (
        <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden bg-black border-b border-white/10">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg-v2.png"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Ana sayfadakiyle tutarlı overlay (bg-black/60) */}
                <div className="absolute inset-0 bg-black/60 z-10" />
            </div>

            {/* Content */}
            <div className="container relative z-20 px-4 md:px-6 text-center text-white space-y-6">
                {badge && (
                    <Badge variant="outline" className="px-4 py-1 text-white/90 border-white/20 backdrop-blur-sm uppercase tracking-wider">
                        {badge}
                    </Badge>
                )}
                <h1 className={`${cinzel.className} text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg`}>
                    {title}
                </h1>
                <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light shadow-black drop-shadow-sm">
                    {description}
                </p>
            </div>
        </section>
    );
}
