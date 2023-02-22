import { createMachine, interpret } from "xstate";
import { io } from "../index";

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
          on: { END_PHASE: 'SpellPhase' },
          after: {
            5000: {
              target: 'SpellPhase'
            }
          }
        },
        SpellPhase: {
          description: 'Players choose spells',
          on: { END_PHASE: 'SpellResolutionPhase' },
          after: {
            5000: {
              target: 'SpellResolutionPhase'
            }
          }
        },
        SpellResolutionPhase: {
          description: 'Players choose spells',
          on: { END_PHASE: 'MovePhase' },
          after: {
            5000: {
              target: 'MovePhase'
            }
          }
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

export const machine = interpret(gameState).onTransition((state) => {
  console.log(state.value)
  io.sockets.in('room1').emit('state:update', state.value)
})
