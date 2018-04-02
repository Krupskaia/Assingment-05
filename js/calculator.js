/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

var Enter = function (valBtn) {
    "use strict";
/*    window.console.log(valBtn);
    window.console.log(typeof (valBtn));*/
    $("result").value += valBtn;
};

var Calculate = function () {
    "use strict";
    var strval = $("result").value;
/*    window.console.log(strval);
    window.console.log(eval(strval));*/
    $("result").value = eval(strval);
};

function init() {
    "use strict";
    $("equal").onclick = function () {Calculate(); };
    document.addEventListener("click", function (event) {
        if (event.target.id !== "equal") {
//            window.console.log(event.target.id);
            Enter($(event.target.id).value);
        }
    });
}


window.addEventListener("load", init);

