
import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, ExternalLink, Droplets, GraduationCap, Sprout, Milk, Users, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cinzel } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "İnsani Yardım | Tevhid ve Sünnet",
    description: "Ecir Kapısı Derneği ile insani yardım, kalkınma ve kriz destek çalışmalarımız. Emanet bilinciyle ve insan onurunu merkeze alarak farklı coğrafyalarda yardım projelerimiz.",
};

import { PageHero } from "@/components/page-hero";

const projects = [
    {
        title: "Sudan Acil Yardım",
        description: "Sudan'da aylardır süren çatışmalar binlerce cana mal oldu, onbinlerce insan yerinden edildi. Açlık, susuzluk ve hastalık her geçen gün artıyor. Kadınlar, çocuklar ve yaşlılar temel ihtiyaçlardan yoksun, hayatta kalma mücadelesi veriyor.",
        icon: Users,
        badge: "Acil",
        link: "https://www.ecirkapisi.org.tr/sudan-acil-yardim",
        category: "Acil Yardım",
        image: "/images/sudan_acil_yardim.webp"
    },
    {
        title: "Gazze Acil Bağış",
        description: "Gazze'deki saldırılar ve kısıtlamalar nedeniyle yardım stokları tükeniyor. Geriye kalanlar için şimdi harekete geçme zamanı.",
        icon: HeartHandshake,
        badge: "Acil",
        link: "https://www.ecirkapisi.org.tr/gazze-acil-bagis",
        category: "Acil Yardım",
        image: "/images/gazze_acil_bagis.webp"
    },
    {
        title: "Yemen Kalkınma Projesi - Seracılık",
        description: "Bu bir yardım değil; sürdürülebilir geçim projesidir. Hadramout'ta kurulacak 4 modern sera, düşük gelirli çiftçilerin toprağa yeniden tutunmasını sağlayacak. İklime dayanıklı yapısıyla yıl boyu üretim ve sürekli gelir imkânı sunacak.",
        icon: Sprout,
        badge: "Kalkınma",
        link: "https://www.ecirkapisi.org.tr/yemen-kalkinma-projesi-seracilik",
        category: "Kalkınma",
        image: "https://cdn.ecirkapisi.org.tr/upload/images/projeler/yemen_seracilik/yemen_seracilik005.webp"
    },
    {
        title: "Afrika Süt Keçisi Projesi",
        description: "Proje, sadece geçim kaynağı değil; kırsal bölgelere umut, fırsat ve sürdürülebilir yaşam sunuyor. Afrikalı ailelere süt keçisi desteği ile hem beslenme hem de ekonomik bağımsızlık sağlanıyor.",
        icon: Milk,
        badge: "Kalkınma",
        link: "https://www.ecirkapisi.org.tr/afrika-sut-kecisi-projesi",
        category: "Kalkınma",
        image: "/images/afrika_sut_kecisi.webp"
    },
    {
        title: "Eğitimde Eşitlik, Gelecekte Umut",
        description: "Ecir Kapısı Derneği, yetim ve hafız bursları, kırtasiye yardımları ve Kur'an-ı Kerim dağıtımlarıyla çocukların eğitimine destek oluyor, onunların eşit imkânlarla geleceğe umutla bakmasını hedefliyor.",
        icon: GraduationCap,
        badge: "Eğitim",
        link: "https://www.ecirkapisi.org.tr/egitim-yardimlari",
        category: "Eğitim",
        image: "/images/egitim-yardimlari.jpeg"
    },
    {
        title: "Hisseli Su Kuyusu",
        description: "Temiz su kaynaklarına erişim projesi. Afrika'da temiz suya erişimi olmayan bölgelerde su kuyuları açarak binlerce insanın hayatına dokunuyoruz.",
        icon: Droplets,
        badge: "Altyapı",
        link: "https://www.ecirkapisi.org.tr/hisseli-su-kuyusu-afrika",
        category: "Altyapı",
        image: "/images/su_kuyusu.webp"
    },
];

