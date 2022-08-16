// STORE 
import redux from 'redux'
import { firstAction, secondAction } from './actionCreators'
import { rootReducer } from './reducer'

const createStore = redux.createStore
export const store = createStore(rootReducer)

// 1.Allows to :
// -getState() method --> returns State Object
store.getState()

// -updated by dispatch(action)

// store.dispatch(firstAction(1))
// store.dispatch(secondAction(1))

// 2. Register listeners via subscribe(listener)
const unsubscribe = store.subscribe(()=> {
  store.getState()
})

// at the end of the code to UNSUBSCRIBE
unsubscribe()

// MIDDLEWARE
// -it is suggested way to extend REDUX with CUSTOM FUNCTIONALITY
// -provides a third party extension point between DISPATCHING and ACTION and the moment it reaches the REDUCER

// USE MIDDLEWARE for LOGGING, CRASH, REPORTING, PERFORMING, ASYNC TASKS ETC
const appyMiddleware = redux.applyMiddleware
// const store = createStore(rootReducer, applyMiddleware(...funtionality))

// THUNK MIDDLEWARE
// allows ACTION CREATORS --> returns FUNCTION (NOT OBJECT) with dispatching
import { ThunkMiddleware } from 'redux-thunk'
const fetchUsers = () => {
  return function func(dispatch:any) {
    dispatch(firstAction(1))
    // axios
    //  .get('url)
    //  .then(res=> {
    //    console.log(res)
    //    dispatch(firstAction(res))
    //  }

    //  .catch(err) {
    //    dispatch(secondAction(err))
    //  }
  }
}

