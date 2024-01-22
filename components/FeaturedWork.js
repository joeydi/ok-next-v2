import Image from "next/image";
import styles from "./FeaturedWork.module.scss";

export default function FeaturedWork() {
    return (
        <section>
            <div className="container">
                <div className={styles.heading}>
                    <h3 className="m-0">Columbia Capital</h3>
                    <h3 className="m-0">Education Progress Meter</h3>
                    <h3 className="m-0">Steadkey Mortgage</h3>
                </div>
                <div className="panel min-h-screen section-padding flex flex-col justify-center">
                    <Image src="/columbia-capital.jpg" width="1755" height="1170" alt="" />
                </div>
                <div className="panel min-h-screen section-padding flex flex-col justify-center">
                    <Image src="/efa-education-progress-meter.jpg" width="1755" height="1169" alt="" />
                </div>
                <div className="panel min-h-screen section-padding flex flex-col justify-center">
                    <Image src="/steadkey.jpg" width="1360" height="1020" alt="" />
                </div>
            </div>
        </section>
    );
}
