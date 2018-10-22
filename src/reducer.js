import * as values from './variable';

function operation(a, op, b) {
  switch (op) {
    case "+": return (a + b);
    case "-": return (a - b);
    case "X": return (a * b);
    case "/": return (a / b);
    default: return;
  }
}

const calReducer = (state = values.defaultState, action) => {
  switch (action.type) {
    case values.PARAM:
      const pr1 = [...state.input, action.input];
      if(state.operator) {
        return {...state, param: parseInt(pr1.join("")), input: pr1};
      }
      else {
        return {...state, param: parseInt(pr1.join("")), input: pr1, result: parseInt(pr1.join(""))};
      }
    case values.OPERATOR:
      const pr2 = state.param;
      if(!state.operator) {
        return {...state, param: 0, input: [] ,operator: action.operator, result: pr2};
      }
      else {
        return {...state, param: 0, input: [] ,operator: action.operator, result: operation(state.result, action.operator, pr2)};
      }
    case values.RESULT:
      if(action.op === "=") {
        const pr3 = operation(state.result, state.operator, state.param);
        return {param: 0, input: [], operator: '', result: pr3};
      }
      else 
        return {param: 0, input: [], operator: '', result: 0};
    default: return state;
  }
}

export default calReducer;
