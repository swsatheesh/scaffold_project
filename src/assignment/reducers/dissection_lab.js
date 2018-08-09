export default function dissectionLabReducer(state = {}, action) {
  let newState = { ...state };
  const { type, payload } = action;
  switch (type) {
    case "SELECT":
      newState = { ...newState, payload };
      break;

    default:
      break;
  }
  return newState;
}
