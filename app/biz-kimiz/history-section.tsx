"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, BookOpen } from "lucide-react";

export function HistorySection() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                    Rahman ve Rahim olan Allah’ın adıyla…
                </p>
                <p>
                    Allah’a hamd, Rasûlü’ne salât ve selam olsun.
                </p>
                <p>
                    Kıymetli Kardeşim!
                </p>
                <p>
                    Bizler Allah’ın kendilerine hidayet bahşettiği, dinine hizmete muvaffak kıldığı, günahlarından korkan ve Allah’ın (cc) rahmetini uman bir topluluğuz.
                </p>

                <Button
                    variant="link"
                    className="p-0 h-auto font-semibold text-primary hover:text-primary/80"
                    onClick={() => setIsOpen(true)}
                >
                    Devamını Oku <BookOpen className="ml-2 h-4 w-4" />
                </Button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div
                        className="relative w-full max-w-4xl bg-background rounded-lg shadow-2xl border border-border flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between p-6 border-b">
                            <h2 className="text-2xl font-bold tracking-tight">Hakkımızda</h2>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-muted rounded-full"
                            >
                                <X className="h-5 w-5" />
                                <span className="sr-only">Kapat</span>
                            </Button>
                        </div>

                        <div className="overflow-y-auto p-6 md:p-8">
                            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
                                <p className="font-medium text-lg">
                                    Rahman ve Rahim olan Allah’ın adıyla…
                                </p>
                                <p>
                                    Allah’a hamd, Rasûlü’ne salât ve selam olsun.
                                </p>
                                <p>
                                    Kıymetli Kardeşim!
                                </p>
                                <p>
                                    Bizler Allah’ın kendilerine hidayet bahşettiği, dinine hizmete muvaffak kıldığı, günahlarından korkan ve Allah’ın (cc) rahmetini uman bir topluluğuz.
                                </p>

                                <p>
                                    Bu mesajı en gür sesimizle haykırdık. Tevhid ve Sünnet davetimiz Türkiye sınırlarını aştı. Derslerimiz ve yayınlarımız Türkçe dışında birçok yabancı dile çevrildi. Dünya basınında Halis Hoca’mız (Ebu Hanzala) ve davetimizle ilgili haberler yapılmaya başlandı.
                                </p>
                                <p>
                                    Zihinlerde oluşan soru büyüdü: ‘Kimdi bunlar ve ne istiyorlardı?’ Herkes bir şeyler söyledi.
                                </p>
                                <p>
                                    Bu sebeple merak edip araştıranların zihinlerindeki sorulara samimi ve apaçık bir cevap olması adına bu tanıtım metnini hazırladık.
                                </p>

                                <h3 className="text-xl font-bold mt-8 mb-4">Tevhid ve Sünnet Cemaatinin Misyonu Nedir?</h3>
                                <p>
                                    Tevhid ve Sünnet cemaati olarak bizler, insanları İslam’a davet edip Tevhid ve Sünnet hakikatlerini apaçık beyan etmeyi misyon edinen bir davet topluluğuz.
                                </p>
                                <p>
                                    İslam davetimizi Kur’an ve Sünnet’ten muhkem naslar/deliller üzerine kurar, insanları bu delillerle Tevhid ve Sünnet’in esaslarına açık, şeffaf ve net bir üslupla davet ederiz. Bunun için birebir daveti esas görmekle birlikte, davetin insanlara ulaşması için şer’i olarak meşru olan tüm yöntemleri kullanmanın gerekliliğine inanırız. Yazılı, sözlü ve görüntülü medya araçlarını da davetimizde aktif olarak kullanırız.
                                </p>
                                <p>
                                    Cemaatimizin resmi yayın organı, ‘TevhidDergisi’ ve ‘TevhidDersleri’ web siteleridir. Değerli hocalarımızın ve öğrencilerin emeğiyle hazırlanan ‘Tevhid’ isimli dergimiz ve davet faaliyetlerimizin yayınlandığı ‘tevhiddersleri’ web sitemiz, asli yayın organlarımızdır.
                                </p>
                                <p>
                                    ‘Tevhid Dergisi’ ve ‘Tevhid Dersleri’ web adreslerinde bizimle irtibatlı görülen adres ve sosyal medya hesapları camiamıza ait olup, bunun dışında paylaşımlar yayınlayan adreslerle İslam kardeşliği dışında bir ilişkimiz bulunmamaktadır.
                                </p>
                                <p>
                                    Kitap çalışmalarımız Tevhid Basım ve Yayınevi tarafından yayımlanmaktadır. Tevhid Dergisi’nde yayınlanan başyazılar, cemaatimizin bülteni olup; akidevî, siyasi, menheci, ahlaki gibi konularda cemaatin düşüncesini yansıtmaktadır.
                                </p>

                                <h3 className="text-xl font-bold mt-8 mb-4">Tevhid ve Sünnet Cemaatinin Eğitim Faaliyetlerinin Amacı Nedir?</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Şahısların İslam akidesini öğrenip, toplumun üzerinde olduğu cahiliyeden tevbe ederek Allah’a teslim olması.</li>
                                    <li>İslam’ın ahlaki değerlerinin öğrenilmesi ve bunların amelî boyutunun hayata geçirilmesi.</li>
                                    <li>Sosyal faaliyetlerle Müslümanların kaynaşması ve hem cemaat içerisinde hem de cemaat dışındaki Müslümanlarla İslam kardeşliği esasına dayalı bir ilişki tesis etmek.</li>
                                    <li>İlme yatkın olan gençlerin, ilim talebesi, birer davetçi olmasını sağlamak.</li>
                                    <li>Davet ve ilim yönündeki tüm çalışmalarımız, ümmetin bir diğer yarısı ve İslam mücadelesinin onlarsız olmayacağı Müslim hanımlar için de geçerlidir.</li>
                                </ul>

                                <h3 className="text-xl font-bold mt-8 mb-4">Çalışmalarımızın Ana Hedefi Nedir?</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Her şeyiyle İslam’a adanıp, hizmet ehli olacak Müslimlerin tespiti, ilmî/ahlaki eğitimi ve irşad edilmesi.</li>
                                    <li>Türkiye Müslimlerinin tevhidî duyarlılıkları nedeniyle sıkıntı yaşadıkları eğitim meselesinin çözümüne katkı sağlamak.</li>
                                    <li>Tevhid ve Sünnet hakikatlerini Türkiye’nin en ücra köşesine ulaştırıncaya dek programlı ve belli bir plan dahilinde ilerlemek.</li>
                                    <li>Davetin yayılması için meşru olan teknolojik ve iletişim araçlarının tümünü profesyonel ve müstakil kullanacak hâle gelmek.</li>
                                    <li>Farklı dillere yaptığımız çeviri kitap ve terceme derslerle başta Avrupa olmak üzere İslam davetinin tüm dünya halklarına ulaşmasına katkı.</li>
                                    <li>Aynı akideyi paylaştığımız Müslimlerle ortak çalışma zeminleri oluşturup ‘Tek Ümmet’ olma, yardımlaşma ve çekişmeme buyruklarını pratize etmek.</li>
                                    <li>İnanç anlamında yakın olduğumuz kesimlerle bir araya gelip nasihatleşmek ve eksiklerimizi gidermek.</li>
                                    <li>Allah’ın (cc) bu uğurda takdir ettiği merhalelere sabır gösterip kenetlenmek ve Müslimlerin geride kalan emanetlerine sahip çıkmak.</li>
                                </ul>

                                <hr className="my-8 border-border" />

                                <p className="italic text-muted-foreground">
                                    Hakkımızda daha fazla bilgi sahibi olmak istiyorsan Biz Kimiz Ne İstiyoruz? kitapçığımıza bakabilirsin. Seni Allah’a emanet ediyor ve Allah’ın dininin yayılmasına yardımcı olmak adına dualarını bekliyoruz…
                                </p>
                            </div>
                        </div>

                        <div className="p-6 border-t bg-muted/20 flex justify-end">
                            <Button onClick={() => setIsOpen(false)}>Kapat</Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
