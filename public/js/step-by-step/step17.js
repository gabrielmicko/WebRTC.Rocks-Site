import log from "./log";
export default function() {
  try {
    myPC.onclose = function() {
      log("23", "Local connection closed.");
    };

    yourPC.onclose = function() {
      log("24", "Remote conenction closed.");
    };

    myPC.close();
    yourPC.close();

    log("23", "Connection closed.");
    log("24", "Stream stopped.");
    myStream.stop();
  } catch (e) {
    console.log(e);
    log("24", e.message);
  }
}
