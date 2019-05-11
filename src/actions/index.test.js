import * as actions from "./index.js"

describe ('index', () => {


  it('should return a get movies action object', () => {
    //setup
    const movies = [{title: 'movie1'},{title: 'movie2'}]
    let expectedAction = {
      type: "GET_MOVIES",
      movies
    }
    //execution
    const returnedValue = actions.getMovies(movies)
    //expectation
    expect(returnedValue).toEqual(expectedAction)
  })

  it('should return an add user action object', () => {
    //setup
    const user = {name:'Kristen'}
    let expectedAction = {
      type: "ADD_USER",
      user
    }
    //execution
    const returnedValue = actions.addUser(user)
    //expectaion
    expect(returnedValue).toEqual(expectedAction)

  })

    it('should return a sign out action object', () => {
    //setup
    const user = {}
    let expectedAction = {
      type: "SIGN_OUT",
      user
    }
    //execution
    const returnedValue = actions.signOut(user)
    //expectaion
    expect(returnedValue).toEqual(expectedAction)

  })



})