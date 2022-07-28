export const TOGGLE = 'OPTIONS/TOOGLE_SELECT';

export const toggleOptions = (id) => {
  return {
    type: TOGGLE,
    payload: {
      id,
    }
  }
}
