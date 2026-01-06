
import Link from "next/link";
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
                            <Link href="tel:+905357664545" className="block group">
                                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 h-full">
                                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Telefon</h3>
                                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">+90 535 766 45 45</p>
                                </Card>
                            </Link>

                            {/* WhatsApp */}
                            <Link href="https://wa.me/905357664545" target="_blank" className="block group">
                                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 h-full">
                                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                                        <MessageSquare className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">WhatsApp</h3>
                                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">+90 535 766 45 45</p>
                                </Card>
                            </Link>

                            {/* Mail */}
                            <Link href="mailto:info@tevhiddergisi.org" className="block group">
                                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 h-full">
                                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">E-Posta</h3>
                                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">info@tevhiddergisi.org</p>
                                </Card>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}
