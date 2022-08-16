// defining ACTIONS message
export const THIS_IS_ACTION = "THIS_IS_ACTION"

// creating ACTION OBJECT
const actionObject = {
  type: THIS_IS_ACTION,
  payload: "payload"
}

// ACTION CREATOR
// is a FUNCTION which RETURN ACTION OBJECT
// can has an argument (payload)
const actionCreator = (payload:number) => {
  return {
    type: THIS_IS_ACTION,
    payload
  }
}

