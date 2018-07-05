import log from "./log";
import { webrtcLocal } from "../webrtc-instance";

export default function() {
  try {
    var sdp = prompt("Please enter the answer SDP");
    if (typeof sdp == "string" && sdp.length > 1) {
      log("21", "Creating a sesson description from the offer SDP");
      sdp = JSON.parse(sdp);
      window.remoteSDP = sdp;
      //yourRemoteSDP = new RTCSessionDescription(sdp);
    }

    log("21", "Creating a sesson description from the offer SDP");
  } catch (e) {
    log("21", e.message);
  }
}
