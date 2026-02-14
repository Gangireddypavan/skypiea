import HeroScroll from "@/components/hero/HeroScroll";
import About from "@/components/sections/About";
import JetShowcase from "@/components/jets/JetShowcase";
import FleetGallery from "@/components/fleet/FleetGallery";
import BookingCTA from "@/components/booking/BookingCTA";
import Experience from "@/components/sections/Experience";
import FloatingCTA from "@/components/booking/FloatingCTA";
import GlobalFooter from "@/components/footer/GlobalFooter";

export default function Home() {
    return (
        <main className="bg-background">
            <section>
                <HeroScroll />
            </section>
            <section>
                <About />
            </section>
            <section>
                <JetShowcase />
            </section>
            <section>
                <FleetGallery />
            </section>
            <section>
                <Experience />
            </section>
            <section>
                <BookingCTA />
            </section>
            <section>
                <GlobalFooter />
            </section>
            <FloatingCTA />
        </main>
    );
}
