import React, {Component} from 'react'
import Description from "../../components/Description";
import '../../App.css'

class Slide2 extends Component{
  render(){
    return(
      <div>
          <div>
              <h2>Інтерактивна демонстрація двох напівперіодного "" змінного електронного струму</h2>
          </div>
          <div className="slideBlock">
              <div className="demonstration">
                  Slide2
              </div>
              <Description text="op"/>

          </div>
      </div>
    )
  }
}


export default Slide2
