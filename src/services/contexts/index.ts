const data = sessionStorage.getItem("userData");
let initData ={
  name: "",
  isuserloggedin: false,
  namename : "",
}
if (data) {
  initData = JSON.parse(data);
}
export const initialState = initData;
  enum userAction {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
  }
  
  export function userReducer(state, action) {
    switch (action.type) {
      case userAction.LOGIN:
        sessionStorage.setItem("userData", JSON.stringify({isuserloggedin : action.payload.isuserloggedin ,name : action.payload.name , namename :  action.payload.username}));
        return {...state, isuserloggedin : action.payload.isuserloggedin ,name : action.payload.name , namename :  action.payload.username};
        case userAction.LOGOUT:
          sessionStorage.removeItem("userData");
            return {...state, isuserloggedin : action.payload.isuserloggedin ,name : action.payload.name , namename :  action.payload.username};
      default:
        return state;
    }
  }
  
  export const  userLoginAction  = (isuserloggedin:boolean , name : string ,namename:string ) =>{
    return {
      type: LOGIN,
      payload: {
        task: {
            name: name,
            isuserloggedin: isuserloggedin,
            namename : namename,
        }
      }
    };
  }
  
  export  const userLogOutAction = (isuserloggedin:boolean , name : string ,namename:string )=> {
    return {
      type: LOGIN,
      payload: {
        task: {
            name: name,
            isuserloggedin: isuserloggedin,
            namename : namename,
        }
      }
    };
  }
  
  