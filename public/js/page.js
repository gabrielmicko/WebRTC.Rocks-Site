var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var Redirect = ReactRouter.Redirect;
var IndexRoute = ReactRouter.IndexRoute;
var DefaultRoute = ReactRouter.DefaultRoute;
var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;
var render = ReactDOM.render;
var { initStepByStep } = require("./step-by-step");

const Menu = React.createClass({
  render() {
    let activePage = this.props.activePage;
    let getActiveMenu = function(item) {
      if (item == activePage) {
        return "active";
      }
      return "";
    };

    return (
      <ul>
        <li className={getActiveMenu("index")}>
          <Link to="/index">Home</Link>
        </li>
        <li className={getActiveMenu("lessons")}>
          <Link to="/lessons">Lessons</Link>
        </li>
        <li className={getActiveMenu("about")}>
          <Link to="/about">About</Link>
        </li>
        <li className={getActiveMenu("contact")}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    );
  }
});

const App = React.createClass({
  getInitialState: function() {
    return {
      activePage: this.getCurrentPage()
    };
  },

  getCurrentPage: function() {
    let page = window.location.hash.substr(1);
    if (page.indexOf("index") !== -1) {
      page = "index";
    } else if (page.indexOf("about") !== -1) {
      page = "about";
    } else if (page.indexOf("lessons") !== -1) {
      page = "lessons";
    } else if (page.indexOf("contact") !== -1) {
      page = "contact";
    }
    return page;
  },

  componentDidMount: function() {
    window.addEventListener("hashchange", () => {
      this.setPage(this.getCurrentPage());
    });
  },

  setPage: function(page) {
    this.setState({
      activePage: page
    });
  },

  render() {
    return (
      <div className="contain">
        <header>
          <div className="wrap-container">
            <img src="/img/webrtc.png" className="webrtc-logo" />
            <span className="bold">Teach</span>
            <span className="normal">WebRTC</span>
            <nav>
              <ul>
                <Menu activePage={this.state.activePage} />
              </ul>
            </nav>
          </div>
        </header>
        <main>{this.props.children}</main>
        <div className="about">
          <ul>
            <li>
              <h3>Who am I?</h3>
              <p>
                My name is Gabriel Mičko. I studied Web-Programming & Software
                Engineering in Budapest Hungary. I currently work for DoclerSSC
                Ltd.
              </p>
            </li>
            <li>
              <h3>What I do?</h3>
              <p>
                I am Front-end Developer, I love the Web and I belive, this is
                the platform of the present & future. Beeing a Mozilla Tech
                Speaker gives me the power to teach & speak about what I like
                the most.
              </p>
            </li>
            <li>
              <h3>Why WebRTC?</h3>
              <p>
                I have been interested in real time communication for last
                years. I am amazed by the opportunities given by the technology.
                Connecting people has been considered as the right business.
              </p>
            </li>
          </ul>
        </div>
        <footer>
          <div className="wrap-container">
            <div className="copy">
              © TeachWebRTC - Gabriel Mičko Licensed under Creative Commons.
            </div>
            <nav>
              <ul>
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <a>Twitter</a>
                </li>
                <li>
                  <a>Facebook</a>
                </li>
                <li className="active">
                  <a>Home</a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    );
  }
});

const Index = React.createClass({
  render() {
    return (
      <main>
        <div className="wrap-container">
          <div className="shout-out">
            <h2>Woot, the first step is now done</h2>
            <p>
              Please note, this website is heavily under construction. Thank you
              for visiting. Live examples will help you understanding different
              parts of the WebRTC.Please be patient, new lessons are coming
              soon.<br />
              <br />
              <Link to="/lessons" className="button">
                Jump to view the lessons
              </Link>
            </p>
          </div>
        </div>
      </main>
    );
  }
});

const NoMatch = React.createClass({
  render() {
    return (
      <main>
        <div className="wrap-container">
          <div className="shout-out">
            <h2>Not Found</h2>
            <p>
              The page was not found!<br />
              <br />
              <Link to="/index" className="button">
                Home
              </Link>
            </p>
          </div>
        </div>
      </main>
    );
  }
});

