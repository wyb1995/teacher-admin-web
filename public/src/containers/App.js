import React, {Component} from 'react';
import TeacherLoginApp from '../components/LoginApp';

class App extends Component {

    render() {
        return (<div>
                {this.props.children}
            </div>
        );
    }
}

export default App;