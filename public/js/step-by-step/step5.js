import log from "./log";

export default function() {
  try {
    alert("You should choose your own solution for signaling.");
    log(
      "11",
      "Signaling is not the part of the WebRTC Standard. I offer you to use WebSockets."
    );
  } catch (e) {
    log("11", e);
  }
}
