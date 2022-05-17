// import { resolve } from "_uri-js@4.2.2@uri-js";

export function preloadImages(str) {
  let loadedImage = 0
  const newImages = []
  const arr = str.match(/src="(.+)"\s{1}/g)
  // let datas = str.match(/<img[^>]*>/gi);
  const datas = str.match(/<img[^>]*>/gi)

  return new Promise((resolve, reject) => {
    debugger
    for (let i = 0; i < datas.length; i++) {
      const datasUrl = datas[i].match(/src="(.+)"/)
      newImages[i] = new Image()
      newImages[i].src = datas[i].slice(5, -2)

      newImages[i].onload = () => {
        loadedImage++
        if (loadedImage === datas.length) {
          resolve()
        }
      }
      newImages[i].onerror = () => {
        reject()
      }
    }
  })
}
