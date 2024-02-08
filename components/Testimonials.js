import Image from "next/image";
import Paragraphs from "./Paragraphs";

const testimonials = [
    {
        quote: "“Joe is one of the few software developers I’ve met who is also a very capable designer. This blend of skills enabled him to tackle a wide range of issues across a variety of projects. Joe led the development of a consumer facing geolocation app used by Fortune 50 companies and worked on diverse variety of projects such as adding methods to our API, designing custom graphics for the editorial team, and creating prototypes for new mobile applications. Joe’s technical prowess combined with his solid communication skills made him an indispensable member of my team.”",
        name: "Tony Ash",
        title: "Chief Technical Officer",
        image: "/testimonials/tony.jpg",
    },
    {
        quote: "“Joe is an extremely skilled web designer, developer and digital problem solver. For many of our online projects, he’s been an instrumental part of our process including planning, assessing and developing. Joe’s also responsive, diligent, detailed and is a strong communicator. He brings creativity, logic and integrity to each of his efforts and we appreciate and strongly recommend his talents.”",
        name: "Kathleen Orazio",
        title: "Senior Project Director",
        image: "/testimonials/kathleen.jpg",
    },
    {
        quote: "“Working with Okay Plus has been a pleasure and the results are fantastic. Joe created our website 10 years ago, and when it came time to update it, he was who we turned to. He listened to what we wanted and worked with us to refine the design. In the end he was able to produce a custom designed website that looks great and is easy to manage.”",
        name: "Tom Bachman, AIA",
        title: "Principal Architect",
        image: "/testimonials/tom.jpg",
    },
    {
        quote: "“Joe has a rare combination of being great at both design and development. He designed and developed, in a short amount of time, a geolocation search application that could be customized by third parties in a framework he had little previous experience in.\n\n5/5 — Would work with again”",
        name: "Jeremy Aldrich",
        title: "Senior Software Developer",
        image: "/testimonials/jeremy.jpg",
    },
];

export default function Testimonials() {
    return (
        <section className="section-margin">
            <div className="container">
                <div className="section-padding">
                    <h2 className="h3">Kicking Ass and Making Friends</h2>
                    <p>Here&rsquo;s few things people enjoy about working with me.</p>
                </div>
                <div className="grid grid-cols-12 gap-y-12 gap-6 md:gap-12">
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={`testimonial-${i}`}
                            className={`col-span-12 md:col-span-6 xl:col-span-5 ${i % 2 ? "xl:col-start-7" : ""}`}>
                            <blockquote className="max-w-[480px] text-pretty">
                                <Paragraphs>{testimonial.quote}</Paragraphs>
                                <cite className="flex gap-4 items-center not-italic">
                                    <Image
                                        className="w-16 rounded-full"
                                        src={testimonial.image}
                                        width="138"
                                        height="138"
                                        alt=""
                                    />
                                    <div>
                                        <span className="font-bold uppercase">{testimonial.name}</span>
                                        <br />
                                        {testimonial.title}
                                    </div>
                                </cite>
                            </blockquote>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
