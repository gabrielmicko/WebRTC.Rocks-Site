import log from "./log";
export default function() {
  try {
    log("19", "Your Session Description has been set as a local description.");
  } catch (e) {
    log("19", e.message);
  }
}
