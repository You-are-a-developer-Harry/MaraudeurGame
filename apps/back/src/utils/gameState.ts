import { createMachine } from "xstate";

const asyncFunction = () => {
  return new Promise((res) => setTimeout(() => res('Done'), 1000))
}

export const gameState = createMachine({
  predictableActionArguments: true,
  id: 'gameState',
  initial: 'Waiting',
  states: {
    Waiting: {
      description: 'Game is waiting to start',
      on: { START: 'Playing' },
    },
    Playing: {
      description: 'The game is in progress',
      initial: 'MovePhase',
      states: {
        MovePhase: {
          description: 'Players can move',
          invoke: {
            src: () => asyncFunction,
            onDone: {
              target: 'SpellPhase',
            },
          },
        },
        SpellPhase: {
          description: 'Players choose spells',
          on: { END_PHASE: 'SpellResolutionPhase' },
        },
        SpellResolutionPhase: {
          description: 'Players choose spells',
          on: { END_PHASE: 'MovePhase' },
        },
        Finished: {
          type: 'final',
        },
      },
      on: { STOP: '.Finished' },
      onDone: 'Waiting',
    },
  },
  schema: {
    events: {} as { type: 'START' } | { type: 'END_PHASE' } | { type: 'STOP' },
  },
})
