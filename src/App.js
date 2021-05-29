import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className="bg-dark  full-body">
            <div className=" container text-white">
                <div className="row">
                    <div class="col-sm-12 col-md-12 text-center mt-3 mb-2">
                        <span class="btn bg-white pl-1 pr-1 m-2 event ">E V E N T S</span>
                    </div>
                    <div className="col-sm-3">
                        <br/>
                        <h5>11TH</h5>
                        <h5>NOV</h5>
                        <br/>
                    </div>
                    <div className="col-sm-6">
                        <h6>Sunday Super Club</h6>
                        <hr/>
                        <span>A culinary event with foods from all over the world. this is a weekly club you can join for a small fee.
                                                                      Learn cooking methods from top chefs</span>
                        <br/><br/>
                        <span id="event-details" className="font-weight-bold">&#43; Event Details</span>
                        <br/><br/>
                    </div>
                    <div className="col-sm-3">
                        <h6>16:00-19:00</h6>
                        <hr className="short-hr"/>
                        <span>144WElm St, chicago,IL 60610,
                            <br/></span>
                        <span className="text-right">
                            USA</span>
                    </div>
                    <hr/>
                    <br/>
                    <div className="col-sm-3">
                        <br/>
                        <h5>13TH</h5>
                        <h5>NOV</h5>
                    </div>
                    <div className="col-sm-6">
                        <h6>Evenings in the Park</h6>
                        <hr/>
                        <span>We invite you to listen to live bands play beautiful music in the park.
                                                                    Enjoy the sounds of Laureen Davis and the kings, and enjoy wine taste...

                        </span>
                        <br/><br/>
                        <span id="event-details">&#43; Event Details</span>
                        <br/><br/>
                    </div>
                    <div className="col-sm-3">
                        <h6>06:30-08:30</h6>
                        <hr className="short-hr"/>
                        <span>Estruary Park,
                        </span>
                    </div>
                    <hr/>
                    <br/>
                    <div className="col-sm-3">
                        <br/>
                        <h5>15TH</h5>
                        <h5>NOV</h5>
                    </div>
                    <div className="col-sm-6">
                        <h6>Morning Brews & Views</h6>
                        <hr/>
                        <span>Enjoy free samples of out latest brews while overlooking the beautiful sites of our city
                                                                    Plenty of Iced and hot teas.plus gourmet coffee d...
                        </span>
                        <br/><br/>
                        <span id="event-details">&#43; Event Details</span>
                    </div>
                    <div className="col-sm-3">
                        <h6>18:00-15:00</h6>
                        <hr className="short-hr"/>
                        <span>The Teapot and Brew Club
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default App;
