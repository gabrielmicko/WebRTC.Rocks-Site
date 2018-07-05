import { webrtcLocal } from "../webrtc-instance";
import log from "./log";
export default function() {
  try {
    if (
      webrtcLocal.pc.iceConnectionState === "completed" ||
      webrtcLocal.pc.iceConnectionState === "connected"
    ) {
      log("22", "Remote description on the local machine initialized.");
    } else {
      webrtcLocal.processAnswer(window.remoteSDP).then(
        function() {
          log("22", "Remote description on the local machine initialized.");
        },
        function() {
          log("22", "Setting Remote description failed.");
        }
      );
    }
  } catch (e) {
    log("22", e.message);
  }
}
