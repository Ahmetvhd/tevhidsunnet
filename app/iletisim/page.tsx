
import Image from "next/image";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cinzel } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "İletişim | Tevhid ve Sünnet",
    description: "Bizimle iletişime geçin.",
};

import { PageHero } from "@/components/page-hero";

export default function IletisimPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <PageHero
                badge="Bize Ulaşın"
                title="İletişim"
                description="Sorularınız, görüşleriniz ve destek talepleriniz için bize ulaşabilirsiniz"
            />

            {/* İLETİŞİM BİLGİLERİ */}
            <section id="iletisim-bilgileri" className="py-20 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
                            İletişim Bilgileri
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* GSM */}
                            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-semibold mb-2">Telefon</h3>
                                <p className="text-muted-foreground text-sm">+90 535 766 45 45</p>
                            </Card>

                            {/* WhatsApp */}
                            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                                    <MessageSquare className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-semibold mb-2">WhatsApp</h3>
                                <p className="text-muted-foreground text-sm">+90 535 766 45 45</p>
                            </Card>

                            {/* Mail */}
                            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-semibold mb-2">E-Posta</h3>
                                <p className="text-muted-foreground text-sm">info@tevhiddergisi.org</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
