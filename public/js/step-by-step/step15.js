import log from "./log";
import { webrtcRemote } from "../webrtc-instance";

export default function() {
  try {
    var candidates = prompt("Please enter the ICE candidate");

    if (typeof candidates == "string" && candidates.length > 0) {
      let cs = JSON.parse(candidates);
      cs.forEach(candidate => {
        webrtcRemote.addIceCandidate(candidate);
      });
      log("15", "Creating RTC Ice Candidate.");
      //yourPC.addIceCandidate(iceCandidate);
      log("16", "Adding ICE Candidate to RTCPeerConnection");
    }
  } catch (e) {
    console.log(e);
    log("15", e.message);
  }
}
