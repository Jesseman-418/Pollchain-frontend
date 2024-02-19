import type { NextPage } from "next";
import styles from "./user-name-password-container.module.css";

export type UserNamePasswordContainerType = {
    uSERNAME?: string;
};

const UserNamePasswordContainer: NextPage<UserNamePasswordContainerType> = ({
    uSERNAME,
}) => {
    return (
        <div className={styles.userNamePasswordContainer}>
            <div className={styles.framePair}>
                <div className={styles.username}>{uSERNAME}</div>
                <input className={styles.usernameRectangle} type="text" />
            </div>
        </div>
    );
};

export default UserNamePasswordContainer;