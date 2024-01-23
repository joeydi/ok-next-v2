import Image from "next/image";
import Card from "@/components/Card";
import FadeIn from "@/components/FadeIn";

export default function Services() {
    return (
        <main>
            <section className="header-padding">
                <div className="container">
                    <FadeIn>
                        <h1 className="text-mint">Services</h1>
                    </FadeIn>
                    <div className="grid grid-cols-12 gap-y-12 gap-x-6 lg:gap-x-12">
                        <FadeIn delay="0.1" className="col-span-12 md:col-span-4">
                            <Card>
                                <Image
                                    className="pl-6 aspect-video object-contain object-left mix-blend-lighten"
                                    src="/service-1.png"
                                    width="2560"
                                    height="1435"
                                    alt=""
                                />
                                <div className="p-8 pt-4">
                                    <h2 className="h4">Design</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </Card>
                        </FadeIn>
                        <FadeIn delay="0.2" className="col-span-12 md:col-span-4">
                            <Card>
                                <Image
                                    className="pl-6 aspect-video object-contain object-left mix-blend-lighten"
                                    src="/service-2.png"
                                    width="2560"
                                    height="1435"
                                    alt=""
                                />
                                <div className="p-8 pt-4">
                                    <h2 className="h4">Development</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </Card>
                        </FadeIn>
                        <FadeIn delay="0.3" className="col-span-12 md:col-span-4">
                            <Card>
                                <Image
                                    className="pl-6 aspect-video object-contain object-left mix-blend-lighten"
                                    src="/service-3.png"
                                    width="2560"
                                    height="1435"
                                    alt=""
                                />
                                <div className="p-8 pt-4">
                                    <h2 className="h4">Maintenance</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </Card>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </main>
    );
}
