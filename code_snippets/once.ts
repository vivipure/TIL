
/**
* 函数只能执行一次
*/
function once(fn: (...args: any[]) => any): any {
  let isExcuted: boolean = false;
  let res: any;

  return function (this: any) {
    if (isExcuted) {
      return res;
    }
    res = fn.apply(this, Array.from(arguments));
    isExcuted = true;
    return res;
  };
}
