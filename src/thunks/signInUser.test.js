import { signInUser } from "./signInUser"
import * as options from "../utils/options"
// jest.mock('../utils/options')

// mock createOptions
// mock fetch
// mock response
// mock json
// sad path if response is not ok
// mock dispatch 
// mock addUser, isLoading, redirect
// second sad path error

describe('signInUser', () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
     json: () => Promise.resolve({}),ok: true
   }))
 
  let url = "www.url.com"
  let method = "POST"
  let data = {
    name: 'abc',
    password: 'abc123'
  }

  let dispatch = jest.fn().mockImplementation()
  const spy = jest.spyOn(options,'createOption')
  signInUser(url, method, data)(dispatch)
  // createOptions.mockImplementation(() => {})
  it('should call createOptions', () => {

  expect(spy).toHaveBeenCalledWith(method, data)

  })

  it('should call dispatch four times', () => {
    expect(dispatch).toHaveBeenCalledTimes(4)
  })


})

