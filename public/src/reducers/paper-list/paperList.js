/**
 * Created by ritter on 16-10-22.
 */

const paperListInfo = (state = [], action) => {
    switch (action.type) {
        case 'PAPERLIST':
            return action.paperList;
        default:
            return state;
    }
};
export default paperListInfo;