import options from "./options.js";
import { TOGGLE } from "./options.actions.js";

const initialState = {
  optionsList: options,
  selected: [],
}

const optionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE :
      const { id } = action.payload;
      return {
        ...state,
        selected: state.selected.includes(id)
                    ? state.selected.filter(optionId => optionId !== id)
                    : state.selected.concat(id)
      }
    default:
      return state;
  }
}

export default optionsReducer;
