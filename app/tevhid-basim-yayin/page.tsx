
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowRight, ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cinzel } from "@/lib/fonts";
import type { Metadata } from "next";
import { Magazine3D } from "@/components/book-3d";
import { tevhidDergisiIssues, tevhidCocukIssues, books } from "./data";


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
                                <Button size="lg" className="h-12 px-8 text-base" asChild>
                                    <Link href="https://tevhiddergisi.org/Dergiler/TD_153/" target="_blank">
                                        <BookOpen className="mr-2 h-5 w-5" />
                                        Sayıyı Oku
                                    </Link>
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
                        {tevhidDergisiIssues.map((issue) => (
                            <Card key={issue.id} className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                    <Magazine3D
                                        src={issue.image}
                                        alt={issue.title}
                                    />
                                </div>
                                <CardContent className="pt-6 bg-card border-t border-border/10">
                                    <h3 className="font-semibold text-lg leading-tight mb-4">
                                        {issue.title}
                                    </h3>
                                    <div className="flex items-center gap-4">
                                        <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors h-auto" asChild>
                                            <Link href={issue.readUrl} target="_blank">
                                                Oku
                                            </Link>
                                        </Button>
                                        <span className="text-muted-foreground/30">|</span>
                                        <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors h-auto" asChild>
                                            <Link href={issue.actionUrl} target="_blank">
                                                Satın Al <ArrowRight className="ml-1 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
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
                                {tevhidDergisiIssues.map((issue) => (
                                    <CarouselItem key={issue.id} className="pl-4 basis-[85%]">
                                        <Card className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                            <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                                <Magazine3D
                                                    src={issue.image}
                                                    alt={issue.title}
                                                />
                                            </div>
                                            <CardContent className="pt-6 bg-card border-t border-border/10">
                                                <h3 className="font-semibold text-lg leading-tight mb-4">
                                                    {issue.title}
                                                </h3>
                                                <div className="flex items-center gap-4">
                                                    <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors h-auto" asChild>
                                                        <Link href={issue.readUrl} target="_blank">
                                                            Oku
                                                        </Link>
                                                    </Button>
                                                    <span className="text-muted-foreground/30">|</span>
                                                    <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors h-auto" asChild>
                                                        <Link href={issue.actionUrl} target="_blank">
                                                            Satın Al <ArrowRight className="ml-1 h-4 w-4" />
                                                        </Link>
                                                    </Button>
                                                </div>
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
                                <Button size="lg" className="h-12 px-8 text-base" asChild>
                                    <Link href="https://www.tevhiddergisi.org/dergiler/tcd/31_Tevhid_Cocuk.pdf?_gl=1*wms6im*_ga*MTkxNTI5NzUxOC4xNzYxNzQ1MDM2*_ga_RR184147PL*czE3NjgyMjEzNTgkbzMyJGcxJHQxNzY4MjIxNzg3JGoxMyRsMCRoMA..*_ga_8TNV9PW6DE*czE3NjgyMjEzNTgkbzMyJGcxJHQxNzY4MjIxNzg3JGoxMyRsMCRoMA.." target="_blank">
                                        <BookOpen className="mr-2 h-5 w-5" />
                                        Sayıyı İncele
                                    </Link>
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
                        {tevhidCocukIssues.map((issue) => (
                            <Card key={issue.id} className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                    <Magazine3D
                                        src={issue.image}
                                        alt={issue.title}
                                    />
                                </div>
                                <CardContent className="pt-6 bg-card border-t border-border/10">
                                    <h3 className="font-semibold text-lg leading-tight mb-4">
                                        {issue.title}
                                    </h3>
                                    <div className="flex items-center gap-4">
                                        <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors h-auto" asChild>
                                            <Link href={issue.readUrl} target="_blank">
                                                Oku
                                            </Link>
                                        </Button>
                                        <span className="text-muted-foreground/30">|</span>
                                        <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors h-auto" asChild>
                                            <Link href={issue.actionUrl} target="_blank">
                                                Satın Al <ArrowRight className="ml-1 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
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
                                {tevhidCocukIssues.map((issue) => (
                                    <CarouselItem key={issue.id} className="pl-4 basis-[85%]">
                                        <Card key={issue.id} className="overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                            <div className="flex items-center justify-center bg-muted/30 p-10 overflow-hidden">
                                                <Magazine3D
                                                    src={issue.image}
                                                    alt={issue.title}
                                                />
                                            </div>
                                            <CardContent className="pt-6 bg-card border-t border-border/10">
                                                <h3 className="font-semibold text-lg leading-tight mb-4">
                                                    {issue.title}
                                                </h3>
                                                <div className="flex items-center gap-4">
                                                    <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors h-auto" asChild>
                                                        <Link href={issue.readUrl} target="_blank">
                                                            Oku
                                                        </Link>
                                                    </Button>
                                                    <span className="text-muted-foreground/30">|</span>
                                                    <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors h-auto" asChild>
                                                        <Link href={issue.actionUrl} target="_blank">
                                                            Satın Al <ArrowRight className="ml-1 h-4 w-4" />
                                                        </Link>
                                                    </Button>
                                                </div>
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
                                    "Allah Sevgisi"
                                </p>
                            </div>

                            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    Müminin en belirgin vasfı olan 'Allah Sevgisi'ni Kur'an ve Sünnet penceresinden kalplere nakşeden eşsiz bir eser.
                                </p>
                                <blockquote className="border-l-4 border-primary pl-4 italic bg-background/50 p-4 rounded-r-lg">
                                    "İman edenlerin Allah'a olan sevgileri ise çok daha kuvvetlidir." (Bakara, 165)
                                </blockquote>
                                <p>
                                    Sevginin hakikatini, Allah'ı sevmenin alametlerini ve kalbi Allah sevgisiyle diri tutmanın yollarını bu eserde bulacaksınız.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="h-12 px-8 text-base" asChild>
                                    <Link href="https://tevhidkitap.net/allah-sevgisi?search=Allah%20sevgisi" target="_blank">
                                        <BookOpen className="mr-2 h-5 w-5" />
                                        İncele
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground border-none" asChild>
                                    <Link href="https://tevhidkitap.net/allah-sevgisi?search=Allah%20sevgisi" target="_blank">
                                        <ArrowRight className="mr-2 h-5 w-5" />
                                        Satın Al
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-center bg-muted/40 rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-12 md:p-16 border border-primary/10 group overflow-hidden md:order-last order-first h-[500px]">
                            {/* Abstract Background Decoration */}
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary),0.05),transparent)] pointer-events-none" />

                            <div className="flex items-center justify-center h-full w-full">
                                <Magazine3D
                                    src="/images/Allah-sevgisi.webp"
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
                        {books.map((book) => (
                            <Card key={book.id} className="flex flex-col h-full overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                <div className="w-full relative aspect-[3/4] overflow-hidden flex-shrink-0">
                                    <Image
                                        src={book.image}
                                        alt={book.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <CardContent className="flex flex-col flex-grow pt-6 bg-background">
                                    <h3 className="font-semibold text-lg leading-tight mb-2">
                                        {book.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                        {book.description}
                                    </p>
                                    <div className="flex items-center gap-4 mt-auto">
                                        {book.readUrl && (
                                            <>
                                                <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors h-auto" asChild>
                                                    <Link href={book.readUrl} target="_blank">
                                                        Oku
                                                    </Link>
                                                </Button>
                                                <span className="text-muted-foreground/30">|</span>
                                            </>
                                        )}
                                        <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors h-auto" asChild>
                                            <Link href={book.actionUrl} target="_blank">
                                                Satın Al <ArrowRight className="ml-1 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
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
                                {books.map((book) => (
                                    <CarouselItem key={book.id} className="pl-4 basis-[85%]">
                                        <Card className="flex flex-col h-full overflow-hidden border border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                            <div className="w-full relative aspect-[3/4] overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={book.image}
                                                    alt={book.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            </div>
                                            <CardContent className="flex flex-col flex-grow pt-6 bg-background">
                                                <h3 className="font-semibold text-lg leading-tight mb-2">{book.title}</h3>
                                                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{book.description}</p>
                                                <div className="flex items-center gap-4 mt-auto">
                                                    {book.readUrl && (
                                                        <>
                                                            <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors h-auto" asChild>
                                                                <Link href={book.readUrl} target="_blank">
                                                                    Oku
                                                                </Link>
                                                            </Button>
                                                            <span className="text-muted-foreground/30">|</span>
                                                        </>
                                                    )}
                                                    <Button variant="link" className="px-0 text-primary hover:text-primary/80 transition-colors h-auto" asChild>
                                                        <Link href={book.actionUrl} target="_blank">
                                                            Satın Al <ArrowRight className="ml-1 h-4 w-4" />
                                                        </Link>
                                                    </Button>
                                                </div>
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
                            <a href="https://tevhidkitap.net" target="_blank" rel="noopener noreferrer">
                                Tüm Kitapları Gör <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
