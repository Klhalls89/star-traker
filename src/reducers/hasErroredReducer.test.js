import { hasErroredReducer } from './hasErroredReducer'
import * as actions from '../actions'

describe('hasErroredReducer', () => {
  it('should return the initial state', () => {
    // Setup default state to be an empty string
    const expected = ''

    // Execution call reducer pass it no state and an empty action obj
    const result = hasErroredReducer(undefined, {})

    // Expectation what should happen after execution
    expect(result).toEqual(expected)
  })

  it('should put an error in state if HAS_ERRORED is passed', () => {
    // Setup
    const action = actions.hasErrored('Error')
    const expected = 'Error'
    const initialState = ''
    // Execution
    const result = hasErroredReducer(initialState, action)
    // Expectation
    expect(result).toEqual(expected)

  })
})