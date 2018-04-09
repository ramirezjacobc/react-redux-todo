import {
  ADD_TASK,
  GET_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  GET_ALL_TASKS,
  FINISH_TASK,
} from '../actions/general';

const initialState = {
  tasks: [
    {
      id: 1,
      task: 'Demo task',
      active: true,
    },
  ],
  selected: {},
};

export default function general(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(item => {
          if(item.id === action.payload.id) return action.payload;
          return item;
        })
      }
    case GET_ALL_TASKS:
      return state;
    case GET_TASK:
      const selected = state.tasks.filter(item => action.payload === item.id)
      return {
        ...state,
        selected: selected[0]
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(item => action.payload !== item.id)
      }
    case FINISH_TASK:
      return {
        ...state,
        tasks: state.tasks.map(item => {
          if(item.id === action.payload){
            item.active = false;
          }
          return item;
        })
      }
    default:
      return state;
  }
}