export default function InsaniYardimPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <PageHero
                badge="İnsani Yardım"
                title="Ecir Kapısı"
                description="İyiliğe Açılan Kapı"
            />

            {/* ECİR KAPISI TANITIM - AYDINLIK BOX LAYOUT */}
            <section id="tanitim" className="py-24 bg-background">
                <div className="container px-4 md:px-6">
                    {/* Sinematik Çerçeve */}
                    <div className="relative w-full max-w-[1400px] mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-border/40 isolate bg-background">

                        {/* Arka Plan Görseli - Dekoratif ve Bulanık */}
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <Image
                                src="/images/ecirkapısı.jpeg"
                                alt=""
                                fill
                                className="object-cover blur-3xl opacity-20 scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/80 to-background" />
                        </div>

                        {/* İçerik - 2 Sütunlu Yapı */}
                        <div className="relative z-10 px-6 py-12 md:px-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
                            {/* Sol Taraf: Metin İçeriği */}
                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 max-w-2xl">
                                {/* İkon */}
                                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl ring-1 ring-primary/20 backdrop-blur-md shadow-sm animate-fade-in-up">
                                    <HeartHandshake className="w-10 h-10 text-primary" />
                                </div>

                                {/* Başlık */}
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground drop-shadow-sm animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                                    Ecir Kapısı Nedir?
                                </h2>

                                {/* Açıklama Metni */}
                                <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg font-light animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                                    <p className="font-normal text-foreground/80">
                                        Ecir Kapısı Derneği olarak; insani yardım, kalkınma ve kriz destek çalışmalarımızı,
                                        emanet bilinciyle ve insan onurunu merkeze alarak farklı coğrafyalarda sürdürüyoruz.
                                    </p>
                                    <p>
                                        Ecir Kapısı, şeffaf, güvenilir ve sürdürülebilir insani yardım projeleriyle mazlum coğrafyalara umut taşıyor.
                                        Zekat, sadaka ve infaklarınız emanet bilinciyle yerlerine ulaştırılır.
                                    </p>
                                    <div className="pt-2">
                                        <p className="text-lg md:text-xl italic font-serif text-primary/80 border-t border-primary/10 pt-4 inline-block">
                                            &quot;Veren el, alan elden üstündür.&quot;
                                        </p>
                                    </div>
                                </div>

                                {/* Butonlar */}
                                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                                    <Button size="lg" className="h-12 px-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground border-none shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl" asChild>
                                        <Link href="https://www.ecirkapisi.org.tr/bagis" target="_blank">
                                            <HeartHandshake className="mr-2 h-4 w-4" />
                                            Bağış Yap
                                        </Link>
                                    </Button>
                                    <Button size="lg" variant="outline" className="h-12 px-6 text-base border-primary/20 bg-background/50 text-foreground hover:bg-primary/5 hover:border-primary/40 backdrop-blur-sm transition-all duration-300 rounded-xl" asChild>
                                        <Link href="https://www.ecirkapisi.org.tr/hakkimizda" target="_blank">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Hakkımızda
                                        </Link>
                                    </Button>
                                    <Button size="lg" variant="outline" className="h-12 px-6 text-base border-primary/20 bg-background/50 text-foreground hover:bg-primary/5 hover:border-primary/40 backdrop-blur-sm transition-all duration-300 rounded-xl" asChild>
                                        <Link href="https://www.ecirkapisi.org.tr/" target="_blank">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Websitesi
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Sağ Taraf: Görsel / Bilgi Grafiği */}
                            <div className="relative group animate-fade-in-right hidden lg:block" style={{ animationDelay: "400ms" }}>
                                <div className="relative aspect-square w-full max-w-[500px] mx-auto rounded-3xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] border border-border/50 bg-white">
                                    <Image
                                        src="/images/ecirkapısı.jpeg"
                                        alt="Ecir Kapısı Bilgi Grafiği"
                                        fill
                                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                {/* Dekoratif Elementler */}
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
                            </div>

                            {/* Mobil için Görsel (Sadece Mobilde Aşağıda Gözükür) */}
                            <div className="lg:hidden w-full max-w-[400px] mx-auto mt-8 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-white">
                                    <Image
                                        src="/images/ecirkapısı.jpeg"
                                        alt="Ecir Kapısı Bilgi Grafiği"
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2025 FAALİYETLERİ */}
            <section id="faaliyetler" className="py-20 bg-primary/5">
                <div className="container px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12 space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">2025&apos;de Neler Yaptık?</h2>
                            <p className="text-muted-foreground max-w-3xl mx-auto">
                                2025 yılı boyunca Ecir Kapısı Derneği olarak; insani yardım, kalkınma ve kriz destek çalışmalarımızı,
                                emanet bilinciyle ve insan onurunu merkeze alarak farklı coğrafyalarda sürdürdük.
                            </p>
                        </div>

                        {/* Featured Image with Video Link */}
                        <Card className="overflow-hidden mb-8 group rounded-2xl p-0">
                            <Link href="https://www.youtube.com/watch?v=pvWpwrASHXY&t=7s" target="_blank" className="block relative">
                                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                                    <Image
                                        src="/images/2025deneleryaptik.webp"
                                        alt="2025'te Neler Yaptık?"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 1200px) 100vw, 1200px"
                                        priority
                                    />
                                    {/* Dark overlay on hover */}
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

                                    {/* Play button overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-primary/90 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 rounded-full p-6 shadow-2xl">
                                            <Play className="w-12 h-12 text-primary-foreground fill-current" />
                                        </div>
                                    </div>

                                    {/* Badge */}
                                    <div className="absolute top-4 right-4">
                                        <Badge className="text-xs bg-primary text-primary-foreground border-none font-medium shadow-sm">
                                            Video İzle
                                        </Badge>
                                    </div>
                                </div>
                            </Link>
                        </Card>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" asChild>
                                <Link href="https://www.youtube.com/watch?v=pvWpwrASHXY&t=7s" target="_blank">
                                    <Play className="mr-2 h-4 w-4" />
                                    Videoyu İzle
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="https://www.ecirkapisi.org.tr/2025de-neler-yaptik" target="_blank">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Detaylı Bilgi
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="https://www.ecirkapisi.org.tr/bagis" target="_blank">
                                    <HeartHandshake className="mr-2 h-4 w-4" />
                                    Bağış Yap
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ECİR KAPISI PROJELER */}
            <section id="projeler" className="py-32 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-20 space-y-4">
                        <Badge variant="outline" className="px-4 py-1 text-xs uppercase tracking-widest border-primary/20 text-primary">Projelerimiz</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Kapsamlı Yardım Faaliyetleri</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
                            Farklı coğrafyalarda yürüttüğümüz insani yardım, kalkınma ve eğitim projeleri ile dertlere derman olmaya çalışıyoruz.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 max-w-7xl mx-auto">
                        {projects.map((project, index) => {
                            const IconComponent = project.icon;
                            return (
                                <div key={index} className="group/card flex flex-col h-full animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                                    {/* Image Section - Standard Rounded Corner */}
                                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg group-hover/card:shadow-xl transition-all duration-500 mb-6 bg-muted">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover/card:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        {/* Premium Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-75 transition-opacity duration-500" />

                                        {/* Badge Positioned Top Right */}
                                        <div className="absolute top-4 right-4">
                                            <Badge className="px-3 py-1 text-xs bg-primary/95 backdrop-blur-md text-primary-foreground border-none font-semibold shadow-lg">
                                                {project.badge}
                                            </Badge>
                                        </div>

                                        {/* Category Info Bottom Left */}
                                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                            <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-md rounded-xl ring-1 ring-white/20">
                                                <IconComponent className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-white text-[10px] font-bold tracking-widest uppercase">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Section - Airy & Minimal */}
                                    <div className="px-1 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold leading-tight mb-3 text-foreground group-hover/card:text-primary transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 font-light">
                                            {project.description}
                                        </p>

                                        <div className="mt-auto pt-3 border-t border-border/40">
                                            <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent font-bold text-sm group/btn transition-all" asChild>
                                                <Link href={project.link} target="_blank">
                                                    Detaylı Bilgi
                                                    <ArrowRight className="ml-1.5 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
