import { AppDataSource } from "./dbConfig";
import { Spell } from "./src/entities/Spell";
import { Sound } from "./src/entities/Sound";

const execute = async () => {
  await AppDataSource.initialize()
  const soundRepository = AppDataSource.getRepository(Sound)
  const spellRepository = AppDataSource.getRepository(Spell)

  await spellRepository.clear()
  await soundRepository.clear()

  const soundList = [
    { name: 'spellEffect1' },
    { name: 'spellEffect2' },
    { name: 'spellEffect6' },
  ]

  for (const sound of soundList) {
    const newSound = new Sound()
    newSound.name = sound.name
    await soundRepository.manager.save(newSound)
  }

  const sounds = await soundRepository.find()

  const spells = [
    {
      name: 'Patronome',
      image: 'spell1',
      sound: sounds[0],
      mana: 1,
      description: 'Une description du sort',
    },
    {
      name: 'Expelliarmus',
      image: 'spell2',
      sound: sounds[1],
      mana: 5,
      description: 'Une description du sort',
    },
    {
      name: 'Stupefy',
      image: 'spell6',
      sound: sounds[2],
      mana: 1,
      description: 'Une description du sort',
    },
  ]

  for (const spell of spells) {
    const newSpell = new Spell()
    newSpell.name = spell.name
    newSpell.image = spell.image
    if(spell.sound){
      newSpell.sound = spell.sound
    }
    newSpell.mana = spell.mana
    newSpell.description = spell.description
    await spellRepository.manager.save(newSpell)
  }
}
execute()
