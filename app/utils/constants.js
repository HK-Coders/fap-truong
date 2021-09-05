export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';


export const responseCode = {
    success: "1",
    failed: "0",
    changPass: "10"
};

export const getToken = () => {
    return localStorage.getItem("token") || null;
}

export const getUser = () => {
    const token = getToken();
    if (token) {
        return token;
    } else return null;
}

export const setUser = (token, rollNumber, name) => {
    localStorage.setItem("token", token);
    localStorage.setItem("rollNumber", rollNumber);
    localStorage.setItem("name", name);
}

export const removeUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rollNumber");
    localStorage.removeItem("name");
}

export const timeout = () => {
    setTimeout(() =>
        localStorage.clear(), 5000
    );
}