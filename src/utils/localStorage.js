class LOCAL_STORAGE {
  setData(token, value) {
    localStorage.setItem(token, value)
  }

  getData(token) {
    return localStorage.getItem(token)
  }

  clearData() {
    localStorage.clear()
  }
}

class SESSION_STORAGE {
  setData(token, value) {
    sessionStorage.setItem(token, value)
  }

  getData(token) {
    return sessionStorage.getItem(token)
  }
  
  clearData() {
    localStorage.clear()
  }
}

export const LocalStorage = new LOCAL_STORAGE()
export const SessionStorage = new SESSION_STORAGE()