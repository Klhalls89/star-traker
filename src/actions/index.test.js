import * as actions from "./index.js"

describe ('index', () => {

  it('should get movies and return an action', () => {
    //setup
    const movies = [{title: 'movie1'},{title: 'movie2'}]
    const expectedAction = {
      type: "GET_MOVIES",
      movies
    }
    //excution
    const results = actions.getMovies(movies)
    //expectation
    //it should be an object with the type of getmovie contains the movies 
    expect(results).toEqual(expectedAction)

  })

})