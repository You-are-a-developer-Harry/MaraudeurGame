export const machineSettings = {
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
          on: { END_PHASE: 'SpellPhase' }
        },
        SpellPhase: {
          description: 'Players choose spells',
          on: { END_PHASE: 'MovePhase' }
        },
        Finished: {
          type: 'final' as const,
        },
      },
      on: { STOP: '.Finished' },
      onDone: 'Waiting',
    },
  },
  schema: {
    events: {} as { type: 'START' } | { type: 'END_PHASE' } | { type: 'STOP' },
  },
}
