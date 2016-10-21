import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import TeacherLoginForm from "/public/src/components/LoginForm.js";

const mapStateToProps = (state) => {
    return {
        email:state.email,
        password:state.password
    }
};

const mapDispatchProps = (dispatch) => {
    return {
        onJudge: (email, password)=> {
            console.log(email+password+'container');
            dispatch(onJudge(email,password));
        }
    }
};

export default connect(mapStateToProps,mapDispatchProps)(withRouter(TeacherLoginForm));