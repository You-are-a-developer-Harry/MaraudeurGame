import styles from "./style.module.css";
import { SpellButtonProps } from "./types";
import useSound from 'use-sound';


export const SpellButton = (props: SpellButtonProps) => {
  const handleSpellUse = () => {
    alert('Spell used')
  }

  const [play] = useSound(props.sound);

  const handleSpell = () => {
    props.handleClick({})
    play()
  }

  return (
    <div className={styles.buttonWrapper} onClick={handleSpell}>
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
