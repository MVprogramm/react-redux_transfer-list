import { createSelector } from "reselect";

const optionsListSelector = state => {
  return state.options.optionsList;
}

const selectedIdSelector = state => {
  return state.options.selected;
}

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedIdSelector],
  (allOptionsList, selectedOptions) => {
    return allOptionsList.filter(option => selectedOptions.includes(option.id));
  }
)

export const availabelOptionsSelector = createSelector(
  [optionsListSelector, selectedIdSelector],
  (allOptionsList, selectedOptions) => {
    return allOptionsList.filter(option => !selectedOptions.includes(option.id));
  }
)
