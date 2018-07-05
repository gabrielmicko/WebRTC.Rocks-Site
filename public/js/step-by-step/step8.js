import { webrtcRemote } from "../webrtc-instance";
import log from "./log";

export default function() {
  try {
    log("17", "AnswerConstraints initiated.");

    //Not tested
    webrtcRemote.createAnswer().then(
      function(answer) {
        log("18", "Answer created. Copy of Session Description appended.");
        $(".yoursdp").html("");
        $(".yoursdp").append(JSON.stringify(answer));
      },
      function(err) {
        log("18", "Answer creation failed:" + err);
      }
    );
  } catch (e) {
    log("17", e.message);
  }
}
