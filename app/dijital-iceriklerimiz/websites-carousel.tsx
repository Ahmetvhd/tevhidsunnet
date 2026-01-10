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

export function WebsitesCarousel() {
    return (
        <div className="max-w-3xl mx-auto px-4 md:px-0">
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
                className="w-full h-[500px]"
            >
                <CarouselContent className="-mt-4 h-[500px]">
                    {websites.map((site) => (
                        <CarouselItem key={site.id} className="pt-4 basis-1/3">
                            <div className="h-full px-1">
                                <Link href={site.url} target="_blank" className="block h-full">
                                    <Card className="group relative overflow-hidden border-none shadow-sm bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full ring-1 ring-primary/20">
                                        <div className="absolute inset-0 z-0">
                                            <Image
                                                src={site.background}
                                                alt="Background"
                                                fill
                                                className={`object-cover ${site.containImage ? 'object-contain scale-75' : ''} opacity-[0.50] group-hover:opacity-[0.70] transition-all duration-300 grayscale`}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
                                        </div>
                                        <CardContent className="relative z-10 p-4 flex items-center gap-4 h-full">
                                            <div className={`relative w-14 h-14 rounded-lg overflow-hidden border border-primary/20 shadow-sm flex-shrink-0 group-hover:border-primary/50 transition-colors ${site.darkBgInfo ? 'bg-black p-2' : 'bg-white p-1'}`}>
                                                <Image src={site.image} alt={site.title} fill className="object-contain" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-base font-bold truncate text-primary transition-colors">{site.title}</h3>
                                                <p className="text-sm text-muted-foreground truncate font-mono opacity-80">{site.description}</p>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:rotate-[-45deg]">
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* Navigation Buttons for Vertical Carousel */}
                <div className="hidden md:block">
                    <CarouselPrevious className="-top-12 left-1/2 -translate-x-1/2 rotate-90" />
                    <CarouselNext className="-bottom-12 left-1/2 -translate-x-1/2 rotate-90" />
                </div>
            </Carousel>
        </div>
    );
}