const GetUserMedia = React.createClass({
  componentDidMount: function() {
    initGetUserMediaDemo();
  },

  render() {
    return (
      <main className="gmu-demo">
        <div className="wrap-container">
          <div className="shout-out">
            <h2>GetUserMedia</h2>
            <div>
              <video autoPlay="true" />
            </div>
            <p>
              Thank you for visiting. Live examples will help you understanding
              different parts of the WebRTC.Please be patient, new lessons are
              coming soon.<br />
              <br />
              <Link to="/lessons/get-user-media" className="button capture">
                Start capture
              </Link>
              <Link to="/lessons/get-user-media" className="button size">
                Toggle Video Size
              </Link>
            </p>
          </div>
        </div>
      </main>
    );
  }
});

const Lessons = React.createClass({
  render() {
    return (
      <main>
        <div className="wrap-container">
          <div className="shout-out">
            <h2>
              1. WebRTC from <span className="bold">ZERO</span> to{" "}
              <span className="bold">HERO</span>
            </h2>
            <p>
              This tutorial covers the complete WebRTC flow.<br />
              <br />
              <Link to="/lessons/step-by-step-webrtc" className="button">
                I want to be HERO
              </Link>
            </p>
          </div>
          <div className="shout-out">
            <h2>2. GetUserMedia</h2>
            <p>
              This is a simple getUserMedia demo without code.<br />
              <br />
              <Link to="/lessons/get-user-media" className="button">
                See the demo
              </Link>
            </p>
          </div>
        </div>
      </main>
    );
  }
});

