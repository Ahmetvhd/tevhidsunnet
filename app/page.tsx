
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cinzel } from "@/lib/fonts";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        <div className="container relative z-20 px-4 md:px-6 text-center text-white space-y-8 animate-fade-in-up">
          <Badge variant="outline" className="border-white/20 text-white/80 uppercase tracking-widest px-4 py-1 backdrop-blur-sm">
            İslami İlim ve Davet Platformu
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto drop-shadow-xl">
            Tevhid ve Sünnet Işığında <br className="hidden md:block" />
            <span className="text-primary">Sahih Bir Duruş</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Kur'an ve Sünnet rehberliğinde, ilimle yoğrulmuş, davetle bereketlenmiş bir hayat inşası için.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="#sections">
                <BookOpen className="mr-2 h-4 w-4" /> Keşfet
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
              <Link href="/biz-kimiz">
                Biz Kimiz
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="h-12 px-8 text-base" asChild>
              <Link href="/insani-yardim">
                <HeartHandshake className="mr-2 h-4 w-4" /> İnsani Yardım
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTIONS PREVIEW */}
      <section id="sections" className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Platformumuz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tevhid ve Sünnet ekseninde, ilim ve davet faaliyetlerimizi keşfedin
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Biz Kimiz */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <Image
                    src="https://tevhiddergisi.org/wp-content/uploads/2025/11/merkez_mescid.webp"
                    alt="Tevhid ve Sünnet Merkez"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">Hakkımızda</Badge>
                  <CardTitle className="text-2xl md:text-3xl mb-4">Biz Kimiz</CardTitle>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Tevhid ve Sünnet ekseninde, Kur'an ve Hadis ışığında ilim ve davet faaliyetleri yürüten bir platformuz. Misyonumuz, vizyonumuz ve değerlerimiz hakkında bilgi edinin.
                  </p>
                  <Button variant="outline" className="w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link href="/biz-kimiz">
                      Devamını Oku <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Dijital İçeriklerimiz */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden md:order-2">
                  <Image
                    src="/images/digital-card.png"
                    alt="Dijital İçeriklerimiz"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center md:order-1">
                  <Badge variant="outline" className="w-fit mb-4">Dijital Platformlar</Badge>
                  <CardTitle className="text-2xl md:text-3xl mb-4">Dijital İçeriklerimiz</CardTitle>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    YouTube kanallarımız, sosyal medya hesaplarımız ve dijital yayınlarımız. Farklı dillerde ilmi içerikler, hutbeler ve kısa filmler.
                  </p>
                  <Button variant="outline" className="w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link href="/dijital-iceriklerimiz">
                      Keşfet <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Basım Yayın */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <Image
                    src="/images/publishing-card.png"
                    alt="Basım Yayın"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">Yayınlarımız</Badge>
                  <CardTitle className="text-2xl md:text-3xl mb-4">Basım Yayın</CardTitle>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Tevhid Basım Yayın tarafından hazırlanan kitaplar, tercümeler ve ilmi eserler. İslami ilimlerde derinleşmek isteyenler için kaynak eserler.
                  </p>
                  <Button variant="outline" className="w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link href="/tevhid-basim-yayin">
                      İncele <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* İnsani Yardım */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden md:order-2">
                  <Image
                    src="/images/aid-card-kids.png"
                    alt="İnsani Yardım"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center md:order-1">
                  <Badge variant="outline" className="w-fit mb-4">Yardım Faaliyetleri</Badge>
                  <CardTitle className="text-2xl md:text-3xl mb-4">İnsani Yardım</CardTitle>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Mazlum coğrafyalardaki kardeşlerimize ulaştırdığımız yardımlar, projelerimiz ve destek kampanyalarımız. İyiliğe ortak olun.
                  </p>
                  <Button variant="outline" className="w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link href="/insani-yardim">
                      Destek Ol <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* Şubelerimiz */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <Image
                    src="/images/branches-card.png"
                    alt="Şubelerimiz"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">Türkiye Geneli</Badge>
                  <CardTitle className="text-2xl md:text-3xl mb-4">Şubelerimiz</CardTitle>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Türkiye'nin farklı şehirlerinde hizmet veren şubelerimiz. Size en yakın şubemizi bulun ve bizimle iletişime geçin.
                  </p>
                  <Button variant="outline" className="w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link href="/subelerimiz">
                      Konumları Gör <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>

            {/* İletişim */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden md:order-2">
                  <Image
                    src="/images/contact-card.png"
                    alt="İletişim"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center md:order-1">
                  <Badge variant="outline" className="w-fit mb-4">Bize Ulaşın</Badge>
                  <CardTitle className="text-2xl md:text-3xl mb-4">İletişim</CardTitle>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Sorularınız, görüşleriniz ve destek talepleriniz için bizimle iletişime geçin. Telefon, e-posta ve WhatsApp üzerinden ulaşabilirsiniz.
                  </p>
                  <Button variant="outline" className="w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link href="/iletisim">
                      İletişime Geç <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
