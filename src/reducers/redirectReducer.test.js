import { redirectReducer } from './redirectReducer'
import * as actions from '../actions'

describe ('redirectReducer', () => {
  const initalState = false
  it('should return default state', () => {
    //setup
    const expected = false
    //execution
    const result = redirectReducer(initalState, {})
    //expectation
    expect(result).toEqual(expected)
  })

  it('should toggle redirect in state', () => {
    //setup
    const action = actions.redirect(true)
    const expected = true
   
    //execution
    const result = redirectReducer(initalState, action)
    //expectation
    expect(result).toEqual(expected)
  })
}) 