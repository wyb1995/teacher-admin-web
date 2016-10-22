import {withRouter} from 'react-router';
import checkLogin from '../actions/Login/login-action';

const mapStateToProps = (state)=> {
    return {
        status: state.status
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onJudge: (email, password)=> {
            dispatch(checkLogin(email, password));
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TeacherLoginForm));
