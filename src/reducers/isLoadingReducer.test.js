import { isLoadingReducer } from './isLoadingReducer'
import * as actions from '../actions'

describe ('isLoadingReducer', () => {
  const initalState = false
  it('should return inital state', () => {
    //setup
    const expected = false;
    //execution
    const result = isLoadingReducer(initalState, {})
    //expectation
    expect(result).toEqual(expected)
  })

  it('should change the loading property in state', () => {
    //setup
    const action = actions.isLoading(true)
    const expected = true
    //execution
    const result = isLoadingReducer(initalState, action)
    //expectation
    expect(result).toEqual(expected)

  })
})