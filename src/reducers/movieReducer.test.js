import { movieReducer } from './movieReducer'
import * as actions from '../actions'

describe('movieReducer', () => {
  it('should return default state', () => {
    //Setup
    const expected = []
      //execution
    const result = movieReducer(undefined, {})
    //expectation
    expect(result).toEqual(expected)
  })

  it('should put movies into state', () => {
    //setup
    const defaultState = []
    const movies = [{title: 'Movie 1'},{title: 'Movie 2'}]
    const action = actions.getMovies(movies)
    const expected = movies

    //execution
    const result = movieReducer(defaultState, action)
    //expectation
    expect(result).toEqual(expected)
  })
})