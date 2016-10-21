import React, {Component, PropTypes} from "react";

import {connect} from "react-redux";
import TeacherLoginForm from "/public/src/components/LoginForm.js";

const mapDispatchProps = (dispatch) => {
    return {
        onJude: (email, password)=> {
            console.log(enail+password+'container')
            dispatch({type: "LOGIN", email, password});
        }
    }
};


export default connect(()=> {
    return {}
}, mapDispatchProps)(TeacherLoginForm);