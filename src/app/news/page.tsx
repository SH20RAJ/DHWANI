import { NewsSection } from '@/components/sections/NewsSection';
import Navbar from '@/components/ui/Navbar';
import FooterNewsletter from '@/components/mvpblocks/footer-newsletter';

export default function NewsPage() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <div className="py-20 lg:py-32">
                <NewsSection />
            </div>
            <FooterNewsletter />
        </main>
    );
}
