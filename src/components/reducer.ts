// REDUCER
// specify how app's STATE CHANGES in response to ACTIONS sent to the STORE

//    (prevState, action) => updatedState

// _______CAKE REDUCER file_______
const initialCakeState = {
  amount: 10
}

const cakeReducer = (state = initialCakeState, action:{type:string, payload: string}) => {
  switch(action.type) {
    case "FIRST_ACTION":
      return {
        ...state, amount: state.amount - 1
      }
    default: return state
  }
}

// _______ICECREAM REDUCER file_______
const initialIceCreamState = {
  amount: 10
}

const iceCreamReducer = (state = initialIceCreamState, action:{type:string, payload: string}) => {
  switch(action.type) {
    case "SECOND_ACTION":
      return {
        ...state, amount: state.amount - 1
      }
    default: return state
  }
}

// COMBINE REDUCERS
import redux from 'redux'
const combineReducers = redux.combineReducers

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

// IMMER
// simplefied UPDATE of nested STATE
// npm i immer
import produce from 'immer'

// if you have NESTED STATE
const initialAdressState = {
  country: 'Poland',
  city: {
    name: 'Bstok',
    street: 'lipowa',
    nrOfBuilding: '11',
    nrOfDoor: '20'
  }
}

// REDUCER for NESTED STATE - you want to change nrOfBuilding
const adressReducerWithoutImmer = (state = initialAdressState, action:{type:string, payload: string}) => {
  switch(action.type) {
    case "SECOND_ACTION":
      return {
        // using SPREAD SEPARATOR
        ...state, city:{
          ...state.city, nrOfBuilding: '100'
        }
      }
    default: return state
  }
}

// using IMMER is simpler
const adressReducerWithImmer = (state = initialAdressState, action:{type:string, payload: string}) => {
  switch(action.type) {
    case "SECOND_ACTION":
      // use IMMER FUNCTION
      return produce(state, (draft) => {
        draft.city.nrOfBuilding= '100'
      })
    default: return state
  }
}