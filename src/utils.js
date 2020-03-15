export function saveToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function loadFromLocal(name) {
  const jsonString = localStorage.getItem(name)
  const data = JSON.parse(jsonString)
  return data
}

export function loadActivities() {
  return loadFromLocal('activities')
}

export function saveActivities(newActivities) {
  return saveToLocal('activities', newActivities)
}

const initialState = { name: '', category: 'Choose category', hours: '' }
export default initialState
