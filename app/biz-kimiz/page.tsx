import Image from "next/image";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cinzel } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Biz Kimiz | Tevhid ve Sünnet",
    description: "Tevhid ve Sünnet platformu hakkında bilgi edinin.",
};

import { HistorySection } from "./history-section";
import { BookletViewer } from "./booklet-viewer";

import { PageHero } from "@/components/page-hero";

export default function BizKimizPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <PageHero
                badge="Hakkımızda"
                title="Biz Kimiz"
                description="Tevhid ve Sünnet ışığında sahih bir duruş için..."
            />

            {/* TARİHÇEMİZ */}
            <section id="tarihcemiz" className="py-16 md:py-20 bg-background overflow-hidden">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
                        <div className="space-y-6 animate-fade-in-left">
                            <div className="inline-block">
                                <span className="text-primary font-bold tracking-wider uppercase text-sm border-b-2 border-primary/30 pb-1">Kuruluş ve Gayemiz</span>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Tarihçemiz</h2>
                            <div className="prose prose-neutral dark:prose-invert text-sm md:text-base">
                                <HistorySection />
                            </div>
                        </div>
                        <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl group animate-fade-in-right touch-manipulation">
                            <Image
                                src="/images/merkez_mescid.webp"
                                alt="Tarihçemiz"
                                fill
                                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* BİZ KİMİZ VE NE İSTİYORUZ KİTAPÇIĞI */}
            <section id="kitapcik" className="py-16 md:py-20 bg-muted/20">
                <div className="container px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        <Card className="group p-6 md:p-12 border border-primary/10 bg-card/50 hover:bg-card hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 active:scale-[0.99] transition-all duration-500 overflow-hidden relative touch-manipulation">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-primary/10 transition-all duration-700" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -ml-32 -mb-32 group-hover:bg-amber-500/10 transition-all duration-700" />

                            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
                                <div className="space-y-6 md:space-y-8">
                                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                                        <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                                    </div>
                                    <div className="space-y-3 md:space-y-4">
                                        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                                            Biz Kimiz ve <span className="text-primary">Ne İstiyoruz?</span>
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                            Tevhid ve Sünnet davetinin metodunu, hedeflerini ve ilkelerini detaylıca anlatan temel kaynağımız.
                                        </p>
                                    </div>
                                    <div className="hidden md:flex gap-4">
                                        <BookletViewer />
                                    </div>
                                </div>
                                <div className="relative h-[400px] md:h-[450px] w-full flex items-center justify-center py-4">
                                    {/* Physical-style Frame */}
                                    <div className="relative p-2 bg-background rounded-xl shadow-2xl border border-muted ring-1 ring-black/5 group-hover:scale-[1.02] transition-transform duration-500">
                                        {/* Inner Border/Matte */}
                                        <div className="relative rounded-lg overflow-hidden border-2 border-primary/10 bg-muted/20">
                                            <div className="relative w-[260px] md:w-[300px] h-[350px] md:h-[400px]"> {/* Fixed aspect ratio container for the frame content */}
                                                <Image
                                                    src="/images/biz-kimiz-kitapcik.webp"
                                                    alt="Biz Kimiz ve Ne İstiyoruz"
                                                    fill
                                                    className="object-contain p-2" // Added padding inside the frame so the book doesn't touch edges
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:hidden w-full mt-6">
                                    <BookletViewer />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
