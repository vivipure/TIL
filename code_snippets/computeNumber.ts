type OperatorType = '*' | '+' | '/' | '-'

function getDecimalLength(n: number) {
  const decimal = n.toString().split('.')[1]
  return decimal ? decimal.length : 0
}

export function computeNumber(a: number, type: OperatorType, b: number): number {

  /** 倍率 */
  const power = Math.pow(10, Math.max(getDecimalLength(a), getDecimalLength(b)))
  let result = 0

  // 防止出现 `33.33333*100000 = 3333332.9999999995` && `33.33*10 = 333.29999999999995` 这类情况做的暴力处理
  a = Math.round(a * power)
  b = Math.round(b * power)

  switch (type) {
    case '+':
      result = (a + b) / power
      break
    case '-':
      result = (a - b) / power
      break
    case '*':
      result = (a * b) / (power * power)
      break
    case '/':
      result = a / b
      break
  }
  return result
}

console.log(computeNumber(0.1,'+',0.2))
