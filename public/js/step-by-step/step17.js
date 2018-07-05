import log from "./log";

import { webrtcLocal, webrtcRemote } from "../webrtc-instance";
import { getLocalVideo, getRemoteVideo } from "./html";
export default function() {
  try {
    webrtcLocal.pc.onclose = function() {
      log("23", "Local connection closed.");
    };

    webrtcRemote.pc.onclose = function() {
      log("24", "Remote conenction closed.");
    };

    webrtcLocal.pc.close();
    webrtcRemote.pc.close();

    log("23", "Connection closed.");
    log("24", "Stream stopped.");
    getLocalVideo().pause();
    getRemoteVideo().pause();
  } catch (e) {
    console.log(e);
    log("24", e.message);
  }
}
