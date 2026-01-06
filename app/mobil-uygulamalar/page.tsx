
import Image from "next/image";
import Link from "next/link";
import { Download, Smartphone, Book, Gamepad2, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cinzel } from "@/lib/fonts";
import { PageHero } from "@/components/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mobil Uygulamalar | Tevhid ve Sünnet",
    description: "İlmi kaynaklarınıza her an ulaşabileceğiniz mobil uygulamalarımız.",
};

interface MobileApp {
    id: string;
    title: string;
    developer: string;
    description: string;
    features: string[];
    icon: React.ReactNode;
    androidLink: string;
    iosLink: string;
}

export default function MobileAppsPage() {
    const apps: MobileApp[] = [
        {
            id: "Tevhid-Meali",
            title: "Tevhid Meali",
            developer: "Kur'an Araştırmaları",
            description: "Kur'an-ı Kerim'in sahih bir usul ile tercüme edildiği, ayetlerin tefsir notlarıyla zenginleştirildiği kapsamlı meal uygulaması. Arapça metin, meal karşılaştırma ve gelişmiş arama özellikleri ile Kur'an'ı anlamaya yardımcı bir kaynak.",
            features: ["Gelişmiş Arama", "Tefsir Notları", "Gece Modu"],
            icon: <Book className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
            androidLink: "https://play.google.com/store/apps/details?id=com.tevhidmeali&utm_source=emea_Med",
            iosLink: "https://apps.apple.com/tr/app/tevhid-meali/id1445886830?l=tr"
        },
        {
            id: "tevhid-sunnet",
            title: "Anlat Bakalım",
            developer: "Eğitim Birimi",
            description: "İslami kavramların öğrenilmesini ve pekiştirilmesini amaçlayan, aile ve arkadaş ortamlarında ilmi müzakerelere zemin hazırlayan eğitici bir uygulama. Vakti hayırlı işlerle değerlendirmek isteyenler için faydalı bir alternatif.",
            features: ["Kavram Öğretimi", "İlmi Müzakere", "Sade Arayüz"],
            icon: <Gamepad2 className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
            androidLink: "https://play.google.com/store/apps/details?id=com.tevhidsunnet.anlatbakalim&utm_source=emea_Med",
            iosLink: "https://apps.apple.com/tr/app/anlat-bakal%C4%B1m/id6743703504?l=tr"
        },
        {
            id: "kiblegah",
            title: "Kıblegâh",
            developer: "Tevhid Dergisi",
            description: "Tevhid Dergisi'nin güncel ve arşiv sayılarına erişim sağlayan dijital okuma platformu. Makaleleri kategorize edilmiş şekilde okuyabilir, favorilerinize ekleyebilir ve ilmi birikimi yanınızda taşıyabilirsiniz.",
            features: ["Sahih sünnetler", "Dualar ve Zikirler", "Çevrimdışı Erişim"],
            icon: <FileText className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
            androidLink: "https://play.google.com/store/apps/details?id=com.tevhiddergisi.kiblegah&utm_source=emea_Med",
            iosLink: "https://apps.apple.com/tr/app/k%C4%B1bleg%C3%A2h/id1602985672?l=tr"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <PageHero
                badge="Dijital Kütüphane"
                title="Mobil Uygulamalarımız"
                description="İlmi çalışmalarımıza, kaynak eserlerimize ve güncel yayınlarımıza mobil cihazlarınızdan kolayca erişebilmeniz için geliştirdiğimiz uygulamalar."
            />

            {/* APPS LIST */}
            <section className="py-20 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                        {apps.map((app) => (
                            <Card key={app.id} className="group relative overflow-hidden border-0 bg-white shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] rounded-[14px] transition-all duration-500 hover:-translate-y-1">
                                {/* Rotating Black Glow Effect */}
                                <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
                                    <div className="absolute inset-[-50%] animate-border-spin" style={{ animationDuration: '6s' }}>
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-black/40 blur-[40px]" />
                                    </div>
                                </div>

                                {/* Glass Layer */}
                                <div className="absolute inset-[5px] z-[2] bg-white/95 backdrop-blur-[24px] rounded-[10px] overflow-hidden outline outline-2 outline-white flex flex-col">
                                    {/* Background Image (Whitish/Transparent) */}
                                    <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-25 transition-opacity duration-700 mix-blend-multiply">
                                        {app.id === 'tevhid-sunnet' ? (
                                            <div
                                                className="absolute inset-0 opacity-[0.2] rotate-[-15deg] scale-150"
                                                style={{
                                                    backgroundImage: `url('/images/anlatbakalımikon.webp')`,
                                                    backgroundRepeat: 'repeat',
                                                    backgroundSize: '80px 80px'
                                                }}
                                            />
                                        ) : (
                                            <Image
                                                src={
                                                    app.id === 'Tevhid-Meali' ? "/images/app-showcase.png" :
                                                        "https://i.ytimg.com/vi/yzVrTmPZ5i0/hqdefault.jpg"
                                                }
                                                alt="Background"
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                                unoptimized={app.id === 'kiblegah'}
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="relative z-30 flex flex-col md:flex-row h-full">
                                    {/* App Icon Area */}
                                    <div className="p-8 md:w-56 flex items-center justify-center relative">
                                        <div className="relative w-28 h-28 rounded-[2rem] flex items-center justify-center border-2 transition-all duration-500 group-hover:scale-110 rotate-3 group-hover:rotate-0 bg-black border-black/40 shadow-[0_0_30px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_50px_rgba(0,0,0,0.3)]">
                                            <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden p-1 bg-gradient-to-tr from-zinc-900 to-zinc-600">
                                                <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden border-2 border-black flex items-center justify-center">
                                                    <Image
                                                        src={
                                                            app.id === 'Tevhid-Meali' ? "/images/tevhidmealiikon.webp" :
                                                                app.id === 'tevhid-sunnet' ? "/images/anlatbakalımikon.webp" :
                                                                    "/images/kıblegahikon.webp"
                                                        }
                                                        alt={app.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-between gap-6">
                                        <div className="space-y-4">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
                                                    {app.title}
                                                </h2>
                                                <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-sm shadow-lg bg-black text-white">
                                                    {app.developer}
                                                </span>
                                            </div>

                                            <p className="text-zinc-700 leading-relaxed text-base font-normal max-w-2xl">
                                                {app.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {app.features.map(feature => (
                                                    <span key={feature} className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-zinc-100 flex flex-wrap gap-4">
                                            <Button className="gap-2 bg-black text-white hover:bg-zinc-800 transition-all rounded-full px-6 font-semibold shadow-xl h-11" asChild>
                                                <Link href={app.androidLink} target="_blank">
                                                    <Download className="w-4 h-4" />
                                                    Google Play
                                                </Link>
                                            </Button>
                                            <Button className="gap-2 bg-white border-2 border-black/10 text-black hover:bg-zinc-50 transition-all rounded-full px-6 font-semibold shadow-sm h-11" asChild>
                                                <Link href={app.iosLink} target="_blank">
                                                    <Smartphone className="w-4 h-4" />
                                                    App Store
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}

                    </div>
                </div>
            </section>

            {/* FOOTNOTE */}
            <section className="py-12 bg-muted/20 border-t">
                <div className="container px-4 md:px-6 text-center">
                    <p className="text-muted-foreground text-sm max-w-xl mx-auto">
                        * Uygulamalarımızı ücretsiz olarak indirebilir, reklam engeli olmadan güvenle kullanabilirsiniz. Amacımız ticari bir kazanç değil, sahih bilginin ulaştırılmasıdır.
                    </p>
                </div>
            </section>
        </div>
    );
}
