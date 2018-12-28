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
            var run = mod / n + 's';
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
                    <h2>Інтерактивна демонстрація напів-періодного "" змінного електричного струму</h2>
                </div>
                <div className="slideBlock">
                    <div className="demonstration">
                        <div className="demo1">
                            <div className="voltmetr">
                                <button  onClick={(e)=>this.OpenBlock(e)}>^</button><span>{this.state.qw}V</span>
                            </div>

                            <svg className='sxema2' width="400" height="250" viewBox="0 0 500 350">
                                <line x1="10" x2="40" y1="100" y2="100" stroke="#000000"></line>
                                <line x1="10" x2="48" y1="108" y2="108" stroke="#000000"></line>

                                <line x1="40" x2="40" y1="100" y2="70" stroke="#000000"></line>
                                <line x1="48" x2="48" y1="108" y2="78" stroke="#000000"></line>

                                <line x1="48" x2="200" y1="78" y2="79" stroke="#000000"></line>


                                <line x1="208" x2="238" y1="79" y2="128" stroke="#000000"></line>
                                <line x1="238" x2="274" y1="128" y2="79" stroke="#000000"></line>

                                <line x1="274" x2="242" y1="79" y2="37" stroke="#000000"></line>
                                <line x1="242" x2="208" y1="37" y2="79" stroke="#000000"></line>






                                <line x1="40" x2="200" y1="70" y2="70" stroke="#000000"></line>


                                <line x1="200" x2="240" y1="70" y2="20" stroke="#000000"></line>
                                <line x1="240" x2="240" y1="20" y2="5" stroke="#000000"></line>
                                <line x1="240" x2="443" y1="5" y2="5" stroke="#000000"></line>

                                <line x1="245" x2="435" y1="10" y2="10" stroke="#000000"></line>
                                <line x1="245" x2="285" y1="20" y2="70" stroke="#000000"></line>
                                <line x1="245" x2="245" y1="20" y2="10" stroke="#000000"></line>

                                <line x1="443" x2="443" y1="5" y2="350" stroke="#000000"></line>
                                <line x1="435" x2="435" y1="10" y2="342" stroke="#000000"></line>

                                <line x1="443" x2="232" y1="350" y2="350" stroke="#000000"></line>
                                <line x1="435" x2="240" y1="342" y2="342" stroke="#000000"></line>


                                <line x1="240" x2="240" y1="342" y2="140" stroke="#000000"></line>
                                <line x1="232" x2="232" y1="350" y2="140" stroke="#000000"></line>

                                <line x1="232" x2="200" y1="140" y2="80" stroke="#000000"></line>
                                <line x1="240" x2="285" y1="140" y2="80" stroke="#000000"></line>

                                <line x1="285" x2="330" y1="80" y2="80" stroke="#000000"></line>
                                <line x1="285" x2="338" y1="71" y2="71" stroke="#000000"></line>

                                <line x1="330" x2="330" y1="80" y2="272" stroke="#000000"></line>
                                <line x1="338" x2="338" y1="71" y2="280" stroke="#000000"></line>

                                <line x1="330" x2="48" y1="272" y2="272" stroke="#000000"></line>
                                <line x1="338" x2="40" y1="280" y2="280" stroke="#000000"></line>


                                <line x1="40" x2="40" y1="280" y2="170" stroke="#000000"></line>
                                <line x1="48" x2="48" y1="272" y2="162" stroke="#000000"></line>

                                <line x1="40" x2="10" y1="170" y2="170" stroke="#000000"></line>
                                <line x1="48" x2="10" y1="162" y2="162" stroke="#000000"></line>






                                {(this.state.qw>=0)?(
                                    <path id="motionPath" fill="none" stroke="#000000" strokeMiterlimit="100"
                                          d="M 10 104 l 34 0 l 0 -30  l 160 0  l 40 -44 l 0 -22 l 195 0 l 0 338 l -203 0 l 0 -204 l 50 -67 l 47 0 l 0 200 l -290 0 l 0 -110 l -40 0"/>):( <path  id="motionPath" fill="none" stroke="#000000" strokeMiterlimit="100"
                                                                                                                                                         d="M 10 166 l 34 0 l 0 110 l 290 0 l 0 -200 l -50 0 l -40 -55 l 0 -14 l 195 0  l 0 338 l -203 0 l 0 -204 l -40 -67 l -155 0 l 0 30 l -34 0"/>)
                                }


                                <circle id="circle" r="3" cx="0" cy="0" fill="tomato"/>
                                <circle id="circlex" r="3" cx="0" cy="0" fill="tomato" />
                                <circle id="circley" r="3" cx="0" cy="0" fill="tomato" />
                                <circle id="circlek" r="3" cx="0" cy="0" fill="tomato" />
                                <circle  id="circlez" r="3" cx="0" cy="0" fill="tomato" />
                                <circle  id="circlem" r="3" cx="0" cy="0" fill="tomato" />


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

                            <div className="amperM">
                                <svg version="1.2" className="graph" aria-labelledby="title" role="img">
                                    <title id="title">Демо екран</title>
                                    <g className="grid x-grid" id="xGrid">
                                        <line x1="90" x2="90" y1="5" y2="280"></line>
                                    </g>
                                    <g className="grid y-grid" id="yGrid">
                                        <line x1="90" x2="650" y1="190" y2="190"></line>
                                    </g>
                                    <g className="labels x-labels">
                                        <text x="130" y="210">1</text>
                                        <text x="170" y="210">2</text>
                                        <text x="210" y="210">3</text>
                                        <text x="250" y="210">4</text>
                                        <text x="290" y="210">5</text>
                                        <text x="330" y="210">6</text>
                                        <text x="370" y="210">7</text>
                                        <text x="410" y="210">8</text>
                                        <text x="450" y="210">9</text>
                                        <text x="490" y="210">10</text>
                                        <text x="530" y="210">11</text>
                                        <text x="570" y="210">12</text>
                                        <text x="610" y="210">13</text>

                                    </g>
                                    <g className="labels y-labels">
                                        <text x="80" y="46">12</text>
                                        <text x="80" y="70">10</text>
                                        <text x="80" y="118">6</text>
                                        <text x="80" y="190">0</text>
                                        <text x="80" y="250">-4</text>


                                    </g>
                                    <g className="data" data-setname="Our first data set">
                                        <circle cx="90" cy="190" data-value="7.2" r="4"></circle>
                                        <circle className={this.state.one?'none':'block'} cx="130" cy="118" data-value="8.1" r="4"></circle>
                                        <line className={this.state.one?'none':'block'} x1="90" x2="130" y1="190" y2="118" stroke="red"></line>
                                        <circle className={this.state.two?'none':'block'} cx="170" cy="70" data-value="7.7" r="4"></circle>
                                        <line className={this.state.two?'none':'block'} x1="130" x2="170" y1="118" y2="70" stroke="red"></line>
                                        <circle className={this.state.tree?'none':'block'} cx="210" cy="46" data-value="6.8" r="4"></circle>
                                        <line className={this.state.tree?'none':'block'} x1="170" x2="210" y1="70" y2="46" stroke="red"></line>
                                        <circle className={this.state.four?'none':'block'} cx="250" cy="70" data-value="6.7" r="4"></circle>
                                        <line className={this.state.four?'none':'block'} x1="210" x2="250" y1="46" y2="70" stroke="red"></line>
                                        <circle className={this.state.five?'none':'block'} cx="290" cy="118" data-value="6.7" r="4"></circle>
                                        <line className={this.state.five?'none':'block'} x1="250" x2="290" y1="70" y2="118" stroke="red"></line>
                                        <circle className={this.state.six?'none':'block'} cx="330" cy="190" data-value="6.7" r="4"></circle>
                                        <line className={this.state.six?'none':'block'} x1="290" x2="330" y1="118" y2="190" stroke="red"></line>

                                        <circle className={this.state.seven?'none':'block'} cx="370" cy="118" data-value="6.7" r="4"></circle>
                                        <line className={this.state.seven?'none':'block'} x1="330" x2="370" y1="190" y2="118" stroke="red"></line>

                                        <circle className={this.state.eight?'none':'block'} cx="410" cy="70" data-value="6.7" r="4"></circle>
                                        <line className={this.state.eight?'none':'block'} x1="370" x2="410" y1="118" y2="70" stroke="red"></line>

                                        <circle className={this.state.nine?'none':'block'} cx="450" cy="46" data-value="6.7" r="4"></circle>
                                        <line className={this.state.nine?'none':'block'} x1="410" x2="450" y1="70" y2="46" stroke="red"></line>

                                        <circle className={this.state.ten?'none':'block'} cx="490" cy="70" data-value="6.7" r="4"></circle>
                                        <line className={this.state.ten?'none':'block'} x1="450" x2="490" y1="46" y2="70" stroke="red"></line>

                                        <circle className={this.state.eleven?'none':'block'} cx="530" cy="118" data-value="6.7" r="4"></circle>
                                        <line className={this.state.eleven?'none':'block'} x1="490" x2="530" y1="70" y2="118" stroke="red"></line>

                                        <circle className={this.state.twelve?'none':'block'} cx="570" cy="190" data-value="6.7" r="4"></circle>
                                        <line className={this.state.twelve?'none':'block'} x1="530" x2="570" y1="118" y2="190" stroke="red"></line>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="sinSlide1">
                            <svg version="1.2" className="graph" aria-labelledby="title" role="img">
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
                    <Description text="op hvkjdghkj hfgkjdsh gjkhfgsjdhg kk lsdjgkj hdkds kkshd gjs dghh"/>

                </div>
            </div>
        )
    }
}


export default Slide2
