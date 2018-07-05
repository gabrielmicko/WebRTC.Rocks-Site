import log from "./log";
export default function() {
  try {
    log("19", "Your Session Description has been set as a local description.");

    /* yourPC.setLocalDescription(
      yourSDP,
      function() {
        log(
          "19",
          "Your Session Description has been set as a local description."
        );
      },
      function() {
        log("19", "Setting Session Description failed.");
      }
    ); */
  } catch (e) {
    log("19", e.message);
  }
}
