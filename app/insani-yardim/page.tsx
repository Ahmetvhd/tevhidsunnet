
import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, ExternalLink, Droplets, GraduationCap, Sprout, Milk, Users, Play } from "lucide-react";
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
        image: "https://cdn.ecirkapisi.org.tr/upload/images/slider/sudan_acil_gorsel.webp"
    },
    {
        title: "Gazze Acil Bağış",
        description: "Gazze'deki saldırılar ve kısıtlamalar nedeniyle yardım stokları tükeniyor. Geriye kalanlar için şimdi harekete geçme zamanı.",
        icon: HeartHandshake,
        badge: "Acil",
        link: "https://www.ecirkapisi.org.tr/gazze-acil-bagis",
        category: "Acil Yardım",
        image: "https://cdn.ecirkapisi.org.tr/upload/images/kampanyalar/acil_yardimlar/gazze_acil_bagis_.webp"
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
        image: "https://cdn.ecirkapisi.org.tr/upload/images/Faaliyetler/Afrika%20Kalk%C4%B1nma%20Projesi/afrika_sut_kecisi.webp"
    },
    {
        title: "Eğitimde Eşitlik, Gelecekte Umut",
        description: "Ecir Kapısı Derneği, yetim ve hafız bursları, kırtasiye yardımları ve Kur'an-ı Kerim dağıtımlarıyla çocukların eğitimine destek oluyor, onların eşit imkânlarla geleceğe umutla bakmasını hedefliyor.",
        icon: GraduationCap,
        badge: "Eğitim",
        link: "https://www.ecirkapisi.org.tr/egitim-yardimlari",
        category: "Eğitim",
        image: "https://cdn.ecirkapisi.org.tr/upload/images/Faaliyetler/Yetim/Yeni/IMG_6620.JPG"
    },
    {
        title: "Hisseli Su Kuyusu",
        description: "Temiz su kaynaklarına erişim projesi. Afrika'da temiz suya erişimi olmayan bölgelerde su kuyuları açarak binlerce insanın hayatına dokunuyoruz.",
        icon: Droplets,
        badge: "Altyapı",
        link: "https://www.ecirkapisi.org.tr/hisseli-su-kuyusu-afrika",
        category: "Altyapı",
        image: "https://cdn.ecirkapisi.org.tr/upload/images/kampanyalar/kalici_eserler/afrika_su_kuyusu.jpg"
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

            {/* ECİR KAPISI TANITIM */}
            <section id="tanitim" className="py-20 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                            <HeartHandshake className="w-12 h-12 text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Ecir Kapısı Nedir?
                        </h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                            <p>
                                Ecir Kapısı Derneği olarak; insani yardım, kalkınma ve kriz destek çalışmalarımızı,
                                emanet bilinciyle ve insan onurunu merkeze alarak farklı coğrafyalarda sürdürüyoruz.
                            </p>
                            <p>
                                Ecir Kapısı, şeffaf, güvenilir ve sürdürülebilir insani yardım projeleriyle mazlum coğrafyalara umut taşıyor.
                                Zekat, sadaka ve infaklarınız emanet bilinciyle yerlerine ulaştırılır.
                            </p>
                            <p className="text-base italic">
                                &quot;Veren el, alan elden üstündür.&quot;
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <Button size="lg" asChild>
                                <Link href="https://www.ecirkapisi.org.tr/bagis" target="_blank">
                                    <HeartHandshake className="mr-2 h-4 w-4" />
                                    Şimdi Bağış Yap
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="https://www.ecirkapisi.org.tr/hakkimizda" target="_blank">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Hakkımızda
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="https://www.ecirkapisi.org.tr/" target="_blank">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Ecir Kapısı&apos;nı Ziyaret Et
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2025 FAALİYETLERİ */}
            <section id="faaliyetler" className="py-20 bg-muted/20">
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
                        <Card className="overflow-hidden mb-8 group">
                            <Link href="https://www.youtube.com/watch?v=pvWpwrASHXY&t=7s" target="_blank" className="block relative">
                                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                                    <Image
                                        src="https://cdn.ecirkapisi.org.tr/upload/images/neler_yaptik/2025deneleryaptik(1).webp"
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
            <section id="projeler" className="py-20 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projelerimiz</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Farklı coğrafyalarda yürüttüğümüz insani yardım, kalkınma ve eğitim projeleri
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {projects.map((project, index) => {
                            const IconComponent = project.icon;
                            return (
                                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                                    {/* Image Section */}
                                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        {/* Badge positioned on image */}
                                        <div className="absolute top-3 right-3">
                                            <Badge variant="secondary" className="text-xs backdrop-blur-sm bg-background/90">
                                                {project.badge}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6">
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                                                <IconComponent className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
                                        </div>

                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        <Button variant="outline" size="sm" asChild className="w-full">
                                            <Link href={project.link} target="_blank">
                                                <ExternalLink className="mr-2 h-3 w-3" />
                                                Detaylı Bilgi
                                            </Link>
                                        </Button>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
