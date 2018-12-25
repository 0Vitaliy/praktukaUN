import React, {Component} from 'react'
import Description from "../../components/Description";
import '../../App.css'

class Slide3 extends Component{
    render(){
        return(
            <div>
                <div>
                    <h2>Інтерактивна демо робота Варікана</h2>
                </div>
                <div className="slideBlock">
                    <div className="demonstration">
                        Slide3
                    </div>
                    <Description text="op" />
                </div>
            </div>
        )
    }
}


export default Slide3