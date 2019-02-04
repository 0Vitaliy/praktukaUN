import React, {Component} from 'react'
import Description from '../../components/Description'
import './style.css';
import '../../App.css'



class Slide1 extends Component{

  state={
      value:[10,20,25,20,10,0,-10,-20,-25,-20,-10,0],
      i:0,
      qw:0,
      one:true, two:true, tree:true,
      four:true,five:true,six:true,
      seven:true,eight:true,nine:true,
      ten:true,eleven:true,twelve:true
  };

    OpenBlock() {
        if(this.state.i<12){
        this.setState({
                qw: this.state.value[this.state.i],
                i:this.state.i+1
            })
        }
        if(this.state.qw===0 && this.state.i===0) {this.setState({one: false})}
        if(this.state.qw===10 && this.state.i===1) {this.setState({two: false})}
        if(this.state.qw===20 && this.state.i===2) {this.setState({tree: false})}
        if(this.state.qw===25 && this.state.i===3) {this.setState({four: false})}
        if(this.state.qw===20 && this.state.i===4) {this.setState({five: false})}
        if(this.state.qw===10 && this.state.i===5) {this.setState({six: false})}
        if(this.state.qw===0 && this.state.i===6) {this.setState({seven: false})}
        if(this.state.qw===-10 && this.state.i===7) {this.setState({eight: false})}
        if(this.state.qw===-20 && this.state.i===8) {this.setState({nine: false})}
        if(this.state.qw===-25 && this.state.i===9) {this.setState({ten: false})}
        if(this.state.qw===-20 && this.state.i===10) {this.setState({eleven: false})}
        if(this.state.qw===-10 && this.state.i===11) {this.setState({twelve: false})}
    }

