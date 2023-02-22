export type SpellButtonProps = {
  spell: {
    name: string
    image: string
    sound: string
    mana: number
  }
  userMana: number
  handleClick: (spell: any) => void
}
