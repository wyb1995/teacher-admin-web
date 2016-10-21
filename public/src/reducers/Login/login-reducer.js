function reducer(state = {email: '',password:''}, action) {
    switch (action.type) {

        case 'LOGIN':{
                console.log(action.value);
                return state;
            }
        }
    return state;
}
module.exports = reducer;