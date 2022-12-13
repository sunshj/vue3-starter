export const vThrottle = {
  created(el, binding) {
    let throttleTime = binding.value // 节流时间
    if (!throttleTime) {
      throttleTime = 2000 // 节流时间，默认2s
    }
    let cbFun
    el.addEventListener(
      'click',
      (event) => {
        if (!cbFun) {
          // 第一次执行
          cbFun = setTimeout(() => {
            // 清除定时器
            clearTimeout(cbFun)
            cbFun = null
          }, throttleTime)
        } else {
          event?.stopImmediatePropagation()
        }
      },
      true
    )
  }
}
