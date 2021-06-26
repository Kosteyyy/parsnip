
export default function tasks (state = { tasks: [] }, action) {
	if (action.type === 'CREATE_TASK') {
    return {
      tasks: state.tasks.concat(action.payload)
    };
  }
  if (action.type === 'CHANGE_STATUS') {
//use spread of object props: ...task, status: new status to change status in object
//if i change directly state (without newtasks) state changes, but no rerender of components happen
    let newtasks = state.tasks.map(task => task.id === action.payload.id ? {...task, status: action.payload.status} : task);
    return {
      tasks: newtasks
    };
  }

  if (action.type === 'EDIT_TASK') {
//use Object.assign to copy all props from task then from payload.
//if i change directly state (without newtasks) state changes, but no rerender of components happen
    const { payload } = action;
    let newtasks = state.tasks.map(task => task.id === payload.id ? Object.assign({}, task, payload.params) : task);
    return {
      tasks: newtasks
    };
  }

//when fetch sicceeded, payload contains fetched tasks from the server;
  if (action.type === 'FETCH_TASKS_SUCCEEDED') {
    return {
      tasks: action.payload.tasks,
    };
  }

  return state;
}