import { webrtcLocal, webrtcRemote } from "../webrtc-instance";
import { getRemoteVideo } from "./html";
import log from "./log";

export default function() {
  try {
    log("2", "OK");
    log("3", "OK");

    var countLocalCands = 0;
    webrtcLocal.on("candidate", function(candidate) {
      if (countLocalCands === 0) {
        $(".mycandidate").html("");
      }
      countLocalCands++;
      log("5", "Candidates " + countLocalCands);
      $(".mycandidate").append(JSON.stringify(candidate));
    });

    var countRemoteCands = 0;
    webrtcRemote.on("candidate", function(candidate) {
      if (countRemoteCands === 0) {
        $(".yourcandidate").html("");
      }
      $(".yourcandidate").append(JSON.stringify(candidate));
    });

    log("4", "OK - RTCPeerConnection created.<br>");

    webrtcRemote.on("stream", function(mediaStream) {
      getRemoteVideo().srcObject = mediaStream;
      $(".yourcandidate").append(JSON.stringify(candidate));
    });

    log("6", "Stream listener has been initiated!");
  } catch (e) {
    console.log(e);
    log("4", e.name);
  }
}
