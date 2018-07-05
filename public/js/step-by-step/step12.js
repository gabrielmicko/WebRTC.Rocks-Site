import { webrtcLocal } from "../webrtc-instance";
import log from "./log";
export default function() {
  try {
    webrtcLocal.processAnswer(window.remoteSDP).then(
      function() {
        log("22", "Remote description on the local machine initialized.");
      },
      function() {
        log("22", "Setting Remote description failed.");
      }
    );
    /* myPC.setRemoteDescription(
      yourRemoteSDP,
      function() {
        log("22", "Remote description on the local machine initialized.");
      },
      function() {
        log("22", "Setting Remote description failed.");
      }
    ); */
  } catch (e) {
    log("22", e.message);
  }
}
