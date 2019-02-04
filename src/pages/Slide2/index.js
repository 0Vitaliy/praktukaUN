import React, {Component} from 'react'
import Description from "../../components/Description";
import '../../App.css'
import './style.css'

class Slide2 extends Component{
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
        this.setState({
            qw: this.state.value[this.state.i],
            i:this.state.i+1
        })
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
        console.log(this.state.qw);
        if(mod===10) {

            var n=2;
            var run =15 + 's';
            var runX =(mod / n)*1.1 + 's';
            var runY =(mod / n)*1.2 + 's';
            var runK=(mod / n)*1.3 + 's';
            var runM=(mod / n)*1.4 + 's';
            console.log(runX);
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
                    <h2 className="spanH_slide1234">Інтерактивна демонстрація дво-напів-періодного випрямлення змінного електричного струму.
                    </h2>
                </div>
                <div className="slideBlock">
                    <div className="demonstration">
                        <div className="demo1">
                            <span className="spanH2">Джерело змінної напруги</span>
                            <div className="voltmetrV slide2_voltm">
                                <div>
                                    <button  onClick={(e)=>this.OpenBlock(e)}>^</button><span>{this.state.qw}V</span>
                                </div>
                            </div>

                            <svg className='sxema2' width="400" height="250" viewBox="0 0 500 350">
                                {(this.state.qw>=0)?(
                                        <text x="55" y="200">+</text>):
                                    (<text x="55" y="200">-</text>)
                                }
                                {(this.state.qw>=0)?(
                                        <text x="55" y="150">-</text>):
                                    ( <text x="55" y="150">+</text>)
                                }

                                <circle  r="7" cx="46" cy="193" stroke="#000000" fill='white'/>
                                <circle  r="7" cx="46" cy="148" stroke="#000000" fill='white'/>

                                <circle  r="7" cx="437" cy="193" stroke="#000000" fill='white'/>
                                <circle  r="7" cx="437" cy="148" stroke="#000000" fill='white'/>


                                /*лінії*/
                                <line x1="0" x2="40" y1="148" y2="148" stroke="#000000" stroke-width="2px"></line>
                                <line x1="0" x2="40" y1="195" y2="195" stroke="#000000" stroke-width="2px" ></line>

                                <line x1="445" x2="500" y1="148" y2="148" stroke="#000000" stroke-width="2px"></line>
                                <line x1="445" x2="500" y1="195" y2="195" stroke="#000000" stroke-width="2px"></line>

                                /*стрелки*/
                                <line x1="40" x2="30" y1="148" y2="143" stroke="#000000" stroke-width="2px"></line>
                                <line x1="40" x2="30" y1="148" y2="153" stroke="#000000" stroke-width="2px"></line>

                                <line x1="40" x2="30" y1="195" y2="190" stroke="#000000" stroke-width="2px"></line>
                                <line x1="40" x2="30" y1="195" y2="200" stroke="#000000" stroke-width="2px"></line>

                                <line x1="445" x2="455" y1="148" y2="143" stroke="#000000" stroke-width="2px"></line>
                                <line x1="445" x2="455" y1="148" y2="153" stroke="#000000" stroke-width="2px"></line>

                                <line x1="445" x2="455" y1="195" y2="190" stroke="#000000" stroke-width="2px"></line>
                                <line x1="445" x2="455" y1="195" y2="200" stroke="#000000" stroke-width="2px"></line>





                                <line x1="40" x2="40" y1="144" y2="80" stroke="#000000"></line>
                                <line x1="52" x2="52" y1="144" y2="92" stroke="#000000"></line>

                                <line x1="52" x2="193" y1="92" y2="92" stroke="#000000"></line>
                                <line x1="40" x2="193" y1="80" y2="80" stroke="#000000"></line>

                                /*квадрат діодів*/
                                <line x1="0" x2="538" y1="86" y2="86" stroke="#000000"></line>
                                <line x1="240" x2="240" y1="0" y2="376" stroke="#000000"></line>

                                <line x1="200" x2="240" y1="86" y2="126" stroke="#000000"></line>
                                <line x1="240" x2="280" y1="126" y2="86" stroke="#000000"></line>
                                <line x1="280" x2="240" y1="86" y2="46" stroke="#000000"></line>
                                <line x1="200" x2="240" y1="86" y2="46" stroke="#000000"></line>

                                <line x1="191" x2="234" y1="81" y2="36" stroke="#000000"></line>

                                <line x1="245" x2="290" y1="36" y2="81" stroke="#000000"></line>
                                <line x1="290" x2="245" y1="91" y2="136" stroke="#000000"></line>

                                <line x1="191" x2="234" y1="91" y2="136" stroke="#000000"></line>

                                 /*діоди в квадраті*/
                                <line x1="221" x2="201" y1="93" y2="117" stroke="#000000"></line>
                                <line x1="235" x2="213" y1="105" y2="131" stroke="#000000"></line>
                                <line x1="213" x2="213" y1="105" y2="131" stroke="#000000"></line>
                                <line x1="213" x2="235" y1="105" y2="105" stroke="#000000"></line>


                                <line x1="266" x2="246" y1="43" y2="67" stroke="#000000"></line>
                                <line x1="276" x2="256" y1="53" y2="77" stroke="#000000"></line>
                                <line x1="256" x2="256" y1="77" y2="53" stroke="#000000"></line>
                                <line x1="256" x2="275" y1="53" y2="53" stroke="#000000"></line>

                                <line x1="216" x2="236" y1="43" y2="63" stroke="#000000"></line>
                                <line x1="206" x2="226" y1="53" y2="73" stroke="#000000"></line>

                                <line x1="206" x2="226" y1="53" y2="53" stroke="#000000"></line>
                                <line x1="226" x2="226" y1="73" y2="53" stroke="#000000"></line>


                                <line x1="261" x2="281" y1="93" y2="113" stroke="#000000"></line>
                                <line x1="251" x2="271" y1="103" y2="123" stroke="#000000"></line>

                                <line x1="251" x2="271" y1="103" y2="103" stroke="#000000"></line>
                                <line x1="271" x2="271" y1="123" y2="103" stroke="#000000"></line>



                                /*транзистор*/
                                <line x1="422" x2="454" y1="37" y2="37" stroke="#000000"></line>
                                <line x1="422" x2="422" y1="37" y2="87" stroke="#000000"></line>
                                <line x1="454" x2="454" y1="37" y2="87" stroke="#000000"></line>
                                <line x1="422" x2="454" y1="87" y2="87" stroke="#000000"></line>












                                <line x1="234" x2="234" y1="5" y2="38" stroke="#000000"></line>
                                <line x1="234" x2="443" y1="5" y2="5" stroke="#000000"></line>

                                <line x1="246" x2="431" y1="17" y2="17" stroke="#000000"></line>
                                <line x1="246" x2="246" y1="35" y2="17" stroke="#000000"></line>

                                <line x1="443" x2="443" y1="5" y2="37" stroke="#000000"></line>
                                <line x1="431" x2="431" y1="17" y2="37" stroke="#000000"></line>


                                <line x1="443" x2="443" y1="87" y2="144" stroke="#000000"></line>
                                <line x1="431" x2="431" y1="87" y2="144" stroke="#000000"></line>


                                <line x1="443" x2="443" y1="197" y2="298" stroke="#000000"></line>
                                <line x1="431" x2="431" y1="197" y2="286" stroke="#000000"></line>

                                /*нижня*/
                                <line x1="443" x2="232" y1="298" y2="298" stroke="#000000"></line>
                                <line x1="431" x2="246" y1="286" y2="286" stroke="#000000"></line>


                                <line x1="246" x2="246" y1="286" y2="135" stroke="#000000"></line>
                                <line x1="232" x2="232" y1="298" y2="135" stroke="#000000"></line>




                                <line x1="288" x2="330" y1="92" y2="92" stroke="#000000"></line>
                                <line x1="288" x2="342" y1="80" y2="80" stroke="#000000"></line>




                                <line x1="330" x2="330" y1="92" y2="252" stroke="#000000"></line>
                                <line x1="342" x2="342" y1="80" y2="266" stroke="#000000"></line>

                                <line x1="330" x2="52" y1="252" y2="252" stroke="#000000"></line>
                                <line x1="342" x2="40" y1="266" y2="266" stroke="#000000"></line>


                                <line x1="40" x2="40" y1="266" y2="197" stroke="#000000"></line>
                                <line x1="52" x2="52" y1="252" y2="197" stroke="#000000"></line>








                                {(this.state.qw>=0)?(
                                    <path id="motionPath" fill="none" stroke="#000000" strokeMiterlimit="100"
                                          d="M 46 148 l 0 -62  l 150 0  l 40 -44 l 0 -32 l 201 0 l 0 282 l -198 0 l 0 -158 l 47 -47 l 50 0 l 0 172 l -290 0 l 0 -80 "/>):( <path  id="motionPath" fill="none" stroke="#000000" strokeMiterlimit="100"
                                                                                                                                                         d="M 46 193 l 0 65 l 290 0 l 0 -173 l -50 0 l -50 -50 l 0 -24 l 200 0  l 0 280 l -198 0 l 0 -160 l -55 -45 l -138 0 l 0 50 "/>)
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
                                    begin="0s"
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

                            <div className="amperM slide2_amper">
                                <svg version="1.2" className="graph slide2_graph" aria-labelledby="title" role="img">
                                    <title id="title">Демо екран</title>
                                    <g className="grid x-grid" id="xGrid">
                                        <line x1="90" x2="90" y1="5" y2="230"></line>
                                    </g>
                                    <g className="grid y-grid" id="yGrid">
                                        <line x1="90" x2="550" y1="170" y2="170"></line>
                                    </g>
                                    <g className="labels x-labels">
                                        <text x="120" y="190">1</text>
                                        <text x="150" y="190">2</text>
                                        <text x="180" y="190">3</text>
                                        <text x="210" y="190">4</text>
                                        <text x="240" y="190">5</text>
                                        <text x="270" y="190">6</text>
                                        <text x="300" y="190">7</text>
                                        <text x="330" y="190">8</text>
                                        <text x="360" y="190">9</text>
                                        <text x="390" y="190">10</text>
                                        <text x="420" y="190">11</text>
                                        <text x="450" y="190">12</text>
                                        <text x="480" y="190">13</text>

                                    </g>
                                    <g className="labels y-labels">
                                        <text x="320" y="25">Демонстраційний екран 2</text>
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
                                        <circle className={this.state.five?'none':'block'} cx="240" cy='110' data-value="6.7" r="4"></circle>
                                        <line className={this.state.five?'none':'block'} x1="210" x2="240" y1="70" y2="110" stroke="red"></line>
                                        <circle className={this.state.six?'none':'block'} cx="270" cy="170" data-value="6.7" r="4"></circle>
                                        <line className={this.state.six?'none':'block'} x1="240" x2="270" y1="110" y2="170" stroke="red"></line>
                                        <circle className={this.state.seven?'none':'block'} cx="300" cy="110" data-value="6.7" r="4"></circle>
                                        <line className={this.state.seven?'none':'block'} x1="270" x2="300" y1="170" y2="110" stroke="red"></line>
                                        <circle className={this.state.eight?'none':'block'} cx="330" cy="70" data-value="6.7" r="4"></circle>
                                        <line className={this.state.eight?'none':'block'} x1="300" x2="330" y1="110" y2="70" stroke="red"></line>
                                        <circle className={this.state.nine?'none':'block'} cx="360" cy="50" data-value="6.7" r="4"></circle>
                                        <line className={this.state.nine?'none':'block'} x1="330" x2="360" y1="70" y2="50" stroke="red"></line>
                                        <circle className={this.state.ten?'none':'block'} cx="390" cy="70" data-value="6.7" r="4"></circle>
                                        <line className={this.state.ten?'none':'block'} x1="360" x2="390" y1="50" y2="70" stroke="red"></line>

                                        <circle className={this.state.eleven?'none':'block'} cx="420" cy="110" data-value="6.7" r="4"></circle>
                                        <line className={this.state.eleven?'none':'block'} x1="390" x2="420" y1="70" y2="110" stroke="red"></line>

                                        <circle className={this.state.twelve?'none':'block'} cx="450" cy="170" data-value="6.7" r="4"></circle>
                                        <line className={this.state.twelve?'none':'block'} x1="420" x2="450" y1="110" y2="170" stroke="red"></line>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="sinSlide1 slide2_sin">
                            <svg version="1.2" className="graph slide2_sin_graph" aria-labelledby="title" role="img">
                                <title id="title">Демо екран</title>
                                <g className="grid x-grid" id="xGrid">
                                    <line x1="90" x2="90" y1="5" y2="235"></line>
                                </g>
                                <g className="grid y-grid" id="yGrid">
                                    <line x1="90" x2="500" y1="120" y2="120"></line>
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
                                    <text x="370" y="15">Демонстраційний екран 1</text>
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
Більш ефективно випрямлення змінної напруги відбувається у схемі з чотирма діодами у містковій схемі.
Протягом позитивного напів-періоду зміни вхідної напруги  Ua(+) діоди VD1 і VD4 відкриті, а VD2 i VD3 – закриті. Струм буде проходити шляхом: верхня гілка (+), діод VD1 , навантаження, діод VD4, нижня гілка (-).
Протягом негативного напів- періоду  зміни вхідної напруги VD1 і VD4 закриті, а VD2 i VD3 – відкриті. Тому шлях струму  інший. Тобто  за час тривалістю двох напів-періодів зміни вхідної напруги вихідний струм через навантаження буде проходити, але мати один і той же знак.

"slide1_description_head='Опис установки симуляційної моделі:'
                                 slide1_description_span1='1.Кероване джерело змінного струму.'
                                 slide1_description_span2='2.Місткова схема включення чотирьох діодів.'
                                 slide1_description_span3='3.Амперметр для вимірювання вихідного струму.'
                                 slide1_description_span4='4.Провідники з рухомим електронами.
'
                                 />

                </div>
            </div>
        )
    }
}


export default Slide2
