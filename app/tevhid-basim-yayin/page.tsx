
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowRight, ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cinzel } from "@/lib/fonts";
import type { Metadata } from "next";

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

                            <div className="relative w-full max-w-[320px] aspect-[3/4] [perspective:2500px] group-hover:[perspective:3000px] transition-all duration-700">
                                {/* 3D Book Container */}
                                <div className="relative w-full h-full transition-all duration-1000 [transform-style:preserve-3d] [transform:rotateY(18deg)_rotateZ(0.5deg)] group-hover:[transform:rotateY(25deg)_rotateZ(1deg)]">

                                    {/* Spine (Left side) */}
                                    <div className="absolute left-0 top-0 h-[99.6%] my-[0.2%] w-[18px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(9px)] border-y border-l border-white/10 flex flex-col justify-between py-6 items-center">
                                        <div className="w-full h-[1px] bg-white/5 shadow-[0_1px_0_rgba(0,0,0,0.3)]" />
                                        <div className="w-full h-[1px] bg-white/5 shadow-[0_1px_0_rgba(0,0,0,0.3)]" />
                                        <div className="w-full h-[1px] bg-white/5 shadow-[0_1px_0_rgba(0,0,0,0.3)]" />
                                    </div>

                                    {/* Front Cover Container */}
                                    <div className="absolute inset-0 [transform:translateZ(9px)] shadow-[-20px_20px_45px_rgba(0,0,0,0.45)] group-hover:shadow-[-35px_35px_65px_rgba(0,0,0,0.55)] transition-all duration-1000 rounded-sm overflow-hidden border border-black/20">
                                        {/* Cover Image */}
                                        <Image
                                            src="/images/153.sayi.jpg"
                                            alt="Tevhid Dergisi Son Sayı"
                                            fill
                                            className="object-cover"
                                            priority
                                        />

                                        {/* Realistic Lighting Effects */}
                                        <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 pointer-events-none" />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-60 pointer-events-none" />

                                        {/* Paper Texture Overlay (Subtle noise SVG) */}
                                        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
                                            style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)"/></svg>')` }}
                                        />
                                    </div>

                                    {/* Thickness / Pages (Right side) */}
                                    <div className="absolute top-0 right-0 h-[99%] my-[0.5%] w-[18px] bg-[#f8f8f8] [transform:rotateY(90deg)_translateZ(9px)] origin-right shadow-inner border-y border-black/5">
                                        <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_1px,#e0e0e0_1px,#e0e0e0_2px,transparent_2px)] opacity-60" />
                                        <div className="absolute inset-0 bg-gradient-to-l from-black/5 to-transparent" />
                                    </div>
                                </div>

                                {/* Professional Floor Shadow */}
                                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[110%] h-12">
                                    <div className="absolute inset-0 bg-black/30 blur-3xl rounded-[100%] opacity-60 group-hover:opacity-40 transition-all duration-1000 [transform:rotateX(80deg)]" />
                                    <div className="absolute inset-[15%] bg-black/40 blur-xl rounded-[100%] opacity-80 group-hover:opacity-60 transition-all duration-1000 [transform:rotateX(80deg)]" />
                                </div>
                            </div>
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
                                <div className="relative aspect-[3/4] w-full max-w-[240px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                    {/* 3D Book Container */}
                                    <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(1deg)] group-hover:[transform:rotateY(22deg)_rotateZ(2deg)]">

                                        {/* Spine (Left side) */}
                                        <div className="absolute left-0 top-0 h-[99%] my-[0.5%] w-[15px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(7.5px)] border-y border-l border-white/10 flex flex-col justify-between py-4 items-center">
                                            <div className="w-full h-px bg-white/5" />
                                            <div className="w-full h-px bg-white/5" />
                                        </div>

                                        {/* Front Cover */}
                                        <div className="absolute inset-0 [transform:translateZ(7.5px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.7)] transition-all duration-700 rounded-sm overflow-hidden border border-black/30">
                                            <Image
                                                src="/images/152.sayi.jpg"
                                                alt="Tevhid Dergisi Sayı 152"
                                                fill
                                                className="object-cover"
                                            />
                                            {/* Spine Shadow on Cover */}
                                            <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                                        </div>

                                        {/* Thickness / Pages (Right side) */}
                                        <div className="absolute top-0 right-0 h-[98%] my-[1%] w-[15px] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(7.5px)] origin-right shadow-inner opacity-90 border-y border-black/5">
                                            <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_2px,#e5e5e5_3px)]" />
                                        </div>
                                    </div>

                                    {/* Dynamic Floor Shadow */}
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-10 bg-black/25 blur-3xl rounded-[100%] opacity-70 group-hover:opacity-50 transition-all duration-700 [transform:rotateX(75deg)]" />
                                </div>
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
                                <div className="relative aspect-[3/4] w-full max-w-[240px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                    {/* 3D Book Container */}
                                    <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(1deg)] group-hover:[transform:rotateY(22deg)_rotateZ(2deg)]">

                                        {/* Spine (Left side) - Moderately thick */}
                                        <div className="absolute left-0 top-0 h-[99%] my-[0.5%] w-[15px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(7.5px)] border-y border-l border-white/10 flex flex-col justify-between py-4 items-center">
                                            <div className="w-full h-px bg-white/5" />
                                            <div className="w-full h-px bg-white/5" />
                                        </div>

                                        {/* Front Cover */}
                                        <div className="absolute inset-0 [transform:translateZ(7.5px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.7)] transition-all duration-700 rounded-sm overflow-hidden border border-black/30">
                                            <Image
                                                src="/images/151.sayi.jpg"
                                                alt="Tevhid Dergisi Sayı 151"
                                                fill
                                                className="object-cover"
                                            />
                                            {/* Spine Shadow on Cover */}
                                            <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                                        </div>

                                        {/* Thickness / Pages (Right side) */}
                                        <div className="absolute top-0 right-0 h-[98%] my-[1%] w-[15px] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(7.5px)] origin-right shadow-inner opacity-90 border-y border-black/5">
                                            {/* Page lines effect */}
                                            <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_2px,#e5e5e5_3px)]" />
                                        </div>
                                    </div>

                                    {/* Dynamic Floor Shadow */}
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-10 bg-black/25 blur-3xl rounded-[100%] opacity-70 group-hover:opacity-50 transition-all duration-700 [transform:rotateX(75deg)]" />
                                </div>
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
                                <div className="relative aspect-[3/4] w-full max-w-[240px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                    {/* 3D Book Container */}
                                    <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(1deg)] group-hover:[transform:rotateY(22deg)_rotateZ(2deg)]">

                                        {/* Spine (Left side) */}
                                        <div className="absolute left-0 top-0 h-[99%] my-[0.5%] w-[15px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(7.5px)] border-y border-l border-white/10 flex flex-col justify-between py-4 items-center">
                                            <div className="w-full h-px bg-white/5" />
                                            <div className="w-full h-px bg-white/5" />
                                        </div>

                                        {/* Front Cover */}
                                        <div className="absolute inset-0 [transform:translateZ(7.5px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.7)] transition-all duration-700 rounded-sm overflow-hidden border border-black/30">
                                            <Image
                                                src="/images/150.sayi.jpg"
                                                alt="Tevhid Dergisi Sayı 150"
                                                fill
                                                className="object-cover"
                                            />
                                            {/* Spine Shadow on Cover */}
                                            <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                                        </div>

                                        {/* Thickness / Pages (Right side) */}
                                        <div className="absolute top-0 right-0 h-[98%] my-[1%] w-[15px] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(7.5px)] origin-right shadow-inner opacity-90 border-y border-black/5">
                                            <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_2px,#e5e5e5_3px)]" />
                                        </div>
                                    </div>

                                    {/* Dynamic Floor Shadow */}
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-10 bg-black/25 blur-3xl rounded-[100%] opacity-70 group-hover:opacity-50 transition-all duration-700 [transform:rotateX(75deg)]" />
                                </div>
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
                                <div className="relative aspect-[3/4] w-full max-w-[240px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                    {/* 3D Book Container */}
                                    <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(1deg)] group-hover:[transform:rotateY(22deg)_rotateZ(2deg)]">

                                        {/* Spine (Left side) */}
                                        <div className="absolute left-0 top-0 h-[99%] my-[0.5%] w-[15px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(7.5px)] border-y border-l border-white/10 flex flex-col justify-between py-4 items-center">
                                            <div className="w-full h-px bg-white/5" />
                                            <div className="w-full h-px bg-white/5" />
                                        </div>

                                        {/* Front Cover */}
                                        <div className="absolute inset-0 [transform:translateZ(7.5px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.7)] transition-all duration-700 rounded-sm overflow-hidden border border-black/30">
                                            <Image
                                                src="/images/149.sayi.jpeg"
                                                alt="Tevhid Dergisi Sayı 149"
                                                fill
                                                className="object-cover"
                                            />
                                            {/* Spine Shadow on Cover */}
                                            <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                                        </div>

                                        {/* Thickness / Pages (Right side) */}
                                        <div className="absolute top-0 right-0 h-[98%] my-[1%] w-[15px] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(7.5px)] origin-right shadow-inner opacity-90 border-y border-black/5">
                                            <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_2px,#e5e5e5_3px)]" />
                                        </div>
                                    </div>

                                    {/* Dynamic Floor Shadow */}
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-10 bg-black/25 blur-3xl rounded-[100%] opacity-70 group-hover:opacity-50 transition-all duration-700 [transform:rotateX(75deg)]" />
                                </div>
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
                                            <div className="relative aspect-[3/4] w-full max-w-[240px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                                {/* 3D Book Container */}
                                                <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(1deg)] group-hover:[transform:rotateY(22deg)_rotateZ(2deg)]">

                                                    {/* Spine (Left side) */}
                                                    <div className="absolute left-0 top-0 h-[99%] my-[0.5%] w-[15px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(7.5px)] border-y border-l border-white/10 flex flex-col justify-between py-4 items-center">
                                                        <div className="w-full h-px bg-white/5" />
                                                        <div className="w-full h-px bg-white/5" />
                                                    </div>

                                                    {/* Front Cover */}
                                                    <div className="absolute inset-0 [transform:translateZ(7.5px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.7)] transition-all duration-700 rounded-sm overflow-hidden border border-black/30">
                                                        <Image
                                                            src="/images/152.sayi.jpg"
                                                            alt="Tevhid Dergisi Sayı 152"
                                                            fill
                                                            className="object-cover"
                                                        />
                                                        {/* Spine Shadow on Cover */}
                                                        <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                                                    </div>

                                                    {/* Thickness / Pages (Right side) */}
                                                    <div className="absolute top-0 right-0 h-[98%] my-[1%] w-[15px] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(7.5px)] origin-right shadow-inner opacity-90 border-y border-black/5">
                                                        <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_2px,#e5e5e5_3px)]" />
                                                    </div>
                                                </div>

                                                {/* Dynamic Floor Shadow */}
                                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-10 bg-black/25 blur-3xl rounded-[100%] opacity-70 group-hover:opacity-50 transition-all duration-700 [transform:rotateX(75deg)]" />
                                            </div>
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
                                            <div className="relative aspect-[3/4] w-full max-w-[240px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                                <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(1deg)] group-hover:[transform:rotateY(22deg)_rotateZ(2deg)]">
                                                    <div className="absolute left-0 top-0 h-[99%] my-[0.5%] w-[15px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(7.5px)] border-y border-l border-white/10 flex flex-col justify-between py-4 items-center">
                                                        <div className="w-full h-px bg-white/5" />
                                                        <div className="w-full h-px bg-white/5" />
                                                    </div>
                                                    <div className="absolute inset-0 [transform:translateZ(7.5px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.7)] transition-all duration-700 rounded-sm overflow-hidden border border-black/30">
                                                        <Image
                                                            src="/images/151.sayi.jpg"
                                                            alt="Tevhid Dergisi Sayı 151"
                                                            fill
                                                            className="object-cover"
                                                        />
                                                        <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                                                    </div>
                                                    <div className="absolute top-0 right-0 h-[98%] my-[1%] w-[15px] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(7.5px)] origin-right shadow-inner opacity-90 border-y border-black/5">
                                                        <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_2px,#e5e5e5_3px)]" />
                                                    </div>
                                                </div>
                                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-10 bg-black/25 blur-3xl rounded-[100%] opacity-70 group-hover:opacity-50 transition-all duration-700 [transform:rotateX(75deg)]" />
                                            </div>
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
                                            <div className="relative aspect-[3/4] w-full max-w-[240px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                                <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(1deg)] group-hover:[transform:rotateY(22deg)_rotateZ(2deg)]">
                                                    <div className="absolute left-0 top-0 h-[99%] my-[0.5%] w-[15px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(7.5px)] border-y border-l border-white/10 flex flex-col justify-between py-4 items-center">
                                                        <div className="w-full h-px bg-white/5" />
                                                        <div className="w-full h-px bg-white/5" />
                                                    </div>
                                                    <div className="absolute inset-0 [transform:translateZ(7.5px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.7)] transition-all duration-700 rounded-sm overflow-hidden border border-black/30">
                                                        <Image
                                                            src="/images/150.sayi.jpg"
                                                            alt="Tevhid Dergisi Sayı 150"
                                                            fill
                                                            className="object-cover"
                                                        />
                                                        <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                                                    </div>
                                                    <div className="absolute top-0 right-0 h-[98%] my-[1%] w-[15px] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(7.5px)] origin-right shadow-inner opacity-90 border-y border-black/5">
                                                        <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_2px,#e5e5e5_3px)]" />
                                                    </div>
                                                </div>
                                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-10 bg-black/25 blur-3xl rounded-[100%] opacity-70 group-hover:opacity-50 transition-all duration-700 [transform:rotateX(75deg)]" />
                                            </div>
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
                                            <div className="relative aspect-[3/4] w-full max-w-[240px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                                <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(1deg)] group-hover:[transform:rotateY(22deg)_rotateZ(2deg)]">
                                                    <div className="absolute left-0 top-0 h-[99%] my-[0.5%] w-[15px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(7.5px)] border-y border-l border-white/10 flex flex-col justify-between py-4 items-center">
                                                        <div className="w-full h-px bg-white/5" />
                                                        <div className="w-full h-px bg-white/5" />
                                                    </div>
                                                    <div className="absolute inset-0 [transform:translateZ(7.5px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.7)] transition-all duration-700 rounded-sm overflow-hidden border border-black/30">
                                                        <Image
                                                            src="/images/149.sayi.jpeg"
                                                            alt="Tevhid Dergisi Sayı 149"
                                                            fill
                                                            className="object-cover"
                                                        />
                                                        <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                                                    </div>
                                                    <div className="absolute top-0 right-0 h-[98%] my-[1%] w-[15px] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(7.5px)] origin-right shadow-inner opacity-90 border-y border-black/5">
                                                        <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_2px,#e5e5e5_3px)]" />
                                                    </div>
                                                </div>
                                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-10 bg-black/25 blur-3xl rounded-[100%] opacity-70 group-hover:opacity-50 transition-all duration-700 [transform:rotateX(75deg)]" />
                                            </div>
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

                            <div className="relative w-full max-w-[320px] aspect-[3/4] [perspective:2500px] group-hover:[perspective:3000px] transition-all duration-700">
                                {/* 3D Book Container */}
                                <div className="relative w-full h-full transition-all duration-1000 [transform-style:preserve-3d] [transform:rotateY(18deg)_rotateZ(0.5deg)] group-hover:[transform:rotateY(25deg)_rotateZ(1deg)]">

                                    {/* Spine (Left side) */}
                                    <div className="absolute left-0 top-0 h-[99.6%] my-[0.2%] w-[18px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(9px)] border-y border-l border-white/10 flex flex-col justify-between py-6 items-center">
                                        <div className="w-full h-[1px] bg-white/5 shadow-[0_1px_0_rgba(0,0,0,0.3)]" />
                                        <div className="w-full h-[1px] bg-white/5 shadow-[0_1px_0_rgba(0,0,0,0.3)]" />
                                        <div className="w-full h-[1px] bg-white/5 shadow-[0_1px_0_rgba(0,0,0,0.3)]" />
                                    </div>

                                    {/* Front Cover Container */}
                                    <div className="absolute inset-0 [transform:translateZ(9px)] shadow-[-20px_20px_45px_rgba(0,0,0,0.45)] group-hover:shadow-[-35px_35px_65px_rgba(0,0,0,0.55)] transition-all duration-1000 rounded-sm overflow-hidden border border-black/20">
                                        {/* Cover Image */}
                                        <Image
                                            src="/images/31.sayi.jpg"
                                            alt="Tevhid Çocuk Son Sayı"
                                            fill
                                            className="object-cover"
                                            priority
                                        />

                                        {/* Realistic Lighting Effects */}
                                        {/* Spine Shadow */}
                                        <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

                                        {/* Studio Light Shine */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 pointer-events-none" />

                                        {/* Glossy Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-60 pointer-events-none" />

                                        {/* Paper Texture Overlay (Subtle noise SVG) */}
                                        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
                                            style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)"/></svg>')` }}
                                        />
                                    </div>

                                    {/* Thickness / Pages (Right side) */}
                                    <div className="absolute top-0 right-0 h-[99%] my-[0.5%] w-[18px] bg-[#f8f8f8] [transform:rotateY(90deg)_translateZ(9px)] origin-right shadow-inner border-y border-black/5">
                                        {/* Improved Page stack effect */}
                                        <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_1px,#e0e0e0_1px,#e0e0e0_2px,transparent_2px)] opacity-60" />
                                        {/* Subtle page shading */}
                                        <div className="absolute inset-0 bg-gradient-to-l from-black/5 to-transparent" />
                                    </div>
                                </div>

                                {/* Professional Floor Shadow (Multi-layered) */}
                                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[110%] h-12">
                                    <div className="absolute inset-0 bg-black/30 blur-3xl rounded-[100%] opacity-60 group-hover:opacity-40 transition-all duration-1000 [transform:rotateX(80deg)]" />
                                    <div className="absolute inset-[15%] bg-black/40 blur-xl rounded-[100%] opacity-80 group-hover:opacity-60 transition-all duration-1000 [transform:rotateX(80deg)]" />
                                </div>
                            </div>
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
                                <div className="relative aspect-[3/4] w-full max-w-[240px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                    {/* 3D Book Container */}
                                    <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(1deg)] group-hover:[transform:rotateY(22deg)_rotateZ(2deg)]">

                                        {/* Spine (Left side) */}
                                        <div className="absolute left-0 top-0 h-[99%] my-[0.5%] w-[15px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(7.5px)] border-y border-l border-white/10 flex flex-col justify-between py-4 items-center">
                                            <div className="w-full h-px bg-white/5" />
                                            <div className="w-full h-px bg-white/5" />
                                        </div>

                                        {/* Front Cover */}
                                        <div className="absolute inset-0 [transform:translateZ(7.5px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.7)] transition-all duration-700 rounded-sm overflow-hidden border border-black/30">
                                            <Image
                                                src="/images/30.sayi.jpg"
                                                alt="Tevhid Çocuk Sayı 30"
                                                fill
                                                className="object-cover"
                                            />
                                            {/* Spine Shadow on Cover */}
                                            <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                                        </div>

                                        {/* Thickness / Pages (Right side) */}
                                        <div className="absolute top-0 right-0 h-[98%] my-[1%] w-[15px] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(7.5px)] origin-right shadow-inner opacity-90 border-y border-black/5">
                                            <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_2px,#e5e5e5_3px)]" />
                                        </div>
                                    </div>

                                    {/* Dynamic Floor Shadow */}
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-10 bg-black/25 blur-3xl rounded-[100%] opacity-70 group-hover:opacity-50 transition-all duration-700 [transform:rotateX(75deg)]" />
                                </div>
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
                                <div className="relative aspect-[3/4] w-full max-w-[240px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                    {/* 3D Book Container */}
                                    <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(1deg)] group-hover:[transform:rotateY(22deg)_rotateZ(2deg)]">

                                        {/* Spine (Left side) */}
                                        <div className="absolute left-0 top-0 h-[99%] my-[0.5%] w-[15px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(7.5px)] border-y border-l border-white/10 flex flex-col justify-between py-4 items-center">
                                            <div className="w-full h-px bg-white/5" />
                                            <div className="w-full h-px bg-white/5" />
                                        </div>

                                        {/* Front Cover */}
                                        <div className="absolute inset-0 [transform:translateZ(7.5px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.7)] transition-all duration-700 rounded-sm overflow-hidden border border-black/30">
                                            <Image
                                                src="/images/29.sayi.jpeg"
                                                alt="Tevhid Çocuk Sayı 29"
                                                fill
                                                className="object-cover"
                                            />
                                            {/* Spine Shadow on Cover */}
                                            <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                                        </div>

                                        {/* Thickness / Pages (Right side) */}
                                        <div className="absolute top-0 right-0 h-[98%] my-[1%] w-[15px] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(7.5px)] origin-right shadow-inner opacity-90 border-y border-black/5">
                                            <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_2px,#e5e5e5_3px)]" />
                                        </div>
                                    </div>

                                    {/* Dynamic Floor Shadow */}
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-10 bg-black/25 blur-3xl rounded-[100%] opacity-70 group-hover:opacity-50 transition-all duration-700 [transform:rotateX(75deg)]" />
                                </div>
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
                                <div className="relative aspect-[3/4] w-full max-w-[240px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                    {/* 3D Book Container */}
                                    <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(1deg)] group-hover:[transform:rotateY(22deg)_rotateZ(2deg)]">

                                        {/* Spine (Left side) */}
                                        <div className="absolute left-0 top-0 h-[99%] my-[0.5%] w-[15px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(7.5px)] border-y border-l border-white/10 flex flex-col justify-between py-4 items-center">
                                            <div className="w-full h-px bg-white/5" />
                                            <div className="w-full h-px bg-white/5" />
                                        </div>

                                        {/* Front Cover */}
                                        <div className="absolute inset-0 [transform:translateZ(7.5px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.7)] transition-all duration-700 rounded-sm overflow-hidden border border-black/30">
                                            <Image
                                                src="/images/28.sayi.jpg"
                                                alt="Tevhid Çocuk Sayı 28"
                                                fill
                                                className="object-cover"
                                            />
                                            {/* Spine Shadow on Cover */}
                                            <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                                        </div>

                                        {/* Thickness / Pages (Right side) */}
                                        <div className="absolute top-0 right-0 h-[98%] my-[1%] w-[15px] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(7.5px)] origin-right shadow-inner opacity-90 border-y border-black/5">
                                            <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_2px,#e5e5e5_3px)]" />
                                        </div>
                                    </div>

                                    {/* Dynamic Floor Shadow */}
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-10 bg-black/25 blur-3xl rounded-[100%] opacity-70 group-hover:opacity-50 transition-all duration-700 [transform:rotateX(75deg)]" />
                                </div>
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
                                <div className="relative aspect-[3/4] w-full max-w-[240px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                    {/* 3D Book Container */}
                                    <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(1deg)] group-hover:[transform:rotateY(22deg)_rotateZ(2deg)]">

                                        {/* Spine (Left side) */}
                                        <div className="absolute left-0 top-0 h-[99%] my-[0.5%] w-[15px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(7.5px)] border-y border-l border-white/10 flex flex-col justify-between py-4 items-center">
                                            <div className="w-full h-px bg-white/5" />
                                            <div className="w-full h-px bg-white/5" />
                                        </div>

                                        {/* Front Cover */}
                                        <div className="absolute inset-0 [transform:translateZ(7.5px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.7)] transition-all duration-700 rounded-sm overflow-hidden border border-black/30">
                                            <Image
                                                src="/images/27.sayi.jpg"
                                                alt="Tevhid Çocuk Sayı 27"
                                                fill
                                                className="object-cover"
                                            />
                                            {/* Spine Shadow on Cover */}
                                            <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                                        </div>

                                        {/* Thickness / Pages (Right side) */}
                                        <div className="absolute top-0 right-0 h-[98%] my-[1%] w-[15px] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(7.5px)] origin-right shadow-inner opacity-90 border-y border-black/5">
                                            <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_2px,#e5e5e5_3px)]" />
                                        </div>
                                    </div>

                                    {/* Dynamic Floor Shadow */}
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-10 bg-black/25 blur-3xl rounded-[100%] opacity-70 group-hover:opacity-50 transition-all duration-700 [transform:rotateX(75deg)]" />
                                </div>
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
                                            <div className="relative aspect-[3/4] w-full max-w-[240px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                                <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(1deg)] group-hover:[transform:rotateY(22deg)_rotateZ(2deg)]">
                                                    <div className="absolute left-0 top-0 h-[99%] my-[0.5%] w-[15px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(7.5px)] border-y border-l border-white/10 flex flex-col justify-between py-4 items-center">
                                                        <div className="w-full h-px bg-white/5" />
                                                        <div className="w-full h-px bg-white/5" />
                                                    </div>
                                                    <div className="absolute inset-0 [transform:translateZ(7.5px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.7)] transition-all duration-700 rounded-sm overflow-hidden border border-black/30">
                                                        <Image src="/images/30.sayi.jpg" alt="Tevhid Çocuk Sayı 30" fill className="object-cover" />
                                                        <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                                                    </div>
                                                    <div className="absolute top-0 right-0 h-[98%] my-[1%] w-[15px] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(7.5px)] origin-right shadow-inner opacity-90 border-y border-black/5">
                                                        <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_2px,#e5e5e5_3px)]" />
                                                    </div>
                                                </div>
                                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-10 bg-black/25 blur-3xl rounded-[100%] opacity-70 group-hover:opacity-50 transition-all duration-700 [transform:rotateX(75deg)]" />
                                            </div>
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
                                            <div className="relative aspect-[3/4] w-full max-w-[240px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                                <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(1deg)] group-hover:[transform:rotateY(22deg)_rotateZ(2deg)]">
                                                    <div className="absolute left-0 top-0 h-[99%] my-[0.5%] w-[15px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(7.5px)] border-y border-l border-white/10 flex flex-col justify-between py-4 items-center">
                                                        <div className="w-full h-px bg-white/5" />
                                                        <div className="w-full h-px bg-white/5" />
                                                    </div>
                                                    <div className="absolute inset-0 [transform:translateZ(7.5px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.7)] transition-all duration-700 rounded-sm overflow-hidden border border-black/30">
                                                        <Image src="/images/29.sayi.jpeg" alt="Tevhid Çocuk Sayı 29" fill className="object-cover" />
                                                        <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                                                    </div>
                                                    <div className="absolute top-0 right-0 h-[98%] my-[1%] w-[15px] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(7.5px)] origin-right shadow-inner opacity-90 border-y border-black/5">
                                                        <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_2px,#e5e5e5_3px)]" />
                                                    </div>
                                                </div>
                                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-10 bg-black/25 blur-3xl rounded-[100%] opacity-70 group-hover:opacity-50 transition-all duration-700 [transform:rotateX(75deg)]" />
                                            </div>
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
                                            <div className="relative aspect-[3/4] w-full max-w-[240px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                                <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(1deg)] group-hover:[transform:rotateY(22deg)_rotateZ(2deg)]">
                                                    <div className="absolute left-0 top-0 h-[99%] my-[0.5%] w-[15px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(7.5px)] border-y border-l border-white/10 flex flex-col justify-between py-4 items-center">
                                                        <div className="w-full h-px bg-white/5" />
                                                        <div className="w-full h-px bg-white/5" />
                                                    </div>
                                                    <div className="absolute inset-0 [transform:translateZ(7.5px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.7)] transition-all duration-700 rounded-sm overflow-hidden border border-black/30">
                                                        <Image src="/images/28.sayi.jpg" alt="Tevhid Çocuk Sayı 28" fill className="object-cover" />
                                                        <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                                                    </div>
                                                    <div className="absolute top-0 right-0 h-[98%] my-[1%] w-[15px] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(7.5px)] origin-right shadow-inner opacity-90 border-y border-black/5">
                                                        <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_2px,#e5e5e5_3px)]" />
                                                    </div>
                                                </div>
                                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-10 bg-black/25 blur-3xl rounded-[100%] opacity-70 group-hover:opacity-50 transition-all duration-700 [transform:rotateX(75deg)]" />
                                            </div>
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
                                            <div className="relative aspect-[3/4] w-full max-w-[240px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                                <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(1deg)] group-hover:[transform:rotateY(22deg)_rotateZ(2deg)]">
                                                    <div className="absolute left-0 top-0 h-[99%] my-[0.5%] w-[15px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(7.5px)] border-y border-l border-white/10 flex flex-col justify-between py-4 items-center">
                                                        <div className="w-full h-px bg-white/5" />
                                                        <div className="w-full h-px bg-white/5" />
                                                    </div>
                                                    <div className="absolute inset-0 [transform:translateZ(7.5px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.6)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.7)] transition-all duration-700 rounded-sm overflow-hidden border border-black/30">
                                                        <Image src="/images/27.sayi.jpg" alt="Tevhid Çocuk Sayı 27" fill className="object-cover" />
                                                        <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                                                    </div>
                                                    <div className="absolute top-0 right-0 h-[98%] my-[1%] w-[15px] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(7.5px)] origin-right shadow-inner opacity-90 border-y border-black/5">
                                                        <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_2px,#e5e5e5_3px)]" />
                                                    </div>
                                                </div>
                                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-10 bg-black/25 blur-3xl rounded-[100%] opacity-70 group-hover:opacity-50 transition-all duration-700 [transform:rotateX(75deg)]" />
                                            </div>
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

                            <div className="relative w-full max-w-[300px] aspect-[2/3] [perspective:2500px] group-hover:[perspective:3000px] transition-all duration-700">
                                {/* 3D Book Container - Thicker for a collection */}
                                <div className="relative w-full h-full transition-all duration-1000 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(0.5deg)] group-hover:[transform:rotateY(22deg)_rotateZ(1deg)]">

                                    {/* Spine (Left side) - Thick for books */}
                                    <div className="absolute left-0 top-0 h-[99.6%] my-[0.2%] w-[28px] bg-[#1a1a1a] shadow-inner [transform:rotateY(-90deg)_translateZ(14px)] border-y border-l border-white/10 flex flex-col justify-between py-8 items-center">
                                        <div className="w-full h-[1.5px] bg-white/10 shadow-[0_1px_0_rgba(0,0,0,0.4)]" />
                                        <div className="w-full h-[1px] bg-white/5" />
                                        <div className="w-full h-[1.5px] bg-white/10 shadow-[0_1px_0_rgba(0,0,0,0.4)]" />
                                    </div>

                                    {/* Front Cover Container */}
                                    <div className="absolute inset-0 [transform:translateZ(14px)] shadow-[-25px_25px_55px_rgba(0,0,0,0.5)] group-hover:shadow-[-40px_40px_75px_rgba(0,0,0,0.6)] transition-all duration-1000 rounded-sm overflow-hidden border border-black/20">
                                        <Image
                                            src="/images/book-cover.png"
                                            alt="Ayın Kitabı"
                                            fill
                                            className="object-cover"
                                            priority
                                        />

                                        {/* Realistic Lighting Effects */}
                                        <div className="absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-black/45 via-black/15 to-transparent" />
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-black/15 pointer-events-none" />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 opacity-70 pointer-events-none" />

                                        {/* Paper Texture Overlay */}
                                        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
                                            style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)"/></svg>')` }}
                                        />
                                    </div>

                                    {/* Thickness / Pages (Right side) - Thicker stack */}
                                    <div className="absolute top-0 right-0 h-[99%] my-[0.5%] w-[28px] bg-[#fdfdfd] [transform:rotateY(90deg)_translateZ(14px)] origin-right shadow-inner border-y border-black/5">
                                        <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_1px,#e5e5e5_1px,#e5e5e5_2px,transparent_2px)] opacity-70" />
                                        <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-transparent" />
                                    </div>
                                </div>

                                {/* Professional Floor Shadow */}
                                <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-[115%] h-14">
                                    <div className="absolute inset-0 bg-black/35 blur-3xl rounded-[100%] opacity-60 group-hover:opacity-40 transition-all duration-1000 [transform:rotateX(80deg)]" />
                                    <div className="absolute inset-[10%] bg-black/45 blur-2xl rounded-[100%] opacity-80 group-hover:opacity-60 transition-all duration-1000 [transform:rotateX(80deg)]" />
                                </div>
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
                                    <div className="relative aspect-[3/4] w-full max-w-[200px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                        {/* 3D Book Container */}
                                        <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(0.5deg)] group-hover:[transform:rotateY(22deg)_rotateZ(1deg)]">

                                            {/* Spine (Left side) */}
                                            <div className="absolute left-0 top-0 h-[99.6%] my-[0.2%] w-[20px] bg-[#222] shadow-inner [transform:rotateY(-90deg)_translateZ(10px)] border-y border-l border-white/5 flex flex-col justify-between py-5 items-center">
                                                <div className="w-full h-[1px] bg-white/10" />
                                                <div className="w-full h-[1px] bg-white/10" />
                                            </div>

                                            {/* Front Cover Container */}
                                            <div className="absolute inset-0 [transform:translateZ(10px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.4)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.5)] transition-all duration-700 rounded-sm overflow-hidden border border-black/20">
                                                <Image
                                                    src="/images/book-cover.png"
                                                    alt={`Kitap ${index}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/40 to-transparent" />
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5 pointer-events-none" />
                                            </div>

                                            {/* Thickness / Pages (Right side) */}
                                            <div className="absolute top-0 right-0 h-[99%] my-[0.5%] w-[20px] bg-[#f5f5f5] [transform:rotateY(90deg)_translateZ(10px)] origin-right shadow-inner border-y border-black/5">
                                                <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_1.5px,#e0e0e0_1.5px,#e0e0e0_2.5px,transparent_2.5px)] opacity-60" />
                                            </div>
                                        </div>

                                        {/* Floor Shadow */}
                                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[110%] h-10 bg-black/30 blur-2xl rounded-[100%] opacity-60 group-hover:opacity-40 transition-all duration-700 [transform:rotateX(80deg)]" />
                                    </div>
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
                                                <div className="relative aspect-[3/4] w-full max-w-[200px] [perspective:2000px] group-hover:[perspective:2500px] transition-all duration-500">
                                                    <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] [transform:rotateY(15deg)_rotateZ(0.5deg)] group-hover:[transform:rotateY(22deg)_rotateZ(1deg)]">
                                                        <div className="absolute left-0 top-0 h-[99.6%] my-[0.2%] w-[20px] bg-[#222] shadow-inner [transform:rotateY(-90deg)_translateZ(10px)] border-y border-l border-white/5 flex flex-col justify-between py-5 items-center">
                                                            <div className="w-full h-[1px] bg-white/10" />
                                                            <div className="w-full h-[1px] bg-white/10" />
                                                        </div>
                                                        <div className="absolute inset-0 [transform:translateZ(10px)] shadow-[-15px_15px_35px_rgba(0,0,0,0.4)] group-hover:shadow-[-25px_25px_55px_rgba(0,0,0,0.5)] transition-all duration-700 rounded-sm overflow-hidden border border-black/20">
                                                            <Image src="/images/book-cover.png" alt={`Kitap ${index}`} fill className="object-cover" />
                                                            <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/40 to-transparent" />
                                                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5 pointer-events-none" />
                                                        </div>
                                                        <div className="absolute top-0 right-0 h-[99%] my-[0.5%] w-[20px] bg-[#f5f5f5] [transform:rotateY(90deg)_translateZ(10px)] origin-right shadow-inner border-y border-black/5">
                                                            <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_1.5px,#e0e0e0_1.5px,#e0e0e0_2.5px,transparent_2.5px)] opacity-60" />
                                                        </div>
                                                    </div>
                                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[110%] h-10 bg-black/30 blur-2xl rounded-[100%] opacity-60 group-hover:opacity-40 transition-all duration-700 [transform:rotateX(80deg)]" />
                                                </div>
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
