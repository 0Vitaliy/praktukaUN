import React, {Component} from 'react'
import Description from "../../components/Description";
import '../../App.css'


class Slide3 extends Component{
    state={
        value:[-1,-2,-3,-4,-5],
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
        if(this.state.qw===-1 && this.state.i===1) {this.setState({two: false})}
        if(this.state.qw===-2 && this.state.i===2) {this.setState({tree: false})}
        if(this.state.qw===-3 && this.state.i===3) {this.setState({four: false})}
        if(this.state.qw===-4 && this.state.i===4) {this.setState({five: false})}
        if(this.state.qw===-5 && this.state.i===5) {this.setState({six: false})}

    }
    render(){
        var mod=Math.abs(this.state.qw)
        // console.log(this.state.qw);
        if(mod===0) {
            var Width=250;
            var widtH=260;
        }
        if(mod===1) {
            var Width=250;
            var widtH=260;
            var n=2;
            var run = mod / n + 's';
            var runX =(mod / n)*1.1 + 's';
            var runY =(mod / n)*1.2 + 's';
            var runK=(mod / n)*1.3 + 's';
            var runM=(mod / n)*1.4 + 's';
            // console.log(runX);
        }
        if(mod===2) {
            var Width=247;
            var widtH=263;
            n=7;
            run = mod / n + 's';
            runX =(mod / n)*1.2 + 's';
            runY =(mod / n)*1.3 + 's';
            runK=(mod / n)*1.4 + 's';
            runM=(mod / n)*1.7 + 's';
        }
        if(mod===3) {
            var Width=244;
            var widtH=266;
            n=10;
            run = mod / n + 's';
            runX =(mod / n)*1.3 + 's';
            runY =(mod / n)*1.4 + 's';
            runK=(mod / n)*1.5+ 's';
            runM=(mod / n)*1.6 + 's';
        }
        if(mod===4) {
            var Width=241;
            var widtH=269;
            n=10;
            run = mod / n + 's';
            runX =(mod / n)*1.3 + 's';
            runY =(mod / n)*1.4 + 's';
            runK=(mod / n)*1.5+ 's';
            runM=(mod / n)*1.6 + 's';
        }
        if(mod===5) {
            var Width=235;
            var widtH=275;
            n=10;
            run = mod / n + 's';
            runX =(mod / n)*1.3 + 's';
            runY =(mod / n)*1.4 + 's';
            runK=(mod / n)*1.5+ 's';
            runM=(mod / n)*1.6 + 's';
        }

        return(
            <div>
                <div>
                    <h2>Інтерактивна демонстрація роботи варікапу.</h2>
                </div>
                <div className="slideBlock">
                    <div className="demonstration">
                        <div className="demo1">
                            <div className="voltmetrV">
                                <button  onClick={(e)=>this.OpenBlock(e)}>^</button><span>{this.state.qw}V</span>
                            </div>

                            <svg width="400" height="250" viewBox="0 0 500 350">
                                {(this.state.qw>=0)?(
                                        <text x="10" y="140">+</text>):
                                    (<text x="10" y="140">-</text>)
                                }
                                {(this.state.qw>=0)?(
                                        <text x="10" y="60">-</text>):
                                    ( <text x="10" y="60">+</text>)
                                }


                                <line x1="10" x2="40" y1="70" y2="70" stroke="#000000"></line>
                                <line x1="40" x2="40" y1="70" y2="20" stroke="#000000"></line>
                                <line x1="40" x2="210" y1="20" y2="20" stroke="#000000"></line>
                                <line x1="300" x2="300" y1="5" y2="35" stroke="#000000"></line>
                                {/*<line x1="300" x2="330" y1="5" y2="20" stroke="#000000"></line>*/}
                                {/*<line x1="300" x2="330" y1="35" y2="20" stroke="#000000"></line>*/}
                                {/*<line x1="330" x2="330" y1="5" y2="35" stroke="#000000"></line>*/}
                                <line x1="300" x2="390" y1="20" y2="20" stroke="#000000"></line>

                                <line x1="210" x2="300" y1="1" y2="1" stroke="#000000"></line>
                                <line x1="210" x2="210" y1="1" y2="65" stroke="#000000"></line>

                                <line x1={Width} x2={Width} y1="1" y2="65" stroke="#000000" stroke-dasharray="10"></line>
                                <line x1={widtH} x2={widtH} y1="1" y2="65" stroke="#000000" stroke-dasharray="10"></line>


                                <line x1="300" x2="300" y1="1" y2="65" stroke="#000000"></line>
                                <line x1="210" x2="300" y1="65" y2="65" stroke="#000000"></line>

                                <line x1="390" x2="390" y1="20" y2="120" stroke="#000000"></line>
                                {/*<line x1="390" x2="420" y1="120" y2="120" stroke="#000000"></line>*/}
                                {/*<line x1="420" x2="420" y1="120" y2="150" stroke="#000000"></line>*/}
                                {/*<line x1="420" x2="390" y1="150" y2="150" stroke="#000000"></line>*/}
                                <line x1="390" x2="390" y1="150" y2="220" stroke="#000000"></line>
                                <line x1="390" x2="330" y1="220" y2="220" stroke="#000000"></line>
                                <line x1="330" x2="330" y1="200" y2="240" stroke="#000000"></line>
                                <line x1="270" x2="330" y1="200" y2="200" stroke="#000000"></line>
                                <line x1="270" x2="330" y1="240" y2="240" stroke="#000000"></line>
                                <line x1="270" x2="270" y1="200" y2="240" stroke="#000000"></line>
                                <line x1="270" x2="40" y1="220" y2="220" stroke="#000000"></line>
                                <line x1="40" x2="40" y1="220" y2="120" stroke="#000000"></line>
                                <line x1="40" x2="10" y1="120" y2="120" stroke="#000000"></line>

                                <line x1="10" x2="48" y1="78" y2="78" stroke="#000000"></line>
                                <line x1="48" x2="48" y1="78" y2="28" stroke="#000000"></line>
                                <line x1="48" x2="210" y1="28" y2="28" stroke="#000000"></line>
                                <line x1="300" x2="300" y1="5" y2="35" stroke="#000000"></line>
                                {/*<line x1="300" x2="330" y1="5" y2="20" stroke="#000000"></line>*/}
                                {/*<line x1="300" x2="330" y1="35" y2="20" stroke="#000000"></line>*/}
                                {/*<line x1="330" x2="330" y1="5" y2="35" stroke="#000000"></line>*/}
                                <line x1="300" x2="382" y1="28" y2="28" stroke="#000000"></line>
                                <line x1="382" x2="382" y1="28" y2="128" stroke="#000000"></line>
                                {/*<line x1="382" x2="412" y1="128" y2="128" stroke="#000000"></line>*/}
                                {/*<line x1="412" x2="412" y1="128" y2="142" stroke="#000000"></line>*/}
                                {/*<line x1="412" x2="382" y1="142" y2="142" stroke="#000000"></line>*/}
                                <line x1="382" x2="382" y1="142" y2="212" stroke="#000000"></line>
                                <line x1="382" x2="330" y1="212" y2="212" stroke="#000000"></line>

                                {/*<line x1="330" x2="330" y1="200" y2="240" stroke="#000000"></line>*/}
                                {/*<line x1="270" x2="330" y1="200" y2="200" stroke="#000000"></line>*/}
                                {/*<line x1="270" x2="330" y1="240" y2="240" stroke="#000000"></line>*/}
                                <line x1="270" x2="270" y1="200" y2="240" stroke="#000000"></line>

                                <line x1="270" x2="48" y1="212" y2="212" stroke="#000000"></line>

                                <line x1="48" x2="48" y1="212" y2="112" stroke="#000000"></line>
                                <line x1="48" x2="10" y1="112" y2="112" stroke="#000000"></line>


                                {(this.state.qw>=0)?(
                                    <path id="motionPath" fill="none" stroke="#000000" strokeMiterlimit="100"
                                          d="M 10 74 l 34 0 l 0 -50 l 342 0 l 0 92 l 0 100 l -342 0 l 0 -100 l -34 0"/>):( <path  id="motionPath" fill="none" stroke="#000000" strokeMiterlimit="100"
                                                                                                                                                         d="M 10 116 l 34 0 l 0 100 l 342 0 l 0 -70  l 0 -122 l -65 0"/>)
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
                              <div>
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

                                        <text x="200" y="75">-5</text>
                                        <text x="240" y="75">-4</text>
                                        <text x="280" y="75">-3</text>
                                        <text x="320" y="75">-2</text>
                                        <text x="360" y="75">-1</text>
                                        <text x="410" y="75">0</text>


                                    </g>
                                    <g className="labels y-labels">

                                        <text x="415" y="110">-4</text>


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
                                              <line x1="400" x2="400" y1="5" y2="140"></line>
                                          </g>
                                          <g className="grid y-grid" id="yGrid">
                                              <line x1="90" x2="450" y1="130" y2="130"></line>
                                          </g>
                                          <g className="labels x-labels">

                                              <text x="200" y="145">-5</text>
                                              <text x="240" y="145">-4</text>
                                              <text x="280" y="145">-3</text>
                                              <text x="320" y="145">-2</text>
                                              <text x="360" y="145">-1</text>
                                              <text x="410" y="145">0</text>


                                          </g>
                                          <g className="labels y-labels">
                                              <text x="420" y="25">50</text>
                                              <text x="420" y="49">40</text>
                                              <text x="420" y="73">30</text>
                                              <text x="420" y="97">20</text>
                                              <text x="420" y="121">10</text>




                                          </g>
                                          <g className="data" data-setname="Our first data set">
                                              <circle cx="400" cy="130" data-value="7.2" r="4"></circle>
                                              <circle className={this.state.one?'none':'block'} cx="360" cy="125" data-value="8.1" r="4"></circle>
                                              <line className={this.state.one?'none':'block'} x1="400" x2="360" y1="130" y2="125" stroke="red"></line>

                                              <circle className={this.state.two?'none':'block'} cx="320" cy="120" data-value="7.7" r="4"></circle>
                                              <line className={this.state.two?'none':'block'} x1="360" x2="320" y1="125" y2="120" stroke="red"></line>

                                              <circle className={this.state.tree?'none':'block'} cx="280" cy="110" data-value="6.8" r="4"></circle>
                                              <line className={this.state.tree?'none':'block'} x1="320" x2="280" y1="120" y2="110" stroke="red"></line>

                                              <circle className={this.state.four?'none':'block'} cx="240" cy="85" data-value="6.7" r="4"></circle>
                                              <line className={this.state.four?'none':'block'} x1="280" x2="240" y1="110" y2="85" stroke="red"></line>

                                              <circle className={this.state.five?'none':'block'} cx="200" cy="20" data-value="6.7" r="4"></circle>
                                              <line className={this.state.five?'none':'block'} x1="240" x2="200" y1="85" y2="20" stroke="red"></line>


                                          </g>
                                      </svg>
                                  </div>
                                  <div className="amperM">
                                      <svg version="1.2" className="graph" aria-labelledby="title" role="img">
                                          <title id="title">Демо екран</title>
                                          <g className="grid x-grid" id="xGrid">
                                              <line x1="400" x2="400" y1="5" y2="180"></line>
                                          </g>
                                          <g className="grid y-grid" id="yGrid">
                                              <line x1="90" x2="450" y1="170" y2="170"></line>
                                          </g>
                                          <g className="labels x-labels">

                                              <text x="200" y="185">-5</text>
                                              <text x="240" y="185">-4</text>
                                              <text x="280" y="185">-3</text>
                                              <text x="320" y="185">-2</text>
                                              <text x="360" y="185">-1</text>
                                              <text x="410" y="185">0</text>


                                          </g>
                                          <g className="labels y-labels">

                                              <text x="435" y="30">2400</text>
                                              <text x="435" y="110">1200</text>


                                          </g>
                                          <g className="data" data-setname="Our first data set">
                                              <circle className={this.state.one?'none':'block'} cx="400" cy="30" data-value="7.2" r="4"></circle>
                                              <circle className={this.state.one?'none':'block'} cx="360" cy="110" data-value="8.1" r="4"></circle>
                                              <line className={this.state.one?'none':'block'} x1="400" x2="360" y1="30" y2="110" stroke="red"></line>

                                              <circle className={this.state.two?'none':'block'} cx="320" cy="130" data-value="7.7" r="4"></circle>
                                              <line className={this.state.two?'none':'block'} x1="360" x2="320" y1="110" y2="130" stroke="red"></line>

                                              <circle className={this.state.tree?'none':'block'} cx="280" cy="140" data-value="6.8" r="4"></circle>
                                              <line className={this.state.tree?'none':'block'} x1="320" x2="280" y1="130" y2="140" stroke="red"></line>

                                              <circle className={this.state.four?'none':'block'} cx="240" cy="145" data-value="6.7" r="4"></circle>
                                              <line className={this.state.four?'none':'block'} x1="280" x2="240" y1="140" y2="145" stroke="red"></line>

                                              <circle className={this.state.five?'none':'block'} cx="200" cy="150" data-value="6.7" r="4"></circle>
                                              <line className={this.state.five?'none':'block'} x1="240" x2="200" y1="145" y2="150" stroke="red"></line>


                                          </g>
                                      </svg>
                                  </div>
                        </div>
                        </div>

                    </div>
                    <Description text="op" />
                </div>
            </div>
        )
    }
}


export default Slide3