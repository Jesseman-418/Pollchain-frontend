import type { NextPage } from "next";
import WelcomeFrame from "@/components/welcome-frame.module.css";
import styles from "@/index.module.css";

const Desktop: NextPage = () => {
    return (
        <main>
            <div className={styles.desktop}>
                <div className={styles.desktopChild} />
                <div className={styles.frameBase} />
                <div className={styles.frameParent}>
                    <div className={styles.childFrameset}>
                        <div className={styles.ellipsePair}>
                            <div className={styles.rectangle} />
                            <div className={styles.inputFields} />
                            <div className={styles.inputFields1} />
                            <div className={styles.passwordField} />
                            <WelcomeFrame/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Desktop;