const LessonStepByStep = React.createClass({
  componentDidMount: function() {
    initStepByStep();
  },
  render() {
    return (
      <div>
        <div className="wrap-container">
          <div className="video grid-container">
            <div className="grid-40">
              <h3>My video</h3>
              <video autoPlay="true" className="myvideo" playsInline={true} />
            </div>
            <div className="grid-20">&nbsp;</div>
            <div className="grid-40">
              <h3>My remote video</h3>
              <video autoPlay="true" className="yourvideo" playsInline={true} />
            </div>
          </div>
          <div className="tutorial">
            <div className="step grid-container">
              <div className="grid-40 part main">getUserMedia</div>
              <div className="grid-20">
                <button className="do-it" data-step="1">
                  DO IT!
                </button>
              </div>
              <div className="grid-40 result">
                <div className="description">
                  Obtaining the control under hardware. Asking for permission.
                  Creating media object.
                </div>
                <code>
                  {
                    "mediaPromise = navigator.mediaDevices.getUserMedia({video: true, audio:true});"
                  }
                  {"mediaPromise.then(function(mediaStream){"}
                  {
                    "myVideoElement.src = window.URL.createObjectURL(mediaStream);"
                  }
                </code>
                <div className="log" data-log="1" />
              </div>
            </div>

            <div className="step grid-container">
              <div className="grid-40">
                <div className="part main">Create peer connection</div>
                <textarea
                  className="mycandidate"
                  defaultValue="Waiting for ICE Candidates."
                />
                <textarea
                  className="yourcandidate"
                  defaultValue="Waiting for ICE Candidates."
                />
              </div>
              <div className="grid-20">
                <button className="do-it" data-step="2">
                  DO IT!
                </button>
              </div>
              <div className="grid-40 result">
                <div className="description">
                  Defining the PeerConnection configuration
                </div>
                <code>
                  {
                    'config = {urls: "stun:23.21.150.121"},{urls: "stun:stun.l.google.com:19302"}]'
                  }
                </code>
                <div className="log" data-log="2" />
                <div className="hr" />
                <div className="description">
                  Defining the PeerConnection contraints
                </div>
                <code>
                  {
                    "constraints = {mandatory:{offerToReceiveAudio: true,offerToReceiveVideo: true}}"
                  }
                </code>
                <div className="log" data-log="3" />
                <div className="hr" />
                <div className="description">
                  Creating PeerConnection instance
                </div>
                <code>
                  {
                    "const pc = new RTCPeerConnection({iceServers:config}, constraints)"
                  }
                </code>
                <div className="log" data-log="4" />

                <div className="hr" />
                <div className="description">
                  Set the ICE Candidate listener
                </div>
                <code>{"pc.onicecandidate = function(event) {"}</code>
                <div className="log" data-log="5">
                  Candidates 0
                </div>

                <div className="hr" />
                <div className="description">
                  Set the Remote Stream listener
                </div>
                <code>
                  {"pc.onaddstream = function(event) {"}
                  <br />
                  {
                    "remoteVideoElement.src = window.URL.createObjectURL(event);"
                  }
                </code>
                <div className="log" data-log="6" />
              </div>
            </div>

            <div className="step grid-container">
              <div className="grid-40 part main">
                Attach media stream to Peer connection
              </div>
              <div className="grid-20">
                <button className="do-it" data-step="3">
                  DO IT!
                </button>
              </div>
              <div className="grid-40 result">
                <div className="description">Calling addSteam function</div>
                <code>{"pc.addStream(localMediaStream)"}</code>
                <div className="log" data-log="7" />
              </div>
            </div>

            <div className="step grid-container">
              <div className="grid-40">
                <div className="part mine">Create SDP Offer</div>
                <textarea
                  className="mysdp"
                  defaultValue="Waiting for my session description."
                />
              </div>
              <div className="grid-20">
                <button className="do-it" data-step="4">
                  DO IT!
                </button>
              </div>
              <div className="grid-40 result">
                <div className="description">Setting up offer contraints</div>
                <code>
                  {
                    "constraints = {mandatory:{offerToReceiveAudio: true,offerToReceiveVideo: true}}"
                  }
                </code>
                <div className="log" data-log="8" />

                <div className="hr" />

                <div className="description">Create my offer</div>
                <code>
                  {
                    "pc.createOffer(function(sdp){(...)}, function(...), constraints){}"
                  }
                </code>
                <div className="log" data-log="9" />

                <div className="hr" />

                <div className="description">Setting local description</div>
                <code>
                  {"pc.setLocalDescription(sdp, successFunc, failFunc);"}
                </code>
                <div className="log" data-log="10" />
              </div>
            </div>
            <div className="step grid-container">
              <div className="grid-40">
                <div className="part mine">Send the SDP Offer</div>
              </div>
              <div className="grid-20">
                <button className="do-it" data-step="5">
                  DO IT!
                </button>
              </div>
              <div className="grid-40 result">
                <div className="description">Sending SDP offer</div>
                <code>Various solutions for signaling.</code>
                <div className="log" data-log="11" />
              </div>
            </div>

            <div className="step grid-container">
              <div className="grid-40">
                <div className="part yours">Receive SDP Offer (on remote)</div>
              </div>
              <div className="grid-20">
                <button className="do-it" data-step="6">
                  DO IT!
                </button>
              </div>
              <div className="grid-40 result">
                <div className="description">
                  Creating a session description from the offer SDP
                </div>
                <code>
                  {
                    "remoteSessionDescription = new RTCSessionDescription(remoteSDP)"
                  }
                </code>
                <div className="log" data-log="12" />
              </div>
            </div>

            <div className="step grid-container">
              <div className="grid-40">
                <div className="part yours">
                  Set remote description (on remote)
                </div>
              </div>
              <div className="grid-20">
                <button className="do-it" data-step="7">
                  DO IT!
                </button>
              </div>
              <div className="grid-40 result">
                <div className="description">
                  Set my description as remote description (on remote)
                </div>
                <code>
                  {
                    "pc.setRemoteDescription(remoteSessionDescription, successFunc, failFunc)"
                  }
                </code>
                <div className="log" data-log="13" />
              </div>
            </div>

            <div className="step grid-container">
              <div className="grid-40">
                <div className="part main">Send ICE Candidates</div>
              </div>
              <div className="grid-20">
                <button className="do-it" data-step="13">
                  DO IT!
                </button>
              </div>
              <div className="grid-40 result">
                <div className="description">Send ICE Candidates</div>
                <code>Various solutions for signaling.</code>
                <div className="log" data-log="14" />
              </div>
            </div>

            <div className="step grid-container">
              <div className="grid-40">
                <div className="part yours">
                  Receive ICE candidates (on remote)
                </div>
              </div>
              <div className="grid-20">
                <button className="do-it" data-step="15">
                  DO IT!
                </button>
              </div>
              <div className="grid-40 result">
                <div className="description">Recieve ICE candidates</div>
                <code>
                  {
                    "iceCandidate = new RTCIceCandidate({candidate: ice.candidate});"
                  }
                </code>
                <div className="log" data-log="15" />
                <div className="hr" />
                <div className="description">Add candidates</div>
                <code>{"pc.addIceCandidate(iceCandidate, function(..."}</code>
                <div className="log" data-log="16" />
              </div>
            </div>

            <div className="step grid-container">
              <div className="grid-40">
                <div className="part yours">Create answer SDP (on remote)</div>
                <textarea
                  className="yoursdp"
                  defaultValue="Waiting for your session description."
                />
              </div>
              <div className="grid-20">
                <button className="do-it" data-step="8">
                  DO IT!
                </button>
              </div>
              <div className="grid-40 result">
                <div className="description">Setting answer constraints</div>
                <code>
                  {
                    "constraints = {mandatory:{offerToReceiveAudio: true,offerToReceiveVideo: true}}"
                  }
                </code>
                <div className="log" data-log="17" />

                <div className="hr" />

                <div className="description">Creating answer for the offer</div>
                <code>{"pc.createAnswer(function(...))"}</code>
                <div className="log" data-log="18" />
              </div>
            </div>

            <div className="step grid-container">
              <div className="grid-40">
                <div className="part yours">Set answer SDP (on remote)</div>
              </div>
              <div className="grid-20">
                <button className="do-it" data-step="9">
                  DO IT!
                </button>
              </div>
              <div className="grid-40 result">
                <div className="description">
                  Setting answer as your local description
                </div>
                <code>
                  {"pc.setLocalDescription(anwerSDP, successFunc, failFunc"}
                </code>
                <div className="log" data-log="19" />
              </div>
            </div>

            <div className="step grid-container">
              <div className="grid-40">
                <div className="part yours">
                  Send SDP back to local (on remote)
                </div>
              </div>
              <div className="grid-20">
                <button className="do-it" data-step="10">
                  DO IT!
                </button>
              </div>
              <div className="grid-40 result">
                <div className="description">Sending SPD back to local</div>
                <code>Various solutions for signaling.</code>
                <div className="log" data-log="20" />
              </div>
            </div>

            <div className="step grid-container">
              <div className="grid-40">
                <div className="part mine">Recieved answer SDP (on local)</div>
              </div>
              <div className="grid-20">
                <button className="do-it" data-step="11">
                  DO IT!
                </button>
              </div>
              <div className="grid-40 result">
                <div className="description">
                  Creating a sesson description from the answer SDP
                </div>
                <code>
                  {
                    "remoteSessionDescription = new RTCSessionDescription(remoteSDP)"
                  }
                </code>
                <div className="log" data-log="21" />
              </div>
            </div>
            <div className="step grid-container">
              <div className="grid-40">
                <div className="part mine">
                  Set remote description (on local)
                </div>
              </div>
              <div className="grid-20">
                <button className="do-it" data-step="12">
                  DO IT!
                </button>
              </div>
              <div className="grid-40 result">
                <div className="description">
                  Setting your remote description
                </div>
                <code>
                  {
                    "pc.setRemoteDescription(remoteSessionDescription, successFunc, failFunc"
                  }
                </code>
                <div className="log" data-log="22" />
              </div>
            </div>
            <div className="step grid-container">
              <div className="grid-40">
                <div className="part main">Close the connection</div>
              </div>
              <div className="grid-20">
                <button className="do-it" data-step="17">
                  DO IT!
                </button>
              </div>
              <div className="grid-40 result">
                <div className="description">Close listener.</div>
                <code>{"pc.onclose = function () {"}</code>
                <div className="log" data-log="23" />

                <div className="hr" />

                <div className="description">Close the connection.</div>
                <code>{"stream.stop()"}</code>
                <div className="log" data-log="24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

let routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="index" component={Index} />
      <Route path="lessons" component={Lessons} />
      <Route path="/lessons/step-by-step-webrtc" component={LessonStepByStep} />
      <Route path="/lessons/get-user-media" component={GetUserMedia} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
);

render(routes, document.querySelector("#app"));
