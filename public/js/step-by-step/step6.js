import log from "./log";

export default function() {
  try {
    var sdp = prompt("Please enter the offer SDP");
    if (typeof sdp == "string" && sdp.length > 1) {
      log("12", "Creating a sesson description from the offer SDP");
      sdp = JSON.parse(sdp);
      window.localSDP = sdp;
    }
  } catch (e) {
    console.log(e);
    log("12", e);
  }
}
