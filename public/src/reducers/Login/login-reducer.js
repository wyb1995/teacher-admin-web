function reducer(state = {email: '',password:''}, action) {
    switch (action.type) {

        case 'LOGIN':{
            console.log(action.value);
            if(action.value.email === 'admin@admin.com' &&
                action.value.password === '12345678'){
                console.log(action.value);
                return{
                    id: action.value.id,
                    time: action.value.time
                }
            }
        }
    }
    return state;
}
module.exports = reducer;