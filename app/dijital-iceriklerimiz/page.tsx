
import Image from "next/image";
import Link from "next/link";
import { Youtube, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cinzel } from "@/lib/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dijital İçeriklerimiz | Tevhid ve Sünnet",
    description: "YouTube kanallarımız, sosyal medya hesaplarımız ve dijital platformlarımız.",
};

import { PageHero } from "@/components/page-hero";

export default function DijitalIceriklerimizPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <PageHero
                badge="Dijital Platformlarımız"
                title="Dijital İçeriklerimiz"
                description="Hakkı beyan etmek, ilmi yaymak ve şüpheleri gidermek gayesiyle faaliyet gösteren dijital platformlarımız."
            />

            {/* YOUTUBE KANALLARIMIZ */}
            <section id="youtube-kanallarimiz" className="py-20 md:py-32 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">YouTube Kanallarımız</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Hakkı beyan etmek, ilmi yaymak ve şüpheleri gidermek gayesiyle faaliyet gösteren YouTube kanallarımız.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto space-y-12">
                        {/* Tevhid Dersleri */}
                        {/* Tevhid Dersleri */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 pb-4 border-b">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-border shadow-lg">
                                    <Image
                                        src="/images/tevhiddersleri.jpg"
                                        alt="Tevhid Dersleri"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Tevhid Dersleri</h3>
                                    <p className="text-sm text-muted-foreground">İlmi Dersler ve Eğitim Serileri</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {/* Tevhid Dersleri - Türkçe */}
                                <Card className="group relative h-full overflow-hidden border-none shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-card">
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="/images/tevhiddersleriarkaplan.jpg"
                                            alt="Background"
                                            fill
                                            className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                    </div>

                                    <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                                        <div className="relative mb-5 mt-2">
                                            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/40 transition-all duration-300">
                                                <Image
                                                    src="/images/tevhiddersleri.jpg"
                                                    alt="Tevhid Dersleri"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <Badge className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs bg-primary text-primary-foreground border-2 border-background shadow-sm">
                                                Türkçe
                                            </Badge>
                                        </div>

                                        <div className="space-y-3 mb-6 flex-grow flex flex-col justify-center w-full">
                                            <div className="flex items-center justify-center gap-2">
                                                <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    Tevhid Dersleri
                                                </h3>
                                                <Youtube className="w-5 h-5 text-red-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                Tevhid ve Sünnet eksenli ilmi derslerin ve eğitim serilerinin yayınlandığı resmi kanalımız.
                                            </p>
                                        </div>

                                        <Button className="w-full group/btn relative overflow-hidden bg-background border-2 border-primary/20 hover:bg-primary hover:border-primary" asChild>
                                            <Link href="https://www.youtube.com/@tevhiddersleri_" target="_blank">
                                                <span className="relative z-10 flex items-center text-primary group-hover/btn:text-primary-foreground transition-colors duration-300">
                                                    Kanala Git
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </span>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Dersên Tewhîdê - Kürtçe */}
                                <Card className="group relative h-full overflow-hidden border-none shadow-md hover:shadow-2xl hover:-translate-y-1 active:scale-[0.99] transition-all duration-500 bg-card touch-manipulation">
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="/images/tevhiddersleriarkaplan.jpg"
                                            alt="Background"
                                            fill
                                            className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                    </div>

                                    <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                                        <div className="relative mb-5 mt-2">
                                            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/40 transition-all duration-300">
                                                <Image
                                                    src="/images/tevhiddersleri.jpg"
                                                    alt="Dersên Tewhîdê"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <Badge className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs bg-primary text-primary-foreground border-2 border-background shadow-sm">
                                                Kürtçe
                                            </Badge>
                                        </div>

                                        <div className="space-y-3 mb-6 flex-grow flex flex-col justify-center w-full">
                                            <div className="flex items-center justify-center gap-2">
                                                <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    Dersên Tewhîdê
                                                </h3>
                                                <Youtube className="w-5 h-5 text-red-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                Wan û dersên ilmi bi zimanê Kurdî li ser tewhîd û sunnetê.
                                            </p>
                                        </div>

                                        <Button className="w-full group/btn relative overflow-hidden bg-background border-2 border-primary/20 hover:bg-primary hover:border-primary active:scale-95 transition-all" asChild>
                                            <Link href="https://www.youtube.com/@dersentewhide" target="_blank">
                                                <span className="relative z-10 flex items-center text-primary group-hover/btn:text-primary-foreground transition-colors duration-300">
                                                    Kanala Git
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </span>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Monotheism - İngilizce */}
                                <Card className="group relative h-full overflow-hidden border-none shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-card">
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="https://yt3.googleusercontent.com/GBTT0aHQRnxnQlFwmN9cJ9Pq2CD6qZkN9gYyNYtFeW6bMzs6h0VmFo26jCwGw5dwrCSiTUbC=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Background"
                                            fill
                                            className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                    </div>

                                    <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                                        <div className="relative mb-5 mt-2">
                                            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/40 transition-all duration-300">
                                                <Image
                                                    src="https://yt3.googleusercontent.com/P2UC8rcCzoYMREmxms2QRN_E3JLCYGarfU6rbqQe0s2QT521WrjsoIioj_KnW6hLOuCTaa_AzKc=s160-c-k-c0x00ffffff-no-rj"
                                                    alt="Monotheism"
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                            <Badge className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs bg-primary text-primary-foreground border-2 border-background shadow-sm">
                                                İngilizce
                                            </Badge>
                                        </div>

                                        <div className="space-y-3 mb-6 flex-grow flex flex-col justify-center w-full">
                                            <div className="flex items-center justify-center gap-2">
                                                <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    Monotheism
                                                </h3>
                                                <Youtube className="w-5 h-5 text-red-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                Islamic lectures and educational series in English based on Tawheed and Sunnah.
                                            </p>
                                        </div>

                                        <Button className="w-full group/btn relative overflow-hidden bg-background border-2 border-primary/20 hover:bg-primary hover:border-primary" asChild>
                                            <Link href="https://www.youtube.com/@Monotheismeng" target="_blank">
                                                <span className="relative z-10 flex items-center text-primary group-hover/btn:text-primary-foreground transition-colors duration-300">
                                                    Kanala Git
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </span>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Monothéisme - Fransızca */}
                                <Card className="group relative h-full overflow-hidden border-none shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-card">
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="https://yt3.googleusercontent.com/j5VzZMA-KWtKiHXFuQwnNA2zhisDFHsoVJG5UauVb2kXrDccH9-sYJ3Oa8qtb-AMZCHpWf5MZg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Background"
                                            fill
                                            className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                    </div>

                                    <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                                        <div className="relative mb-5 mt-2">
                                            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/40 transition-all duration-300">
                                                <Image
                                                    src="https://yt3.googleusercontent.com/ihdBm4IRQMSBqJummTvSLQDZTK1IR60bYM5XYUTYYn7fTh_igRI6VH57G0Pmt6bYI8bmmkI_=s160-c-k-c0x00ffffff-no-rj"
                                                    alt="Monothéisme"
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                            <Badge className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs bg-primary text-primary-foreground border-2 border-background shadow-sm">
                                                Fransızca
                                            </Badge>
                                        </div>

                                        <div className="space-y-3 mb-6 flex-grow flex flex-col justify-center w-full">
                                            <div className="flex items-center justify-center gap-2">
                                                <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    Monothéisme
                                                </h3>
                                                <Youtube className="w-5 h-5 text-red-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                Conférences islamiques et séries éducatives en français basées sur le Tawhid et la Sunna.
                                            </p>
                                        </div>

                                        <Button className="w-full group/btn relative overflow-hidden bg-background border-2 border-primary/20 hover:bg-primary hover:border-primary" asChild>
                                            <Link href="https://www.youtube.com/@monotheismefr" target="_blank">
                                                <span className="relative z-10 flex items-center text-primary group-hover/btn:text-primary-foreground transition-colors duration-300">
                                                    Kanala Git
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </span>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Monotheismus - Almanca */}
                                <Card className="group relative h-full overflow-hidden border-none shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-card">
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="https://yt3.googleusercontent.com/y6pSLyCG3IJTbcfhAZMs8uE8d4BR2ebpdIlyRzhNwaUbI2b39HEV3lwDZwFrIKtWeTjvrok8CA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Background"
                                            fill
                                            className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                    </div>

                                    <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                                        <div className="relative mb-5 mt-2">
                                            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/40 transition-all duration-300">
                                                <Image
                                                    src="https://yt3.googleusercontent.com/UJL_P2mXgCfBTSJd7A__W_7eJVKSIOGa8DAyrjEjMwAredIHVvNS2fvSlYTx71G03sukH3zzNg=s160-c-k-c0x00ffffff-no-rj"
                                                    alt="Monotheismus"
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                            <Badge className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs bg-primary text-primary-foreground border-2 border-background shadow-sm">
                                                Almanca
                                            </Badge>
                                        </div>

                                        <div className="space-y-3 mb-6 flex-grow flex flex-col justify-center w-full">
                                            <div className="flex items-center justify-center gap-2">
                                                <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    Monotheismus
                                                </h3>
                                                <Youtube className="w-5 h-5 text-red-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                Islamische Vorträge und Bildungsreihen auf Deutsch basierend auf Tawhid und Sunnah.
                                            </p>
                                        </div>

                                        <Button className="w-full group/btn relative overflow-hidden bg-background border-2 border-primary/20 hover:bg-primary hover:border-primary" asChild>
                                            <Link href="https://www.youtube.com/@monotheismusde" target="_blank">
                                                <span className="relative z-10 flex items-center text-primary group-hover/btn:text-primary-foreground transition-colors duration-300">
                                                    Kanala Git
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </span>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Halis Bayancuk Hoca */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 pb-4 border-b">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-border shadow-lg">
                                    <Image
                                        src="/images/halisbayancuk.jpg"
                                        alt="Halis Bayancuk Hoca"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Halis Bayancuk Hoca</h3>
                                    <p className="text-sm text-muted-foreground">Hutbeler ve Güncel Tahliller</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <Card className="group relative h-full overflow-hidden border-none shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-card">
                                    {/* Arka Plan Görseli */}
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="https://yt3.googleusercontent.com/b3xa30I-CNKqVHu8E4mATMiLFpA7BULkqBhuZJYL-JZFcwTtQ7i-xPtaleSu9se_8_33CteYSA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Background"
                                            fill
                                            className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                            unoptimized
                                        />
                                        {/* Gradient Overlay - Yumuşak geçiş için */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                    </div>

                                    {/* İçerik */}
                                    <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                                        {/* Profil Fotoğrafı - Glowing Effect */}
                                        <div className="relative mb-5 mt-2">
                                            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/40 transition-all duration-300">
                                                <Image
                                                    src="/images/halisbayancuk.jpg"
                                                    alt="Halis Bayancuk Hoca"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <Badge className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs bg-primary text-primary-foreground border-2 border-background shadow-sm">
                                                Türkçe
                                            </Badge>
                                        </div>

                                        {/* Başlık ve Açıklama */}
                                        <div className="space-y-3 mb-6 flex-grow flex flex-col justify-center w-full">
                                            <div className="flex items-center justify-center gap-2">
                                                <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    Halis Bayancuk Hoca
                                                </h3>
                                                <Youtube className="w-5 h-5 text-red-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                                            </div>

                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                Ebu Hanzala Hoca'nın Cuma hutbeleri, güncel meselelere dair değerlendirmeleri ve özel sohbetleri.
                                            </p>
                                        </div>

                                        {/* Buton */}
                                        <Button className="w-full group/btn relative overflow-hidden bg-background border-2 border-primary/20 hover:bg-primary hover:border-primary" asChild>
                                            <Link href="https://www.youtube.com/@HalisBayancuk_Hoca" target="_blank">
                                                <span className="relative z-10 flex items-center text-primary group-hover/btn:text-primary-foreground transition-colors duration-300">
                                                    Kanala Git
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </span>
                                                {/* Buton Hover Efekti */}
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>


                                {/* Rusça */}
                                <Card className="group relative h-full overflow-hidden border-none shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-card">
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="https://yt3.googleusercontent.com/b3xa30I-CNKqVHu8E4mATMiLFpA7BULkqBhuZJYL-JZFcwTtQ7i-xPtaleSu9se_8_33CteYSA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Background"
                                            fill
                                            className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                    </div>

                                    <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                                        <div className="relative mb-5 mt-2">
                                            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/40 transition-all duration-300">
                                                <Image
                                                    src="https://yt3.ggpht.com/fvDvMFatJNL7e4bGgwc0XjICf4mQGVrtXO_hIZZ8C1lwoglab8lnkoK29KgewNWT7Y9UVko5=s800-c-k-c0x00ffffff-no-rj"
                                                    alt="Halis Bayancuk Russian"
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                            <Badge className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs bg-primary text-primary-foreground border-2 border-background shadow-sm">
                                                Rusça
                                            </Badge>
                                        </div>

                                        <div className="space-y-3 mb-6 flex-grow flex flex-col justify-center w-full">
                                            <div className="flex items-center justify-center gap-2">
                                                <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    Halis Bayancuk
                                                </h3>
                                                <Youtube className="w-5 h-5 text-red-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                Ebu Hanzala Hoca's sermons and lectures in Russian.
                                            </p>
                                        </div>

                                        <Button className="w-full group/btn relative overflow-hidden bg-background border-2 border-primary/20 hover:bg-primary hover:border-primary" asChild>
                                            <Link href="https://alpha.tevhiddersleri.org/kanallar/halis-bayancuk-russian" target="_blank">
                                                <span className="relative z-10 flex items-center text-primary group-hover/btn:text-primary-foreground transition-colors duration-300">
                                                    Kanala Git
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </span>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Almanca */}
                                <Card className="group relative h-full overflow-hidden border-none shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-card">
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="https://yt3.googleusercontent.com/b3xa30I-CNKqVHu8E4mATMiLFpA7BULkqBhuZJYL-JZFcwTtQ7i-xPtaleSu9se_8_33CteYSA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Background"
                                            fill
                                            className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                    </div>

                                    <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                                        <div className="relative mb-5 mt-2">
                                            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/40 transition-all duration-300">
                                                <Image
                                                    src="https://yt3.ggpht.com/fvDvMFatJNL7e4bGgwc0XjICf4mQGVrtXO_hIZZ8C1lwoglab8lnkoK29KgewNWT7Y9UVko5=s800-c-k-c0x00ffffff-no-rj"
                                                    alt="Halis Bayancuk Deutsch"
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                            <Badge className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs bg-primary text-primary-foreground border-2 border-background shadow-sm">
                                                Almanca
                                            </Badge>
                                        </div>

                                        <div className="space-y-3 mb-6 flex-grow flex flex-col justify-center w-full">
                                            <div className="flex items-center justify-center gap-2">
                                                <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    Halis Bayancuk
                                                </h3>
                                                <Youtube className="w-5 h-5 text-red-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                Predigten und Vorträge von Ebu Hanzala Hoca auf Deutsch.
                                            </p>
                                        </div>

                                        <Button className="w-full group/btn relative overflow-hidden bg-background border-2 border-primary/20 hover:bg-primary hover:border-primary" asChild>
                                            <Link href="https://alpha.tevhiddersleri.org/kanallar/halis-bayancuk-deutsch" target="_blank">
                                                <span className="relative z-10 flex items-center text-primary group-hover/btn:text-primary-foreground transition-colors duration-300">
                                                    Kanala Git
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </span>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* İngilizce */}
                                <Card className="group relative h-full overflow-hidden border-none shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-card">
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="https://yt3.googleusercontent.com/b3xa30I-CNKqVHu8E4mATMiLFpA7BULkqBhuZJYL-JZFcwTtQ7i-xPtaleSu9se_8_33CteYSA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Background"
                                            fill
                                            className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                    </div>

                                    <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                                        <div className="relative mb-5 mt-2">
                                            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/40 transition-all duration-300">
                                                <Image
                                                    src="https://yt3.ggpht.com/fvDvMFatJNL7e4bGgwc0XjICf4mQGVrtXO_hIZZ8C1lwoglab8lnkoK29KgewNWT7Y9UVko5=s800-c-k-c0x00ffffff-no-rj"
                                                    alt="Halis Bayancuk English"
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                            <Badge className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs bg-primary text-primary-foreground border-2 border-background shadow-sm">
                                                İngilizce
                                            </Badge>
                                        </div>

                                        <div className="space-y-3 mb-6 flex-grow flex flex-col justify-center w-full">
                                            <div className="flex items-center justify-center gap-2">
                                                <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    Halis Bayancuk
                                                </h3>
                                                <Youtube className="w-5 h-5 text-red-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                Lectures and insights by Ebu Hanzala Hoca in English.
                                            </p>
                                        </div>

                                        <Button className="w-full group/btn relative overflow-hidden bg-background border-2 border-primary/20 hover:bg-primary hover:border-primary" asChild>
                                            <Link href="https://alpha.tevhiddersleri.org/kanallar/halis-bayancuk-english" target="_blank">
                                                <span className="relative z-10 flex items-center text-primary group-hover/btn:text-primary-foreground transition-colors duration-300">
                                                    Kanala Git
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </span>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Fransızca */}
                                <Card className="group relative h-full overflow-hidden border-none shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-card">
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="https://yt3.googleusercontent.com/b3xa30I-CNKqVHu8E4mATMiLFpA7BULkqBhuZJYL-JZFcwTtQ7i-xPtaleSu9se_8_33CteYSA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Background"
                                            fill
                                            className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                    </div>

                                    <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                                        <div className="relative mb-5 mt-2">
                                            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/40 transition-all duration-300">
                                                <Image
                                                    src="https://yt3.ggpht.com/fvDvMFatJNL7e4bGgwc0XjICf4mQGVrtXO_hIZZ8C1lwoglab8lnkoK29KgewNWT7Y9UVko5=s800-c-k-c0x00ffffff-no-rj"
                                                    alt="Halis Bayancuk Francais"
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                            <Badge className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs bg-primary text-primary-foreground border-2 border-background shadow-sm">
                                                Fransızca
                                            </Badge>
                                        </div>

                                        <div className="space-y-3 mb-6 flex-grow flex flex-col justify-center w-full">
                                            <div className="flex items-center justify-center gap-2">
                                                <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    Halis Bayancuk
                                                </h3>
                                                <Youtube className="w-5 h-5 text-red-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                Conférences et rappels d'Ebu Hanzala Hoca en français.
                                            </p>
                                        </div>

                                        <Button className="w-full group/btn relative overflow-hidden bg-background border-2 border-primary/20 hover:bg-primary hover:border-primary" asChild>
                                            <Link href="https://alpha.tevhiddersleri.org/kanallar/halis-bayancuk-francais" target="_blank">
                                                <span className="relative z-10 flex items-center text-primary group-hover/btn:text-primary-foreground transition-colors duration-300">
                                                    Kanala Git
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </span>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Svahilice */}
                                <Card className="group relative h-full overflow-hidden border-none shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-card">
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="https://yt3.googleusercontent.com/b3xa30I-CNKqVHu8E4mATMiLFpA7BULkqBhuZJYL-JZFcwTtQ7i-xPtaleSu9se_8_33CteYSA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Background"
                                            fill
                                            className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                    </div>

                                    <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                                        <div className="relative mb-5 mt-2">
                                            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/40 transition-all duration-300">
                                                <Image
                                                    src="https://yt3.ggpht.com/fvDvMFatJNL7e4bGgwc0XjICf4mQGVrtXO_hIZZ8C1lwoglab8lnkoK29KgewNWT7Y9UVko5=s800-c-k-c0x00ffffff-no-rj"
                                                    alt="Halis Bayancuk Kiswahili"
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                            <Badge className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs bg-primary text-primary-foreground border-2 border-background shadow-sm">
                                                Svahilice
                                            </Badge>
                                        </div>

                                        <div className="space-y-3 mb-6 flex-grow flex flex-col justify-center w-full">
                                            <div className="flex items-center justify-center gap-2">
                                                <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    Halis Bayancuk
                                                </h3>
                                                <Youtube className="w-5 h-5 text-red-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                Mafundisho ya Ebu Hanzala Hoca kwa Kiswahili.
                                            </p>
                                        </div>

                                        <Button className="w-full group/btn relative overflow-hidden bg-background border-2 border-primary/20 hover:bg-primary hover:border-primary" asChild>
                                            <Link href="https://alpha.tevhiddersleri.org/kanallar/halis-bayancuk-kiswahili" target="_blank">
                                                <span className="relative z-10 flex items-center text-primary group-hover/btn:text-primary-foreground transition-colors duration-300">
                                                    Kanala Git
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </span>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Somalice */}
                                <Card className="group relative h-full overflow-hidden border-none shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-card">
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="https://yt3.googleusercontent.com/b3xa30I-CNKqVHu8E4mATMiLFpA7BULkqBhuZJYL-JZFcwTtQ7i-xPtaleSu9se_8_33CteYSA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Background"
                                            fill
                                            className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                    </div>

                                    <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                                        <div className="relative mb-5 mt-2">
                                            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/40 transition-all duration-300">
                                                <Image
                                                    src="https://yt3.ggpht.com/fvDvMFatJNL7e4bGgwc0XjICf4mQGVrtXO_hIZZ8C1lwoglab8lnkoK29KgewNWT7Y9UVko5=s800-c-k-c0x00ffffff-no-rj"
                                                    alt="Halis Bayancuk Soomaali"
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                            <Badge className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs bg-primary text-primary-foreground border-2 border-background shadow-sm">
                                                Somalice
                                            </Badge>
                                        </div>

                                        <div className="space-y-3 mb-6 flex-grow flex flex-col justify-center w-full">
                                            <div className="flex items-center justify-center gap-2">
                                                <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    Halis Bayancuk
                                                </h3>
                                                <Youtube className="w-5 h-5 text-red-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                Casharada iyo muxaadaraadka Ebu Hanzala Hoca ee Soomaaliga.
                                            </p>
                                        </div>

                                        <Button className="w-full group/btn relative overflow-hidden bg-background border-2 border-primary/20 hover:bg-primary hover:border-primary" asChild>
                                            <Link href="https://alpha.tevhiddersleri.org/kanallar/halis-bayancuk-soomaali" target="_blank">
                                                <span className="relative z-10 flex items-center text-primary group-hover/btn:text-primary-foreground transition-colors duration-300">
                                                    Kanala Git
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </span>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Felemenkçe */}
                                <Card className="group relative h-full overflow-hidden border-none shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-card">
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="https://yt3.googleusercontent.com/b3xa30I-CNKqVHu8E4mATMiLFpA7BULkqBhuZJYL-JZFcwTtQ7i-xPtaleSu9se_8_33CteYSA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Background"
                                            fill
                                            className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                    </div>

                                    <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                                        <div className="relative mb-5 mt-2">
                                            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/40 transition-all duration-300">
                                                <Image
                                                    src="https://yt3.ggpht.com/fvDvMFatJNL7e4bGgwc0XjICf4mQGVrtXO_hIZZ8C1lwoglab8lnkoK29KgewNWT7Y9UVko5=s800-c-k-c0x00ffffff-no-rj"
                                                    alt="Halis Bayancuk Dutch"
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                            <Badge className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs bg-primary text-primary-foreground border-2 border-background shadow-sm">
                                                Felemenkçe
                                            </Badge>
                                        </div>

                                        <div className="space-y-3 mb-6 flex-grow flex flex-col justify-center w-full">
                                            <div className="flex items-center justify-center gap-2">
                                                <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    Halis Bayancuk
                                                </h3>
                                                <Youtube className="w-5 h-5 text-red-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                                Lezingen en lessen van Ebu Hanzala Hoca in het Nederlands.
                                            </p>
                                        </div>

                                        <Button className="w-full group/btn relative overflow-hidden bg-background border-2 border-primary/20 hover:bg-primary hover:border-primary" asChild>
                                            <Link href="https://alpha.tevhiddersleri.org/kanallar/halis-bayancuk-dutch" target="_blank">
                                                <span className="relative z-10 flex items-center text-primary group-hover/btn:text-primary-foreground transition-colors duration-300">
                                                    Kanala Git
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </span>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>


                        {/* Diğer İlmi ve Kültürel Çalışmalar - Unified Section */}
                        <div className="space-y-8 mt-12">
                            {/* Section Header */}
                            <div className="flex items-center gap-4 pb-4 border-b border-border/50">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-border shadow-lg flex-shrink-0 bg-background">
                                    <Image
                                        src="/images/diger-kanallar-logo.png"
                                        alt="Diğer Kanallarımız"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-600">
                                        Diğer Kanallarımız
                                    </h3>
                                    <p className="text-sm text-muted-foreground">Animasyonlar, Kur'an Meali ve Özgün İçerikler</p>
                                </div>
                            </div>

                            {/* 2-Column Wide Grid */}
                            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                                {/* Bizim Dünyamız */}
                                <Card className="group relative h-full overflow-hidden border-none shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-card/50 backdrop-blur-sm">
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="/images/bizimdunyamiz.jpg"
                                            alt="Background"
                                            fill
                                            className="object-cover opacity-25 blur-sm scale-105 group-hover:scale-110 group-hover:blur-md transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
                                    </div>

                                    <CardContent className="relative z-10 p-8 flex flex-col items-center text-center h-full">
                                        {/* Floating Badge & Profile */}
                                        <div className="relative mb-6">
                                            <div className="absolute -inset-4 rounded-full bg-primary/15 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-background shadow-xl ring-2 ring-border/50 group-hover:ring-primary/40 transition-all duration-500">
                                                <Image
                                                    src="/images/bizimdunyamiz.jpg"
                                                    alt="Bizim Dünyamız"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold bg-primary text-primary-foreground border-2 border-background shadow-lg">
                                                Çocuk & Aile
                                            </Badge>
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-4 mb-8 flex-grow flex flex-col justify-center w-full max-w-sm">
                                            <div className="flex items-center justify-center gap-2">
                                                <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    Bizim Dünyamız
                                                </h3>
                                                <Youtube className="w-6 h-6 text-red-600 drop-shadow-md" />
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Çocuklar için İslami ahlakı öğreten çizgi filmler, eğitici animasyonlar ve ailece izlenebilecek neşeli içerikler.
                                            </p>
                                        </div>

                                        {/* Interactive Button */}
                                        <Button className="w-full max-w-xs group/btn relative overflow-hidden bg-background border-2 border-primary/20 hover:bg-primary hover:border-primary shadow-md hover:shadow-primary/20" size="lg" asChild>
                                            <Link href="https://www.youtube.com/@BizimDunyamiz" target="_blank">
                                                <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-primary group-hover/btn:text-primary-foreground transition-colors duration-300">
                                                    Kanala Git
                                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </span>
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Tevhid Meali */}
                                <Card className="group relative h-full overflow-hidden border-none shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-card/50 backdrop-blur-sm">
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src="https://yt3.googleusercontent.com/WHWD6lyRQBXEf2fbGnGZiACau9-Vl94ht-ys_AN3-RSrZgmM2vHHahGeQK-KRbDOrqFYymgn=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Background"
                                            fill
                                            className="object-cover opacity-25 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
                                    </div>

                                    <CardContent className="relative z-10 p-8 flex flex-col items-center text-center h-full">
                                        {/* Floating Badge & Profile */}
                                        <div className="relative mb-6">
                                            <div className="absolute -inset-4 rounded-full bg-primary/15 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-background shadow-xl ring-2 ring-border/50 group-hover:ring-primary/40 transition-all duration-500">
                                                <Image
                                                    src="https://yt3.googleusercontent.com/AtelLsFsoDmpWXqZsHIi5vy5qi-qg0XGxiJqq3n4c8HXgfNmYlNk2g1n4ITxXTkS83253sfSvJY=s160-c-k-c0x00ffffff-no-rj"
                                                    alt="Tevhid Meali"
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>
                                            <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold bg-primary text-primary-foreground border-2 border-background shadow-lg">
                                                Kur'an & Meal
                                            </Badge>
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-4 mb-8 flex-grow flex flex-col justify-center w-full max-w-sm">
                                            <div className="flex items-center justify-center gap-2">
                                                <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    Tevhid Meali
                                                </h3>
                                                <Youtube className="w-6 h-6 text-red-600 drop-shadow-md" />
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Kur'an-ı Kerim'in anlaşılmasına yönelik sesli meal çalışmaları, ayet okumaları ve anlam dünyasına yolculuk.
                                            </p>
                                        </div>

                                        {/* Interactive Button */}
                                        <Button className="w-full max-w-xs group/btn relative overflow-hidden bg-background border-2 border-primary/20 hover:bg-primary hover:border-primary shadow-md hover:shadow-primary/20" size="lg" asChild>
                                            <Link href="https://www.youtube.com/channel/UCEQxTNMwu0etJzI95YwCy_w" target="_blank">
                                                <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-primary group-hover/btn:text-primary-foreground transition-colors duration-300">
                                                    Kanala Git
                                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                                </span>
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SİTELERİMİZ */}
            <section id="web-sitelerimiz" className="py-20 md:py-32 bg-muted/20">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Web Sitelerimiz</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            İlmi çalışmalarımızı, neşriyatımızı ve diğer tüm faaliyetlerimizi disiplinli bir şekilde kategorize ettiğimiz dijital platformlarımız.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Tevhid Dersleri Website Card */}
                        <Link href="https://tevhiddersleri.org/" target="_blank" className="block h-full">
                            <Card className="group relative overflow-hidden border-none shadow-sm bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full ring-1 ring-primary/20">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="https://yt3.googleusercontent.com/-_KvaDmoimwoJEa40abZg-XM04Vulejv1g-Od-TZGkuN2l-mC8bj3n4K2cEScJzuvnVj8XDeng=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-[0.08] group-hover:opacity-[0.12] transition-opacity grayscale"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
                                </div>
                                <CardContent className="relative z-10 p-3 flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-primary/20 shadow-sm flex-shrink-0 group-hover:border-primary/50 transition-colors">
                                        <Image src="/images/tevhiddersleri.jpg" alt="Tevhid Dersleri" fill className="object-cover" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-bold truncate text-primary transition-colors">Tevhid Dersleri</h3>
                                        <p className="text-xs text-muted-foreground truncate font-mono opacity-80">tevhiddersleri.org</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:rotate-[-45deg]">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>

                        {/* Tevhid Dergisi Website Card */}
                        <Link href="https://tevhiddergisi.org/" target="_blank" className="block h-full">
                            <Card className="group relative overflow-hidden border-none shadow-sm bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full ring-1 ring-primary/20">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="https://tevhiddergisi.org/wp-content/uploads/2022/08/tevhid_dergisi_logo.png"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-[0.08] group-hover:opacity-[0.12] transition-opacity grayscale"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
                                </div>
                                <CardContent className="relative z-10 p-3 flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-primary/20 shadow-sm flex-shrink-0 group-hover:border-primary/50 transition-colors bg-white p-1">
                                        <Image src="/images/td.png" alt="Tevhid Dergisi" fill className="object-contain" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-bold truncate text-primary transition-colors">Tevhid Dergisi</h3>
                                        <p className="text-xs text-muted-foreground truncate font-mono opacity-80">tevhiddergisi.org</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:rotate-[-45deg]">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>

                        {/* Halis Bayancuk Hoca Website Card */}
                        <Link href="https://www.halisbayancuk.com/" target="_blank" className="block h-full">
                            <Card className="group relative overflow-hidden border-none shadow-sm bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full ring-1 ring-primary/20">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/halisbayancuk_bg.png"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-[0.08] group-hover:opacity-[0.12] transition-opacity grayscale"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
                                </div>
                                <CardContent className="relative z-10 p-3 flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-primary/20 shadow-sm flex-shrink-0 group-hover:border-primary/50 transition-colors">
                                        <Image src="/images/halisbayancukikon.png" alt="Halis Bayancuk Hoca" fill className="object-contain p-1" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-bold truncate text-primary transition-colors">Halis Bayancuk Hoca</h3>
                                        <p className="text-xs text-muted-foreground truncate font-mono opacity-80">halisbayancuk.com</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:rotate-[-45deg]">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>

                        {/* Tevhid Meali Website Card */}
                        <Link href="https://tevhidmeali.com/" target="_blank" className="block h-full">
                            <Card className="group relative overflow-hidden border-none shadow-sm bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full ring-1 ring-primary/20">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/ankebut-suresi.jpeg"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-[0.08] group-hover:opacity-[0.12] transition-opacity grayscale"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
                                </div>
                                <CardContent className="relative z-10 p-3 flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-primary/20 shadow-sm flex-shrink-0 group-hover:border-primary/50 transition-colors bg-black p-2">
                                        <Image src="/images/tevhidmeali-logo.svg" alt="Tevhid Meali" fill className="object-contain" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-bold truncate text-primary transition-colors">Tevhid Meali</h3>
                                        <p className="text-xs text-muted-foreground truncate font-mono opacity-80">tevhidmeali.com</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:rotate-[-45deg]">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>

                        {/* Kıblegâh Website Card */}
                        <Link href="https://kiblegah.com/" target="_blank" className="block h-full">
                            <Card className="group relative overflow-hidden border-none shadow-sm bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full ring-1 ring-primary/20">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/app-showcase.png"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-[0.08] group-hover:opacity-[0.12] transition-opacity grayscale"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
                                </div>
                                <CardContent className="relative z-10 p-3 flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-primary/20 shadow-sm flex-shrink-0 group-hover:border-primary/50 transition-colors bg-white p-1">
                                        <Image src="https://kiblegah.com/images/kiblegah_onlyLogo.webp" alt="Kıblegâh" fill className="object-contain" unoptimized />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-bold truncate text-primary transition-colors">Kıblegâh</h3>
                                        <p className="text-xs text-muted-foreground truncate font-mono opacity-80">kiblegah.com</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:rotate-[-45deg]">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                        {/* Tevhid Kitap Website Card */}
                        <Link href="https://tevhidkitap.com/" target="_blank" className="block h-full">
                            <Card className="group relative overflow-hidden border-none shadow-sm bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full ring-1 ring-primary/20">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/tevhid-kitap-arkaplan2.png"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-[0.08] group-hover:opacity-[0.12] transition-opacity grayscale"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
                                </div>
                                <CardContent className="relative z-10 p-3 flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-primary/20 shadow-sm flex-shrink-0 group-hover:border-primary/50 transition-colors bg-white p-1">
                                        <Image src="/images/tevhid-kitap-logo.png" alt="Tevhid Kitap" fill className="object-contain" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-bold truncate text-primary transition-colors">Tevhid Kitap</h3>
                                        <p className="text-xs text-muted-foreground truncate font-mono opacity-80">tevhidkitap.com</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:rotate-[-45deg]">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            {/* UYGULAMALARIMIZ */}
            <section id="mobil-uygulamalar" className="py-20 md:py-32 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Mobil Uygulamalarımız</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            İlmi kaynaklarınıza her an ulaşabileceğiniz, Android ve iOS platformlarında ücretsiz mobil uygulamalarımız.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Tevhid Meali App Card */}
                        <Card className="group relative overflow-hidden border-none shadow-lg bg-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ring-1 ring-primary/20 flex flex-col">

                            {/* Repeating Diagonal Pattern */}
                            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                                {/* Diagonal Container */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 -rotate-12 scale-125 opacity-[0.30] dark:opacity-[0.15]">
                                    {/* Top Row */}
                                    <div className="flex gap-4">
                                        <div className="relative w-64 h-40 rounded-lg overflow-hidden shrink-0">
                                            <Image src="https://play-lh.googleusercontent.com/hpPwYMu_8bYZEVYqiCfOjn-w_OnD5hrWQDwEX0DakiFMEoJfw_X_ug0uNpA_J_7S8qpwNrpCuzVNqUg_MWKD=w1052-h592-rw" alt="" fill className="object-cover" />
                                        </div>
                                        <div className="relative w-64 h-40 rounded-lg overflow-hidden shrink-0">
                                            <Image src="https://play-lh.googleusercontent.com/7qiWoXi0yEX9OY-Iz0WbwA4L7_fLQ3RoK-9BIMpClQq-R_-rRPzpyhAWdiB18P16nK0pO5cHq4ciuk53hvGB2w=w1052-h592-rw" alt="" fill className="object-cover" />
                                        </div>
                                    </div>
                                    {/* Bottom Row */}
                                    <div className="flex gap-4 -ml-24">
                                        <div className="relative w-64 h-40 rounded-lg overflow-hidden shrink-0">
                                            <Image src="https://play-lh.googleusercontent.com/7qiWoXi0yEX9OY-Iz0WbwA4L7_fLQ3RoK-9BIMpClQq-R_-rRPzpyhAWdiB18P16nK0pO5cHq4ciuk53hvGB2w=w1052-h592-rw" alt="" fill className="object-cover" />
                                        </div>
                                        <div className="relative w-64 h-40 rounded-lg overflow-hidden shrink-0">
                                            <Image src="https://play-lh.googleusercontent.com/hpPwYMu_8bYZEVYqiCfOjn-w_OnD5hrWQDwEX0DakiFMEoJfw_X_ug0uNpA_J_7S8qpwNrpCuzVNqUg_MWKD=w1052-h592-rw" alt="" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                                {/* Strong Gradient mainly for text readability at top */}
                                <div className="absolute inset-0 bg-gradient-to-b from-card/90 via-card/60 to-card/20" />
                            </div>

                            <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                                {/* App Icon */}
                                <div className="relative w-28 h-28 mb-5 rounded-[22px] overflow-hidden shadow-xl ring-4 ring-primary/10 group-hover:ring-primary/30 group-hover:scale-105 transition-all duration-500 bg-white">
                                    <Image
                                        src="/images/tevhidmealiikon.webp"
                                        alt="Tevhid Meali Uygulaması"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* App Info */}
                                <div className="space-y-2 mb-8 flex-grow">
                                    <div>
                                        <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">Tevhid Meali</h3>
                                        <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase mt-1">
                                            Mobil Uygulama
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-3 pt-1">
                                        Kur'an-ı Kerim meali ve tefsiri ile her an yanınızda. Gelişmiş arama ve not alma özellikleri.
                                    </p>
                                </div>

                                {/* Download Buttons */}
                                <div className="grid grid-cols-2 gap-3 w-full mt-auto">
                                    <Button variant="outline" className="h-auto py-2.5 px-3 flex flex-col items-center gap-1 hover:bg-black hover:text-white hover:border-black transition-all group/apple ring-1 ring-primary/10" asChild>
                                        <Link href="https://apps.apple.com/tr/app/tevhid-meali/id1445886830?l=tr" target="_blank">
                                            <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5 mb-0.5">
                                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                                            </svg>
                                            <div className="flex flex-col items-start leading-none">
                                                <span className="text-[9px] opacity-80 uppercase tracking-wider font-semibold">Download on</span>
                                                <span className="text-xs font-bold">App Store</span>
                                            </div>
                                        </Link>
                                    </Button>

                                    <Button variant="outline" className="h-auto py-2.5 px-3 flex flex-col items-center gap-1 hover:bg-[#0086F9] hover:text-white hover:border-[#0086F9] transition-all group/play ring-1 ring-primary/10" asChild>
                                        <Link href="https://play.google.com/store/apps/details?id=com.tevhidmeali&hl=tr" target="_blank">
                                            <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5 mb-0.5">
                                                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                            </svg>
                                            <div className="flex flex-col items-start leading-none">
                                                <span className="text-[9px] opacity-80 uppercase tracking-wider font-semibold">Get it on</span>
                                                <span className="text-xs font-bold">Google Play</span>
                                            </div>
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Kıblegâh App Card */}
                        <Card className="group relative overflow-hidden border-none shadow-lg bg-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ring-1 ring-primary/20 flex flex-col">

                            {/* Repeating Diagonal Pattern */}
                            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                                {/* Diagonal Container */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 -rotate-12 scale-125 opacity-[0.30] dark:opacity-[0.15]">
                                    {/* Top Row */}
                                    <div className="flex gap-4">
                                        <div className="relative w-64 h-40 rounded-lg overflow-hidden shrink-0">
                                            <Image src="https://play-lh.googleusercontent.com/z1EOeeMgGuQvTBnYNHTLwzWWQF-VUTuaOP1757y-J33UWNT9_w1kb51kRxgV16T318Y=w5120-h2880-rw" alt="" fill className="object-cover" />
                                        </div>
                                        <div className="relative w-64 h-40 rounded-lg overflow-hidden shrink-0">
                                            <Image src="https://play-lh.googleusercontent.com/YnHT88cjlFza7KSyRBUbvLiTD1uS8Dti6YZR2-d5wqVtbh8z0jNXrydDe-GmwtNDMw=w5120-h2880-rw" alt="" fill className="object-cover" />
                                        </div>
                                    </div>
                                    {/* Bottom Row */}
                                    <div className="flex gap-4 -ml-24">
                                        <div className="relative w-64 h-40 rounded-lg overflow-hidden shrink-0">
                                            <Image src="https://play-lh.googleusercontent.com/YnHT88cjlFza7KSyRBUbvLiTD1uS8Dti6YZR2-d5wqVtbh8z0jNXrydDe-GmwtNDMw=w5120-h2880-rw" alt="" fill className="object-cover" />
                                        </div>
                                        <div className="relative w-64 h-40 rounded-lg overflow-hidden shrink-0">
                                            <Image src="https://play-lh.googleusercontent.com/z1EOeeMgGuQvTBnYNHTLwzWWQF-VUTuaOP1757y-J33UWNT9_w1kb51kRxgV16T318Y=w5120-h2880-rw" alt="" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                                {/* Strong Gradient mainly for text readability at top */}
                                <div className="absolute inset-0 bg-gradient-to-b from-card/90 via-card/60 to-card/20" />
                            </div>

                            <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                                {/* App Icon */}
                                <div className="relative w-28 h-28 mb-5 rounded-[22px] overflow-hidden shadow-xl ring-4 ring-primary/10 group-hover:ring-primary/30 group-hover:scale-105 transition-all duration-500 bg-white">
                                    <Image
                                        src="/images/kıblegahikon.webp"
                                        alt="Kıblegâh Uygulaması"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* App Info */}
                                <div className="space-y-2 mb-8 flex-grow">
                                    <div>
                                        <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">Kıblegâh</h3>
                                        <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase mt-1">
                                            Mobil Uygulama
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-3 pt-1">
                                        Dünyanın neresinde olursanız olun, Kıble yönünüzü hassasiyetle bulun. Namaz vakitleri ve fazlası.
                                    </p>
                                </div>

                                {/* Download Buttons */}
                                <div className="grid grid-cols-2 gap-3 w-full mt-auto">
                                    <Button variant="outline" className="h-auto py-2.5 px-3 flex flex-col items-center gap-1 hover:bg-black hover:text-white hover:border-black transition-all group/apple ring-1 ring-primary/10" asChild>
                                        <Link href="https://apps.apple.com/tr/app/k%C4%B1bleg%C3%A2h/id1602985672?l=tr" target="_blank">
                                            <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5 mb-0.5">
                                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                                            </svg>
                                            <div className="flex flex-col items-start leading-none">
                                                <span className="text-[9px] opacity-80 uppercase tracking-wider font-semibold">Download on</span>
                                                <span className="text-xs font-bold">App Store</span>
                                            </div>
                                        </Link>
                                    </Button>

                                    <Button variant="outline" className="h-auto py-2.5 px-3 flex flex-col items-center gap-1 hover:bg-[#0086F9] hover:text-white hover:border-[#0086F9] transition-all group/play ring-1 ring-primary/10" asChild>
                                        <Link href="https://play.google.com/store/apps/details?id=com.tevhiddergisi.kiblegah&hl=tr" target="_blank">
                                            <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5 mb-0.5">
                                                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                            </svg>
                                            <div className="flex flex-col items-start leading-none">
                                                <span className="text-[9px] opacity-80 uppercase tracking-wider font-semibold">Get it on</span>
                                                <span className="text-xs font-bold">Google Play</span>
                                            </div>
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Anlat Bakalım App Card */}
                        <Card className="group relative overflow-hidden border-none shadow-lg bg-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ring-1 ring-primary/20 flex flex-col">

                            {/* Repeating Diagonal Pattern */}
                            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                                {/* Diagonal Container */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 -rotate-12 scale-125 opacity-[0.30] dark:opacity-[0.15]">
                                    {/* Top Row */}
                                    <div className="flex gap-4">
                                        <div className="relative w-64 h-40 rounded-lg overflow-hidden shrink-0">
                                            <Image src="https://play-lh.googleusercontent.com/3oMoZz5YAYE2LwBq6-SytgYp1t890E4F-vyc61ZomBHedAnx4JNODDaqsf1EAvhbFOw=w1052-h592-rw" alt="" fill className="object-cover" />
                                        </div>
                                        <div className="relative w-64 h-40 rounded-lg overflow-hidden shrink-0">
                                            <Image src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/27/b9/88/27b9884d-7ef7-b5d7-c6df-4a80c1022471/Simulator_Screenshot_-_iPad_Pro_13-inch__U0028M4_U0029_-_2025-03-26_at_17.12.24.png/960x1280bb.webp" alt="" fill className="object-cover" />
                                        </div>
                                    </div>
                                    {/* Bottom Row */}
                                    <div className="flex gap-4 -ml-24">
                                        <div className="relative w-64 h-40 rounded-lg overflow-hidden shrink-0">
                                            <Image src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/27/b9/88/27b9884d-7ef7-b5d7-c6df-4a80c1022471/Simulator_Screenshot_-_iPad_Pro_13-inch__U0028M4_U0029_-_2025-03-26_at_17.12.24.png/960x1280bb.webp" alt="" fill className="object-cover" />
                                        </div>
                                        <div className="relative w-64 h-40 rounded-lg overflow-hidden shrink-0">
                                            <Image src="https://play-lh.googleusercontent.com/3oMoZz5YAYE2LwBq6-SytgYp1t890E4F-vyc61ZomBHedAnx4JNODDaqsf1EAvhbFOw=w1052-h592-rw" alt="" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>
                                {/* Strong Gradient mainly for text readability at top */}
                                <div className="absolute inset-0 bg-gradient-to-b from-card/90 via-card/60 to-card/20" />
                            </div>

                            <CardContent className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                                {/* App Icon */}
                                <div className="relative w-28 h-28 mb-5 rounded-[22px] overflow-hidden shadow-xl ring-4 ring-primary/10 group-hover:ring-primary/30 group-hover:scale-105 transition-all duration-500 bg-white">
                                    <Image
                                        src="/images/anlatbakalımikon.webp"
                                        alt="Anlat Bakalım Uygulaması"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* App Info */}
                                <div className="space-y-2 mb-8 flex-grow">
                                    <div>
                                        <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">Anlat Bakalım</h3>
                                        <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase mt-1">
                                            Mobil Uygulama
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-3 pt-1">
                                        İslami kavramları öğrenmenin ve öğretmenin en eğlenceli yolu. Ailenizle ve arkadaşlarınızla keyifli vakit geçirin.
                                    </p>
                                </div>

                                {/* Download Buttons */}
                                <div className="grid grid-cols-2 gap-3 w-full mt-auto">
                                    <Button variant="outline" className="h-auto py-2.5 px-3 flex flex-col items-center gap-1 hover:bg-black hover:text-white hover:border-black transition-all group/apple ring-1 ring-primary/10" asChild>
                                        <Link href="https://apps.apple.com/tr/app/anlat-bakal%C4%B1m/id6743703504?l=tr" target="_blank">
                                            <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5 mb-0.5">
                                                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
                                            </svg>
                                            <div className="flex flex-col items-start leading-none">
                                                <span className="text-[9px] opacity-80 uppercase tracking-wider font-semibold">Download on</span>
                                                <span className="text-xs font-bold">App Store</span>
                                            </div>
                                        </Link>
                                    </Button>

                                    <Button variant="outline" className="h-auto py-2.5 px-3 flex flex-col items-center gap-1 hover:bg-[#0086F9] hover:text-white hover:border-[#0086F9] transition-all group/play ring-1 ring-primary/10" asChild>
                                        <Link href="https://play.google.com/store/apps/details?id=com.tevhidsunnet.anlatbakalim&hl=tr" target="_blank">
                                            <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5 mb-0.5">
                                                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                            </svg>
                                            <div className="flex flex-col items-start leading-none">
                                                <span className="text-[9px] opacity-80 uppercase tracking-wider font-semibold">Get it on</span>
                                                <span className="text-xs font-bold">Google Play</span>
                                            </div>
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SOSYAL MEDYA ADRESLERİMİZ */}
            <section id="sosyal-medya" className="py-20 md:py-32 bg-muted/20">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Sosyal Medya Adreslerimiz</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Anlık paylaşımlar, duyurular ve interaktif içerikler için bizi takip edin.
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto space-y-8">
                        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                            {/* Demo: Tevhid Dersleri Sosyal Medya */}
                            <Card className="group relative aspect-square max-w-[220px] mx-auto overflow-hidden border border-border/40 bg-card shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-500">
                                {/* Arka Plan Görseli */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/tevhiddersleriarkaplan.jpg"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                </div>

                                <CardContent className="relative z-10 p-3 flex flex-col items-center justify-center text-center h-full">
                                    {/* Profil Fotoğrafı */}
                                    <div className="relative mb-2 mt-1">
                                        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/40 to-amber-500/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/50 transition-all duration-300">
                                            <Image
                                                src="/images/tevhiddersleri.jpg"
                                                alt="Tevhid Dersleri"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <Badge className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] bg-primary text-primary-foreground border border-primary-foreground/20 shadow-sm">
                                            Sosyal Medya
                                        </Badge>
                                    </div>
                                    <span className="text-[10px] font-medium text-muted-foreground/60 mb-1">Türkçe</span>

                                    {/* Başlık */}
                                    <h3 className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors duration-300 mb-2">
                                        Tevhid Dersleri
                                    </h3>

                                    {/* Sosyal Medya İkonları - Minimal Siyah */}
                                    <div className="grid grid-cols-2 gap-4 mb-3 w-full max-w-[150px]">
                                        {/* X */}
                                        <Link href="https://x.com/_tevhiddersleri" target="_blank" className="group/icon">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-black/10 hover:border-black/20 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-black group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* Telegram */}
                                        <Link href="https://web.telegram.org/k/#@tevhid_dersleri" target="_blank" className="group/icon">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-sky-500/10 hover:border-sky-500/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-sky-500 group-hover/icon:scale-110 transition-all duration-300">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>

                                    <p className="text-[11px] text-muted-foreground/80 leading-relaxed">
                                        Sosyal medya hesaplarımızı takip edin
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Yeni Tevhid Dersleri Sosyal Medya */}
                            <Card className="group relative aspect-square max-w-[220px] mx-auto overflow-hidden border border-border/40 bg-card shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/20 active:scale-[0.99] transition-all duration-500 touch-manipulation">
                                {/* Arka Plan Görseli */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="https://pbs.twimg.com/profile_banners/1200780989842251778/1687324943/1080x360"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                </div>

                                <CardContent className="relative z-10 p-3 flex flex-col items-center justify-center text-center h-full">
                                    {/* Profil Fotoğrafı */}
                                    <div className="relative mb-2 mt-1">
                                        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/40 to-amber-500/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/50 transition-all duration-300">
                                            <Image
                                                src="/images/tevhiddersleri.jpg"
                                                alt="Dersên Tewhîdê"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <Badge className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] bg-primary text-primary-foreground border border-primary-foreground/20 shadow-sm">
                                            Sosyal Medya
                                        </Badge>
                                    </div>
                                    <span className="text-[10px] font-medium text-muted-foreground/60 mb-1">Kürtçe</span>

                                    {/* Başlık */}
                                    <h3 className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors duration-300 mb-2">
                                        Dersên Tewhîdê
                                    </h3>

                                    {/* Sosyal Medya İkonları - Minimal Siyah */}
                                    <div className="flex justify-center mb-3 w-full">
                                        {/* X */}
                                        <Link href="https://x.com/dersen_tewhide" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-black/10 hover:border-black/20 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-black group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>

                                    <p className="text-[11px] text-muted-foreground/80 leading-relaxed">
                                        Sosyal medya hesaplarımızı takip edin
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Monotheism Sosyal Medya */}
                            <Card className="group relative aspect-square max-w-[220px] mx-auto overflow-hidden border border-border/40 bg-card shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/20 active:scale-[0.99] transition-all duration-500 touch-manipulation">
                                {/* Arka Plan Görseli */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/Monotheism-arkaplan.jpg"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                </div>

                                <CardContent className="relative z-10 p-3 flex flex-col items-center justify-center text-center h-full">
                                    {/* Profil Fotoğrafı */}
                                    <div className="relative mb-2 mt-1">
                                        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/40 to-amber-500/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/50 transition-all duration-300">
                                            <Image
                                                src="/images/Monotheism-logo.jpg"
                                                alt="Monotheism"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <Badge className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] bg-primary text-primary-foreground border border-primary-foreground/20 shadow-sm">
                                            Sosyal Medya
                                        </Badge>
                                    </div>
                                    <span className="text-[10px] font-medium text-muted-foreground/60 mb-1">İngilizce</span>

                                    {/* Başlık */}
                                    <h3 className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors duration-300 mb-2">
                                        Monotheism
                                    </h3>

                                    {/* Sosyal Medya İkonları - Minimal Siyah */}
                                    <div className="grid grid-cols-4 gap-1.5 mb-3 w-full max-w-[200px]">
                                        {/* X */}
                                        <Link href="https://x.com/monotheismeng" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-black/10 hover:border-black/20 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-black group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* Instagram */}
                                        <Link href="https://www.instagram.com/monotheism.eng" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-gradient-to-tr hover:from-[#f09433]/20 hover:via-[#dc2743]/20 hover:to-[#bc1888]/20 hover:border-[#dc2743]/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-[#dc2743] group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* WhatsApp */}
                                        <Link href="https://whatsapp.com/channel/0029Vb77wnW4NViq7Lo3YY2Z" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-green-500/10 hover:border-green-500/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-green-600 group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* TikTok */}
                                        <Link href="https://www.tiktok.com/@monotheism.eng" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-black/10 hover:border-black/20 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-black group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.11-.27-.26-.53-.55-.78-.85v10.51c-.01 1.63-.58 3.24-1.62 4.54-1.04 1.3-2.58 2.08-4.23 2.15-2.1.09-4.2-.82-5.46-2.5-1.35-1.81-1.39-4.32-.1-6.17 1.17-1.67 3.16-2.6 5.17-2.45v3.91c-.57-.1-1.18.15-1.55.59-.44.5-.42 1.25.03 1.73.43.46 1.16.51 1.65.11.45-.37.71-.94.69-1.53v-13.5a20.16 20.16 0 0 1 4.2-1.28c-1.35-.45-2.06-1.92-2.12-3.69Z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>

                                    <p className="text-[11px] text-muted-foreground/80 leading-relaxed">
                                        Sosyal medya hesaplarımızı takip edin
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Monothéisme Sosyal Medya */}
                            <Card className="group relative aspect-square max-w-[220px] mx-auto overflow-hidden border border-border/40 bg-card shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/20 active:scale-[0.99] transition-all duration-500 touch-manipulation">
                                {/* Arka Plan Görseli */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/monotheisme-fransızca-arkaplan1.jpg"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                </div>

                                <CardContent className="relative z-10 p-3 flex flex-col items-center justify-center text-center h-full">
                                    {/* Profil Fotoğrafı */}
                                    <div className="relative mb-2 mt-1">
                                        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/40 to-amber-500/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/50 transition-all duration-300">
                                            <Image
                                                src="/images/monotheisme-fransızca-logo.jpg"
                                                alt="Monothéisme"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <Badge className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] bg-primary text-primary-foreground border border-primary-foreground/20 shadow-sm">
                                            Sosyal Medya
                                        </Badge>
                                    </div>
                                    <span className="text-[10px] font-medium text-muted-foreground/60 mb-1">Fransızca</span>

                                    <h3 className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors duration-300 mb-2">
                                        Monothéisme
                                    </h3>

                                    {/* Sosyal Medya İkonları - Minimal Siyah */}
                                    <div className="grid grid-cols-5 gap-1.5 mb-3 w-full max-w-[210px]">
                                        {/* X */}
                                        <Link href="https://x.com/_Monotheismefr" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-black/10 hover:border-black/20 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-black group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* Instagram */}
                                        <Link href="https://www.instagram.com/monotheismefr" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-gradient-to-tr hover:from-[#f09433]/20 hover:via-[#dc2743]/20 hover:to-[#bc1888]/20 hover:border-[#dc2743]/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-[#dc2743] group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* TikTok */}
                                        <Link href="https://www.tiktok.com/@monotheismefr" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-black/10 hover:border-black/20 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-black group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.11-.27-.26-.53-.55-.78-.85v10.51c-.01 1.63-.58 3.24-1.62 4.54-1.04 1.3-2.58 2.08-4.23 2.15-2.1.09-4.2-.82-5.46-2.5-1.35-1.81-1.39-4.32-.1-6.17 1.17-1.67 3.16-2.6 5.17-2.45v3.91c-.57-.1-1.18.15-1.55.59-.44.5-.42 1.25.03 1.73.43.46 1.16.51 1.65.11.45-.37.71-.94.69-1.53v-13.5a20.16 20.16 0 0 1 4.2-1.28c-1.35-.45-2.06-1.92-2.12-3.69Z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* Telegram */}
                                        <Link href="https://web.telegram.org/k/#@monotheismefr1" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-sky-500/10 hover:border-sky-500/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-sky-500 group-hover/icon:scale-110 transition-all duration-300">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* Facebook */}
                                        <Link href="https://www.facebook.com/MonotheismeFR" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-blue-600/10 hover:border-blue-600/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-blue-600 group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>

                                    <p className="text-[11px] text-muted-foreground/80 leading-relaxed">
                                        Sosyal medya hesaplarımızı takip edin
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Monotheismus Sosyal Medya */}
                            <Card className="group relative aspect-square max-w-[220px] mx-auto overflow-hidden border border-border/40 bg-card shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/20 active:scale-[0.99] transition-all duration-500 touch-manipulation">
                                {/* Arka Plan Görseli */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/monotheismus-arkaplan.jpeg"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                </div>

                                <CardContent className="relative z-10 p-3 flex flex-col items-center justify-center text-center h-full">
                                    {/* Profil Fotoğrafı */}
                                    <div className="relative mb-2 mt-1">
                                        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/40 to-amber-500/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/50 transition-all duration-300">
                                            <Image
                                                src="/images/monotheismus-logo.jpg"
                                                alt="Monotheismus"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <Badge className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] bg-primary text-primary-foreground border border-primary-foreground/20 shadow-sm">
                                            Sosyal Medya
                                        </Badge>
                                    </div>
                                    <span className="text-[10px] font-medium text-muted-foreground/60 mb-1">Almanca</span>

                                    <h3 className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors duration-300 mb-2">
                                        Monotheismus
                                    </h3>

                                    {/* Sosyal Medya İkonları - Minimal Siyah */}
                                    <div className="grid grid-cols-3 gap-1.5 mb-3 w-full max-w-[150px]">
                                        {/* X */}
                                        <Link href="http://x.com/monotheismusDE" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-black/10 hover:border-black/20 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-black group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* Instagram */}
                                        <Link href="https://www.instagram.com/monotheismus_de" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-gradient-to-tr hover:from-[#f09433]/20 hover:via-[#dc2743]/20 hover:to-[#bc1888]/20 hover:border-[#dc2743]/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-[#dc2743] group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* TikTok */}
                                        <Link href="https://www.tiktok.com/@monotheismusde" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-black/10 hover:border-black/20 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-black group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.11-.27-.26-.53-.55-.78-.85v10.51c-.01 1.63-.58 3.24-1.62 4.54-1.04 1.3-2.58 2.08-4.23 2.15-2.1.09-4.2-.82-5.46-2.5-1.35-1.81-1.39-4.32-.1-6.17 1.17-1.67 3.16-2.6 5.17-2.45v3.91c-.57-.1-1.18.15-1.55.59-.44.5-.42 1.25.03 1.73.43.46 1.16.51 1.65.11.45-.37.71-.94.69-1.53v-13.5a20.16 20.16 0 0 1 4.2-1.28c-1.35-.45-2.06-1.92-2.12-3.69Z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>

                                    <p className="text-[11px] text-muted-foreground/80 leading-relaxed">
                                        Sosyal medya hesaplarımızı takip edin
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

                            {/* Halis Bayancuk Hoca Sosyal Medya */}
                            <Card className="group relative aspect-square max-w-[220px] mx-auto overflow-hidden border border-border/40 bg-card shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/20 active:scale-[0.99] transition-all duration-500 touch-manipulation">
                                {/* Arka Plan Görseli */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/halisbayancuk_bg.png"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                </div>

                                <CardContent className="relative z-10 p-3 flex flex-col items-center justify-center text-center h-full">
                                    {/* Profil Fotoğrafı */}
                                    <div className="relative mb-2 mt-1">
                                        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/40 to-amber-500/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/50 transition-all duration-300">
                                            <Image
                                                src="/images/halisbayancuk.jpg"
                                                alt="Halis Bayancuk Hoca"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <Badge className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] bg-primary text-primary-foreground border border-primary-foreground/20 shadow-sm">
                                            Sosyal Medya
                                        </Badge>
                                    </div>
                                    <span className="text-[10px] font-medium text-muted-foreground/60 mb-1">Türkçe</span>

                                    {/* Başlık */}
                                    <h3 className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors duration-300 mb-2">
                                        Halis Bayancuk Hoca
                                    </h3>

                                    {/* Sosyal Medya İkonları - Minimal Siyah */}
                                    <div className="grid grid-cols-4 gap-1.5 mb-3 w-full max-w-[200px]">
                                        {/* X */}
                                        <Link href="https://x.com/Halis_Bayancuk" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-black/10 hover:border-black/20 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-black group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* WhatsApp */}
                                        <Link href="https://whatsapp.com/channel/0029VaBAj4L5PO0ycHhP7g17" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-green-500/10 hover:border-green-500/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-green-600 group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* Dailymotion */}
                                        <Link href="https://www.dailymotion.com/HalisBayancuk" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-blue-600/10 hover:border-blue-600/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-blue-600 group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M13.551 11.485c-1.02 0-1.97.411-2.65 1.088V7.25H8.165v9.5h2.736v-.391c.68.68 1.63 1.09 2.65 1.09 2.07 0 3.751-1.68 3.751-3.751s-1.68-3.751-3.751-3.751zm-.408 5.663c-1.055 0-1.912-.857-1.912-1.912s.857-1.912 1.912-1.912 1.912.857 1.912 1.912-.857 1.912-1.912 1.912zM23.25 12c0-6.213-5.037-11.25-11.25-11.25S.75 5.787.75 12 5.787 23.25 12 23.25 23.25 18.213 23.25 12zm-1.5 0c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* Telegram */}
                                        <Link href="https://web.telegram.org/k/#@HalisBayancukHoca" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-sky-500/10 hover:border-sky-500/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-sky-500 group-hover/icon:scale-110 transition-all duration-300">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>

                                    <p className="text-[11px] text-muted-foreground/80 leading-relaxed">
                                        Sosyal medya hesaplarımızı takip edin
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Halis Bayancuk Hoca (English) Sosyal Medya */}
                            <Card className="group relative aspect-square max-w-[220px] mx-auto overflow-hidden border border-border/40 bg-card shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/20 active:scale-[0.99] transition-all duration-500 touch-manipulation">
                                {/* Arka Plan Görseli */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/halisbayancuk-eng-arkaplan.jpeg"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                </div>

                                <CardContent className="relative z-10 p-3 flex flex-col items-center justify-center text-center h-full">
                                    {/* Profil Fotoğrafı */}
                                    <div className="relative mb-2 mt-1">
                                        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/40 to-amber-500/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/50 transition-all duration-300">
                                            <Image
                                                src="/images/halisbayancuk-eng-logo.jpg"
                                                alt="Halis Bayancuk Hoca"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <Badge className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] bg-primary text-primary-foreground border border-primary-foreground/20 shadow-sm">
                                            Sosyal Medya
                                        </Badge>
                                    </div>
                                    <span className="text-[10px] font-medium text-muted-foreground/60 mb-1">İngilizce</span>

                                    {/* Başlık */}
                                    <h3 className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors duration-300 mb-2">
                                        Halis Bayancuk Hoca
                                    </h3>

                                    {/* Sosyal Medya İkonları - Minimal Siyah */}
                                    <div className="grid grid-cols-1 gap-1.5 mb-3 w-full max-w-[40px]">
                                        {/* X */}
                                        <Link href="https://x.com/HalisBayancukEn" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-black/10 hover:border-black/20 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-black group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>

                                    <p className="text-[11px] text-muted-foreground/80 leading-relaxed">
                                        Sosyal medya hesaplarımızı takip edin
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Halis Bayancuk Hoca (French) Sosyal Medya */}
                            <Card className="group relative aspect-square max-w-[220px] mx-auto overflow-hidden border border-border/40 bg-card shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/20 active:scale-[0.99] transition-all duration-500 touch-manipulation">
                                {/* Arka Plan Görseli */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/halisbayancuk-fr-arkaplan.jpeg"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                </div>

                                <CardContent className="relative z-10 p-3 flex flex-col items-center justify-center text-center h-full">
                                    {/* Profil Fotoğrafı */}
                                    <div className="relative mb-2 mt-1">
                                        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/40 to-amber-500/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/50 transition-all duration-300">
                                            <Image
                                                src="/images/halisbayancuk-fr-logo.jpg"
                                                alt="Halis Bayancuk Hoca"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <Badge className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] bg-primary text-primary-foreground border border-primary-foreground/20 shadow-sm">
                                            Sosyal Medya
                                        </Badge>
                                    </div>
                                    <span className="text-[10px] font-medium text-muted-foreground/60 mb-1">Fransızca</span>

                                    {/* Başlık */}
                                    <h3 className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors duration-300 mb-2">
                                        Halis Bayancuk Hoca
                                    </h3>

                                    {/* Sosyal Medya İkonları - Minimal Siyah */}
                                    <div className="grid grid-cols-1 gap-1.5 mb-3 w-full max-w-[40px]">
                                        {/* X */}
                                        <Link href="https://x.com/HalisBayancukFR" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-black/10 hover:border-black/20 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-black group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>

                                    <p className="text-[11px] text-muted-foreground/80 leading-relaxed">
                                        Sosyal medya hesaplarımızı takip edin
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

                            {/* Bizim Dünyamız Sosyal Medya */}
                            <Card className="group relative aspect-square max-w-[220px] mx-auto overflow-hidden border border-border/40 bg-card shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/20 active:scale-[0.99] transition-all duration-500 touch-manipulation">
                                {/* Arka Plan Görseli */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/bizimdunyamiz.jpg"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                </div>

                                <CardContent className="relative z-10 p-3 flex flex-col items-center justify-center text-center h-full">
                                    {/* Profil Fotoğrafı */}
                                    <div className="relative mb-2 mt-1">
                                        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/40 to-amber-500/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/50 transition-all duration-300">
                                            <Image
                                                src="/images/bizimdunyamiz.jpg"
                                                alt="Bizim Dünyamız"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <Badge className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] bg-primary text-primary-foreground border border-primary-foreground/20 shadow-sm">
                                            Sosyal Medya
                                        </Badge>
                                    </div>
                                    <span className="text-[5px] font-medium text-transparent mb-1 select-none">Boşluk</span>

                                    {/* Başlık */}
                                    <h3 className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors duration-300 mb-2">
                                        Bizim Dünyamız
                                    </h3>

                                    {/* Sosyal Medya İkonları - Minimal Siyah */}
                                    <div className="grid grid-cols-3 gap-1.5 mb-3 w-full max-w-[150px]">
                                        {/* X */}
                                        <Link href="https://x.com/_bizimdunyamiz" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-black/10 hover:border-black/20 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-black group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* Instagram */}
                                        <Link href="https://www.instagram.com/bizim.dunyamiz__/" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-gradient-to-tr hover:from-[#f09433]/20 hover:via-[#dc2743]/20 hover:to-[#bc1888]/20 hover:border-[#dc2743]/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-[#dc2743] group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* WhatsApp */}
                                        <Link href="https://whatsapp.com/channel/0029VazWlQW4CrfoVPAscK03" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-green-500/10 hover:border-green-500/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-green-600 group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>

                                    <p className="text-[11px] text-muted-foreground/80 leading-relaxed">
                                        Sosyal medya hesaplarımızı takip edin
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Tevhid Meali Sosyal Medya */}
                            <Card className="group relative aspect-square max-w-[220px] mx-auto overflow-hidden border border-border/40 bg-card shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/20 active:scale-[0.99] transition-all duration-500 touch-manipulation">
                                {/* Arka Plan Görseli */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="https://pbs.twimg.com/media/GF_l120W4AAX4J_?format=jpg&name=small"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                </div>

                                <CardContent className="relative z-10 p-3 flex flex-col items-center justify-center text-center h-full">
                                    {/* Profil Fotoğrafı */}
                                    <div className="relative mb-2 mt-1">
                                        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/40 to-amber-500/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/50 transition-all duration-300">
                                            <Image
                                                src="/images/tevhidmealiikon.webp"
                                                alt="Tevhid Meali"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <Badge className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] bg-primary text-primary-foreground border border-primary-foreground/20 shadow-sm">
                                            Sosyal Medya
                                        </Badge>
                                    </div>


                                    <span className="text-[5px] font-medium text-transparent mb-1 select-none">Boşluk</span>

                                    {/* Başlık */}
                                    <h3 className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors duration-300 mb-2">
                                        Tevhid Meali
                                    </h3>

                                    {/* Sosyal Medya İkonları - Minimal Siyah */}
                                    <div className="grid grid-cols-3 gap-1.5 mb-3 w-full max-w-[150px]">
                                        {/* X */}
                                        <Link href="https://x.com/tevhidmeali" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-black/10 hover:border-black/20 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-black group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* Instagram */}
                                        <Link href="https://www.instagram.com/tevhidmeali" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-gradient-to-tr hover:from-[#f09433]/20 hover:via-[#dc2743]/20 hover:to-[#bc1888]/20 hover:border-[#dc2743]/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-[#dc2743] group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* Telegram */}
                                        <Link href="https://web.telegram.org/k/#@TevhidMealiii" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-sky-500/10 hover:border-sky-500/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-sky-500 group-hover/icon:scale-110 transition-all duration-300">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>

                                    <p className="text-[11px] text-muted-foreground/80 leading-relaxed">
                                        Sosyal medya hesaplarımızı takip edin
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Tevhid Kitap Sosyal Medya */}
                            <Card className="group relative aspect-square max-w-[220px] mx-auto overflow-hidden border border-border/40 bg-card shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/20 active:scale-[0.99] transition-all duration-500 touch-manipulation">
                                {/* Arka Plan Görseli */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/tevhid-kitap-arkaplan.jpeg"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                </div>

                                <CardContent className="relative z-10 p-3 flex flex-col items-center justify-center text-center h-full">
                                    {/* Profil Fotoğrafı */}
                                    <div className="relative mb-2 mt-1">
                                        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/40 to-amber-500/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/50 transition-all duration-300">
                                            <Image
                                                src="/images/tevhid-kitap-logo.png"
                                                alt="Tevhid Kitap"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <Badge className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] bg-primary text-primary-foreground border border-primary-foreground/20 shadow-sm">
                                            Sosyal Medya
                                        </Badge>
                                    </div>


                                    <span className="text-[5px] font-medium text-transparent mb-1 select-none">Boşluk</span>

                                    {/* Başlık */}
                                    <h3 className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors duration-300 mb-2">
                                        Tevhid Kitap
                                    </h3>

                                    {/* Sosyal Medya İkonları - Minimal Siyah */}
                                    <div className="grid grid-cols-3 gap-1.5 mb-3 w-full max-w-[150px]">
                                        {/* X */}
                                        <Link href="https://x.com/tevhidkitap_" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-black/10 hover:border-black/20 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-black group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* Instagram */}
                                        <Link href="https://www.instagram.com/tevhidkitap_/" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-gradient-to-tr hover:from-[#f09433]/20 hover:via-[#dc2743]/20 hover:to-[#bc1888]/20 hover:border-[#dc2743]/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-[#dc2743] group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* WhatsApp */}
                                        <Link href="https://whatsapp.com/channel/0029Va7U0h94Y9lhjRR4hI2C" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-green-500/10 hover:border-green-500/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-green-600 group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>

                                    <p className="text-[11px] text-muted-foreground/80 leading-relaxed">
                                        Sosyal medya hesaplarımızı takip edin
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Tevhidi Uyanış Sosyal Medya */}
                            <Card className="group relative aspect-square max-w-[220px] mx-auto overflow-hidden border border-border/40 bg-card shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/20 active:scale-[0.99] transition-all duration-500 touch-manipulation">
                                {/* Arka Plan Görseli */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/images/tevhidi-uyanıs-arkaplan.jpeg"
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
                                </div>

                                <CardContent className="relative z-10 p-3 flex flex-col items-center justify-center text-center h-full">
                                    {/* Profil Fotoğrafı */}
                                    <div className="relative mb-2 mt-1">
                                        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/40 to-amber-500/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/50 transition-all duration-300">
                                            <Image
                                                src="/images/tevhidi-uyanıs.jpg"
                                                alt="Tevhidi Uyanış"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <Badge className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] bg-primary text-primary-foreground border border-primary-foreground/20 shadow-sm">
                                            Sosyal Medya
                                        </Badge>
                                    </div>


                                    <span className="text-[5px] font-medium text-transparent mb-1 select-none">Boşluk</span>

                                    {/* Başlık */}
                                    <h3 className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors duration-300 mb-2">
                                        Tevhidi Uyanış
                                    </h3>

                                    {/* Sosyal Medya İkonları - Minimal Siyah */}
                                    <div className="grid grid-cols-3 gap-1.5 mb-3 w-full max-w-[150px]">
                                        {/* X */}
                                        <Link href="https://x.com/uyanisofficial" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-black/10 hover:border-black/20 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-black group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* Instagram */}
                                        <Link href="https://www.instagram.com/uyanisofficiall/" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-gradient-to-tr hover:from-[#f09433]/20 hover:via-[#dc2743]/20 hover:to-[#bc1888]/20 hover:border-[#dc2743]/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-[#dc2743] group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                                </svg>
                                            </div>
                                        </Link>

                                        {/* WhatsApp */}
                                        <Link href="https://whatsapp.com/channel/0029VaB6R10LtOj6J5KRlj1Z" target="_blank" className="group/icon active:scale-95 transition-transform">
                                            <div className="w-8 h-8 rounded-lg bg-muted/60 border border-border/40 hover:bg-green-500/10 hover:border-green-500/30 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-foreground/80 group-hover/icon:text-green-600 group-hover/icon:scale-110 transition-all duration-300">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>

                                    <p className="text-[11px] text-muted-foreground/80 leading-relaxed">
                                        Sosyal medya hesaplarımızı takip edin
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
