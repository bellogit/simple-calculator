const sumFunc = (init=0, ...args) => {
  for (let arg of args) {
    init = init + arg;
  }
  return init;
};

const diffFunc = (init=0, ...args) => {
  for (let arg of args) {
    init = arg - init;
  }
  return init;
};

const multFunc = (init=0, ...args) => {
  for (let arg of args) {
    init = arg * init;
  }
  return init;
};

const expoFunc = (arg1, arg2) => {
  return arg1 ** arg2;
};

const calculator = (operation, ...args) => {
  return operation(...args);
};

console.log( calculator(expoFunc, 3, 2) );