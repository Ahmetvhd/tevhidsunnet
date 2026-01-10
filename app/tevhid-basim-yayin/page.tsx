
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowRight, ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cinzel } from "@/lib/fonts";
import type { Metadata } from "next";
import { Magazine3D } from "@/components/book-3d";


export const metadata: Metadata = {
    title: "Tevhid Basım Yayın | Tevhid ve Sünnet",
    description: "Dergilerimiz ve kitaplarımız hakkında bilgi edinin.",
};

import { PageHero } from "@/components/page-hero";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function TevhidBasimYayinPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <PageHero
                badge="Yayınlarımız"
                title="Tevhid Basım Yayın"
                description="İlmi birikimi satırlara döküyor, kütüphanelerinize misafir oluyoruz"
            />


            {/* SON ÇIKAN SAYI */}
            <section className="py-20 bg-primary/5">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="relative flex items-center justify-center bg-muted/40 rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-12 md:p-16 border border-primary/10 group overflow-hidden">
                            {/* Abstract Background Decoration */}
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary),0.05),transparent)] pointer-events-none" />

                            <Magazine3D
                                src="/images/153.sayi.jpg"
                                alt="Tevhid Dergisi Son Sayı"
                                size="large"
                                priority
                            />
                            <div className="absolute top-6 right-6 group-hover:scale-110 transition-transform duration-500 z-10">
                                <Badge className="bg-primary text-primary-foreground text-lg px-6 py-2 shadow-2xl border-none">YENİ SAYI</Badge>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                                    Tevhid Dergisi 153. Sayı Çıktı!
                                </h2>
                                <p className="text-xl text-primary font-medium">
                                    "Zulmün Karanlığından İslam'ın Aydınlığına"
                                </p>
                            </div>

                            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    Halis Hoca'nın kaleminden "Başyazı" bölümünde; İslam coğrafyasında yaşanan son gelişmeler akidevi bir perspektifle ele alınıyor.
                                </p>
                                <blockquote className="border-l-4 border-primary pl-4 italic bg-background/50 p-4 rounded-r-lg">
                                    "Yeryüzünde fitne kalkıp din yalnız Allah'ın oluncaya kadar onlarla savaşın..." (Enfal, 39)
                                </blockquote>
                                <p>
                                    Tevhid inancının toplumsal yansımaları, sünnetin ihyası ve güncel fıkhi meseleler bu ayki sayımızda sizleri bekliyor.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="h-12 px-8 text-base">
                                    <BookOpen className="mr-2 h-5 w-5" />
                                    Sayıyı Oku
                                </Button>
                                <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                                    <Link href="https://tevhiddergisi.org/tevhid-dergisi/" target="_blank">
                                        <ArrowRight className="mr-2 h-5 w-5" />
                                        Tüm Sayılar
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEVHİD DERGİSİ */}
            <section id="tevhid-dergisi" className="py-20 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-8 md:mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tevhid Dergisi</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Tevhid ve Sünnet inancının kalesi
                        </p>
                    </div>

                    {/* Desktop Grid - Hidden on Mobile */}
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                        {/* Sayı 152 */}
                        <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                <Magazine3D
                                    src="/images/152.sayi.jpg"
                                    alt="Tevhid Dergisi Sayı 152"
                                />
                            </div>
                            <CardContent className="pt-6 bg-card border-t border-border/10">
                                <h3 className="font-semibold text-lg leading-tight mb-2">
                                    Tevhid Dergisi - Sayı 152
                                </h3>
                                <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">
                                    İncele & Oku <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Sayı 151 */}
                        <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                <Magazine3D
                                    src="/images/151.sayi.jpg"
                                    alt="Tevhid Dergisi Sayı 151"
                                />
                            </div>
                            <CardContent className="pt-6 bg-card border-t border-border/10">
                                <h3 className="font-semibold text-lg leading-tight mb-2">
                                    Tevhid Dergisi - Sayı 151
                                </h3>
                                <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">
                                    İncele & Oku <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Sayı 150 */}
                        <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                <Magazine3D
                                    src="/images/150.sayi.jpg"
                                    alt="Tevhid Dergisi Sayı 150"
                                />
                            </div>
                            <CardContent className="pt-6 bg-card border-t border-border/10">
                                <h3 className="font-semibold text-lg leading-tight mb-2">
                                    Tevhid Dergisi - Sayı 150
                                </h3>
                                <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">
                                    İncele & Oku <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Sayı 149 */}
                        <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                <Magazine3D
                                    src="/images/149.sayi.jpeg"
                                    alt="Tevhid Dergisi Sayı 149"
                                />
                            </div>
                            <CardContent className="pt-6 bg-card border-t border-border/10">
                                <h3 className="font-semibold text-lg leading-tight mb-2">
                                    Tevhid Dergisi - Sayı 149
                                </h3>
                                <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">
                                    İncele & Oku <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Mobile Carousel - Visible only on Mobile */}
                    <div className="block md:hidden px-4">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-4">
                                {/* Sayı 152 */}
                                <CarouselItem className="pl-4 basis-[85%]">
                                    <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                        <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                            <Magazine3D
                                                src="/images/152.sayi.jpg"
                                                alt="Tevhid Dergisi Sayı 152"
                                            />
                                        </div>
                                        <CardContent className="pt-6 bg-card border-t border-border/10">
                                            <h3 className="font-semibold text-lg leading-tight mb-2">
                                                Tevhid Dergisi - Sayı 152
                                            </h3>
                                            <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">
                                                İncele & Oku <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                {/* Sayı 151 */}
                                <CarouselItem className="pl-4 basis-[85%]">
                                    <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                        <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                            <Magazine3D
                                                src="/images/151.sayi.jpg"
                                                alt="Tevhid Dergisi Sayı 151"
                                            />
                                        </div>
                                        <CardContent className="pt-6 bg-card border-t border-border/10">
                                            <h3 className="font-semibold text-lg leading-tight mb-2">
                                                Tevhid Dergisi - Sayı 151
                                            </h3>
                                            <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">
                                                İncele & Oku <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                {/* Sayı 150 */}
                                <CarouselItem className="pl-4 basis-[85%]">
                                    <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                        <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                            <Magazine3D
                                                src="/images/150.sayi.jpg"
                                                alt="Tevhid Dergisi Sayı 150"
                                            />
                                        </div>
                                        <CardContent className="pt-6 bg-card border-t border-border/10">
                                            <h3 className="font-semibold text-lg leading-tight mb-2">
                                                Tevhid Dergisi - Sayı 150
                                            </h3>
                                            <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">
                                                İncele & Oku <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                {/* Sayı 149 */}
                                <CarouselItem className="pl-4 basis-[85%]">
                                    <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                        <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                            <Magazine3D
                                                src="/images/149.sayi.jpeg"
                                                alt="Tevhid Dergisi Sayı 149"
                                            />
                                        </div>
                                        <CardContent className="pt-6 bg-card border-t border-border/10">
                                            <h3 className="font-semibold text-lg leading-tight mb-2">
                                                Tevhid Dergisi - Sayı 149
                                            </h3>
                                            <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">
                                                İncele & Oku <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            </CarouselContent>
                            <div className="flex justify-center gap-2 mt-4">
                                <CarouselPrevious className="static translate-y-0 translate-x-0 h-8 w-8" />
                                <CarouselNext className="static translate-y-0 translate-x-0 h-8 w-8" />
                            </div>
                        </Carousel>
                    </div>

                    <div className="flex justify-center mt-12">
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary/20 hover:border-primary text-primary" asChild>
                            <a href="https://tevhiddergisi.org/tevhid-dergisi/" target="_blank" rel="noopener noreferrer">
                                Tüm Dergileri Gör <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* TEVHİD ÇOCUK SON SAYI */}
            <section className="py-20 bg-primary/5">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="relative flex items-center justify-center bg-muted/40 rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-12 md:p-16 border border-primary/10 group overflow-hidden">
                            {/* Abstract Background Decoration */}
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary),0.05),transparent)] pointer-events-none" />

                            <Magazine3D
                                src="/images/31.sayi.jpg"
                                alt="Tevhid Çocuk Son Sayı"
                                size="large"
                                priority
                            />
                            <div className="absolute top-6 right-6 group-hover:scale-110 transition-transform duration-500 z-10">
                                <Badge className="bg-primary text-primary-foreground text-lg px-6 py-2 shadow-2xl border-none">YENİ SAYI</Badge>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                                    Tevhid Çocuk 31. Sayı Çıktı!
                                </h2>
                                <p className="text-xl text-primary font-medium">
                                    "Minik Kalplerde Büyük İman"
                                </p>
                            </div>

                            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    Sevgili çocuklar! Bu sayımızda Peygamber Efendimiz'in hayatından çok özel kıssalar, arkadaşlığın ve kardeşliğin önemi üzerine sıcacık hikayeler sizi bekliyor.
                                </p>
                                <blockquote className="border-l-4 border-primary pl-4 italic bg-background/50 p-4 rounded-r-lg">
                                    "Sizin en hayırlınız, ahlakı en güzel olanınızdır."
                                </blockquote>
                                <p>
                                    Bulmacalar, boyama sayfaları ve ödüllü yarışmalarımızla hem eğlenecek hem de dinimizi en güzel şekilde öğreneceğiz.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="h-12 px-8 text-base">
                                    <BookOpen className="mr-2 h-5 w-5" />
                                    Sayıyı İncele
                                </Button>
                                <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
                                    <Link href="https://tevhiddergisi.org/tevhid-cocuk-dergisi/" target="_blank">
                                        <ArrowRight className="mr-2 h-5 w-5" />
                                        Tüm Sayılar
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEVHİD ÇOCUK */}
            <section id="tevhid-cocuk" className="py-20 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-8 md:mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tevhid Çocuk</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Geleceğin muvahhidleri için eğlenceli ve öğretici içerikler
                        </p>
                    </div>

                    {/* Desktop Grid - Hidden on Mobile */}
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                        {/* Sayı 30 */}
                        <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                <Magazine3D
                                    src="/images/30.sayi.jpg"
                                    alt="Tevhid Çocuk Sayı 30"
                                />
                            </div>
                            <CardContent className="pt-6 bg-card border-t border-border/10">
                                <h3 className="font-semibold text-lg leading-tight mb-2">
                                    Tevhid Çocuk - Sayı 30
                                </h3>
                                <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">
                                    İncele & Oku <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Sayı 29 */}
                        <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                <Magazine3D
                                    src="/images/29.sayi.jpeg"
                                    alt="Tevhid Çocuk Sayı 29"
                                />
                            </div>
                            <CardContent className="pt-6 bg-card border-t border-border/10">
                                <h3 className="font-semibold text-lg leading-tight mb-2">
                                    Tevhid Çocuk - Sayı 29
                                </h3>
                                <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">
                                    İncele & Oku <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Sayı 28 */}
                        <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                <Magazine3D
                                    src="/images/28.sayi.jpg"
                                    alt="Tevhid Çocuk Sayı 28"
                                />
                            </div>
                            <CardContent className="pt-6 bg-card border-t border-border/10">
                                <h3 className="font-semibold text-lg leading-tight mb-2">
                                    Tevhid Çocuk - Sayı 28
                                </h3>
                                <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">
                                    İncele & Oku <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Sayı 27 */}
                        <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                <Magazine3D
                                    src="/images/27.sayi.jpg"
                                    alt="Tevhid Çocuk Sayı 27"
                                />
                            </div>
                            <CardContent className="pt-6 bg-card border-t border-border/10">
                                <h3 className="font-semibold text-lg leading-tight mb-2">
                                    Tevhid Çocuk - Sayı 27
                                </h3>
                                <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">
                                    İncele & Oku <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Mobile Carousel - Visible only on Mobile */}
                    <div className="block md:hidden px-4">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-4">
                                {/* Sayı 30 */}
                                <CarouselItem className="pl-4 basis-[85%]">
                                    <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                        <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                            <Magazine3D
                                                src="/images/30.sayi.jpg"
                                                alt="Tevhid Çocuk Sayı 30"
                                            />
                                        </div>
                                        <CardContent className="pt-6 bg-card border-t border-border/10">
                                            <h3 className="font-semibold text-lg leading-tight mb-2">Tevhid Çocuk - Sayı 30</h3>
                                            <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">İncele & Oku <ArrowRight className="ml-2 h-4 w-4" /></Button>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                {/* Sayı 29 */}
                                <CarouselItem className="pl-4 basis-[85%]">
                                    <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                        <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                            <Magazine3D
                                                src="/images/29.sayi.jpeg"
                                                alt="Tevhid Çocuk Sayı 29"
                                            />
                                        </div>
                                        <CardContent className="pt-6 bg-card border-t border-border/10">
                                            <h3 className="font-semibold text-lg leading-tight mb-2">Tevhid Çocuk - Sayı 29</h3>
                                            <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">İncele & Oku <ArrowRight className="ml-2 h-4 w-4" /></Button>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                {/* Sayı 28 */}
                                <CarouselItem className="pl-4 basis-[85%]">
                                    <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                        <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                            <Magazine3D
                                                src="/images/28.sayi.jpg"
                                                alt="Tevhid Çocuk Sayı 28"
                                            />
                                        </div>
                                        <CardContent className="pt-6 bg-card border-t border-border/10">
                                            <h3 className="font-semibold text-lg leading-tight mb-2">Tevhid Çocuk - Sayı 28</h3>
                                            <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">İncele & Oku <ArrowRight className="ml-2 h-4 w-4" /></Button>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>

                                {/* Sayı 27 */}
                                <CarouselItem className="pl-4 basis-[85%]">
                                    <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                        <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                            <Magazine3D
                                                src="/images/27.sayi.jpg"
                                                alt="Tevhid Çocuk Sayı 27"
                                            />
                                        </div>
                                        <CardContent className="pt-6 bg-card border-t border-border/10">
                                            <h3 className="font-semibold text-lg leading-tight mb-2">Tevhid Çocuk - Sayı 27</h3>
                                            <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">İncele & Oku <ArrowRight className="ml-2 h-4 w-4" /></Button>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            </CarouselContent>
                            <div className="flex justify-center gap-2 mt-4">
                                <CarouselPrevious className="static translate-y-0 translate-x-0 h-8 w-8" />
                                <CarouselNext className="static translate-y-0 translate-x-0 h-8 w-8" />
                            </div>
                        </Carousel>
                    </div>

                    <div className="flex justify-center mt-12">
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary/20 hover:border-primary text-primary" asChild>
                            <a href="https://tevhiddergisi.org/tevhid-cocuk-dergisi/" target="_blank" rel="noopener noreferrer">
                                Tüm Dergileri Gör <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* AYIN KİTABI */}
            <section className="py-20 bg-primary/5">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                                    Ayın Kitabı
                                </h2>
                                <p className="text-xl text-primary font-medium">
                                    "Tevhid Risaleleri Külliyatı"
                                </p>
                            </div>

                            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    İslam akidesinin temel taşlarını, Kur'an ve Sünnet ışığında, anlaşılır bir dille ortaya koyan başucu eseri.
                                </p>
                                <blockquote className="border-l-4 border-primary pl-4 italic bg-background/50 p-4 rounded-r-lg">
                                    "İlim, amelin imamıdır. Amel ise ona tabidir..."
                                </blockquote>
                                <p>
                                    Şirkten arınmış saf bir Tevhid inancı, sahih bir kulluk şuuru ve Nebevi metod üzere bir hayat inşası için.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="h-12 px-8 text-base">
                                    <BookOpen className="mr-2 h-5 w-5" />
                                    Kitabı İncele
                                </Button>
                                <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                                    <ArrowRight className="mr-2 h-5 w-5" />
                                    Tüm Eserler
                                </Button>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center bg-muted/40 rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-12 md:p-16 border border-primary/10 group overflow-hidden md:order-last order-first h-[500px]">
                            {/* Abstract Background Decoration */}
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary),0.05),transparent)] pointer-events-none" />

                            <div className="flex items-center justify-center h-full w-full">
                                <Magazine3D
                                    src="/images/book-cover.png"
                                    alt="Ayın Kitabı"
                                    size="large"
                                    thickness="thick"
                                    priority
                                />
                            </div>
                            <div className="absolute top-6 left-6 z-10 group-hover:scale-105 transition-transform duration-500">
                                <Badge className="bg-primary text-primary-foreground text-lg px-6 py-2 shadow-2xl border-none">AYIN KİTABI</Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* KİTAPLARIMIZ */}
            <section id="kitaplarimiz" className="py-20 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-8 md:mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Kitaplarımız</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Tevhid ve Sünnet eksenli ilmi eserlerimiz
                        </p>
                    </div>

                    {/* Desktop Grid - Hidden on Mobile */}
                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                            <Card key={index} className="overflow-hidden border border-primary/10 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 group">
                                <div className="flex items-center justify-center bg-muted/20 p-8 overflow-hidden">
                                    <Magazine3D
                                        src="/images/book-cover.png"
                                        alt={`Kitap ${index}`}
                                        thickness="thick"
                                    />
                                </div>
                                <CardContent className="pt-6 bg-background">
                                    <h3 className="font-semibold text-lg leading-tight mb-2">
                                        Tevhid Risalesi {index}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                        İslam akaidinin temellerinin işlendiği, başucu eseri niteliğinde bir çalışma.
                                    </p>
                                    <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">
                                        İncele & Satın Al <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Mobile Carousel - Visible only on Mobile */}
                    <div className="block md:hidden px-4">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                                    <CarouselItem key={index} className="pl-4 basis-[85%]">
                                        <Card className="overflow-hidden border border-primary/10 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 group">
                                            <div className="flex items-center justify-center bg-muted/20 p-8 overflow-hidden">
                                                <Magazine3D
                                                    src="/images/book-cover.png"
                                                    alt={`Kitap ${index}`}
                                                    thickness="thick"
                                                />
                                            </div>
                                            <CardContent className="pt-6 bg-background">
                                                <h3 className="font-semibold text-lg leading-tight mb-2">Tevhid Risalesi {index}</h3>
                                                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">İslam akaidinin temellerinin işlendiği, başucu eseri niteliğinde bir çalışma.</p>
                                                <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors">İncele & Satın Al <ArrowRight className="ml-2 h-4 w-4" /></Button>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="flex justify-center gap-2 mt-4">
                                <CarouselPrevious className="static translate-y-0 translate-x-0 h-8 w-8" />
                                <CarouselNext className="static translate-y-0 translate-x-0 h-8 w-8" />
                            </div>
                        </Carousel>
                    </div>

                    <div className="flex justify-center mt-12">
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary/20 hover:border-primary text-primary" asChild>
                            <a href="https://tevhiddersleri.org/kitaplar" target="_blank" rel="noopener noreferrer">
                                Tüm Kitapları Gör <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
