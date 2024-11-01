import {
  ADD_MEMORY,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  CLEAR_MEMORY,
  RECALL_MEMORY,
  EQUAL,
} from './actions.jsx';

export const initialState = {
  total: 0,
  operation: '+',
  memory: 0,
  temp: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      return {
        ...state,

        temp:
          state.temp === 0
            ? action.payload.toString()
            : state.temp.toString() + action.payload.toString(),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        temp: 0,
        total: calculateResult(
          Number(state.total),
          Number(state.temp),
          state.operation
        ),
      };
    case CLEAR_DISPLAY:
      return {
        ...state,
        total: initialState.total,
        temp: initialState.temp,
      };
    case EQUAL:
      return {
        ...state,
        temp: calculateResult(
          Number(state.total),
          Number(state.temp),
          state.operation
        ),
      };
    case RECALL_MEMORY:
      return {
        ...state,
        temp: state.memory,
      };
    case CLEAR_MEMORY:
      return {
        ...state,
        memory: initialState.memory,
      };
    case ADD_MEMORY:
      return {
        ...state,
        memory: state.temp,
      };

    default:
      return state;
  }
};

export default reducer;
