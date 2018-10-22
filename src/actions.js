import * as values from './variable';

export const paramInput = (input) => {
  return {
    type : values.PARAM,
    input: input
  }
}

export const opInput = (input) => {
  return {
    type: values.OPERATOR,
    operator: input
  }
}

export const showResult = (op) => {
  return {
    type: values.RESULT,
    op: op
  }
}
