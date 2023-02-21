import { ManaItem } from "../ManaItem";
import * as styles from "./style.module.css";

export const ManaList = () => {


    const manas = [
        {
            disabled : true,
            key: 0
        },
        {
            disabled : true,
            key: 1
        },
        {
            disabled : true,
            key: 2
        },
        {
            disabled : true,
            key: 3
        },
        {
            disabled : true,
            key: 4
        },
        {
            disabled : false,
            key: 5
        },
        {
            disabled : false,
            key: 6
        },
        {
            disabled : false,
            key: 7
        }
    ]

    return(
        <div className={styles.row}>
            {
                manas.map((mana) => (
                    <ManaItem isUsed={mana.disabled}/>
                ))
            }
        </div>
    )
}