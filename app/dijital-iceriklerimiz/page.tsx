
import Image from "next/image";
import Link from "next/link";
import { Youtube, ArrowRight } from "lucide-react";
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
                                <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden">
                                    {/* Header with Background Image */}
                                    <div className="relative h-24 w-full overflow-hidden">
                                        <Image
                                            src="/images/tevhiddersleriarkaplan.jpg"
                                            alt="Tevhid Dersleri Background"
                                            fill
                                            className="object-cover opacity-60"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                    </div>

                                    <CardContent className="p-6 -mt-8 relative">
                                        <div className="flex items-start gap-3 mb-3">
                                            {/* Channel Logo */}
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-lg flex-shrink-0">
                                                <Image
                                                    src="/images/tevhiddersleri.jpg"
                                                    alt="Tevhid Dersleri"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-2">
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-semibold text-lg mb-1 truncate">Tevhid Dersleri</h4>
                                                        <p className="text-xs text-muted-foreground">Türkçe</p>
                                                    </div>
                                                    <Youtube className="w-5 h-5 text-red-600 flex-shrink-0" />
                                                </div>
                                            </div>
                                        </div>

                                        <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                                            <Link href="https://www.youtube.com/@tevhiddersleri_" target="_blank">
                                                Kanala Git
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Dersên Tewhîdê - Kürtçe */}
                                <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden">
                                    <div className="relative h-24 w-full overflow-hidden">
                                        <Image
                                            src="https://yt3.googleusercontent.com/git-RhL2ph3-p0vP_a491x13GVdXQx_b3aR_wUh78ZWaa1yq-DR6y3S-z-YkIDBHbATIoEea=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Dersên Tewhîdê Background"
                                            fill
                                            className="object-cover opacity-70"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                                    </div>

                                    <CardContent className="p-6 -mt-8 relative">
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-lg flex-shrink-0">
                                                <Image
                                                    src="/images/tevhiddersleri.jpg"
                                                    alt="Dersên Tewhîdê"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-2">
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-semibold text-lg mb-1 truncate">Dersên Tewhîdê</h4>
                                                        <p className="text-xs text-muted-foreground">Kürtçe</p>
                                                    </div>
                                                    <Youtube className="w-5 h-5 text-red-600 flex-shrink-0" />
                                                </div>
                                            </div>
                                        </div>

                                        <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                                            <Link href="https://www.youtube.com/@dersentewhide" target="_blank">
                                                Kanala Git
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Monotheism - İngilizce */}
                                <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden">
                                    <div className="relative h-24 w-full overflow-hidden">
                                        <Image
                                            src="https://yt3.googleusercontent.com/GBTT0aHQRnxnQlFwmN9cJ9Pq2CD6qZkN9gYyNYtFeW6bMzs6h0VmFo26jCwGw5dwrCSiTUbC=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Monotheism Background"
                                            fill
                                            className="object-cover opacity-70"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                    </div>

                                    <CardContent className="p-6 -mt-8 relative">
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-lg flex-shrink-0">
                                                <Image
                                                    src="https://yt3.googleusercontent.com/P2UC8rcCzoYMREmxms2QRN_E3JLCYGarfU6rbqQe0s2QT521WrjsoIioj_KnW6hLOuCTaa_AzKc=s160-c-k-c0x00ffffff-no-rj"
                                                    alt="Monotheism"
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-2">
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-semibold text-lg mb-1 truncate">Monotheism</h4>
                                                        <p className="text-xs text-muted-foreground">İngilizce</p>
                                                    </div>
                                                    <Youtube className="w-5 h-5 text-red-600 flex-shrink-0" />
                                                </div>
                                            </div>
                                        </div>

                                        <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                                            <Link href="https://www.youtube.com/@Monotheismeng" target="_blank">
                                                Kanala Git
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Monothéisme - Fransızca */}
                                <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden">
                                    <div className="relative h-24 w-full overflow-hidden">
                                        <Image
                                            src="https://yt3.googleusercontent.com/j5VzZMA-KWtKiHXFuQwnNA2zhisDFHsoVJG5UauVb2kXrDccH9-sYJ3Oa8qtb-AMZCHpWf5MZg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Monothéisme Background"
                                            fill
                                            className="object-cover opacity-70"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                    </div>

                                    <CardContent className="p-6 -mt-8 relative">
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-lg flex-shrink-0">
                                                <Image
                                                    src="https://yt3.googleusercontent.com/ihdBm4IRQMSBqJummTvSLQDZTK1IR60bYM5XYUTYYn7fTh_igRI6VH57G0Pmt6bYI8bmmkI_=s160-c-k-c0x00ffffff-no-rj"
                                                    alt="Monothéisme"
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-2">
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-semibold text-lg mb-1 truncate">Monothéisme</h4>
                                                        <p className="text-xs text-muted-foreground">Fransızca</p>
                                                    </div>
                                                    <Youtube className="w-5 h-5 text-red-600 flex-shrink-0" />
                                                </div>
                                            </div>
                                        </div>

                                        <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                                            <Link href="https://www.youtube.com/@monotheismefr" target="_blank">
                                                Kanala Git
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Monotheismus - Almanca */}
                                <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden">
                                    <div className="relative h-24 w-full overflow-hidden">
                                        <Image
                                            src="https://yt3.googleusercontent.com/y6pSLyCG3IJTbcfhAZMs8uE8d4BR2ebpdIlyRzhNwaUbI2b39HEV3lwDZwFrIKtWeTjvrok8CA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Monotheismus Background"
                                            fill
                                            className="object-cover opacity-70"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                    </div>

                                    <CardContent className="p-6 -mt-8 relative">
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-lg flex-shrink-0">
                                                <Image
                                                    src="https://yt3.googleusercontent.com/UJL_P2mXgCfBTSJd7A__W_7eJVKSIOGa8DAyrjEjMwAredIHVvNS2fvSlYTx71G03sukH3zzNg=s160-c-k-c0x00ffffff-no-rj"
                                                    alt="Monotheismus"
                                                    fill
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-2">
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-semibold text-lg mb-1 truncate">Monotheismus</h4>
                                                        <p className="text-xs text-muted-foreground">Almanca</p>
                                                    </div>
                                                    <Youtube className="w-5 h-5 text-red-600 flex-shrink-0" />
                                                </div>
                                            </div>
                                        </div>

                                        <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                                            <Link href="https://www.youtube.com/@monotheismusde" target="_blank">
                                                Kanala Git
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
                                <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden">
                                    {/* Header with Background Image */}
                                    <div className="relative h-24 w-full overflow-hidden">
                                        <Image
                                            src="https://yt3.googleusercontent.com/b3xa30I-CNKqVHu8E4mATMiLFpA7BULkqBhuZJYL-JZFcwTtQ7i-xPtaleSu9se_8_33CteYSA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Halis Bayancuk Hoca Background"
                                            fill
                                            className="object-cover opacity-70"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                    </div>

                                    <CardContent className="p-6 -mt-8 relative">
                                        <div className="flex items-start gap-3 mb-3">
                                            {/* Channel Logo */}
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-lg flex-shrink-0">
                                                <Image
                                                    src="/images/halisbayancuk.jpg"
                                                    alt="Halis Bayancuk Hoca"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-2">
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-semibold text-lg mb-1 truncate">Halis Bayancuk Hoca</h4>
                                                        <p className="text-xs text-muted-foreground">Türkçe</p>
                                                    </div>
                                                    <Youtube className="w-5 h-5 text-red-600 flex-shrink-0" />
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-sm text-muted-foreground mb-4">
                                            Ebu Hanzala Hoca'nın Cuma hutbeleri, güncel meselelere dair değerlendirmeleri ve özel sohbetleri.
                                        </p>
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <Link href="https://www.youtube.com/@HalisBayancuk_Hoca" target="_blank">
                                                Kanala Git
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Bizim Dünyamız */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 pb-4 border-b">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-border shadow-lg">
                                    <Image
                                        src="/images/bizimdunyamiz.jpg"
                                        alt="Bizim Dünyamız"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Bizim Dünyamız</h3>
                                    <p className="text-sm text-muted-foreground">Kültür, Sanat ve Kısa Film</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden">
                                    {/* Header with Background Image */}
                                    <div className="relative h-24 w-full overflow-hidden">
                                        <Image
                                            src="https://yt3.googleusercontent.com/CbqXZU4y5qv7OR2RZx_Q8kLgBXY7BJ78FTBJXrnflhmVqQ7ydXdXuSRlgDvzxbI3Zd9FfwLPCg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                                            alt="Bizim Dünyamız Background"
                                            fill
                                            className="object-cover opacity-70"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                    </div>

                                    <CardContent className="p-6 -mt-8 relative">
                                        <div className="flex items-start gap-3 mb-3">
                                            {/* Channel Logo */}
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-lg flex-shrink-0">
                                                <Image
                                                    src="/images/bizimdunyamiz.jpg"
                                                    alt="Bizim Dünyamız"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-2">
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-semibold text-lg mb-1 truncate">Bizim Dünyamız</h4>
                                                        <p className="text-xs text-muted-foreground">Türkçe</p>
                                                    </div>
                                                    <Youtube className="w-5 h-5 text-red-600 flex-shrink-0" />
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-sm text-muted-foreground mb-4">
                                            İslami ahlakı, fıtratın sesini ve örnek şahsiyetleri konu alan belgesel tadında kısa filmler.
                                        </p>
                                        <Button variant="outline" size="sm" className="w-full" asChild>
                                            <Link href="https://www.youtube.com/@_bizimdunyamiz" target="_blank">
                                                Kanala Git
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
            <section id="sitelerimiz" className="py-20 md:py-32 bg-muted/20">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Web Sitelerimiz</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            İlmi çalışmalarımızı, neşriyatımızı ve diğer tüm faaliyetlerimizi disiplinli bir şekilde kategorize ettiğimiz dijital platformlarımız.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                            Tevhid ve Sünnet eksenli yayın yapan web sitelerimiz, farklı alanlarda ilmi içerikler sunmaktadır.
                            Meal çalışmalarından derslere, dergiden şahsi sitelere kadar geniş bir yelpazede hizmet veriyoruz.
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/web-sitelerimiz">
                                Tüm Web Sitelerimizi Görüntüle <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* UYGULAMALARIMIZ */}
            <section id="uygulamalarimiz" className="py-20 md:py-32 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Mobil Uygulamalarımız</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            İlmi kaynaklarınıza her an ulaşabileceğiniz, Android ve iOS platformlarında ücretsiz mobil uygulamalarımız.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                            Tevhid Meali, Anlat Bakalım ve Kıblegâh uygulamalarımızla ilmi çalışmalarımızı cebinizde taşıyın.
                            Kur'an meali, eğitici oyunlar ve dergi arşivine mobil cihazlarınızdan kolayca erişin.
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/mobil-uygulamalar">
                                Tüm Uygulamalarımızı Görüntüle <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
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

                    <div className="flex justify-center">
                        <div className="premium-social-card-wrapper">
                            <div className="premium-social-card group/main cursor-pointer">
                                <div className="ps-background"></div>

                                {/* CENTER LOGO - Profile Image with Frame */}
                                <div className="ps-logo flex flex-col items-center gap-3">
                                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_0_0_1px_rgba(0,0,0,0.05)] ring-2 ring-black/5 transition-all duration-800 group-hover:scale-110 group-hover:shadow-[0_12px_48px_rgba(0,0,0,0.25),inset_0_0_0_1px_rgba(0,0,0,0.08)] group-hover:ring-black/10">
                                        <Image
                                            src="/images/halisbayancuk.jpg"
                                            alt="Halis Bayancuk"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                    <span className={`${cinzel.className} text-black font-semibold text-sm tracking-tight text-center whitespace-nowrap`}>
                                        Halis Bayancuk Hoca
                                    </span>
                                </div>

                                {/* Box 1 - X (Twitter) */}
                                <Link href="https://x.com/tevhiddersleri" target="_blank" className="ps-box ps-box1">
                                    <span className="ps-icon-wrapper">
                                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                        </svg>
                                    </span>
                                </Link>

                                {/* Box 2 - Website */}
                                <Link href="https://tevhiddersleri.org" target="_blank" className="ps-box ps-box2">
                                    <span className="ps-icon-wrapper">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                        </svg>
                                    </span>
                                </Link>

                                {/* Box 3 - WhatsApp */}
                                <Link href="https://wa.me" target="_blank" className="ps-box ps-box3">
                                    <span className="ps-icon-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 339.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56 81.2 56 130.5 0 101.8-84.1 184.6-185.5 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.1 37.4-25.7 4.6-12.6 4.6-23.3 3.2-25.7z" />
                                        </svg>
                                    </span>
                                </Link>

                                {/* Box 4 - Telegram */}
                                <Link href="https://t.me/tevhiddersleri" target="_blank" className="ps-box ps-box4">
                                    <span className="ps-icon-wrapper">
                                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" />
                                        </svg>
                                    </span>
                                </Link>

                                {/* Box 5 - Dailymotion */}
                                <Link href="https://www.dailymotion.com/tevhiddersleri" target="_blank" className="ps-box ps-box5">
                                    <span className="ps-icon-wrapper">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                            <path d="M13.551 11.485c-1.02 0-1.97.411-2.65 1.088V7.25H8.165v9.5h2.736v-.391c.68.68 1.63 1.09 2.65 1.09 2.07 0 3.751-1.68 3.751-3.751s-1.68-3.751-3.751-3.751zm-.408 5.663c-1.055 0-1.912-.857-1.912-1.912s.857-1.912 1.912-1.912 1.912.857 1.912 1.912-.857 1.912-1.912 1.912zM23.25 12c0-6.213-5.037-11.25-11.25-11.25S.75 5.787.75 12 5.787 23.25 12 23.25 23.25 18.213 23.25 12zm-1.5 0c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75z" />
                                        </svg>
                                    </span>
                                </Link>

                                {/* Box 6 - Instagram */}
                                <Link href="https://www.instagram.com/tevhiddersleri" target="_blank" className="ps-box ps-box6">
                                    <span className="ps-icon-wrapper">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                        </svg>
                                    </span>
                                </Link>

                                {/* Box 7 - Facebook */}
                                <Link href="https://www.facebook.com/tevhiddersleri" target="_blank" className="ps-box ps-box7">
                                    <span className="ps-icon-wrapper">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
