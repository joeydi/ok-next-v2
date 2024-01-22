import Image from "next/image";
import styles from "./FeaturedWork.module.scss";

export default function FeaturedWork() {
    return (
        <section>
            <div className="container">
                {/* <div className={styles.heading}>
                </div> */}
                <div className="panel min-h-screen section-padding flex flex-col justify-center">
                    <h3>Columbia Capital</h3>
                    <Image src="/columbia-capital.jpg" width="1755" height="1170" alt="" />
                </div>
                <div className="panel min-h-screen section-padding flex flex-col justify-center">
                    <h3>Education Progress Meter</h3>
                    <Image src="/efa-education-progress-meter.jpg" width="1755" height="1169" alt="" />
                </div>
                <div className="panel min-h-screen section-padding flex flex-col justify-center">
                    <h3>Steadkey Mortgage</h3>
                    <Image src="/steadkey.jpg" width="1360" height="1020" alt="" />
                </div>
            </div>
        </section>
    );
}
