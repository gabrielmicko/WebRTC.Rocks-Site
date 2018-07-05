import log from "./log";
export default function() {
  try {
    function getStats(pc, selector) {
      if (navigator.mozGetUserMedia) {
        return pc.getStats(selector);
      }
      return new Promise(function(resolve, reject) {
        pc.getStats(
          function(response) {
            var standardReport = {};
            response.result().forEach(function(report) {
              var standardStats = {
                id: report.id,
                type: report.type
              };
              report.names().forEach(function(name) {
                standardStats[name] = report.stat(name);
              });
              standardReport[standardStats.id] = standardStats;
            });
            resolve(standardReport);
          },
          selector,
          reject
        );
      });
    }

    var statsPromise = getStats(myPC);
    statsPromise.then(function(stat) {
      console.log(stat);
    });
  } catch (e) {
    console.log(e);
    log("22", e.message);
  }
}
