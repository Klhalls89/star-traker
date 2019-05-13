import { userReducer } from './userReducer'
import * as actions from '../actions'

describe('userReducer', () => {
  let intialState = {}
  it('should return inital state', () => {
    // setup
    const expected = {}
    // execution
    const result = userReducer(intialState, {})
    // expectation
    expect(result).toEqual(expected)
  })

  it('should add a user to state', () => {
    //setup
    const user = {name: 'Kristen'}
    const expected = user
    const action = actions.addUser(user)
    //execution
    const result = userReducer(intialState, action)
    //expectaion 
    expect(result).toEqual(expected)

  })

  it('should replace the user in state with an empty obj', () => {
    //setup
    intialState = {name: 'Kristen'}
    const action = actions.signOut({})
    const expected = {} 
    //execution
    const result = userReducer(intialState, action)
    //expectaion
    expect(result).toEqual(expected)

  })
})