import Image from "next/image";
import styles from "./FeaturedWork.module.scss";

export default function FeaturedWork() {
    return (
        <section>
            <div className="container">
                {/* <div className={styles.heading}>
                </div> */}
                <div className="panel min-h-screen section-padding flex flex-col justify-center">
                    <h2 className="h4">Columbia Capital</h2>
                    <Image className="w-full" src="/columbia-capital.jpg" width="1755" height="1170" alt="" />
                </div>
                <div className="panel min-h-screen section-padding flex flex-col justify-center">
                    <h2 className="h4">Education Progress Meter</h2>
                    <Image className="w-full" src="/efa-education-progress-meter.jpg" width="1755" height="1169" alt="" />
                </div>
                <div className="panel min-h-screen section-padding flex flex-col justify-center">
                    <h2 className="h4">Steadkey Mortgage</h2>
                    <Image className="w-full" src="/steadkey.jpg" width="1360" height="1020" alt="" />
                </div>
            </div>
        </section>
    );
}
