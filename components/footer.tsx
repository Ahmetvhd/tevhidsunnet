import Link from "next/link"
import { Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-12 md:py-16 lg:py-20">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-2">
                        <Link href="/" className="mb-4 flex items-center gap-2 font-bold text-xl">
                            Tevhid ve Sünnet
                        </Link>
                        <p className="text-muted-foreground max-w-xs text-sm">
                            Kur'an ve Sünnet ışığında, sahih ilim ve davet çalışmaları.
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <h3 className="text-lg font-semibold">Kurumsal</h3>
                        <Link href="/biz-kimiz" className="text-sm text-muted-foreground hover:underline">
                            Hakkımızda
                        </Link>
                        <Link href="/subelerimiz" className="text-sm text-muted-foreground hover:underline">
                            Şubelerimiz
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                            Gizlilik Politikası
                        </Link>
                    </div>
                    <div className="grid gap-2">
                        <h3 className="text-lg font-semibold">Yayınlar</h3>
                        <Link href="/tevhid-basim-yayin#kitaplarimiz" className="text-sm text-muted-foreground hover:underline">
                            Kitaplar
                        </Link>
                        <Link href="/tevhid-basim-yayin#tevhid-dergisi" className="text-sm text-muted-foreground hover:underline">
                            Dergiler
                        </Link>
                    </div>
                    <div className="grid gap-2">
                        <h3 className="text-lg font-semibold">İletişim</h3>
                        <div className="flex flex-col gap-6 mt-4">
                            <Link
                                href="https://wa.me/905357664545"
                                target="_blank"
                                className="inline-block text-muted-foreground hover:text-primary transition-colors group w-fit"
                            >
                                <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors w-fit">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                    </svg>
                                </div>
                            </Link>
                            <Link
                                href="mailto:info@tevhiddergisi.org"
                                className="inline-block text-muted-foreground hover:text-primary transition-colors group w-fit"
                            >
                                <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors w-fit">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,18H18V10L12,14L6,10V18H4V6H5.4L12,10.6L18.6,6H20V18Z" />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row text-center md:text-left">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Tevhid ve Sünnet. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    )
}
