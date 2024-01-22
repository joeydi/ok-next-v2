import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
    return (
        <main>
            <section className={`header-padding min-h-screen flex flex-col justify-center`}>
                <div className="container">
                    <FadeIn>
                        <h1 className="text-mint">Contact</h1>
                    </FadeIn>
                    <FadeIn delay="0.1">
                        <Image src="/map.png" width="1920" height="1001" alt="" />
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
