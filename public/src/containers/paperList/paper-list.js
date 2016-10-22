/**
 * Created by ritter on 16-10-22.
 */
import React from "react";
import {connect} from "react-redux";

import PaperList from '../../components/paperList/paperList';

const mapStateToProps = (state)=> {
    return {state};
};

const mapDispatchToProps = (dispatch)=> {
    return {
        onGetPaperList: ()=> {
            dispatch(getPaperList());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PaperList);