
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
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { halisBayancukChannels, tevhidDersleriChannels, otherChannels } from "./youtube-data";
import { mobileApps } from "./mobile-apps-data";
import { halisBayancukSocial, tevhidDersleriSocial, otherSocial } from "./social-media-data";
import { WebsitesCarousel } from "./websites-carousel";


// Reusable Youtube Card Component
function YoutubeCard({ channel }: { channel: any }) {
    if (channel.id === 5 && channel.url === "https://www.youtube.com/@monotheismefr") {
        // Fransızca Monotheisme özel görsel ayarı gerekebilir
        // Ancak veri yapısında hepsi standart.
    }

    return (
        <Card className="group relative h-full overflow-hidden border-none shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-card">
            {/* Arka Plan Görseli */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={channel.background}
                    alt="Background"
                    fill
                    className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
            </div>

            {/* İçerik */}
            <CardContent className="relative z-10 p-4 md:p-6 flex flex-col items-center text-center h-full">
                {/* Profil Fotoğrafı */}
                <div className="relative mb-5 mt-2">
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/30 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/40 transition-all duration-300">
                        <Image
                            src={channel.image}
                            alt={channel.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {channel.badge && (
                        <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold bg-primary text-primary-foreground border-2 border-background shadow-lg">
                            {channel.badge}
                        </Badge>
                    )}
                    {!channel.badge && channel.lang && (
                        <Badge className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs bg-primary text-primary-foreground border-2 border-background shadow-sm">
                            {channel.lang}
                        </Badge>
                    )}
                </div>

                {/* Başlık ve Açıklama */}
                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow flex flex-col justify-center w-full">
                    <div className="flex items-center justify-center gap-2">
                        <h3 className="text-lg md:text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                            {channel.title}
                        </h3>
                        <Youtube className="w-5 h-5 text-red-600 opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {channel.description}
                    </p>
                </div>

                {/* Buton */}
                <Button className="w-full group/btn relative overflow-hidden bg-background border-2 border-primary/20 hover:bg-primary hover:border-primary" asChild>
                    <Link href={channel.url} target="_blank">
                        <span className="relative z-10 flex items-center text-primary group-hover/btn:text-primary-foreground transition-colors duration-300">
                            {channel.buttonText}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    );
}

function AppCard({ app }: { app: any }) {
    return (
        <Card className="group relative overflow-hidden border-none shadow-lg bg-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ring-1 ring-primary/20 flex flex-col h-full">
            <div className="absolute inset-0 z-0">
                <Image
                    src={app.background}
                    alt="Background"
                    fill
                    className="object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-card/95 via-card/70 to-card/30" />
            </div>

            <CardContent className="relative z-10 p-5 md:p-6 flex flex-col items-center text-center h-full">
                {/* App Icon */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4 md:mb-5 rounded-[22px] overflow-hidden shadow-xl ring-4 ring-primary/10 group-hover:ring-primary/30 group-hover:scale-105 transition-all duration-500 bg-white">
                    <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* App Info */}
                <div className="space-y-2 mb-6 md:mb-8 flex-grow">
                    <div>
                        <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">{app.title}</h3>
                        <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-wider uppercase mt-1">
                            {app.category}
                        </span>
                    </div>
                    <p className="text-sm text-foreground/80 line-clamp-3 pt-1">
                        {app.description}
                    </p>
                </div>

                {/* Download Buttons */}
                <div className="grid grid-cols-2 gap-3 w-full mt-auto">
                    <Button variant="outline" className="h-auto py-2.5 px-3 flex flex-col items-center gap-1 hover:bg-black hover:text-white hover:border-black transition-all group/apple ring-1 ring-primary/10" asChild>
                        <Link href={app.appleLink} target="_blank">
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
                        <Link href={app.googleLink} target="_blank">
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
    );
}



// Social Media Icons Helper
const SocialIcon = ({ type, className }: { type: string, className?: string }) => {
    switch (type) {
        case 'x':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            );
        case 'whatsapp':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
            );
        case 'dailymotion':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                    <path d="M13.551 11.485c-1.02 0-1.97.411-2.65 1.088V7.25H8.165v9.5h2.736v-.391c.68.68 1.63 1.09 2.65 1.09 2.07 0 3.751-1.68 3.751-3.751s-1.68-3.751-3.751-3.751zm-.408 5.663c-1.055 0-1.912-.857-1.912-1.912s.857-1.912 1.912-1.912 1.912.857 1.912 1.912-.857 1.912-1.912 1.912zM23.25 12c0-6.213-5.037-11.25-11.25-11.25S.75 5.787.75 12 5.787 23.25 12 23.25 23.25 18.213 23.25 12zm-1.5 0c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75z" />
                </svg>
            );
        case 'telegram':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" />
                </svg>
            );
        case 'facebook':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
            );
        case 'instagram':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            );
        case 'tiktok':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.58-1.11-.27-.26-.53-.55-.78-.85v10.51c-.01 1.63-.58 3.24-1.62 4.54-1.04 1.3-2.58 2.08-4.23 2.15-2.1.09-4.2-.82-5.46-2.5-1.35-1.81-1.39-4.32-.1-6.17 1.17-1.67 3.16-2.6 5.17-2.45v3.91c-.57-.1-1.18.15-1.55.59-.44.5-.42 1.25.03 1.73.43.46 1.16.51 1.65.11.45-.37.71-.94.69-1.53v-13.5a20.16 20.16 0 0 1 4.2-1.28c-1.35-.45-2.06-1.92-2.12-3.69Z" />
                </svg>
            );
        default:
            return null;
    }
}

