export type SpellButtonProps = {
  spell: {
    name: string
    image: string
    sound: string
    mana: number
    description: string
  }
  userMana: number
  handleClick: (spell: any) => void
  disabled: boolean
}
