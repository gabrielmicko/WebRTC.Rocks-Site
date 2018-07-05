import { webrtcRemote } from "../webrtc-instance";
import log from "./log";

export default function() {
  try {
    webrtcRemote.processOffer(window.localSDP).then(
      function() {
        log("13", "RemotDescription has been initiated.");
      },
      function() {
        log("13", "Setting RemotDescription failed.");
      }
    );
  } catch (e) {
    console.log(e);
    log("13", e.message);
  }
}
