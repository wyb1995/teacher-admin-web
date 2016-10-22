/**
 * Created by ritter on 16-10-22.
 */

export const paperListInfo = (state = [], action) => {
    switch (action.type){
        case 'PAPERLIST':
            return action.paperList;
        default:
            return state;
    }
};