import { webrtcLocal } from "../webrtc-instance";
import { getLocalVideo } from "./html";
import log from "./log";

export default function() {
  try {
    function successCallback(mediaStream) {
      try {
        var localVideo = getLocalVideo();

        localVideo.srcObject = mediaStream;
        webrtcLocal.addStream(mediaStream);
        log("1", "OK");
      } catch (e) {
        console.log(e);
        log("1", e.name);
      }
    }
    var mediaPromise = navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    });
    mediaPromise.then(successCallback, function() {
      log("1", "The getUserMedia promise was rejected.");
    });

    mediaPromise.catch(function(e) {
      log("1", e.name);
    });
  } catch (e) {
    console.log(e);
    log("1", e.name);
  }
}
