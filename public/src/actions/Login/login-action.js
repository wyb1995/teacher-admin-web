'use strict';

const checkLogin = (email, password)=> {
    return (dispatch)=> {
        dispatch(isCorrect(email, password));
    };
};

const isCorrect = (email, password)=> {
    if (email === 'admin@admin.com' && password === '12345678') {
        return {
            type: 'LOGIN'
        }
    } else {
        return {
            type: 'ERR'
        }
    }
};

export default checkLogin;


