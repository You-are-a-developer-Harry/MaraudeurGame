export type SpellButtonProps = {
  spell: {
    name: string
    image: string
    sound: string
    mana: number
  }
  handleClick: (spell: any) => void
  userMana: number
}
