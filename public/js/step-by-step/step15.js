import log from "./log";
import { webrtcRemote } from "../webrtc-instance";

export default function() {
  try {
    var candidate = prompt("Please enter the ICE candidate");

    if (typeof candidate == "string" && candidate.length > 0) {
      //var iceCandidate = new RTCIceCandidate(JSON.parse(candidate));

      webrtcRemote.addIceCandidate(JSON.parse(candidate));
      log("15", "Creating RTC Ice Candidate.");
      //yourPC.addIceCandidate(iceCandidate);
      log("16", "Adding ICE Candidate to RTCPeerConnection");
    }
  } catch (e) {
    console.log(e);
    log("15", e.message);
  }
}
