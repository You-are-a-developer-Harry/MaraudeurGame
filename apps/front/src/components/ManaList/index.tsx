import { ManaItem } from "../ManaItem";
import * as styles from "./style.module.css";


export const ManaList = (props:ManaAvailable) => {

    //const ManaAvailable = 1 // for exemple

    const manas = []

    for(let i = 0; i < 10; i++){
        manas.push({disabled : true})
    }

    for(let i = 0; i <  props.ManaAvailable; i++){
        manas[i].disabled = false
    }

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