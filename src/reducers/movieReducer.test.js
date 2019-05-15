import { movieReducer } from './movieReducer'
import * as actions from '../actions'

describe('movieReducer', () => {
  it('should return default state', () => {
    const expected = []
    const result = movieReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should put movies into state', () => {
    const defaultState = []
    const movies = [{title: 'Movie 1'},{title: 'Movie 2'}]
    const action = actions.getMovies(movies)
    const expected = movies
    const result = movieReducer(defaultState, action)
    expect(result).toEqual(expected)
  })
})