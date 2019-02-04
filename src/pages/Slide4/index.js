import React, {Component} from 'react'
import Description from '../../components/Description'
import '../../App.css'
import '../../App.css'
import fanar from '../../img/fanar.png'
import './style.css'


class Slide4 extends Component{

    state={
        value:[-1,-2,-3,-4,-5],
        i:0,
        qw:0,

        one:true, two:true, tree:true,
        four:true,five:true,
        one1:true, two1:true, tree1:true,
        four1:true,five1:true,
        one2:true, two2:true, tree2:true,
        four2:true,five2:true,

        fotodiod:0
    };
    OpenFotoDiod() {
        if(this.state.qw===-5 && this.state.fotodiod<2) {
            this.setState({

                fotodiod: this.state.fotodiod + 1,
                i: 0,
                qw: 0
            })
        }
    }
    OpenBlock() {

        if(this.state.i<5) {
            this.setState({
                qw: this.state.value[this.state.i],
                i: this.state.i + 1
            })
        }
        if(this.state.fotodiod===0){
        if(this.state.qw===0 && this.state.i===0 )  {this.setState({one: false})}
        if(this.state.qw===-1 && this.state.i===1 ) {this.setState({two: false})}
        if(this.state.qw===-2 && this.state.i===2) {this.setState({tree: false})}
        if(this.state.qw===-3 && this.state.i===3 ) {this.setState({four: false})}
        if(this.state.qw===-4 && this.state.i===4) {this.setState({five: false})}
        if(this.state.qw===-5 && this.state.i===5 ) {this.setState({six: false})}
        }
        if(this.state.fotodiod===1){
            if(this.state.qw===0 && this.state.i===0 )  {this.setState({one1: false})}
            if(this.state.qw===-1 && this.state.i===1 ) {this.setState({two1: false})}
            if(this.state.qw===-2 && this.state.i===2) {this.setState({tree1: false})}
            if(this.state.qw===-3 && this.state.i===3 ) {this.setState({four1: false})}
            if(this.state.qw===-4 && this.state.i===4) {this.setState({five1: false})}
            if(this.state.qw===-5 && this.state.i===5 ) {this.setState({six1: false})}
        }
        if(this.state.fotodiod===2){
            if(this.state.qw===0 && this.state.i===0 )  {this.setState({one2: false})}
            if(this.state.qw===-1 && this.state.i===1 ) {this.setState({two2: false})}
            if(this.state.qw===-2 && this.state.i===2) {this.setState({tree2: false})}
            if(this.state.qw===-3 && this.state.i===3 ) {this.setState({four2: false})}
            if(this.state.qw===-4 && this.state.i===4) {this.setState({five2: false})}
            if(this.state.qw===-5 && this.state.i===5 ) {this.setState({six2: false})}
        }

    }

