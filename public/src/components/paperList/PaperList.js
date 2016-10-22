/**
 * Created by ritter on 16-10-21.
 */

import {React, Component} from 'react';

class PaperList extends Component {

    handleClick() {
        this.props.onGetPaperList();
    }

    render() {
        let {paperList} = this.props.paperList;
        return (
        <div>
            <button onClick={this.handleClick}>查看全部试卷</button>
            {
                paperList.map((index, paper)=>{
                    return (
                        <div key={index}> {paper}</div>
                    );
                })
            }
        </div>
        )
    }
}

export default PaperList;