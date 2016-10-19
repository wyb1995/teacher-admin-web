import React, {Component} from "react";
import TeacherLoginForm from "./TeacherLoginForm"

class App extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center row">思沃特训营</h1>
            <TeacherLoginForm/>
            </div>
        )
    }
}

export default App;