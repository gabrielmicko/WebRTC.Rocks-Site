var myPC = false;
var yourPC = false;
var myStream = false;
var yourStream = false;
var PCconfig = false;
var PCconstraint = false;
var mySDP = false;
var yourSDP = false;
var myRemoteSDP = false;
var yourRemoteSDP = false;
var myICEq = [];
var yourICEq = [];
var log;

import step1 from "./step-by-step/step1";
import step2 from "./step-by-step/step2";
import step3 from "./step-by-step/step3";
import step4 from "./step-by-step/step4";
import step5 from "./step-by-step/step5";
import step6 from "./step-by-step/step6";
import step7 from "./step-by-step/step7";
import step8 from "./step-by-step/step8";
import step9 from "./step-by-step/step9";
import step10 from "./step-by-step/step10";
import step11 from "./step-by-step/step11";
import step12 from "./step-by-step/step12";
import step13 from "./step-by-step/step13";
import step15 from "./step-by-step/step15";
import step17 from "./step-by-step/step17";
import { webrtcLocal, webrtcRemote } from "./webrtc-instance";

const steps = {
  1: step1,
  2: step2,
  3: step3,
  4: step4,
  5: step5,
  6: step6,
  7: step7,
  8: step8,
  9: step9,
  10: step10,
  11: step11,
  12: step12,
  13: step13,
  15: step15,
  17: step17
};

function initStepByStep() {
  $("main .tutorial .step .part").on("click", function() {
    $(this)
      .parents(".step")
      .toggleClass("open");
  });

  $("main .tutorial .step .do-it").on("click", function() {
    var $this = $(this);
    $this.parents(".step").addClass("open");
    var step = $this.data("step");
    fire(step);
  });

  function fire(step) {
    steps[step]();
    // eval("step" + step + "(" + step + ")");
  }
}

export { initStepByStep };
