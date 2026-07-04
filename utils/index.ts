export function delay(ms = 1000) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (ms > 10000) return reject(new Error('10초 이상은 기다리기 싫어!'))
      resolve(true)
    }, ms)
  )
}

export function loadImage(src: string) {
  return new Promise((resolve, reject) => {
    const imgEl = document.createElement('img')
    imgEl.addEventListener('load', () => {
      resolve(true)
    })
    imgEl.addEventListener('error', () => {
      reject(new Error('이미지 로드 실패'))
    })

    imgEl.src = src
  })
}
