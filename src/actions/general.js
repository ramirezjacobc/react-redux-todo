export const ADD_TASK = 'ADD_TASK';
export const GET_TASK = 'GET_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const FINISH_TASK = 'FINISH_TASK';

export function addTask(payload) {
  return {
    type: ADD_TASK,
    payload,
  };
}

export function getTask(payload) {
  return {
    type: GET_TASK,
    payload,
  };
}

export function updateTask(payload) {
  return {
    type: UPDATE_TASK,
    payload,
  };
}

export function deleteTask(payload) {
  console.log('otro');
  console.log(payload);
  return {
    type: DELETE_TASK,
    payload,
  };
}

export function getAllTasks() {
  return {
    type: GET_ALL_TASKS,
  };
}

export function finishTask(payload) {
  return {
    type: FINISH_TASK,
    payload,
  };
}
