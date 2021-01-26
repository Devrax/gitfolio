/**
 * @description For animation staggering purpose only
 * Use it in v-for statement and delegate the index of each iteration
 * and it will return the delay time need
 * @param index 
 */
export const computeDelay = (index: number) => {
    return (parseFloat((0.01 * index) + '')).toFixed(3) + 's';
}

/**
 * Delay the action of a function
 * @param { Function } callbackFn
 * @param { Number } timeout 
 */
export const debouncer = (callbackFn: (...params: any) => unknown, timeout: number = 300) => {
    let timer: number | null = null;
    return (...args: any[]) => {
        clearTimeout(timer as number);
        timer = setTimeout(() => { callbackFn.apply(this, args); }, timeout);
    };
  }