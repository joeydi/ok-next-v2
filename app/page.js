import Intro from "@/components/Intro";
import FeaturedWork from "@/components/FeaturedWork";
import AboutMe from "@/components/AboutMe";
import Testimonials from "@/components/Testimonials";

export default function Home() {
    return (
        <main>
            <Intro />
            <FeaturedWork />
            <AboutMe />
            <Testimonials />
        </main>
    );
}
