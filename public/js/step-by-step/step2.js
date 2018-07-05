import { webrtcLocal, webrtcRemote } from "../webrtc-instance";
import { getRemoteVideo } from "./html";
import log from "./log";

export default function() {
  try {
    log("2", "OK");
    log("3", "OK");

    var localCandidates = [];
    webrtcLocal.on("candidate", function(candidate) {
      localCandidates.push(candidate);
      $(".mycandidate").html("");
      log("5", "Candidates " + localCandidates.length);
      $(".mycandidate").append(JSON.stringify(localCandidates));
    });

    var remoteCandidates = [];
    webrtcRemote.on("candidate", function(candidate) {
      remoteCandidates.push(candidate);
      $(".yourcandidate").html("");
      $(".yourcandidate").append(JSON.stringify(remoteCandidates));
    });

    log("4", "OK - RTCPeerConnection created.<br>");

    webrtcRemote.on("stream", function(mediaStream) {
      try {
        getRemoteVideo().srcObject = mediaStream;
      } catch (e) {
        console.log(e);
      }
    });

    log("6", "Stream listener has been initiated!");
  } catch (e) {
    console.log(e);
    log("4", e.name);
  }
}
