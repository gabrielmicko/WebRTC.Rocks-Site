import { webrtcLocal } from "../webrtc-instance";
import log from "./log";

export default function() {
  try {
    log("8", "Constraints have been initiated.");
    webrtcLocal.createOffer().then(
      offer => {
        log("9", "Offer created, copy of Session Description appended.");
        log("10", "Setting local description succeeded.");
        $(".mysdp").html("");
        $(".mysdp").append(JSON.stringify(offer));
      },
      function(error) {
        log("8", "Creation of the offer failed: " + error);
      }
    );
  } catch (e) {
    console.log(e);
    log("9", e.name);
  }
}
