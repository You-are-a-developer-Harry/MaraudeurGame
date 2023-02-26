export type SpellButtonProps = {
  spell: {
    name: string
    image: string
    sound: spellSound
    mana: number
    description: string
  }
  userMana: number
  handleClick: (spell: any) => void
  disabled: boolean
}

interface spellSound {
  name: string
}
