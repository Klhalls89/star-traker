import { redirectReducer } from './redirectReducer'
import * as actions from '../actions'

describe ('redirectReducer', () => {
  const initalState = false
  it('should return default state', () => {
    const expected = false
    const result = redirectReducer(initalState, {})
    expect(result).toEqual(expected)
  })

  it('should toggle redirect in state', () => {
    const action = actions.redirect(true)
    const expected = true
    const result = redirectReducer(initalState, action)
    expect(result).toEqual(expected)
  })
}) 