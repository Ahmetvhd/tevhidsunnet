import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Globe, BookOpen, Layers, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cinzel } from "@/lib/fonts";
import { PageHero } from "@/components/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web Sitelerimiz | Tevhid ve Sünnet",
    description: "Tevhid ve Sünnet eksenli yayın yapan ilmi ve kurumsal web sitelerimiz.",
};

interface Website {
    id: string;
    title: string;
    url: string;
    description: string;
    icon: React.ReactNode;
    tags: string[];
}

export default function WebSitesPage() {
    const websites: Website[] = [
        {
            id: "tevhiddersleri",
            title: "tevhiddersleri.org",
            url: "https://tevhiddersleri.org",
            description: "Akideden fıkha, siyerden ahlaka kadar birçok alanda ilmi derslerin ve serilerin yer aldığı görsel/işitsel kütüphanemiz.",
            icon: <Layers className="w-8 h-8 text-primary" />,
            tags: ["İlmi Dersler", "Video Arşivi", "Eğitim"]
        },
        {
            id: "tevhiddergisi",
            title: "tevhiddergisi.org",
            url: "https://tevhiddergisi.org",
            description: "Aylık olarak neşredilen; gündeme, akideye ve maneviyata dair tahlillerin yer aldığı köklü dergicilik çalışmamız.",
            icon: <BookOpen className="w-8 h-8 text-primary" />,
            tags: ["Süreli Yayın", "Makale", "Analiz"]
        },
        {
            id: "tevhidmeali",
            title: "tevhidmeali.com",
            url: "https://tevhidmeali.com",
            description: "Kur'an-ı Kerim'in sahih bir usul ile tercüme edildiği, tefsir notlarıyla bezenmiş online meal projemiz.",
            icon: <Globe className="w-8 h-8 text-primary" />,
            tags: ["Kur'an Meali", "Tefsir", "Araştırma"]
        },
        {
            id: "halisbayancuk",
            title: "halisbayancuk.com",
            url: "https://halisbayancuk.com",
            description: "Ebu Hanzala Hoca'nın tüm yazılı ve sözlü çalışmalarının derlendiği, fıkhi sorulara cevap verilen resmi şahsi web sitesi.",
            icon: <User className="w-8 h-8 text-primary" />,
            tags: ["Şahsi Site", "Fetva", "Külliyat"]
        },
        {
            id: "kiblegah",
            title: "kiblegah.com",
            url: "https://kiblegah.com/",
            description: "İslami hassasiyetlerle hazırlanmış, çocuklara ve ailelere yönelik eğitici içeriklerin yer aldığı dijital kütüphanemiz.",
            icon: <Globe className="w-8 h-8 text-primary" />,
            tags: ["Çocuk & Aile", "Eğitici İçerik", "Dijital Kütüphane"]
        },
        {
            id: "ecirkapisi",
            title: "ecirkapisi.org.tr",
            url: "https://www.ecirkapisi.org.tr/",
            description: "İnsani yardım ve hayır faaliyetlerimizin dijital merkezi. İhtiyaç sahiplerine ulaşmak ve hayırda yarışmak için kurulan resmi yardım platformumuz.",
            icon: <Globe className="w-8 h-8 text-primary" />,
            tags: ["İnsani Yardım", "Hayır Faaliyetleri", "Resmi Kurum"]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <PageHero
                badge="Dijital Mecralarımız"
                title="Web Sitelerimiz"
                description="İlmi çalışmalarımızı, neşriyatımızı ve diğer tüm faaliyetlerimizi disiplinli bir şekilde kategorize ettiğimiz dijital platformlarımız."
            />

            {/* WEBSITES GRID */}
            <section className="py-20 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {websites.map((site) => (
                            <Card key={site.id} className="group relative overflow-hidden h-full border-0 bg-white shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] rounded-[14px] transition-all duration-500 hover:-translate-y-1">
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
                                        <Image
                                            src="/images/webag.png"
                                            alt="Background"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                    </div>
                                </div>

                                <div className="relative z-30 flex flex-col h-full">
                                    {/* Content Header with Enhanced Icon */}
                                    <div className="p-6 md:p-8 flex flex-row items-start gap-5">
                                        <div className="relative w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 group-hover:scale-110 rotate-3 group-hover:rotate-0 bg-black border-black/40 shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                                            <div className="relative w-full h-full rounded-[0.9rem] overflow-hidden p-1 bg-gradient-to-tr from-zinc-900 to-zinc-600">
                                                <div className={`relative w-full h-full rounded-[0.8rem] overflow-hidden border-2 border-black flex items-center justify-center bg-white ${site.id === 'kiblegah' || site.id === 'ecirkapisi' ? 'p-2' : ''}`}>
                                                    <Image
                                                        src={
                                                            site.id === 'tevhiddersleri' ? "/images/tevhiddersleri.jpg" :
                                                                site.id === 'tevhiddergisi' ? "/images/td.png" :
                                                                    site.id === 'tevhidmeali' ? "/images/tevhidmealiikon.webp" :
                                                                        site.id === 'kiblegah' ? "https://kiblegah.com/images/kiblegah_onlyLogo.webp" :
                                                                            site.id === 'ecirkapisi' ? "https://cdn.ecirkapisi.org.tr/upload/images/Logo/ecirkapisilogo.svg" :
                                                                                "/images/halisbayancukikon.png"
                                                        }
                                                        alt={site.title}
                                                        fill
                                                        className={site.id === 'kiblegah' || site.id === 'ecirkapisi' ? "object-contain" : "object-cover"}
                                                        unoptimized={site.id === 'kiblegah' || site.id === 'ecirkapisi'}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black">
                                                {site.title}
                                            </h2>
                                            <div className="flex flex-wrap gap-2 pt-1">
                                                {site.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description Area */}
                                    <div className="px-6 md:px-8 flex-1">
                                        <p className="text-zinc-700 leading-relaxed text-base font-normal">
                                            {site.description}
                                        </p>
                                    </div>

                                    {/* Action Area */}
                                    <div className="p-6 md:p-8 mt-auto">
                                        <div className="pt-6 border-t border-zinc-100 flex flex-wrap gap-4">
                                            <Button className="w-full gap-2 bg-black text-white hover:bg-zinc-800 transition-all rounded-full h-12 font-semibold shadow-xl border border-black/10" asChild>
                                                <Link href={site.url} target="_blank">
                                                    Ziyaret Et <ExternalLink className="w-4 h-4 text-white" />
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

            {/* CTA / INFO */}
            <section className="py-16 bg-muted/20 border-t">
                <div className="container px-4 md:px-6 text-center">
                    <div className="max-w-2xl mx-auto space-y-4">
                        <h3 className="text-2xl font-bold">Tek Bir Ağ, Ortak Gaye</h3>
                        <p className="text-muted-foreground">
                            Tüm web sitelerimiz, Tevhid ve Sünnet anlayışını sahih kaynaklarla topluma ulaştırmak gayesiyle birbirini tamamlayan bir bütünün parçalarıdır.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
