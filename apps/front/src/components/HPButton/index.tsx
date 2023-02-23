import { HPButtonProps } from './type'
import styles from './style.module.css'
import classNames from 'classnames'

export const HPButton = (props: HPButtonProps) => {
  return (
    <div
      className={ classNames(styles.btnHome, props.disabled ? styles.disabledButton : null) }
      onClick={() => {
        if(props.disabled) return 
        props.onClick()
      }}
    >
      {props.children}
    </div>
  )
}
