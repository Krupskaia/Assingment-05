/*eslint-env browser*/

var employees = [];

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

function countEmployees() {
    "use strict";
    var total = employees.length;
    $("total").innerHTML = "Showing " + total + " results";
}

function deleteEmp(row) {
    "use strict";
    var numRow = row.parentNode.parentNode.rowIndex;
    $("tableEmp").deleteRow(numRow);
    employees.splice(row - 1, 1);
    window.console.log(employees.length);
    countEmployees();
}

function displayList() {
    "use strict";
    var i, j;
    var table = $("tableEmp");
    for (i = 0; i < employees.length; i += 1) {
        window.console.log(employees[i]);
        var row = table.insertRow(i + 1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        cell0.innerHTML = employees[i][0];
        cell1.innerHTML = employees[i][1];
        cell2.innerHTML = employees[i][2];
        j = i + 1;
        cell3.innerHTML = '<input type="button" id = "btn' + j + '" value="Delete" onclick="deleteEmp(this)">';
    }
}

function addtoTable(newEmployee) {
    "use strict";
    var i = employees.length;
    var table = $("tableEmp");
    var row = table.insertRow(i);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell0.innerHTML = newEmployee[0];
    cell1.innerHTML = newEmployee[1];
    cell2.innerHTML = newEmployee[2];
    cell3.innerHTML = '<input type="button" id = "btn' + i + '" value="Delete" onclick="deleteEmp(this)">';
}


var addEmployee = function () {
    "use strict";
    if ($("name").value === "") {
        window.alert("Please enter a name");
    } else if ($("title").value === "") {
        window.alert("Please enter a title");
    } else if ($("extension").value === "") {
        window.alert("Please enter an extension");
    } else {
        var name = $("name").value;
        var title = $("title").value;
        var extension = $("extension").value;
        var i = employees.length;
        window.console.log(employees.length);
        employees[i] = [name, title, extension];
        window.console.log(employees[i]);
        var newEmployee = [name, title, extension];
        window.console.log(newEmployee);
        addtoTable(newEmployee);
        countEmployees();
        $("name").value = "";
        $("title").value = "";
        $("extension").value = "";
    }
};

window.addEventListener("load", function () {
    "use strict";
    $("add").addEventListener("click", addEmployee);
    employees[0] = ["Mary Jones", "IT", "432"];
    employees[1] = ["Bill Miller", "Sales", "442"];
    employees[2] = ["Kate Smith", "Marketing", "452"];
    employees[3] = ["Mark Martin", "Design", "462"];
    employees[4] = ["James Kent", "VP Sales", "472"];
    displayList();
    countEmployees();
});
