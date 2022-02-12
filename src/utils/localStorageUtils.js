export const syncWithLocalStorage = localStorageItem => {
    const localData = localStorage.getItem(localStorageItem);
    return localData ? JSON.parse(localData) : "";
};

export const isUserRegistered = localStorageItem => {
    return localStorage.getItem(localStorageItem) ? true : false;
}