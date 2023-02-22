import styles from "./style.module.css";
import { SpellButtonProps } from "./types";
import useSound from 'use-sound';


export const SpellButton = (props: SpellButtonProps) => {
  const handleSpellUse = () => {
    alert('Spell used')
  }

  const [play] = useSound(props.spell.sound);

  const handleSpell = () => {
    if(props.spell.mana <= props.userMana) {
      props.handleClick({})
      play()
    }
  }

  return (
    <div className={styles.buttonWrapper} onClick={handleSpell}>
      <div className={styles.imageBorder}>
        <img
          height="80px"
          width="80px"
          src={props.spell.image}
          alt={props.spell.name + '-img'}
        />
      </div>
      <p>{props.spell.name}</p>
    </div>
  )
}
