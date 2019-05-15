import { userReducer } from './userReducer'
import * as actions from '../actions'

describe('userReducer', () => {
  let intialState = {}
  it('should return inital state', () => {
    const expected = {}
    const result = userReducer(intialState, {})
    expect(result).toEqual(expected)
  })

  it('should add a user to state', () => {
    const user = {name: 'Kristen'}
    const expected = user
    const action = actions.addUser(user)
    const result = userReducer(intialState, action)
    expect(result).toEqual(expected)

  })

  it('should replace the user in state with an empty obj', () => {
    intialState = {name: 'Kristen'}
    const action = actions.signOut({})
    const expected = {} 
    const result = userReducer(intialState, action)
    expect(result).toEqual(expected)

  })
})