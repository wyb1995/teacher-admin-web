function loginReducer(state = {status: false}, action) {
    switch (action.type) {
        case 'LOGIN': {
            // alert('!state.status！' + !state.status);

            return ({
                status: !state.status
            })
        }
        case 'ERR': {
            alert('请输入正确的用户名和密码！');
            return ({
                status: state.status
            })
        }
        case 'PAPERLIST':
            return action.paperList;
    }
    return state;
}

// export function paperListInfo(state = [], action) {
//     switch (action.type) {
//         case 'PAPERLIST':
//             return action.paperList;
//         default:
//             return state;
//     }
// }

// module.exports = {reducer,paperListInfo};
export default loginReducer;