export function saveToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function loadFromLocal(name) {
  const jsonString = localStorage.getItem(name)
  const data = JSON.parse(jsonString)
  return data
}
