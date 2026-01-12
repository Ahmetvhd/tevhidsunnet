"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { websites } from "./websites-data";


function WebsiteCard({ site }: { site: any }) {
    return (
        <Link href={site.url} target="_blank" className="block h-full">
            <Card className="group relative overflow-hidden border-none shadow-sm bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full ring-1 ring-primary/20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={site.background}
                        alt="Background"
                        fill
                        className="object-cover opacity-[0.50] group-hover:opacity-[0.70] transition-all duration-300 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
                </div>
                <CardContent className="relative z-20 p-4 flex items-center gap-3 sm:gap-4 h-full">
                    <div className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border border-primary/20 shadow-sm flex-shrink-0 group-hover:border-primary/50 transition-colors ${site.darkBgInfo ? 'bg-black p-2' : 'bg-white p-1'}`}>
                        <Image src={site.image} alt={site.title} fill className="object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-bold line-clamp-1 text-foreground group-hover:text-primary transition-colors">
                            {site.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-1 font-mono opacity-80">
                            {site.description}
                        </p>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:rotate-[-45deg] flex-shrink-0">
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}

export function WebsitesCarousel() {
    return (
        <div className="mx-auto px-4 md:px-0">
            {/* Desktop Grid - Fixed 3 columns on large, 2 columns on medium */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {websites.map((site) => (
                    <div key={site.id} className="h-32">
                        <WebsiteCard site={site} />
                    </div>
                ))}
            </div>

            {/* Mobile Carousel - Restored to original vertical style */}
            <div className="block md:hidden max-w-[340px] mx-auto">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    orientation="vertical"
                    plugins={[
                        Autoplay({
                            delay: 2000,
                            stopOnInteraction: false,
                        })
                    ]}
                    className="w-full h-80"
                >
                    <CarouselContent className="-mt-1 h-80">
                        {websites.map((site) => (
                            <CarouselItem key={site.id} className="pt-1 basis-1/3">
                                <div className="h-full px-4 py-1">
                                    <WebsiteCard site={site} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}
