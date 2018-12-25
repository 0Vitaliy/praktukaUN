import React, {Component} from 'react'
import "./style.css"

class Description extends Component{
    state={
        open:true
    }
    OpenBlock(){
        this.setState({
            open:!this.state.open
        })
    }

    render(){
        return(
            <div className="description">
                <button onClick={(e)=>this.OpenBlock(e)}>{this.state.open?"Пояснення":"Закрити"}</button>
                <div className={this.state.open?'none':'block'}>
                    {this.props.text}
                </div>
            </div>
        )
    }
}


export default Description