function SocialMediaCard({ item }: { item: any }) {
    return (
        <Card className="group relative aspect-square w-full max-w-[240px] mx-auto overflow-hidden border border-border/40 bg-card shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-500 touch-manipulation">
            {/* Arka Plan Görseli */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={item.background}
                    alt="Background"
                    fill
                    className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background/95" />
            </div>

            <CardContent className="relative z-10 px-2 py-4 flex flex-col items-center justify-center text-center h-full">
                {/* Profil Fotoğrafı */}
                <div className="relative mb-1 mt-1">
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary/40 to-amber-500/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-background shadow-xl ring-1 ring-border group-hover:ring-primary/50 transition-all duration-300">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {item.language && (
                        <Badge className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] bg-primary text-primary-foreground border border-primary-foreground/20 shadow-sm whitespace-nowrap">
                            Sosyal Medya
                        </Badge>
                    )}
                    {!item.language && (
                        <Badge className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[9px] bg-primary text-primary-foreground border border-primary-foreground/20 shadow-sm whitespace-nowrap">
                            Sosyal Medya
                        </Badge>
                    )}
                </div>
                {item.language ? (
                    <span className="text-[10px] font-medium text-muted-foreground/60 ">{item.language}</span>
                ) : (
                    <span className="text-[5px] font-medium text-transparent mb-0.05 select-none">Boşluk</span>
                )}

                <h3 className="text-sm font-bold tracking-tight group-hover:text-primary transition-colors duration-300 mb-0.5 line-clamp-2">
                    {item.title}
                </h3>

                {/* Sosyal Medya İkonları */}
                <div className="flex flex-nowrap justify-center gap-1 mb-0.05 w-full overflow-visible">
                    {item.links.map((link: any, index: number) => {
                        // Determine styling based on link type for hover effects
                        let hoverClass = "";
                        let iconClass = "text-foreground/80 transition-all duration-300";
                        switch (link.type) {
                            case 'x': hoverClass = "hover:bg-black/10 hover:border-black/20"; iconClass = "text-foreground/80 group-hover/icon:text-black group-hover/icon:scale-110 " + iconClass; break;
                            case 'whatsapp': hoverClass = "hover:bg-green-500/10 hover:border-green-500/30"; iconClass = "text-foreground/80 group-hover/icon:text-green-600 group-hover/icon:scale-110 " + iconClass; break;
                            case 'telegram': hoverClass = "hover:bg-sky-500/10 hover:border-sky-500/30"; iconClass = "text-foreground/80 group-hover/icon:text-sky-500 group-hover/icon:scale-110 " + iconClass; break;
                            case 'dailymotion': hoverClass = "hover:bg-blue-600/10 hover:border-blue-600/30"; iconClass = "text-foreground/80 group-hover/icon:text-blue-600 group-hover/icon:scale-110 " + iconClass; break;
                            case 'facebook': hoverClass = "hover:bg-blue-600/10 hover:border-blue-600/30"; iconClass = "text-foreground/80 group-hover/icon:text-blue-600 group-hover/icon:scale-110 " + iconClass; break;
                            case 'instagram': hoverClass = "hover:bg-gradient-to-tr hover:from-[#f09433]/20 hover:via-[#dc2743]/20 hover:to-[#bc1888]/20 hover:border-[#dc2743]/30"; iconClass = "text-foreground/80 group-hover/icon:text-[#dc2743] group-hover/icon:scale-110 " + iconClass; break;
                            case 'tiktok': hoverClass = "hover:bg-black/10 hover:border-black/20"; iconClass = "text-foreground/80 group-hover/icon:text-black group-hover/icon:scale-110 " + iconClass; break;
                        }

                        return (
                            <Link key={index} href={link.url} target="_blank" className="group/icon active:scale-95 transition-transform">
                                <div className={`w-7 h-7 rounded-md bg-muted/60 border border-border/40 flex items-center justify-center transition-all duration-300 hover:shadow-md ${hoverClass}`}>
                                    <SocialIcon type={link.type} className={`w-3 h-3 ${iconClass}`} />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <p className="text-[11px] text-muted-foreground/80 leading-relaxed">
                    Sosyal medya hesaplarımızı takip edin
                </p>
            </CardContent>
        </Card>
    );
}

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

                            {/* Desktop Grid - Hidden on Mobile */}
                            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {halisBayancukChannels.map((channel) => (
                                    <div key={channel.id} className="h-full">
                                        <YoutubeCard channel={channel} />
                                    </div>
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
                                        {halisBayancukChannels.map((channel) => (
                                            <CarouselItem key={channel.id} className="pl-4 basis-[85%]">
                                                <div className="h-full">
                                                    <YoutubeCard channel={channel} />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <div className="flex justify-center gap-2 mt-4">
                                        <CarouselPrevious className="static translate-y-0 translate-x-0 h-8 w-8" />
                                        <CarouselNext className="static translate-y-0 translate-x-0 h-8 w-8" />
                                    </div>
                                </Carousel>
                            </div>
                        </div>
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

                            {/* Desktop Grid - Hidden on Mobile */}
                            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {tevhidDersleriChannels.map((channel) => (
                                    <div key={channel.id} className="h-full">
                                        <YoutubeCard channel={channel} />
                                    </div>
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
                                        {tevhidDersleriChannels.map((channel) => (
                                            <CarouselItem key={channel.id} className="pl-4 basis-[85%]">
                                                <div className="h-full">
                                                    <YoutubeCard channel={channel} />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <div className="flex justify-center gap-2 mt-4">
                                        <CarouselPrevious className="static translate-y-0 translate-x-0 h-8 w-8" />
                                        <CarouselNext className="static translate-y-0 translate-x-0 h-8 w-8" />
                                    </div>
                                </Carousel>
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


                            {/* Desktop Grid - Hidden on Mobile */}
                            <div className="hidden md:grid md:grid-cols-2 lg:gap-8 gap-6">
                                {otherChannels.map((channel) => (
                                    <div key={channel.id} className="h-full">
                                        <YoutubeCard channel={channel} />
                                    </div>
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
                                        {otherChannels.map((channel) => (
                                            <CarouselItem key={channel.id} className="pl-4 basis-[85%]">
                                                <div className="h-full">
                                                    <YoutubeCard channel={channel} />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <div className="flex justify-center gap-2 mt-4">
                                        <CarouselPrevious className="static translate-y-0 translate-x-0 h-8 w-8" />
                                        <CarouselNext className="static translate-y-0 translate-x-0 h-8 w-8" />
                                    </div>
                                </Carousel>
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

                    <WebsitesCarousel />
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

                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 md:px-0">
                        {mobileApps.map((app) => (
                            <div key={app.id} className="h-full">
                                <AppCard app={app} />
                            </div>
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
                                {mobileApps.map((app) => (
                                    <CarouselItem key={app.id} className="pl-4 basis-[85%]">
                                        <div className="h-full">
                                            <AppCard app={app} />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="flex justify-center gap-2 mt-4">
                                <CarouselPrevious className="static translate-y-0 translate-x-0 h-8 w-8" />
                                <CarouselNext className="static translate-y-0 translate-x-0 h-8 w-8" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>

            {/* SOSYAL MEDYA HESAPLARIMIZ */}
            <section id="sosyal-medya" className="py-20 md:py-32 bg-muted/20">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Sosyal Medya Hesaplarımız</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Anlık paylaşımlar, duyurular ve interaktif içerikler için bizi takip edin.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto space-y-12">

                        {/* Halis Bayancuk Hoca Section */}
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
                                    <p className="text-sm text-muted-foreground">Sosyal Medya Hesapları</p>
                                </div>
                            </div>

                            {/* Desktop Grid */}
                            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {halisBayancukSocial.map((item) => (
                                    <SocialMediaCard key={item.id} item={item} />
                                ))}
                            </div>

                            {/* Mobile Carousel */}
                            <div className="block md:hidden">
                                <Carousel opts={{ align: "start", loop: true }} className="w-full">
                                    <CarouselContent className="-ml-2">
                                        {halisBayancukSocial.map((item) => (
                                            <CarouselItem key={item.id} className="pl-2 basis-[65%] sm:basis-[50%]">
                                                <SocialMediaCard item={item} />
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <div className="flex justify-center gap-2 mt-4">
                                        <CarouselPrevious className="static translate-y-0 translate-x-0 h-8 w-8" />
                                        <CarouselNext className="static translate-y-0 translate-x-0 h-8 w-8" />
                                    </div>
                                </Carousel>
                            </div>
                        </div>

                        {/* Tevhid Dersleri Section */}
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
                                    <p className="text-sm text-muted-foreground">İlmi Dersler ve Eğitim Platformları</p>
                                </div>
                            </div>

                            {/* Desktop Grid */}
                            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {tevhidDersleriSocial.map((item) => (
                                    <SocialMediaCard key={item.id} item={item} />
                                ))}
                            </div>

                            {/* Mobile Carousel */}
                            <div className="block md:hidden">
                                <Carousel opts={{ align: "start", loop: true }} className="w-full">
                                    <CarouselContent className="-ml-2">
                                        {tevhidDersleriSocial.map((item) => (
                                            <CarouselItem key={item.id} className="pl-2 basis-[65%] sm:basis-[50%]">
                                                <SocialMediaCard item={item} />
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <div className="flex justify-center gap-2 mt-4">
                                        <CarouselPrevious className="static translate-y-0 translate-x-0 h-8 w-8" />
                                        <CarouselNext className="static translate-y-0 translate-x-0 h-8 w-8" />
                                    </div>
                                </Carousel>
                            </div>
                        </div>

                        {/* Diğer Section */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 pb-4 border-b border-border/50">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-border shadow-lg flex-shrink-0 bg-background">
                                    <Image
                                        src="/images/diger-kanallar-logo.png"
                                        alt="Diğer Sosyal Medya Hesaplarımız"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-600">
                                        Diğer Kurum ve Çalışmalarımız
                                    </h3>
                                    <p className="text-sm text-muted-foreground">Vakıf, Yayın ve Kültürel Faaliyetlerimiz</p>
                                </div>
                            </div>

                            {/* Desktop Grid */}
                            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {otherSocial.map((item) => (
                                    <SocialMediaCard key={item.id} item={item} />
                                ))}
                            </div>

                            {/* Mobile Carousel */}
                            <div className="block md:hidden">
                                <Carousel opts={{ align: "start", loop: true }} className="w-full">
                                    <CarouselContent className="-ml-2">
                                        {otherSocial.map((item) => (
                                            <CarouselItem key={item.id} className="pl-2 basis-[65%] sm:basis-[50%]">
                                                <SocialMediaCard item={item} />
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <div className="flex justify-center gap-2 mt-4">
                                        <CarouselPrevious className="static translate-y-0 translate-x-0 h-8 w-8" />
                                        <CarouselNext className="static translate-y-0 translate-x-0 h-8 w-8" />
                                    </div>
                                </Carousel>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
