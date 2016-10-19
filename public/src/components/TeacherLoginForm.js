'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';

class TeacherLoginForm extends React.Component {


    render() {
        return (
            <div className='col-md-4 col-md-offset-4'>
                <h3 className="welcome">欢迎注册思沃学院</h3>

                <div className="form-group">
                    <input className="form-control" type="text" placeholder="请输入手机号"/>
                </div>

                <div className="form-group">
                    <input className="form-control" type="text" placeholder="请输入邮箱"/>
                </div>

                <div className="row">
                    <div className="">
                        <div className='col-md-8'>
                            <input className="form-control" type="text" placeholder="请输入验证码" name="captcha"/>
                        </div>

                        <div className="col-md-4">
                            <img title="点击刷新验证码"/>
                        </div>
                    </div>
                </div>

                <div>
                    <label> </label>
                    <button type="submit" className="btn btn-lg btn-block btn-primary">登录</button>
                </div>
            </div>
        )
    }
}
export default TeacherLoginForm;