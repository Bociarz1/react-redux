// ACTION CREATORS
import redux from 'redux'
import { store } from './store'

// actionCreator
export const firstAction = (payload:number) => {
  return {
    type:"FIRST_ACTION",
    payload
  }
}
export const secondAction = (payload:number) => {
  return {
    type:"SECOND_ACTION",
    payload
  }
}

// alternative to use 
// store.dispatch() is:
const bindActionCreators = redux.bindActionCreators
const actions = bindActionCreators({firstAction, secondAction}, store.dispatch)

// using
const payload = 1
actions.firstAction(payload)
actions.secondAction(payload)



