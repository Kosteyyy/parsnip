import { uniqueId } from '../actions/index.js';

const mockTasks = [
  {
    id: uniqueId(),
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress',
  },
  {
    id: uniqueId(),
    title: 'Peace on Earth',
    description: 'No big deal... Or maybe big...',
    status: 'In Progress',
  },
];

export default function tasks (state = { tasks: mockTasks }, action) {
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

  return state;
}