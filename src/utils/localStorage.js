import WebStorageCache from 'web-storage-cache'

const wsCache = new WebStorageCache()
export function setLocalStorage (key, value) {
  return wsCache.set(key, value)
}

export function getLocalStorage (key) {
  return wsCache.get(key)
}

export function removeLocalStorage (key) {
  return wsCache.delete(key)
}

export function clearLocalStorage () {
  return wsCache.clear()
}

// 获取国际化
export function getLocale () {
  return getLocalStorage('locale')
}

// 保存国际化
export function saveLocale (locale) {
  return setLocalStorage('locale', locale)
}

// 获取币列表
export function getCoinList (locale) {
  return setLocalStorage('coinlist', locale)
}
// 存储币列表
export function saveCoinList (locale) {
  return setLocalStorage('coinlist', locale)
}
