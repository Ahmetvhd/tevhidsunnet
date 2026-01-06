
import Image from "next/image";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
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
            <section className="py-20 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="relative h-[500px] w-full rounded-xl shadow-2xl overflow-hidden group">
                            <Image
                                src="/images/magazine-cover.png"
                                alt="Tevhid Dergisi Son Sayı"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4">
                                <Badge className="bg-primary text-primary-foreground text-lg px-4 py-1">YENİ SAYI</Badge>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                                    Tevhid Dergisi 124. Sayı Çıktı!
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
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tevhid Dergisi</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Tevhid ve Sünnet inancının kalesi
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[123, 122, 121, 120].map((index) => (
                            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                                    <Image
                                        src="/images/magazine-cover.png"
                                        alt={`Tevhid Dergisi Sayı ${index}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <CardContent className="pt-6">
                                    <h3 className="font-semibold text-lg leading-tight mb-2">
                                        Tevhid Dergisi - Sayı {index}
                                    </h3>
                                    <Button variant="link" className="px-0 text-primary">
                                        İncele & Oku <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
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
            <section className="py-20 bg-orange-50/50">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="relative h-[500px] w-full rounded-xl shadow-2xl overflow-hidden group">
                            <Image
                                src="/images/magazine-cover.png"
                                alt="Tevhid Çocuk Son Sayı"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4">
                                <Badge className="bg-orange-500 text-white text-lg px-4 py-1">YENİ SAYI</Badge>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-orange-950">
                                    Tevhid Çocuk 45. Sayı Çıktı!
                                </h2>
                                <p className="text-xl text-orange-600 font-medium">
                                    "Minik Kalplerde Büyük İman"
                                </p>
                            </div>

                            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    Sevgili çocuklar! Bu sayımızda Peygamber Efendimiz'in hayatından çok özel kıssalar, arkadaşlığın ve kardeşliğin önemi üzerine sıcacık hikayeler sizi bekliyor.
                                </p>
                                <blockquote className="border-l-4 border-orange-500 pl-4 italic bg-white/50 p-4 rounded-r-lg">
                                    "Sizin en hayırlınız, ahlakı en güzel olanınızdır."
                                </blockquote>
                                <p>
                                    Bulmacalar, boyama sayfaları ve ödüllü yarışmalarımızla hem eğlenecek hem de dinimizi en güzel şekilde öğreneceğiz.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="h-12 px-8 text-base bg-orange-600 hover:bg-orange-700">
                                    <BookOpen className="mr-2 h-5 w-5" />
                                    Sayıyı İncele
                                </Button>
                                <Button size="lg" variant="outline" className="h-12 px-8 text-base border-orange-200 text-orange-700 hover:bg-orange-100" asChild>
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
            <section id="tevhid-cocuk" className="py-20 bg-muted/20">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tevhid Çocuk</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Geleceğin muvahhidleri için eğlenceli ve öğretici içerikler
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[44, 43, 42, 41].map((index) => (
                            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                                    <Image
                                        src="/images/magazine-cover.png"
                                        alt={`Tevhid Çocuk Sayı ${index}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <CardContent className="pt-6">
                                    <h3 className="font-semibold text-lg leading-tight mb-2">
                                        Tevhid Çocuk - Sayı {index}
                                    </h3>
                                    <Button variant="link" className="px-0 text-orange-600">
                                        İncele & Oku <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="flex justify-center mt-12">
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base border-orange-200 text-orange-700 hover:bg-orange-100" asChild>
                            <a href="https://tevhiddergisi.org/tevhid-cocuk-dergisi/" target="_blank" rel="noopener noreferrer">
                                Tüm Dergileri Gör <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* AYIN KİTABI */}
            <section className="py-20 bg-muted/30">
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
                        <div className="relative h-[500px] w-full rounded-xl shadow-2xl overflow-hidden group md:order-last order-first">
                            <Image
                                src="/images/book-cover.png"
                                alt="Ayın Kitabı"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                                <Badge className="bg-primary text-primary-foreground text-lg px-4 py-1">AYIN KİTABI</Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* KİTAPLARIMIZ */}
            <section id="kitaplarimiz" className="py-20 bg-muted/20">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Kitaplarımız</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Tevhid ve Sünnet eksenli ilmi eserlerimiz
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                                    <Image
                                        src="/images/book-cover.png"
                                        alt={`Kitap ${index}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <CardContent className="pt-6">
                                    <h3 className="font-semibold text-lg leading-tight mb-2">
                                        Tevhid Risalesi {index}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                        İslam akaidinin temellerinin işlendiği, başucu eseri niteliğinde bir çalışma.
                                    </p>
                                    <Button variant="link" className="px-0 text-primary">
                                        İncele & Satın Al <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
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
