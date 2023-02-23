import stylesM from "./style.module.css";
import { SpellButtonProps } from "./types";
import { usePopper } from "react-popper";
import { useState } from "react";
import useSound from 'use-sound';


export const SpellButton = (props: SpellButtonProps) => {
  const [isHover, setIsHover] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setarrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement:"left-start",
    modifiers: [
      { name: 'arrow', options: { element: arrowElement, padding: 5 }, enabled: false },
      { name: 'offset', options: { offset: [10, 20] }, enabled: false },
    ],
    strategy:"fixed",
  });

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

  const showPopper = () => {
    setIsHover(!isHover);
  }

  return (
    <div className={stylesM.buttonWrapper} onClick={handleSpell}>
      <div 
        className={stylesM.imageBorder} 
        onMouseEnter={showPopper} 
        onMouseLeave={showPopper} 
        ref={setReferenceElement}
      >
        <img
          height="80px"
          width="80px"
          src={props.spell.image}
          alt={props.spell.name + '-img'}
          className={props.spell.mana > props.userMana ? stylesM.grisedImg : ""}
        />
        <div 
          className={isHover ? stylesM.popper : stylesM.popperHidden} 
          ref={setPopperElement} 
          style={styles.popper} {...attributes.popper}
        >
          <p className={stylesM.spellName}>{props.spell.name}</p>
          <p className={stylesM.textLeft}>Coût en mana : {props.spell.mana}</p>
          <p className={stylesM.textLeft}>Description : {props.spell.description}</p>
        <div className={stylesM.arrow} ref={setarrowElement} style={styles.arrow} role="tooltip"/>
      </div>
    </div>
    <p>{props.spell.name}</p>
    </div>
  )
}
