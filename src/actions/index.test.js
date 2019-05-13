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

    it('should show is loading', () => {
      //setup
      let bool = true
      let expectedAction = {
        type: "IS_LOADING",
        bool
      }
      //executions
      const returnedValue = actions.isLoading(bool)
      //expectaion
      expect(returnedValue).toEqual(expectedAction)
    })

    it('should show an error', () => {
      //setup
      const message = 'Error'
      const expectedAction = {
        type: "HAS_ERRORED",
        message
      }
      //execution
      const returnedValue = actions.hasErrored(message)
      //expectation
      expect(returnedValue).toEqual(expectedAction)
    })

    it('should toggle redirect', () => {
      //setup
      const bool = true
      const expectedAction = {
        type: "TOGGLE_REDIRECT",
        bool
      }
      //execution
      const returnedValue = actions.redirect(bool)
      //expectation
      expect(returnedValue).toEqual(expectedAction)
    })

})