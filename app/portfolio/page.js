import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const projects = [
    {
        image: "/projects/mastcamz.png",
        name: "Mastcam-Z",
        description:
            "This website was built for ASU who designed and built the camera systems that went on the Perseverance Rover, which is currently on Mars.",
        link: "https://mastcamz.asu.edu/",
    },
    {
        image: "/projects/colcap.png",
        name: "Columbia Capital",
        description:
            "Columbia Capital is a leading investment firm that partners with entrepreneurs to build category-defining businesses. Our goal was to create a website that accurately reflected their position as industry leaders and showcased their success stories.",
        link: "https://colcap.com/",
    },
    {
        image: "/projects/inspace.png",
        name: "InSpace",
        description:
            "InSpace is a local startup that started at Champlain College. They are building a video chat platform for education.",
        link: "https://inspace.chat/",
    },
    {
        image: "/projects/10across.png",
        name: "Ten Across",
        description: "",
        link: "https://10across.com/",
    },
    {
        image: "/projects/nyutov.png",
        name: "NYU Technology Opportunities & Ventures",
        description: "",
        link: "https://tov.med.nyu.edu/",
    },
    {
        image: "/projects/prcno.png",
        name: "Preservation Resource Center of New Orleans",
        description: "",
        link: "https://prcnostg.wpengine.com/",
    },
    {
        image: "/projects/adelantehealthcare.png",
        name: "Adelante Healthcare",
        description: "",
        link: "https://adelantehealthcare.com/",
    },
    {
        image: "/projects/wildflowerbread.png",
        name: "Wildflower Bread Company",
        description: "",
        link: "https://wildflowerbread.com/",
    },
    {
        image: "/projects/phxinjurylaw.png",
        name: "Phoenix Accident and Injury Law Firm",
        description: "",
        link: "https://phxinjurylaw.com/",
    },
];

export default function Portfolio() {
    return (
        <main>
            <section className={`header-padding min-h-screen flex flex-col justify-center`}>
                <div className="container">
                    <FadeIn>
                        <h1 className="text-mint">Portfolio</h1>
                    </FadeIn>
                    <FadeIn delay="0.1">
                        <div className="grid grid-cols-12 gap-6 md:gap-12 lg:gap-24">
                            {projects.map((project, i) => {
                                return (
                                    <FadeIn key={`col-${i}`} delay={0.05 * i} className="sm:col-span-6 xl:col-span-4">
                                        <a className="block" href={project.link} target="_blank">
                                            <Image className="mb-6" src={project.image} width="800" height="561" alt="" />
                                            <h4 className="mb-1 uppercase font-bold">{project.name}</h4>
                                            <p>{project.description}</p>
                                        </a>
                                    </FadeIn>
                                );
                            })}
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
