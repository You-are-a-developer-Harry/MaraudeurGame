import { HogwartHouse, Player, SecretObject } from "../../types";
import stylesM from "./footprint.module.css";
import { usePopper } from "react-popper";
import { useState } from "react";

type Props = {
  player: Player,
  object?: SecretObject
}

const HOUSE_TO_COLOR = {
  [HogwartHouse.GRYFFONDOR]: 'red',
  [HogwartHouse.HUFFLEPUFF]: 'orange',
  [HogwartHouse.RAVENCLAW]: 'blue',
  [HogwartHouse.SLYTHERIN]: 'green',
}

export function FootPrint({ player, object }: Props) {
  const color = HOUSE_TO_COLOR[player.house.name]
  
  const [isHover, setIsHover] = useState(false);
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [popperElement, setPopperElement] = useState<any>(null);
  const [arrowElement, setarrowElement] = useState<any>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement:"top-start",
    modifiers: [
      { name: 'arrow', options: { element: arrowElement, padding: 5 }, enabled: false },
      { name: 'offset', options: { offset: [10, 20] }, enabled: false },
    ],
    strategy:"fixed",
  });

  return (
    <div className={stylesM.container}>
      <div 
        className={stylesM.playerWrapper}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        ref={setReferenceElement}
      >
        <svg
          className={stylesM.player}
          viewBox="0 0 9 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.884252 0.99997C0.7195 1.10842 0.456224 1.39609 0.299195 1.63926C0.0438755 2.03488 0.0146226 2.20616 0.0216433 3.26697C0.0279619 4.22429 0.0914991 4.64321 0.351967 5.44288C0.529473 5.9876 0.689194 6.44866 0.70698 6.4675C0.724765 6.48646 1.21422 6.38607 1.79448 6.24453L2.84958 5.98723L2.92259 5.34385C2.96273 4.99 2.99491 4.19851 2.99397 3.58501C2.99221 2.29714 2.78405 1.66491 2.18624 1.13209C1.76125 0.753328 1.32644 0.709205 0.884252 0.99997ZM2.003 7.29493C1.48815 7.44837 1.07206 7.61259 1.07837 7.65969C1.08481 7.70691 1.15396 8.04837 1.23213 8.41858C1.49236 9.6503 2.42225 10.1007 3.13871 9.34182C3.45745 9.0042 3.48811 8.90765 3.42481 8.44324C3.3271 7.72748 3.12058 6.99103 3.02135 7.00466C2.97607 7.01086 2.51785 7.14149 2.003 7.29493Z"
            fill={color}
          />
          <path
            d="M5.01152 6.31744C4.94564 4.5043 5.0946 3.8986 5.75887 3.28101C5.98845 3.06746 6.29689 2.90336 6.46878 2.90336C6.95333 2.90336 7.52119 3.35797 7.80084 3.96987C8.02071 4.45101 8.04914 4.67646 7.99988 5.54541C7.93704 6.65369 7.41061 8.60601 7.17542 8.60254C6.87856 8.59807 5.30042 8.11904 5.18704 7.99894C5.12163 7.92966 5.04265 7.173 5.01152 6.31744Z"
            fill={color}
          />
          <path
            d="M4.55939 10.5503C4.59847 10.2641 4.68787 9.81629 4.75807 9.55527C4.84104 9.24678 4.93968 9.10239 5.03972 9.14304C5.12444 9.1775 5.55516 9.29983 5.99699 9.41484C6.43883 9.52999 6.83819 9.66087 6.88464 9.70573C6.97357 9.79162 6.71626 10.8355 6.49499 11.2867C6.18889 11.9111 5.35893 11.9927 4.84548 11.4488C4.52674 11.1112 4.49609 11.0147 4.55939 10.5503Z"
            fill={color}
          />
        </svg>
        {
          object && (
            <img className={stylesM.playerObject} src={object.image} />
          )
        }
      </div>
      <div 
          className={isHover ? stylesM.popper : stylesM.popperHidden} 
          ref={setPopperElement} 
          style={styles.popper} {...attributes.popper}
        >
          <p className={stylesM.spellName}>{player.name}</p>
        <div className={stylesM.arrow} ref={setarrowElement} style={styles.arrow}/>
      </div>
    </div>
    
  )
}
