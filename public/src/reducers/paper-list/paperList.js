/**
 * Created by ritter on 16-10-22.
 */

function paperListInfo(state = [], action) {
    switch (action.type) {
        case 'PAPERLIST':
            // console.log(action)
            return action.paperList;
        default:
            return state;
    }
}

// const paperListInfo = (state = [], action) => {
//     switch (action.type) {
//         case 'PAPERLIST':
//             // console.log(action)
//             return action.paperList;
//         default:
//             return state;
//     }
// };
export default paperListInfo;