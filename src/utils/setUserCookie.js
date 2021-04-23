import Cookies from "js-cookie";

/**
 * 给一个对象，存取cookie
 * @param {Object} info 
 * @returns 
 */
export function setCookie(info) {
    const arr = Object.entries(info);
    for (let i = 0; i < arr.length; i++) {
        Cookies.set(arr[i][0], arr[i][1]);
    }
    return true;
}

/**
 * 
 * @returns 获取用户的cookie
 */
export function getUserCookie() {
    return {
        username: Cookies.get("username"),
        appkey: Cookies.get("appkey"),
        role: Cookies.get("role"),
        email: Cookies.get("email")
    }
}

/**
 * 移出用户的cookie
 * @returns 
 */
export function removeCookie() {
    Cookies.remove("username");
    Cookies.remove("appkey");
    Cookies.remove("role");
    Cookies.remove("email");
    return true;
}