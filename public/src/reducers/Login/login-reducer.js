function reducer(state = {status: false}, action) {
    switch (action.type) {
        case 'LOGIN': {
            console.log(!state.status+'true reducer');
            // alert('dfg！');
            return ({
                status: !state.status
            })
        }
        case 'ERR': {
            alert('请输入正确的用户名和密码！');
            console.log(state.status+'false  reducer');
            return ({
                status: state.status
            })
        }
    }
    return state;
}
module.exports = reducer;