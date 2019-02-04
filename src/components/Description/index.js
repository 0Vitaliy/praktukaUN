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
                    <h2 className='slide1_description_head'>{this.props.slide1_description_head}
                    </h2>
                    <span className='slide1_description_span'>{this.props.slide1_description_span1}</span>
                    <span className='slide1_description_span'>{this.props.slide1_description_span2}</span>
                    <span className='slide1_description_span'>{this.props.slide1_description_span3}</span>
                    <span className='slide1_description_span'>{this.props.slide1_description_span4}</span>
                    <span className='slide1_description_span'>{this.props.slide1_description_span5}</span>


                    <p><h2 className='slide1_description_head'>Теоретичні відомості</h2>{this.props.text}</p>
                </div>
            </div>
        )
    }
}


export default Description