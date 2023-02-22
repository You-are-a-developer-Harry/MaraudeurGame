import styles from "./style.module.css";
import { SpellButtonProps } from "./types";

export const SpellButton = (props: SpellButtonProps) => {
  const handleSpellUse = () => {
    alert('Spell used')
  }

  return (
    <div className={styles.buttonWrapper}>
      <div className={styles.imageBorder}>
        <img
          height="80px"
          width="80px"
          src={props.image}
          alt={props.name + '-img'}
        />
      </div>
      <p>{props.name}</p>
    </div>
  )
}
