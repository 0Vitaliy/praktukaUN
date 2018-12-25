import React, {Component} from 'react'
import Description from '../../components/Description'
import './style.css';
import '../../App.css'


class Slide1 extends Component{

  state={
      value:[10,20,25,20,10,0,-10,-20,-25,-20,-10,0],
      i:0,
      qw:0
  };

    OpenBlock() {
        this.setState({
                qw: this.state.value[this.state.i],
                i:this.state.i+1
            })

    }

  render(){
      console.log(this.state.qw);
      if(this.state.qw===10) {
          var n=2;
          var run = Math.abs(this.state.qw) / n + 's';
      }
      if(this.state.qw===20) {
           n=7;
           run = Math.abs(this.state.qw) / n + 's';
      }
      if(this.state.qw===25) {
           n=10;
           run = Math.abs(this.state.qw) / n + 's';
      }



    return(
      <div >
        <div>
          <h2>Інтерактивна демонстрація напів-періодного "" змінного електричного струму</h2>
        </div>
        <div className="slideBlock">
          <div className="demonstration">
              <div className="demo1">
                  <div className="voltmetr">
                      <button  onClick={(e)=>this.OpenBlock(e)}>^</button><span>{this.state.qw}V</span>
                  </div>

                  <svg width="500" height="350" viewBox="0 0 500 350">
                      <g id="startButton">
                          <rect  x="20" y="0" rx="3" ry="3" width="60" height="20" fill="green" />
                          <text  x="50" y="15" font-size="16" font-weight="bold" font-family="Arial" text-anchor="middle"
                                 fill="white" >Start</text>
                      </g>
                      <g id="stopButton">
                          <rect  x="100" y="0" rx="3" ry="3" width="60" height="20" fill="crimson" />
                          <text  x="130" y="15" font-size="16" font-weight="bold" font-family="Arial" text-anchor="middle"
                                 fill="white" >Stop</text>
                      </g>

                      <path id="motionPath" fill="none" stroke="#000000" stroke-miterlimit="100" d="M 160 200 l 140 0  l0 100 l -140 0 l0 -100"/>

                      <circle id="circle" r="5" cx="0" cy="0" fill="tomato" />
                      <circle id="circlex" r="10" cx="0" cy="0" fill="tomato" />
                      <circle id="circley" r="10" cx="0" cy="0" fill="tomato" />

                      <animateMotion
                          begin="startButton.mouseover"
                          end="stopButton.mouseover"
                          href="#circle"
                          dur="5s"
                          fill="freeze"
                          repeatCount="indefinite">
                          <mpath href="#motionPath" />
                      </animateMotion>
                      <animateMotion
                          href="#circlex"
                          dur={run}
                          begin="0s"
                          fill="freeze"
                          repeatCount="indefinite">
                          <mpath href="#motionPath" />
                      </animateMotion>
                      <animateMotion
                          href="#circley"
                          dur="3s"
                          begin="0s"
                          fill="freeze"
                          repeatCount="indefinite">
                          <mpath href="#motionPath" />
                      </animateMotion>

                  </svg>
                  <svg width="250" height="250">
                     <polygon points="10,10 200,10 200,100 10,100 " stroke="red" fill="none"/>
                  </svg>
                  <div className="amperM">
                      <svg>

                      </svg>
                  </div>
              </div>
              <div className="sinSlide1">
                  <svg>

                  </svg>
              </div>
          </div>
            <Description text="op hvkjdghkj hfgkjdsh gjkhfgsjdhg kk lsdjgkj hdkds kkshd gjs dghh"/>

        </div>
      </div>
    )
  }
}


export default Slide1
