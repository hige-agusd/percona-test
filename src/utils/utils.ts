export const debounced = (fn: Function, delay: number, ...args: any[]) => {
  let timerId: any;
  // tslint:disable-next-line:no-shadowed-variable
  return (...args: any[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
};
