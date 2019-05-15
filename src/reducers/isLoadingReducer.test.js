import { isLoadingReducer } from './isLoadingReducer'
import * as actions from '../actions'

describe ('isLoadingReducer', () => {
  const initalState = false
  it('should return inital state', () => {
    const result = isLoadingReducer(initalState, {})
    expect(result).toEqual(expected)
  })

  it('should change the loading property in state', () => {
    const action = actions.isLoading(true)
    const expected = true
    const result = isLoadingReducer(initalState, action)
    expect(result).toEqual(expected)
  })
})