/**
 * Created by ritter on 16-10-21.
 */

import React, {Component} from 'react';

class PaperList extends Component {
    handleClick() {
        this.props.getPaperList();
    }


    render() {
        let paperList = this.props.paperList || [];
        console.log(paperList);
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>查看全部试卷</button>
                {
                    paperList.map((index, paper)=> {
                       return <div >{paper.url}</div>
                    })
                }
            </div>
        )
    }
}

export default PaperList;