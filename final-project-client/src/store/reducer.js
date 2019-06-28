const defaultState = {
  isLogin: false
}

function reducer(state = defaultState, action){
  switch(action.type){
    case "LOGIN":{
      return{
        ...state,
        isLogin: true
      }
    }
    case "LOGOUT":{
      return {
        ...state,
        isLogin: false
      }
    }
    default:
      break;
  }
}

export default reducer