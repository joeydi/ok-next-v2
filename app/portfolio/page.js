import Image from "next/image";
import Card from "@/components/Card";
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
            <section className="header-padding">
                <div className="container">
                    <FadeIn>
                        <h1 className="text-mint">Portfolio</h1>
                    </FadeIn>
                    <FadeIn delay="0.1">
                        <div className="grid grid-cols-12 gap-y-12 gap-x-6 lg:gap-x-12">
                            {projects.map((project, i) => {
                                return (
                                    <FadeIn key={`col-${i}`} delay={0.1 * i} className="col-span-12 md:col-span-6 xl:col-span-4">
                                        <Card href={project.link} target="_blank">
                                            <Image src={project.image} width="800" height="561" alt="" />
                                            <div className="p-8">
                                                <h2 className="h4 mb-2 uppercase font-bold text-balance">{project.name}</h2>
                                                <p>{project.description}</p>
                                            </div>
                                        </Card>
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
