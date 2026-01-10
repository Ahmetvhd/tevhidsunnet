import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "İletişim | Tevhid ve Sünnet",
    description: "Bizimle iletişime geçin. Sorularınız, görüşleriniz ve destek talepleriniz için bize ulaşabilirsiniz.",
};

export default function IletisimLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
