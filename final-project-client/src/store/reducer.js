const defaultState = {
  isLogin: !!localStorage.getItem("token") 
}

function reducer(state = defaultState, action){
  console.log('payload',action.payload);
  
  switch(action.type){
    case "SET_LOGIN":{
      return{
        ...state,
        isLogin: action.payload
      }
    }
    default:
      return state;
  }
}

export default reducer