"use client";

import { MapPin, Phone, Mail, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Map, MapMarker, MarkerContent, MarkerPopup, MapControls } from "@/components/ui/map";
import { cn } from "@/lib/utils";
import { cinzel } from "@/lib/fonts";
import { PageHero } from "@/components/page-hero";

// Şube verileri - https://alpha.tevhiddersleri.org/subeler referans alınarak oluşturulmuştur
const subeler = [
    {
        id: 1,
        sehir: "İstanbul",
        bolge: "Merkez",
        adres: "Güneşli Mh. 1332. Sk. No:1 34212 Bağcılar/İstanbul",
        aciklama: "Merkez şube",
        telefon: "+90 535 766 45 45",
        email: "info@tevhiddergisi.org",
        seminerSaatleri: "Erkekler: Cumartesi 21:00 | Hanımlar: Cumartesi 13:30",
        longitude: 28.701674788138657,
        latitude: 41.02203045292211,
        isMerkez: true,
    },
    {
        id: 2,
        sehir: "İstanbul",
        bolge: "Avcılar",
        adres: "Firüzköy Mh. Kazım Karabekir Cd. Tütün Sk. No:2 34310 Avcılar/İstanbul",
        aciklama: "Yalnızca seminer saatlerinde açık",
        telefon: "+90 535 766 45 45",
        email: "info@tevhiddergisi.org",
        seminerSaatleri: "Erkekler: Cumartesi 21:00 | Hanımlar: Cumartesi 13:30",
        longitude: 28.85077367054021,
        latitude: 41.11114689478217,
        isMerkez: false,
    },
    {
        id: 3,
        sehir: "İstanbul",
        bolge: "Sultangazi",
        adres: "İsmetpaşa Mh. 95. Sk. No: 41/A 34270 Sultangazi/İstanbul",
        aciklama: "Yalnızca seminer saatlerinde açık",
        telefon: "+90 535 766 45 45",
        email: "info@tevhiddergisi.org",
        seminerSaatleri: "Erkekler: Cumartesi 21:00 | Hanımlar: Cumartesi 13:30",
        longitude: 28.85,
        latitude: 41.11,
        isMerkez: false,
    },
    {
        id: 4,
        sehir: "Konya",
        bolge: "",
        adres: "Mengene Mh. Büyük Kumköprü Cd. No:78/A 42020 Karatay/Konya",
        aciklama: "Konya şubesi",
        telefon: "+90 543 225 50 49",
        email: "info@tevhiddergisi.org",
        seminerSaatleri: "Erkekler: Cumartesi 21:00 | Hanımlar: Cumartesi 12:00",
        longitude: 32.50932710544145,
        latitude: 37.857804140065575,
        isMerkez: false,
    },
    {
        id: 5,
        sehir: "Diyarbakır",
        bolge: "",
        adres: "Fırat Mh. 500. Sk. Taşkıran 2 sitesi D blok No:1 21070 Kayapınar/Diyarbakır",
        aciklama: "Yalnızca seminer saatlerinde açık",
        telefon: "+90 543 225 50 43",
        email: "info@tevhiddergisi.org",
        seminerSaatleri: "Erkekler: Cumartesi 20:00 | Hanımlar: Cumartesi 13:00",
        longitude: 40.16522167207086,
        latitude: 37.92876454008656,
        isMerkez: false,
    },
    {
        id: 6,
        sehir: "Van",
        bolge: "",
        adres: "Vali Mithat Bey Mh. Gündüz 2. Sk. No:2/A 65100 İpekyolu/Van",
        aciklama: "Tevhid Kitabevi",
        telefon: "+90 543 225 50 45",
        email: "info@tevhiddergisi.org",
        seminerSaatleri: "Erkekler: Cumartesi 20:00 | Hanımlar: Cumartesi 12:00",
        longitude: 43.391524147023716,
        latitude: 38.502151595811476,
        isMerkez: false,
    },
    {
        id: 7,
        sehir: "Ankara",
        bolge: "",
        adres: "Piyade Mh. İstasyon Cd. No:190 06794 Etimesgut/Ankara",
        aciklama: "Geçici süreliğine seminer yok",
        telefon: "+90 543 225 50 48",
        email: "info@tevhiddergisi.org",
        seminerSaatleri: "Geçici bir süreliğine seminer olmayacak",
        longitude: 32.64295112265896,
        latitude: 39.95272715207715,
        isMerkez: false,
    },
    {
        id: 8,
        sehir: "Bursa",
        bolge: "",
        adres: "Bağlarbaşı Mh. 1. Hürriyet Cd. 1. Sedir Sk. No: 1 16160 Osmangazi/Bursa",
        aciklama: "Bursa şubesi",
        telefon: "+90 543 225 50 46",
        email: "info@tevhiddergisi.org",
        seminerSaatleri: "Erkekler: Cumartesi 21:00 | Hanımlar: Cumartesi 13:00",
        longitude: 28.98628027054021,
        latitude: 40.2312726357865,
        isMerkez: false,
    },
    {
        id: 9,
        sehir: "Van",
        bolge: "Erciş",
        adres: "Kışla Mh. Şehitler Cd. No:10 65400 Erciş/Van",
        aciklama: "Yalnızca seminer saatlerinde açık",
        telefon: "+90 543 225 50 30",
        email: "info@tevhiddergisi.org",
        seminerSaatleri: "Erkekler: Pazar 20:00 | Hanımlar: Pazar 13:00",
        longitude: 43.357613739396804,
        latitude: 39.02658389281574,
        isMerkez: false,
    },
    {
        id: 10,
        sehir: "Adana",
        bolge: "",
        adres: "Mehmet Akif Ersoy Mh. Şehit Polis Volkan Çay Bulvarı No: 4/B Sarıçam/Adana",
        aciklama: "Adana şubesi",
        telefon: "+90 555 655 00 70",
        email: "info@tevhiddergisi.org",
        seminerSaatleri: "Erkekler: Cumartesi 21:00 | Hanımlar: Cumartesi 13:00",
        longitude: 35.39783308302125,
        latitude: 37.02048958860964,
        isMerkez: false,
    },
    {
        id: 11,
        sehir: "Kırıkkale",
        bolge: "",
        adres: "Yenişehir Mh. Özbek Saran Sk. No:3/A 71450 Yahşiyan/Kırıkkale",
        aciklama: "Tevhid Kitabevi",
        telefon: "+90 536 391 76 60",
        email: "info@tevhiddergisi.org",
        seminerSaatleri: "",
        longitude: 33.454904297315245,
        latitude: 39.86780276422882,
        isMerkez: false,
    },
    {
        id: 12,
        sehir: "Şanlıurfa",
        bolge: "",
        adres: "Paşabağı Mh. Zafer Cd. Aydınlar A Blok No:42/C 63040 Haliliye/Şanlıurfa",
        aciklama: "Şanlıurfa şubesi",
        telefon: "+90 544 978 00 63",
        email: "info@tevhiddergisi.org",
        seminerSaatleri: "Erkekler: Pazar 20:00 | Hanımlar: Pazar 13:00",
        longitude: 38.803642018333974,
        latitude: 37.157527146443904,
        isMerkez: false,
    },
    {
        id: 13,
        sehir: "Bursa",
        bolge: "İnegöl",
        adres: "Sinanbey Mh. Baykut Sk. No:1, 16400 İnegöl/Bursa",
        aciklama: "Tevhid Kitabevi",
        telefon: "+90 543 225 50 16",
        email: "info@tevhiddergisi.org",
        seminerSaatleri: "",
        longitude: 29.514589250959762,
        latitude: 40.08596823416517,
        isMerkez: false,
    },
];


