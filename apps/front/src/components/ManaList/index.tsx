import { ManaItem } from "../ManaItem";
import styles from "./style.module.css";
import { ManaAvailable } from "./types";


export const ManaList = (props: ManaAvailable) => {
  const manas = []

  for (let i = 0; i < 10; i++) {
    manas.push({disabled: true})
  }

  for (let i = 0; i < props.manaToUse; i++) {
    manas[i].disabled = false
  }

  return (
    <div className={styles.manaRow}>
      {
        manas.map((mana, index) => (
          <ManaItem key={index} isUsed={mana.disabled}/>
        ))
      }
    </div>
  )
}