  render(){
      var mod=Math.abs(this.state.qw)
      // console.log(this.state.qw);
      if(mod===10) {

          var n=2;
          var run = mod / n + 's';
          var runX =(mod / n)*1.1 + 's';
          var runY =(mod / n)*1.2 + 's';
          var runK=(mod / n)*1.3 + 's';
          var runM=(mod / n)*1.4 + 's';
          // console.log(runX);
      }
      if(mod===20) {
           n=7;
           run = mod / n + 's';
          runX =(mod / n)*1.2 + 's';
          runY =(mod / n)*1.3 + 's';
          runK=(mod / n)*1.4 + 's';
          runM=(mod / n)*1.7 + 's';
      }
      if(mod===25) {
           n=10;
           run = mod / n + 's';
          runX =(mod / n)*1.3 + 's';
          runY =(mod / n)*1.4 + 's';
          runK=(mod / n)*1.5+ 's';
          runM=(mod / n)*1.6 + 's';
      }


    return(
      <div >
        <div>
          <h2 className="spanH_slide1234">Інтерактивна демонстрація одно-напівперіодного випрямлення змінного електричного струму
          </h2>
        </div>
        <div className="slideBlock">
          <div className="demonstration">
              <div className="demo1">
                  <div className='fon_slide1'></div>
                  <span className="spanH">Джерело змінної напруги</span>
                      <div className="voltmetrV slide1_voltm">
                          <div>
                      <button  onClick={(e)=>this.OpenBlock(e)}>^</button><span>{this.state.qw}V</span>
                          </div>
                  </div>

                  <svg className='slide1_svg' width="400" height="250" viewBox="0 0 500 350">
                      {(this.state.qw>=0)?(
                              <text x="55" y="143">+</text>):
                          (<text x="55" y="143">-</text>)
                      }
                      {(this.state.qw>=0)?(
                              <text x="55" y="100">-</text>):
                          ( <text x="55" y="100">+</text>)
                      }
                      /*стрелки*/
                      <line x1="40" x2="30" y1="95" y2="90" stroke="#000000" stroke-width="2px"></line>
                      <line x1="40" x2="30" y1="95" y2="100" stroke="#000000" stroke-width="2px"></line>

                      <line x1="40" x2="30" y1="140" y2="135" stroke="#000000" stroke-width="2px"></line>
                      <line x1="40" x2="30" y1="140" y2="145" stroke="#000000" stroke-width="2px"></line>

                      <line x1="390" x2="400" y1="95" y2="90" stroke="#000000" stroke-width="2px"></line>
                      <line x1="390" x2="400" y1="95" y2="100" stroke="#000000" stroke-width="2px"></line>

                      <line x1="390" x2="400" y1="140" y2="135" stroke="#000000" stroke-width="2px"></line>
                      <line x1="390" x2="400" y1="140" y2="145" stroke="#000000" stroke-width="2px"></line>


                      /*лінії*/
                      <line x1="0" x2="40" y1="95" y2="95" stroke="#000000" stroke-width="2px"></line>
                      <line x1="0" x2="40" y1="140" y2="140" stroke="#000000" stroke-width="2px" ></line>

                      <line x1="390" x2="500" y1="95" y2="95" stroke="#000000" stroke-width="2px"></line>
                      <line x1="390" x2="500" y1="140" y2="140" stroke="#000000" stroke-width="2px"></line>






                      <line x1="40" x2="40" y1="98" y2="30" stroke="#000000"></line>

                      <line x1="40" x2="200" y1="30" y2="30" stroke="#000000"></line>



                      <line x1="230" x2="390" y1="30" y2="30" stroke="#000000"></line>

                      <line x1="390" x2="390" y1="30" y2="98" stroke="#000000"></line>



                      <line x1="390" x2="390" y1="140" y2="220" stroke="#000000"></line>

                      <line x1="390" x2="240" y1="220" y2="220" stroke="#000000"></line>




                      <line x1="180" x2="40" y1="220" y2="220" stroke="#000000"></line>
                      <line x1="40" x2="40" y1="220" y2="140" stroke="#000000"></line>




                      <line x1="52" x2="52" y1="98" y2="42" stroke="#000000"></line>
                      <line x1="52" x2="200" y1="42" y2="42" stroke="#000000"></line>
                      <line x1="230" x2="378" y1="42" y2="42" stroke="#000000"></line>

                      <line x1="378" x2="378" y1="42" y2="98" stroke="#000000"></line>

                      <line x1="378" x2="378" y1="142" y2="208" stroke="#000000"></line>

                      <line x1="378" x2="240" y1="208" y2="208" stroke="#000000"></line>


                      <line x1="180" x2="52" y1="208" y2="208" stroke="#000000"></line>

                      <line x1="52" x2="52" y1="208" y2="140" stroke="#000000"></line>
                      /*транзистор*/
                      <line x1="180" x2="240" y1="234" y2="234" stroke="#000000"></line>
                      <line x1="180" x2="180" y1="198" y2="234" stroke="#000000"></line>
                      <line x1="240" x2="240" y1="198" y2="234" stroke="#000000"></line>
                      <line x1="240" x2="180" y1="198" y2="198" stroke="#000000"></line>

                      /*діод*/
                      <line x1="200" x2="200" y1="20" y2="52" stroke="#000000"></line>

                      <line x1="200" x2="230" y1="20" y2="36" stroke="#000000"></line>

                      <line x1="200" x2="230" y1="52" y2="36" stroke="#000000"></line>
                      <line x1="230" x2="230" y1="20" y2="52" stroke="#000000"></line>



                      <circle  r="7" cx="46" cy="140" stroke="#000000" fill='white'/>
                      <circle  r="7" cx="46" cy="95" stroke="#000000" fill='white'/>


                      <circle  r="7" cx="384" cy="140" stroke="#000000" fill='white'/>
                      <circle  r="7" cx="384" cy="95" stroke="#000000" fill='white'/>



                      {(this.state.qw>=0)?(
                          <path id="motionPath" fill="none" stroke="#000000" strokeMiterlimit="100"
                                d="M 46 95 l 0 -59 l 338 0 l 0 119  l 0 60 l -338 0 l 0 -90 "/>):( <path  id="motionPath" fill="none" stroke="#000000" strokeMiterlimit="100"
                                                                                                                                               d="M 46 134 l 0 80 l 338 0  l 0 -178 l -150 0"/>)
                      }


                      <circle id="circle" r="4" cx="0" cy="0" fill="tomato"/>
                      <circle id="circlex" r="4" cx="0" cy="0" fill="tomato" />
                      <circle id="circley" r="4" cx="0" cy="0" fill="tomato" />
                      <circle id="circlek" r="4" cx="0" cy="0" fill="tomato" />
                      <circle  id="circlez" r="4" cx="0" cy="0" fill="tomato" />
                      <circle  id="circlem" r="4" cx="0" cy="0" fill="tomato" />


                      <animateMotion
                          href="#circle"
                          dur={runK}
                          begin="0s"
                          fill="freeze"
                          repeatCount="indefinite">
                          <mpath href="#motionPath" />
                      </animateMotion>
                      <animateMotion
                          href="#circlem"
                          dur={runM}
                          begin="0s"
                          fill="freeze"
                          repeatCount="indefinite">
                          <mpath href="#motionPath" />
                      </animateMotion>
                      <animateMotion
                          href="#circlek"
                          dur={runX}

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
                          dur={runY}
                          begin="0s"
                          fill="freeze"
                          repeatCount="indefinite">
                          <mpath href="#motionPath" />
                      </animateMotion>
                      <animateMotion
                          href="#circlez"
                          dur="3s"
                          begin="0s"
                          fill="freeze"
                          repeatCount="indefinite">
                          <mpath href="#motionPath" />
                      </animateMotion>

                  </svg>
                  <div className="amperM slide1_amper">
                      <svg version="1.2" className="graph slide1_graph" aria-labelledby="title" role="img">
                          <title id="title">Демо екран</title>
                          <g className="grid x-grid" id="xGrid">
                              <line x1="90" x2="90" y1="5" y2="230"></line>
                              /*стрілка*/
                              <line x1="90" x2="95" y1="5" y2="15"></line>
                              <line x1="90" x2="85" y1="5" y2="15"></line>
                          </g>
                          <g className="grid y-grid" id="yGrid">
                              <line x1="90" x2="550" y1="170" y2="170"></line>
                              /*стрілка*/
                              <line x1="550" x2="540" y1="170" y2="165"></line>
                              <line x1="550" x2="540" y1="170" y2="175"></line>
                          </g>
                          <g className="labels x-labels">

                              <text x="120" y="190">1</text>
                              <text x="150" y="190">2</text>
                              <text x="180" y="190">3</text>
                              <text x="210" y="190">4</text>
                              <text x="240" y="190">5</text>
                              <text x="270" y="190">6</text>
                              <text x="300" y="160">7</text>
                              <text x="330" y="160">8</text>
                              <text x="360" y="160">9</text>
                              <text x="390" y="160">10</text>
                              <text x="420" y="160">11</text>
                              <text x="450" y="160">12</text>
                              <text x="480" y="160">13</text>

                          </g>
                          <g className="labels y-labels">
                              <text x="420" y="25">Демонстраційний екран 2</text>
                              <text x="120" y="20">I,mA</text>
                              <text x="80" y="50">12</text>
                              <text x="80" y="70">10</text>
                              <text x="80" y="90">8</text>
                              <text x="80" y="110">6</text>
                              <text x="80" y="130">4</text>
                              <text x="80" y="150">2</text>
                              <text x="80" y="170">0</text>
                              <text x="80" y="190">-2</text>
                              <text x="80" y="210">-4</text>


                          </g>
                          <g className="data" data-setname="Our first data set">
                              <circle cx="90" cy="170" data-value="7.2" r="4"></circle>
                              <circle className={this.state.one?'none':'block'} cx="120" cy="110" data-value="8.1" r="4"></circle>
                              <line className={this.state.one?'none':'block'} x1="90" x2="120" y1="170" y2="110" stroke="red"></line>

                              <circle className={this.state.two?'none':'block'} cx="150" cy="70" data-value="7.7" r="4"></circle>
                              <line className={this.state.two?'none':'block'} x1="120" x2="150" y1="110" y2="70" stroke="red"></line>

                              <circle className={this.state.tree?'none':'block'} cx="180" cy="50" data-value="6.8" r="4"></circle>
                              <line className={this.state.tree?'none':'block'} x1="150" x2="180" y1="70" y2="50" stroke="red"></line>

                              <circle className={this.state.four?'none':'block'} cx="210" cy="70" data-value="6.7" r="4"></circle>
                              <line className={this.state.four?'none':'block'} x1="180" x2="210" y1="50" y2="70" stroke="red"></line>

                              <circle className={this.state.five?'none':'block'} cx="240" cy="110" data-value="6.7" r="4"></circle>
                              <line className={this.state.five?'none':'block'} x1="210" x2="240" y1="70" y2="110" stroke="red"></line>

                              <circle className={this.state.six?'none':'block'} cx="270" cy="170" data-value="6.7" r="4"></circle>
                              <line className={this.state.six?'none':'block'} x1="240" x2="270" y1="110" y2="170" stroke="red"></line>


                              <circle className={this.state.seven?'none':'block'} cx="300" cy="180" data-value="6.7" r="4"></circle>
                              <line className={this.state.seven?'none':'block'} x1="270" x2="300" y1="170" y2="180" stroke="red"></line>





                              <circle className={this.state.eight?'none':'block'} cx="330" cy="185" data-value="6.7" r="4"></circle>
                              <line className={this.state.eight?'none':'block'} x1="300" x2="330" y1="180" y2="185" stroke="red"></line>


                              <circle className={this.state.nine?'none':'block'} cx="360" cy="190" data-value="6.7" r="4"></circle>
                              <line className={this.state.nine?'none':'block'} x1="330" x2="360" y1="185" y2="190" stroke="red"></line>

                              <circle className={this.state.ten?'none':'block'} cx="390" cy="185" data-value="6.7" r="4"></circle>
                              <line className={this.state.ten?'none':'block'} x1="360" x2="390" y1="190" y2="185" stroke="red"></line>
                              <circle className={this.state.eleven?'none':'block'} cx="420" cy="180" data-value="6.7" r="4"></circle>
                              <line className={this.state.eleven?'none':'block'} x1="390" x2="420" y1="185" y2="180" stroke="red"></line>
                              <circle className={this.state.twelve?'none':'block'} cx="450" cy="170" data-value="6.7" r="4"></circle>
                              <line className={this.state.twelve?'none':'block'} x1="420" x2="450" y1="180" y2="170" stroke="red"></line>
                          </g>
                      </svg>
                  </div>
              </div>
                  <div className="sinSlide1 slide1_sin">
                      <svg version="1.2" className="graph slide1_sin_graph " aria-labelledby="title" role="img">
                          <title id="title">Демо екран</title>
                          <g className="grid x-grid" id="xGrid">
                              <line x1="90" x2="90" y1="5" y2="235"></line>
                              /*стрілка*/
                              <line x1="90" x2="95" y1="5" y2="15"></line>
                              <line x1="90" x2="85" y1="5" y2="15"></line>
                          </g>
                          <g className="grid y-grid" id="yGrid">
                              <line x1="90" x2="500" y1="120" y2="120"></line>
                              /*стрілка*/
                              <line x1="500" x2="490" y1="120" y2="115"></line>
                              <line x1="500" x2="490" y1="120" y2="125"></line>
                          </g>
                          <g className="labels x-labels">
                              <text x="120" y="140">1</text>
                              <text x="150" y="140">2</text>
                              <text x="180" y="140">3</text>
                              <text x="210" y="140">4</text>
                              <text x="240" y="140">5</text>
                              <text x="270" y="140">6</text>
                              <text x="300" y="140">7</text>
                              <text x="330" y="140">8</text>
                              <text x="360" y="140">9</text>
                              <text x="390" y="140">10</text>
                              <text x="420" y="140">11</text>
                              <text x="450" y="140">12</text>
                              <text x="480" y="140">13</text>

                          </g>
                          <g className="labels y-labels">
                              <text x="360" y="15">Демонстраційний екран 1</text>
                              <text x="120" y="25">U,В</text>
                              <text x="80" y="25">25</text>
                              <text x="80" y="45">20</text>
                              <text x="80" y="85">10</text>
                              <text x="80" y="125">0</text>
                              <text x="80" y="165">-10</text>
                              <text x="80" y="205">-20</text>
                              <text x="80" y="225">-25</text>

                          </g>
                          <g className="data" data-setname="Our first data set">
                              <circle cx="90" cy="120" data-value="7.2" r="4"></circle>
                              <circle className={this.state.one?'none':'block'} cx="120" cy="85" data-value="8.1" r="4"></circle>
                              <line className={this.state.one?'none':'block'} x1="90" x2="120" y1="120" y2="85" stroke="red"></line>

                              <circle className={this.state.two?'none':'block'} cx="150" cy="45" data-value="7.7" r="4"></circle>
                              <line className={this.state.two?'none':'block'} x1="120" x2="150" y1="85" y2="45" stroke="red"></line>

                              <circle className={this.state.tree?'none':'block'} cx="180" cy="25" data-value="6.8" r="4"></circle>
                              <line className={this.state.tree?'none':'block'} x1="150" x2="180" y1="45" y2="25" stroke="red"></line>

                              <circle className={this.state.four?'none':'block'} cx="210" cy="45" data-value="6.7" r="4"></circle>
                              <line className={this.state.four?'none':'block'} x1="180" x2="210" y1="25" y2="45" stroke="red"></line>

                              <circle  className={this.state.five?'none':'block'} cx="240" cy="85" data-value="6.7" r="4"></circle>
                              <line className={this.state.five?'none':'block'} x1="210" x2="240" y1="45" y2="85" stroke="red"></line>

                              <circle  className={this.state.six?'none':'block'} cx="270" cy="120" data-value="6.7" r="4"></circle>
                              <line className={this.state.six?'none':'block'} x1="240" x2="270" y1="85" y2="120" stroke="red"></line>

                              <circle  className={this.state.seven?'none':'block'} cx="300" cy="165" data-value="6.7" r="4"></circle>
                              <line className={this.state.seven?'none':'block'} x1="270" x2="300" y1="120" y2="165" stroke="red"></line>

                              <circle   className={this.state.eight?'none':'block'}cx="330" cy="205" data-value="6.7" r="4"></circle>
                              <line className={this.state.eight?'none':'block'} x1="300" x2="330" y1="165" y2="205" stroke="red"></line>

                              <circle  className={this.state.nine?'none':'block'} cx="360" cy="225" data-value="6.7" r="4"></circle>
                              <line className={this.state.nine?'none':'block'} x1="330" x2="360" y1="205" y2="225" stroke="red"></line>

                              <circle  className={this.state.ten?'none':'block'} cx="390" cy="205" data-value="6.7" r="4"></circle>
                              <line className={this.state.ten?'none':'block'} x1="360" x2="390" y1="225" y2="205" stroke="red"></line>

                              <circle  className={this.state.eleven?'none':'block'} cx="420" cy="165" data-value="6.7" r="4"></circle>
                              <line className={this.state.eleven?'none':'block'} x1="390" x2="420" y1="205" y2="165" stroke="red"></line>

                              <circle  className={this.state.twelve?'none':'block'} cx="450" cy="120" data-value="6.7" r="4"></circle>
                              <line className={this.state.twelve?'none':'block'} x1="420" x2="450" y1="165" y2="120" stroke="red"></line>
                          </g>
                      </svg>
              </div>
          </div>
            <Description text="

Діоди в схемах випрямлячів включаються за одно- і дво-напів-періодних схемах.
На базі одного діода можна виготовити одно-напів-періодний випрямляч.
Розглянемо принцип роботи такого випрямляча. На рисунку показано схема перетворення вихідного сигналу на прикладі вольтамперної характеристики діода. Вхідна напруга на діоді змінюється синусоїдально (зеленого кольору): півперіода напруга приймає додатні значення (0-1) і двугі півперіода (1-2) вона приймає відємні значення.
Коли на вході діоду змінна напруга приймає додатні значення (0-1, 2-3, …), діод відкритий і на виході із діоду змінний струм (коричневого кольору кольору) майже відтворює форму синусоїди вхідного сигналу. При цьому можливе підсилення величини вихідного сигналу, що показано пунктиром.
Коли на вході діоду змінна напруга приймає відємні значення (1-2, …), діод включений в непрямому напрямі, то лише за рахунок неосновних носіїв заряду діод пропускає невеликий струм відємного напрямку.

" slide1_description_head='Опис установки симуляційної моделі:'
                         slide1_description_span1='1.Кероване джерело змінного струму.'
                         slide1_description_span2='2.Вольтметр для вимірювання вхідної змінної напруги.'
                         slide1_description_span3='3.Діод.'
                         slide1_description_span4='4.Навантаження (опір).'
                         slide1_description_span5='5.Амперметр для вимірювання вихідного струму.'
            />

        </div>
      </div>
    )
  }
}


export default Slide1