export default function SubelerimizPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO SECTION */}
            <PageHero
                badge="Türkiye Geneli"
                title="Şubelerimiz"
                description="Türkiye'nin farklı şehirlerinde hizmet veren şubelerimiz"
            />

            {/* İNTERAKTİF HARİTA */}
            <section id="harita" className="py-20 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <Badge variant="outline" className="mb-4">
                                İnteraktif Harita
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                                Şubelerimizi Keşfedin
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Harita üzerindeki işaretlere tıklayarak şube detaylarını görüntüleyin
                            </p>
                        </div>

                        <Card className="p-0 overflow-hidden shadow-xl">
                            <div className="h-[600px] w-full">
                                <Map
                                    center={[35.5, 39.0]}
                                    zoom={5.2}
                                >
                                    <MapControls />

                                    {subeler.map((sube) => (
                                        <MapMarker
                                            key={sube.id}
                                            longitude={sube.longitude}
                                            latitude={sube.latitude}
                                        >
                                            <MarkerContent className="cursor-pointer">
                                                <div className="relative">
                                                    <div className={cn(
                                                        "rounded-full p-3 shadow-lg hover:scale-110 transition-transform",
                                                        sube.isMerkez
                                                            ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                                                            : "bg-primary text-primary-foreground"
                                                    )}>
                                                        <MapPin className="w-5 h-5" />
                                                    </div>
                                                    {sube.isMerkez && (
                                                        <div className="absolute -top-1 -right-1">
                                                            <Star className="w-3 h-3 text-primary fill-primary" />
                                                        </div>
                                                    )}
                                                </div>
                                            </MarkerContent>

                                            <MarkerPopup closeButton={true}>
                                                <div className="p-4 min-w-[280px]">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <h3 className="font-bold text-lg text-foreground">
                                                            {sube.sehir}{sube.bolge && ` / ${sube.bolge}`}
                                                        </h3>
                                                        {sube.isMerkez && (
                                                            <Badge variant="default" className="text-xs">
                                                                <Star className="w-3 h-3 mr-1 fill-current" />
                                                                MERKEZ
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <div className="space-y-2 text-sm">
                                                        <div className="flex items-start gap-2">
                                                            <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                                            <p className="text-muted-foreground">{sube.adres}</p>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                                                            <a
                                                                href={`https://wa.me/${sube.telefon.replace(/\s/g, '').replace('+', '')}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-muted-foreground hover:text-primary transition-colors"
                                                            >
                                                                {sube.telefon}
                                                            </a>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                                                            <p className="text-muted-foreground text-xs">{sube.email}</p>
                                                        </div>
                                                        {sube.seminerSaatleri && (
                                                            <div className="pt-2 border-t">
                                                                <p className="text-xs text-muted-foreground">
                                                                    <strong>Seminer Saatleri:</strong><br />
                                                                    {sube.seminerSaatleri}
                                                                </p>
                                                            </div>
                                                        )}
                                                        <div className="pt-2 border-t">
                                                            <Badge variant="secondary" className="text-xs">
                                                                {sube.aciklama}
                                                            </Badge>
                                                        </div>
                                                        <div className="pt-3">
                                                            <a
                                                                href={`https://www.google.com/maps/dir/?api=1&destination=${sube.latitude},${sube.longitude}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                                                            >
                                                                <MapPin className="w-4 h-4" />
                                                                Yol Tarifi Al
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </MarkerPopup>
                                        </MapMarker>
                                    ))}
                                </Map>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* ŞUBE KARTLARI */}
            <section id="subelerimiz" className="py-20 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                                Tüm Şubelerimiz
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Detaylı bilgi için şubelerimizle iletişime geçebilirsiniz
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {subeler.map((sube) => (
                                <Card
                                    key={sube.id}
                                    className={cn(
                                        "overflow-hidden transition-all duration-300 hover:-translate-y-1 group relative",
                                        sube.isMerkez
                                            ? "border-primary/50 shadow-lg ring-2 ring-primary/20"
                                            : "hover:shadow-lg"
                                    )}
                                >
                                    {sube.isMerkez && (
                                        <div className="absolute top-0 right-0 z-20">
                                            <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 shadow-md">
                                                <Star className="w-3 h-3 fill-current" />
                                                MERKEZ ŞUBE
                                            </div>
                                        </div>
                                    )}
                                    <div className={cn(
                                        "relative h-32 w-full flex items-center justify-center transition-colors",
                                        sube.isMerkez
                                            ? "bg-primary/15"
                                            : "bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10"
                                    )}>
                                        <MapPin className={cn(
                                            "transition-all duration-300 text-primary",
                                            sube.isMerkez ? "w-14 h-14" : "w-12 h-12"
                                        )} />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                                            {sube.sehir}{sube.bolge && ` / ${sube.bolge}`}
                                            {sube.isMerkez && <Star className="w-5 h-5 text-primary fill-primary" />}
                                        </h3>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-start gap-2">
                                                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                                <p className="text-muted-foreground">{sube.adres}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                                <a
                                                    href={`https://wa.me/${sube.telefon.replace(/\s/g, '').replace('+', '')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    {sube.telefon}
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                                <p className="text-muted-foreground text-xs">{sube.email}</p>
                                            </div>
                                        </div>
                                        {sube.seminerSaatleri && (
                                            <div className="mt-4 pt-4 border-t">
                                                <p className="text-xs text-muted-foreground mb-2">
                                                    <strong>Seminer Saatleri:</strong>
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {sube.seminerSaatleri}
                                                </p>
                                            </div>
                                        )}
                                        <div className="mt-4 pt-4 border-t">
                                            <Badge variant="outline" className="text-xs mb-3">
                                                {sube.aciklama}
                                            </Badge>
                                            <a
                                                href={`https://www.google.com/maps/dir/?api=1&destination=${sube.latitude},${sube.longitude}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                                            >
                                                <MapPin className="w-4 h-4" />
                                                Yol Tarifi Al
                                            </a>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
