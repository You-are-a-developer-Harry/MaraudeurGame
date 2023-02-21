import { SecretObject } from "types"
import styles from "./cell-object.module.css"

type Props = {
  object: SecretObject
}

export function CellObject({object}: Props) {
  return <div className={styles.cellObject}>
    <img src={object.image} />
  </div>
}
