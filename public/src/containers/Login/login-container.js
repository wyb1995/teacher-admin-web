import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import TeacherLoginForm from "/home/wangdanna/Documents/work/recruiting-system-teacher-web/public/src/components/TeacherLoginForm.js";

const mapDispatchProps = (dispatch) => {
    return {
        onJude: (userName, password)=> {
            console.log('dispatch');
            dispatch({type: "LOGIN", userName, password});
        }
    }
};


export default connect(()=> {
    return {}
}, mapDispatchProps)(TeacherLoginForm);