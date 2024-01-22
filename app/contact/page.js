import FadeIn from "@/components/FadeIn";
import Map from "@/components/Map";

export default function Contact() {
    return (
        <main>
            <section className="header-padding min-h-screen relative">
                <div className="absolute inset-0">
                    <Map />
                </div>
                <div className="container">
                    <FadeIn>
                        <h1 className="text-mint">Contact</h1>
                    </FadeIn>
                    <FadeIn delay="0.1"></FadeIn>
                    <div className="relative"></div>
                </div>
            </section>
        </main>
    );
}
