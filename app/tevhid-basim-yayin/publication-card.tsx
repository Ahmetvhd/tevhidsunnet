import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PublicationCardProps {
    title: string;
    image: string;
    url?: string; // Optional for books if they don't have individual links yet
    description?: string; // For books
    isBook?: boolean; // To differentiate styling if needed (e.g. spine width)
}

export function PublicationCard({ title, image, url, description, isBook = false }: PublicationCardProps) {
    const spineWidth = isBook ? "20px" : "15px";
    const translateZ = isBook ? "10px" : "7.5px";

    return (
        <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
            <div className="flex items-center justify-center bg-muted/30 p-8 md:p-10 overflow-hidden flex-grow relative">
                <div className="relative aspect-[3/4] w-full max-w-[200px] md:max-w-[240px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                    {/* 3D Book Container */}
                    <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(1deg)] group-hover:[transform:rotateY(22deg)_rotateZ(2deg)]">

                        {/* Spine (Left side) */}
                        <div className={`absolute left-0 top-0 h-[99%] my-[0.5%] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(${translateZ})] border-y border-l border-white/10 flex flex-col justify-between py-4 items-center`} style={{ width: spineWidth }}>
                            <div className="w-full h-px bg-white/5" />
                            <div className="w-full h-px bg-white/5" />
                        </div>

                        {/* Front Cover */}
                        <div className={`absolute inset-0 [transform:translateZ(${translateZ})] shadow-[-15px_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.7)] transition-all duration-700 rounded-sm overflow-hidden border border-black/30`}>
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                            {/* Spine Shadow on Cover */}
                            <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                        </div>

                        {/* Thickness / Pages (Right side) */}
                        <div className={`absolute top-0 right-0 h-[98%] my-[1%] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(${translateZ})] origin-right shadow-inner opacity-90 border-y border-black/5`} style={{ width: spineWidth }}>
                            <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_2px,#e5e5e5_3px)]" />
                        </div>
                    </div>

                    {/* Dynamic Floor Shadow */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-10 bg-black/25 blur-3xl rounded-[100%] opacity-70 group-hover:opacity-50 transition-all duration-700 [transform:rotateX(75deg)]" />
                </div>
            </div>
            <CardContent className="pt-6 bg-card border-t border-border/10">
                <h3 className="font-semibold text-lg leading-tight mb-2">
                    {title}
                </h3>
                {description && (
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {description}
                    </p>
                )}
                {url ? (
                    <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors" asChild>
                        <Link href={url} target="_blank">
                            İncele & Oku <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                ) : (
                    <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">
                        İncele <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </CardContent>
        </Card>
    );
}
