// import { FastAverageColor } from 'fast-average-color';

export const utilService = {
  makeId,
  getRandomIntInc,
  saveToStorage,
  loadFromStorage,
  debounce,
  makeRandNum,
  getRandomColor,
  // getImgAvgColor,
  // isDarkImg,
  isDarkColor,
  getBrightColor
}

function makeRandNum() {
  return Math.trunc(Date.now() % 100)
}

function makeId(length = 5) {
  var text = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

function getRandomIntInc(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value) || null)
}

function loadFromStorage(key) {
  let data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}

function debounce(func, wait = 30) {
  let timeout

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function getBrightColor(idx) {
  const clrs = [
    '#f2d600',
    '#ff9f1a',
    '#eb5a46',
    '#c377e0',
    '#0079bf',
    '#00c2e0',
    '#51e898',
    '#ECB390',
    '#FCF8E8',
    '#CEE5D0',
    '#94B49F'
  ]
  return clrs[idx]
}

// async function getImgAvgColor(imgUrl) {
//   try {
//       const fac = new FastAverageColor();
//       const color = await fac.getColorAsync(imgUrl)
//       return color.hexa
//   }
//   catch (e) {
//     console.log(e)
//   }
// }

// async function isDarkImg(imgUrl) {
//   try {
//     const fac = new FastAverageColor();
//     const color = await fac.getColorAsync(imgUrl)
//     return color.isDark
//   }
//   catch (e) {
//     console.log(e)
//   }
// }

function isDarkColor(color) {
  const hex = color.replace('#', '');
  const c_r = parseInt(hex.substr(0, 2), 16);
  const c_g = parseInt(hex.substr(2, 2), 16);
  const c_b = parseInt(hex.substr(4, 2), 16);
  const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
  return brightness < 155;
}