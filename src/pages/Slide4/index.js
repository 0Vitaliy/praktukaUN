import React, {Component} from 'react'
import Description from '../../components/Description'
import '../../App.css'


class Slide4 extends Component{

  render(){
    return(
      <div >
          <div>
              <h2>Фотодіод</h2>
          </div>
          <div className="slideBlock">
              <div className="demonstration">
                  Slide4
              </div>
              <Description text="op" />

          </div>
      </div>
    )
  }
}


export default Slide4
