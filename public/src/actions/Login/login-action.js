'use strict';
export const checkLogin = (email, password)=>{
    return (dispatch)=>{

                if(err){
                    throw err;
                }else {
                    if(email === 'admin@admin.com' &&
                        password === '12345678') {
                        dispatch(isCorrect(email,password));
                    }
                }

    };
};

export const isCorrect = (data)=>{
    return {
        type:'Login',
        data
    };
};