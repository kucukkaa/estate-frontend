import { GET_ESTATE_BY_ID } from "../actions/estateActions";
import { estateValue } from "../initialValues/estateValue";

const initialState = {
  estateValue: estateValue,
};

export default function estateReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ESTATE_BY_ID:
      let estate = state.estateValue.find(e=>e.id===payload.id)
      if (estate) {
        return state;
      } else {
        return {
          ...state,
          estateValue:[payload]
        };
      }
      

    default:
      return state;
  }
}
