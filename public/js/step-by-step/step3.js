import log from "./log";

export default function() {
  try {
    log("7", "Stream has been added to local PeerConnection.");
    //myPC.addStream(myStream);
  } catch (e) {
    console.log(e);
    log("7", e.name);
  }
}
