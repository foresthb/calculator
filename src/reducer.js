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
    case values.PARAM: return {...state, param: [...state.param, action.param]};
    case values.OPERATOR: const pr = state.param; return {...state, param: [0], operator: action.operator, result: operation(state.result, action.operator, parseInt(pr.join(""))), end: false};
    case values.RESULT:
      if(action.op === "=") {const pr = operation(state.result, state.operator, parseInt(state.param.join(""))); return {...state,param: [...pr.toString()]};}
      else if(action.op === "C") return {param: [0], operator: '', result: 0};
      else return state;
    default: return state;
  }
}

export default calReducer;
