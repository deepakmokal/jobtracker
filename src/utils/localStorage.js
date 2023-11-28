
const USER_KEY = 'user';

export const getUserFromLocalStorage = () => {
    const localUser = localStorage.getItem(USER_KEY)
    return localUser ? JSON.parse(localUser) : null
}
export const addUserToLocalStorage = (userObj) => {
    localStorage.setItem(USER_KEY, JSON.stringify(userObj))
}
export const removeUserFromLocalStorage = () => {
    localStorage.removeItem(USER_KEY)
}