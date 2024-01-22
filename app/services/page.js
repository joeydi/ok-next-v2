import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Services() {
    return (
        <main>
            <section className={`header-padding`}>
                <div className="container">
                    <FadeIn>
                        <h1 className="text-mint">Services</h1>
                    </FadeIn>
                    <div className="grid grid-cols-12 gap-6 md:gap-12 lg:gap-18 xl:gap-24">
                        <FadeIn delay="0.1" className="col-span-4">
                            <Image className="mb-8" src="/service-1.png" width="2560" height="1435" alt="" />
                            <h4 className="mb-2">Design</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </FadeIn>
                        <FadeIn delay="0.2" className="col-span-4">
                            <Image className="mb-8" src="/service-2.png" width="2560" height="1435" alt="" />
                            <h4 className="mb-2">Development</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </FadeIn>
                        <FadeIn delay="0.3" className="col-span-4">
                            <Image className="mb-8" src="/service-3.png" width="2560" height="1435" alt="" />
                            <h4 className="mb-2">Maintenance</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </main>
    );
}
