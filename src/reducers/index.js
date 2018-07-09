import { VIEW_PROFILE } from "../constants/action-types";
const initialState = {
  profiles: []
};
const rootReducer = (state = initialState, action) => {  
  switch (action.type) {
    case VIEW_PROFILE:
      return { profiles: action.payload };
    default:
      return state;
  }
};
export default rootReducer;