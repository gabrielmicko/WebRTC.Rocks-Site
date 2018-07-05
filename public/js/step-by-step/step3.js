import log from "./log";
import { webrtcLocal } from "../webrtc-instance";

export default function() {
  try {
    log("7", "Stream has been added to local PeerConnection.");
    webrtcLocal.addStream(window.localStream);
  } catch (e) {
    console.log(e);
    log("7", e.name);
  }
}
