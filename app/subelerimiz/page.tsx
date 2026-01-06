
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cinzel } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Şubelerimiz | Tevhid ve Sünnet",
    description: "Türkiye genelindeki şubelerimiz ve iletişim bilgileri.",
};

import { PageHero } from "@/components/page-hero";

export default function SubelerimizPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <PageHero
                badge="Türkiye Geneli"
                title="Şubelerimiz"
                description="Türkiye'nin farklı şehirlerinde hizmet veren şubelerimiz"
            />

            {/* ŞUBELERİMİZ */}
            <section id="subelerimiz" className="py-20 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        {/* TÜRKİYE HARİTASI */}
                        <div className="mb-12">
                            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
                                <span className="text-muted-foreground text-sm">[Türkiye Haritası - Şube Konumları]</span>
                            </div>
                        </div>

                        {/* ŞUBE KARTLARI */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { sehir: "İstanbul", adres: "Fatih, İstanbul", aciklama: "Merkez şube" },
                                { sehir: "Ankara", adres: "Çankaya, Ankara", aciklama: "Ankara şubesi" },
                                { sehir: "İzmir", adres: "Konak, İzmir", aciklama: "İzmir şubesi" },
                                { sehir: "Bursa", adres: "Osmangazi, Bursa", aciklama: "Bursa şubesi" },
                                { sehir: "Antalya", adres: "Muratpaşa, Antalya", aciklama: "Antalya şubesi" },
                                { sehir: "Konya", adres: "Selçuklu, Konya", aciklama: "Konya şubesi" }
                            ].map((sube, index) => (
                                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="relative h-32 w-full bg-muted flex items-center justify-center">
                                        <MapPin className="w-8 h-8 text-muted-foreground" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-xl mb-2">{sube.sehir}</h3>
                                        <p className="text-sm text-muted-foreground mb-1">{sube.adres}</p>
                                        <p className="text-xs text-muted-foreground">{sube.aciklama}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
