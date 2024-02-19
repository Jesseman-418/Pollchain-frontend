import type { NextPage } from "next";
import UserNamePasswordContainer from "@/user-name-password-container";
import styles from "./welcome-frame.module.css";

const WelcomeFrame: NextPage = () => {
    return (
        <div className={styles.welcomeFrame}>
            <img className={styles.welcomeFrameChild} alt="" src="/rectangle-8.svg" />
            <h2 className={styles.welcome}>WELCOME</h2>
            <UserNamePasswordContainer uSERNAME="USERNAME" />
            <UserNamePasswordContainer uSERNAME="PASSWORD" />
            <div className={styles.frameSignInWithMetamask}>
                <div className={styles.signInWith}>SIGN IN WITH METAMASK</div>
            </div>
        </div>
    );
};

export default WelcomeFrame;