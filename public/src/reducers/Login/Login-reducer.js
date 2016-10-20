function reducer(state = {name: '',password:''}, action) {
    switch (action.type) {

        case 'LOGIN':{
            console.log(action.status);
            alert(action.status);
        }
    }
    return state;
}
module.exports = reducer;