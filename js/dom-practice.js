/*eslint-env browser*/

//STEP 1
/*function myFunction1() {
    "use strict";
    window.alert("I have been clicked");
}*/
//STEP 2

/*var btnStep2 = window.document.getElementById("btn2");
btnStep2.onclick = function () {
    "use strict";
    window.alert("I have been clicked");
};*/


//STEP 3
/*
function msgFunction() {
    "use strict";
    window.alert("I have been clicked");
}

var btnStep3 = window.document.getElementById("btn3");
btnStep3.addEventListener("click", msgFunction);
*/



//STEP 4

/*var btnStep4 = window.document.getElementById("btn4");
btnStep4.addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
});*/


//STEP 5
/*function myFunction5() {
    "use strict";
    var btnStep5 = window.document.getElementById("btn5");
    btnStep5.addEventListener("click", function () {
        window.alert("I have been clicked");
    });
}*/
//window.addEventListener("load", myFunction5);
//STEP 6
var link = window.document.getElementById("redirect");
link.addEventListener("click", function (e) {
    "use strict";
    e.preventDefault();
    window.alert("You clicked on: Visit Google");
});

//STEP 7
/*var btn = window.document.getElementById("btnText");
var msg = window.document.getElementById("msgText");
btn.addEventListener("click", function () {
    "use strict";
    btn.disabled = true;
    window.alert("Your text: " + msg.value);
});*/

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

//STEP 8
/*var btn = $("newPage");
btn.addEventListener("click", function () {
    "use strict";
    window.open('newpage.html', 'new page', 'width=300,height=300');
});*/

//STEP 9
function msgJavaScript() {
    "use strict";
    window.console.log("Learning JavaScript is fun!");
}
var btnStart = $("btnStar");
var btnStop = $("btnStop");
var id;
btnStart.addEventListener("click", function () {
    "use strict";
    id = window.setInterval(msgJavaScript, 2000);
});

btnStop.addEventListener("click", function () {
    "use strict";
    window.clearInterval(id);
});
//STEP 10
var btnSelect = $("btnSelect");
var selectlist = $("movieList");
var element;
btnSelect.addEventListener("click", function () {
    "use strict";
    window.alert(element);
});
selectlist.addEventListener("change", function () {
    "use strict";
    element = selectlist.value;
});