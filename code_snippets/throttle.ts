export function throttle(fn: (...args: any[])=> any, wait: number) {
  let lastTime 
  return function() {
    const currentTime = Date.now()
    if(!lastTime || currentTime - lastTime > wait) {
      fn.apply(this,arguments)
      lastTime = currentTime
    }
  }
}
