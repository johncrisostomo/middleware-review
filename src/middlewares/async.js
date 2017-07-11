export default function({ dispatch }) {
  return next => action => {
    // If action does not have payload,
    // or if the payload is not then-able (meaning a promise)
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    action.payload.then(response => {
      // create a new action with the old type, replacing the Promise with the
      // data
      const newAction = { ...action, payload: response };
      dispatch(newAction);
    });
  };
}