    render(){


        var mod=Math.abs(this.state.qw)
        // console.log(this.state.qw);
        if(mod===0) {
            var VD ="M 250 1 l 10 0 l 0 65 l -10 0"
            if(this.state.fotodiod===0){
                var color_lampa='black'
                var amperdani=0;
                var Width=210;
                var widtH=240;
            }
            if(this.state.fotodiod===1){
                color_lampa='#ffff66'
                 amperdani=0;
                var Width=215;
                var widtH=235;
            }
            if(this.state.fotodiod===2){
                color_lampa='#FFFF00'
                amperdani=0;
                var Width=220;
                var widtH=230;
            }

        }
        if(mod===1) {
            VD ="M 250 1 l 10 0 l 0 65 l -10 0"
            if(this.state.fotodiod===0){
                var color_lampa='black'
                amperdani=-0.5;
                var Width=206;
                var widtH=244;
            }
            if(this.state.fotodiod===1){
                color_lampa='#ffff66'
                amperdani=-1.8;
                var Width=211;
                var widtH=239;
            }
            if(this.state.fotodiod===2){
                color_lampa='#ffff02'
                amperdani=-4;
                var Width=216;
                var widtH=234;
            }

            var n=2;
            var run = 10 + 's';
            var runX =(mod / n)*1.1 + 's';
            var runY =(mod / n)*1.2 + 's';
            var runK=(mod / n)*1.3 + 's';
            var runM=(mod / n)*1.4 + 's';
            // console.log(runX);
        }
        if(mod===2) {
            if(this.state.fotodiod===0){
                var color_lampa='black'
                amperdani=-0.5;
                var Width=202;
                var widtH=248;
            }
            if(this.state.fotodiod===1){
                color_lampa='#ffff66'
                amperdani=-2;
                var Width=207;
                var widtH=243;
            }
            if(this.state.fotodiod===2){
                color_lampa='#FFFF00'
                amperdani=-5;
                var Width=212;
                var widtH=238;
            }
            VD ="M 244 1 l 18 0 l 0 65 l -18 0"

            n=7;
            run = mod / n + 's';
            runX =(mod / n)*1.2 + 's';
            runY =(mod / n)*1.3 + 's';
            runK=(mod / n)*1.4 + 's';
            runM=(mod / n)*1.7 + 's';
        }
        if(mod===3) {
            VD ="M 245 1 l 20 0 l 0 65 l -20 0"
            if(this.state.fotodiod===0){
                var color_lampa='black'
                amperdani=-0.5;
                var Width=198;
                var widtH=252;
            }
            if(this.state.fotodiod===1){
                color_lampa='#ffff66'
                amperdani=-2.2;
                var Width=203;
                var widtH=247;
            }
            if(this.state.fotodiod===2){
                color_lampa='#FFFF00'
                amperdani=-5;
                var Width=208;
                var widtH=242;
            }
            n=10;
            run = mod / n + 's';
            runX =(mod / n)*1.3 + 's';
            runY =(mod / n)*1.4 + 's';
            runK=(mod / n)*1.5+ 's';
            runM=(mod / n)*1.6 + 's';
        }
        if(mod===4) {
            if(this.state.fotodiod===0){
                var color_lampa='black'
                var Width=193;
                amperdani=-0.5;
                var widtH=257;
            }
            if(this.state.fotodiod===1){
                color_lampa='#ffff66'
                amperdani=-2.3;
                var Width=198;
                var widtH=252;
            }
            if(this.state.fotodiod===2){
                color_lampa='#FFFF00'
                amperdani=-5;
                var Width=203;
                var widtH=247;
            }
            VD ="M 242 1 l 26 0 l 0 65 l -26 0"

            n=10;
            run = mod / n + 's';
            runX =(mod / n)*1.3 + 's';
            runY =(mod / n)*1.4 + 's';
            runK=(mod / n)*1.5+ 's';
            runM=(mod / n)*1.6 + 's';
        }
        if(mod===5) {
            if(this.state.fotodiod===0){
                var color_lampa='black'
                amperdani=-0.5;
                var Width=185;
                var widtH=265;
            }
            if(this.state.fotodiod===1){
                color_lampa='#ffff66'
                amperdani=-2.5;
                var Width=190;
                var widtH=260;
            }
            if(this.state.fotodiod===2){
                color_lampa='#FFFF00'
                amperdani=-5;
                var Width=195;
                var widtH=255;
            }
            VD ="M 236 1 l 38 0 l 0 65 l -38 0"
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
              <h2 className="spanH_slide1234">Інтерактивна демонстрація роботи фотодіода</h2>
          </div>
          <div className="slideBlock">
              <div className="demonstration">
                  <div className="demo1">
                      <span className="spanH4">Джерело змінної напруги</span>
                      <div className='slide4_amperdani'>
                          <span>{amperdani} мкА</span>
                      </div>
                       <img className='img_fanar' src={fanar}/>
                      <div className='slide4_lampa'>
                          <svg>
                              {/*<path d="M 120 90 l 15 10  l -15 10  l 10 15  l -15 -5 l -5 10  l -5 -10"*/}
                                    {/*fill="none" stroke="black" stroke-width="1" />*/}
                              <circle  r="15" cx="100" cy="100" fill={color_lampa}/>
                          </svg>

                      </div>
                      <div className="voltmetrV slide4_voltm">
                          <div>
                              <button className='button4'  onClick={(e)=>this.OpenBlock(e)}>^</button><span>{this.state.qw}V</span>
                          </div>
                      </div>

                      <div >
                          <button className='button4' onClick={(e)=>this.OpenFotoDiod(e)}>^</button><span>{this.state.fotodiod}</span>
                      </div>

                      <svg className='slide4_swg' width="400" height="250" viewBox="0 0 500 350">

                          <text x="55" y="125">-</text>):

                          <text x="55" y="175">+</text>
                          <path d="M 225 5 l 75 0 l 0 100 l -75 0"
                                fill="#FFFF00" stroke="none" stroke-width="3" />
                          <path d="M 150 5 l 75 0 l 0 100 l -75 0"
                                fill="#FFB6C1" stroke="none" stroke-width="3" />
                          <text x="220" y="125">&#916;х</text>

                          <text x="160" y="20">p</text>
                          <text x="280" y="20">n</text>
                          /*стрелки*/
                          <line x1="40" x2="30" y1="120" y2="115" stroke="#000000" stroke-width="2px"></line>
                          <line x1="40" x2="30" y1="120" y2="125" stroke="#000000" stroke-width="2px"></line>

                          <line x1="40" x2="30" y1="170" y2="165" stroke="#000000" stroke-width="2px"></line>
                          <line x1="40" x2="30" y1="170" y2="175" stroke="#000000" stroke-width="2px"></line>

                          <line x1="413" x2="423" y1="85" y2="90" stroke="#000000" stroke-width="2px"></line>
                          <line x1="413" x2="423" y1="85" y2="80" stroke="#000000" stroke-width="2px"></line>

                          <line x1="413" x2="423" y1="205" y2="200" stroke="#000000" stroke-width="2px"></line>
                          <line x1="413" x2="423" y1="205" y2="210" stroke="#000000" stroke-width="2px"></line>


                          /*лінії*/
                          <line x1="0" x2="40" y1="120" y2="120" stroke="#000000" stroke-width="2px"></line>
                          <line x1="0" x2="40" y1="170" y2="170" stroke="#000000" stroke-width="2px" ></line>

                          <line x1="410" x2="500" y1="85" y2="85" stroke="#000000" stroke-width="2px"></line>
                          <line x1="410" x2="500" y1="205" y2="205" stroke="#000000" stroke-width="2px"></line>

                          <line x1="410" x2="500" y1="85" y2="85" stroke="#000000" stroke-width="2px"></line>
                          <line x1="410" x2="500" y1="205" y2="205" stroke="#000000" stroke-width="2px"></line>

                          <line x1="500" x2="500" y1="85" y2="100" stroke="#000000" stroke-width="2px"></line>
                          <line x1="500" x2="500" y1="205" y2="190" stroke="#000000" stroke-width="2px"></line>
                          /*діод*/

                          <line x1="150" x2="300" y1="5" y2="5" stroke="#000000"></line>
                          <line x1="150" x2="150" y1="5" y2="105" stroke="#000000"></line>

                          <line x1="300" x2="300" y1="5" y2="105" stroke="#000000"></line>
                          <line x1="150" x2="300" y1="105" y2="105" stroke="#000000"></line>
                          <line x1="225" x2="225" y1="5" y2="105" stroke="#000000"></line>

                          <line x1={Width} x2={Width} y1="5" y2="105" stroke="#000000" stroke-dasharray="10"></line>
                          <line x1={widtH} x2={widtH} y1="5" y2="105" stroke="#000000" stroke-dasharray="10"></line>

                          /*транзистор*/
                          <line x1="384" x2="424" y1="105" y2="105" stroke="#000000"></line>
                          <line x1="384" x2="424" y1="185" y2="185" stroke="#000000"></line>
                          <line x1="384" x2="384" y1="105" y2="185" stroke="#000000"></line>
                          <line x1="424" x2="424" y1="105" y2="185" stroke="#000000"></line>


                          <circle  r="7" cx="46" cy="170" stroke="#000000" fill='white'/>
                          <circle  r="7" cx="46" cy="120" stroke="#000000" fill='white'/>


                          <circle  r="7.5" cx="404" cy="205" stroke="#000000" fill='white'/>
                          <circle  r="7.5" cx="404" cy="85" stroke="#000000" fill='white'/>


                          <line x1="40" x2="40" y1="118" y2="44" stroke="#000000"></line>
                          <line x1="52" x2="52" y1="118" y2="56" stroke="#000000"></line>

                          <line x1="40" x2="150" y1="44" y2="44" stroke="#000000"></line>
                          <line x1="52" x2="150" y1="56" y2="56" stroke="#000000"></line>

                          <line x1="300" x2="410" y1="44" y2="44" stroke="#000000"></line>
                          <line x1="300" x2="398" y1="56" y2="56" stroke="#000000"></line>



                          <line x1="52" x2="398" y1="234" y2="234" stroke="#000000"></line>
                          <line x1="40" x2="410" y1="246" y2="246" stroke="#000000"></line>


                          <line x1="52" x2="52" y1="234" y2="172" stroke="#000000"></line>
                          <line x1="40" x2="40" y1="246" y2="172" stroke="#000000"></line>


                          <line x1="398" x2="398" y1="56" y2="82" stroke="#000000"></line>
                          <line x1="410" x2="410" y1="44" y2="82" stroke="#000000"></line>

                          <line x1="398" x2="398" y1="90" y2="105" stroke="#000000"></line>
                          <line x1="410" x2="410" y1="90" y2='105' stroke="#000000"></line>




                          <line x1="398" x2="398" y1="185" y2="200" stroke="#000000"></line>
                          <line x1="410" x2="410" y1="185" y2="200" stroke="#000000"></line>


                          <line x1="398" x2="398" y1="210" y2="234" stroke="#000000"></line>
                          <line x1="410" x2="410" y1="210" y2="246" stroke="#000000"></line>













                          {(this.state.qw<=0)?(
                              <path id="motionPath" fill="none" stroke="#000000" strokeMiterlimit="100"
                                    d="M 46 120  l 0 -70 l 358 0 l 0 190 l -358 0 l 0 -75 "/>):( <path  id="motionPath" fill="none" stroke="#000000" strokeMiterlimit="100"
                                                                                                                            d="M 10 116 l 34 0 l 0 100 l 342 0 l 0 -70  l 0 -122 l -65 0"/>)
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
                      <div className="slide4_block_graph">
                          <div className="amperM slide4_amper">
                              <svg version="1.2" className="graph" aria-labelledby="title" role="img">
                                  <title id="title">Демо екран</title>
                                  <g className="grid x-grid" id="xGrid">
                                      <line x1="400" x2="400" y1="5" y2="130"></line>
                                  </g>
                                  <g className="grid y-grid" id="yGrid">
                                      <line x1="90" x2="450" y1="60" y2="60"></line>
                                  </g>
                                  <g className="labels x-labels">
                                      <text x="420" y="15">I,мкА</text>
                                      <text x="200" y="75">-5</text>
                                      <text x="240" y="75">-4</text>
                                      <text x="280" y="75">-3</text>
                                      <text x="320" y="75">-2</text>
                                      <text x="360" y="75">-1</text>
                                      <text x="410" y="75">0</text>
                                      <text x="440" y="75">U,B</text>


                                  </g>
                                  <g className="labels y-labels">

                                      <text x="415" y="100">-1</text>


                                  </g>
                                  <g className="data" data-setname="Our first data set">
                                      <circle cx="400" cy="60" data-value="7.2" r="4"></circle>
                                      <circle className={this.state.one?'none':'block'} cx="360" cy="80" data-value="8.1" r="4"></circle>
                                      <line className={this.state.one?'none':'block'} x1="400" x2="360" y1="60" y2="80" stroke="red"></line>

                                      <circle className={this.state.two?'none':'block'} cx="320" cy="85" data-value="7.7" r="4"></circle>
                                      <line className={this.state.two?'none':'block'} x1="360" x2="320" y1="80" y2="85" stroke="red"></line>

                                      <circle className={this.state.tree?'none':'block'} cx="280" cy="89" data-value="6.8" r="4"></circle>
                                      <line className={this.state.tree?'none':'block'} x1="320" x2="280" y1="85" y2="89" stroke="red"></line>

                                      <circle className={this.state.four?'none':'block'} cx="240" cy="93" data-value="6.7" r="4"></circle>
                                      <line className={this.state.four?'none':'block'} x1="280" x2="240" y1="89" y2="93" stroke="red"></line>

                                      <circle className={this.state.five?'none':'block'} cx="200" cy="97" data-value="6.7" r="4"></circle>
                                      <line className={this.state.five?'none':'block'} x1="240" x2="200" y1="93" y2="97" stroke="red"></line>


                                  </g>
                              </svg>
                          </div>
                          <div className="amperM">
                              <svg version="1.2" className="graph" aria-labelledby="title" role="img">
                                  <title id="title">Демо екран</title>
                                  <g className="grid x-grid" id="xGrid">
                                      <line x1="400" x2="400" y1="5" y2="130"></line>
                                  </g>
                                  <g className="grid y-grid" id="yGrid">
                                      <line x1="90" x2="450" y1="60" y2="60"></line>
                                  </g>
                                  <g className="labels x-labels">
                                      <text x="420" y="15">I,мкА</text>
                                      <text x="200" y="75">-5</text>
                                      <text x="240" y="75">-4</text>
                                      <text x="280" y="75">-3</text>
                                      <text x="320" y="75">-2</text>
                                      <text x="360" y="75">-1</text>
                                      <text x="410" y="75">0</text>
                                      <text x="440" y="75">U,B</text>


                                  </g>
                                  <g className="labels y-labels">

                                      <text x="415" y="100">-1</text>


                                  </g>

                                  <g className="data" data-setname="Our first data set">
                                      <circle cx="400" cy="60" data-value="7.2" r="4"></circle>
                                      <circle className={this.state.one1?'none':'block'} cx="360" cy="100" data-value="8.1" r="4"></circle>
                                      <line className={this.state.one1?'none':'block'} x1="400" x2="360" y1="60" y2="100" stroke="red"></line>

                                      <circle className={this.state.two1?'none':'block'} cx="320" cy="105" data-value="7.7" r="4"></circle>
                                      <line className={this.state.two1?'none':'block'} x1="360" x2="320" y1="100" y2="105" stroke="red"></line>

                                      <circle className={this.state.tree1?'none':'block'} cx="280" cy="109" data-value="6.8" r="4"></circle>
                                      <line className={this.state.tree1?'none':'block'} x1="320" x2="280" y1="105" y2="109" stroke="red"></line>

                                      <circle className={this.state.four1?'none':'block'} cx="240" cy="113" data-value="6.7" r="4"></circle>
                                      <line className={this.state.four1?'none':'block'} x1="280" x2="240" y1="109" y2="113" stroke="red"></line>

                                      <circle className={this.state.five1?'none':'block'} cx="200" cy="117" data-value="6.7" r="4"></circle>
                                      <line className={this.state.five1?'none':'block'} x1="240" x2="200" y1="113" y2="117" stroke="red"></line>


                                  </g>
                              </svg>
                          </div>
                          <div className="amperM">
                              <svg version="1.2" className="graph" aria-labelledby="title" role="img">
                                  <title id="title">Демо екран</title>
                                  <g className="grid x-grid" id="xGrid">
                                      <line x1="400" x2="400" y1="5" y2="130"></line>
                                  </g>
                                  <g className="grid y-grid" id="yGrid">
                                      <line x1="90" x2="450" y1="60" y2="60"></line>
                                  </g>
                                  <g className="labels x-labels">
                                      <text x="420" y="15">I,мкА</text>
                                      <text x="200" y="75">-5</text>
                                      <text x="240" y="75">-4</text>
                                      <text x="280" y="75">-3</text>
                                      <text x="320" y="75">-2</text>
                                      <text x="360" y="75">-1</text>
                                      <text x="410" y="75">0</text>
                                      <text x="440" y="75">U,B</text>


                                  </g>
                                  <g className="labels y-labels">

                                      <text x="415" y="100">-1</text>


                                  </g>
                                  <g className="data" data-setname="Our first data set">
                                      <circle cx="400" cy="60" data-value="7.2" r="4"></circle>
                                      <circle className={this.state.one2?'none':'block'} cx="360" cy="120" data-value="8.1" r="4"></circle>
                                      <line className={this.state.one2?'none':'block'} x1="400" x2="360" y1="60" y2="120" stroke="red"></line>

                                      <circle className={this.state.two2?'none':'block'} cx="320" cy="125" data-value="7.7" r="4"></circle>
                                      <line className={this.state.two2?'none':'block'} x1="360" x2="320" y1="120" y2="125" stroke="red"></line>

                                      <circle className={this.state.tree2?'none':'block'} cx="280" cy="129" data-value="6.8" r="4"></circle>
                                      <line className={this.state.tree2?'none':'block'} x1="320" x2="280" y1="125" y2="129" stroke="red"></line>

                                      <circle className={this.state.four2?'none':'block'} cx="240" cy="133" data-value="6.7" r="4"></circle>
                                      <line className={this.state.four2?'none':'block'} x1="280" x2="240" y1="129" y2="133" stroke="red"></line>

                                      <circle className={this.state.five2?'none':'block'} cx="200" cy="137" data-value="6.7" r="4"></circle>
                                      <line className={this.state.five2?'none':'block'} x1="240" x2="200" y1="133" y2="137" stroke="red"></line>


                                  </g>
                              </svg>
                          </div>
                      </div>
                  </div>

              </div>
              <Description text="Фотодіодом називається фотогальванічний приймач випромінювання, світлочутливий елемент який представляє собою структуру напівпровідникового діода без внутрішнього підсилення.
Принцип дії. При опроміненні напівпровідника світовим потоком Ф зростає фотогенерація особистих носіїв зарядів, що призводить до збільшення кількості як основних, так і неосновних носіїв зарядів. Фотогенерація – це явище фотоефекту (перехід електронів у зону провідності за рахунок поглинання кванта падаючого світла з довжиною хвилі λ).
У даному випадку діод включений у запірному напрямку, бо фотогенерація в значній мірі буде впливати на зворотній струм, так як не основних носіїв зарядів значно менше, ніж основних.
" />

          </div>
      </div>
    )
  }
}


export default Slide4
