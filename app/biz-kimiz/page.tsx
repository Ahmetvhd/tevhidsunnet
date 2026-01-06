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
            <section id="tarihcemiz" className="py-20 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tarihçemiz</h2>
                            <HistorySection />
                        </div>
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://tevhiddergisi.org/wp-content/uploads/2025/11/merkez_mescid.webp"
                                alt="Tarihçemiz"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* BİZ KİMİZ VE NE İSTİYORUZ KİTAPÇIĞI */}
            <section id="kitapcik" className="py-20 bg-muted/20">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <Card className="p-8 md:p-12 border-0 shadow-xl">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full">
                                        <BookOpen className="w-8 h-8 text-primary" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                        Biz Kimiz ve Ne İstiyoruz?
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        [Kitapçık tanıtımı - Kitapçığın içeriği, amacı ve önemi hakkında kısa açıklama]
                                    </p>
                                    <BookletViewer />
                                </div>
                                <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/biz-kimiz-kitapcik.webp"
                                        alt="Biz Kimiz ve Ne İstiyoruz"
                                        fill
                                        className="object-contain bg-muted/50"
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
