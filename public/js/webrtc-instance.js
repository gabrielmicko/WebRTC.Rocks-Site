import WebRTC from "./webrtc";
import "webrtc-adapter";

const webrtcLocal = new WebRTC({
  type: "publish",
  debugTag: "1",
  rtcConfig: {
    iceServers: [
      { urls: "stun:stun.l.google.com:19302" },
      { urls: "stun:stun1.l.google.com:19302" }
    ]
  }
});

const webrtcRemote = new WebRTC({
  type: "view",
  debugTag: "2",
  rtcConfig: {
    iceServers: [
      { urls: "stun:stun.l.google.com:19302" },
      { urls: "stun:stun1.l.google.com:19302" }
    ]
  }
});

export { webrtcLocal, webrtcRemote };
