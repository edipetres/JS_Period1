//DAY 1 EXERCISES


//EX1
//Working filter method
var names = ['An', 'Jens', 'Helge', 'K', 'Martin', 'Rasmus', 'Ed'];
var names2 = names.filter(function (name) {
    return name.length >= 3;
});
console.log("Names2: " + names2);

//Working map method
mappedNames = names.map(function (name) {
    return name.toUpperCase();
})
console.log(mappedNames);


//EX2
//My own map() method
var myMap = function (array, callback) {
    var mappedArray = [];
    array.forEach(function (name) {
        var resp = callback(name);
        //console.log("resp: "+resp);
        if (resp !== undefined) {
            mappedArray.push(resp)
            //console.log("Musnt be undefined: "+ resp)
        }
    });
    console.log("My mapped array: " + mappedArray);
    return mappedArray;
}

var myMappedArray = myMap(names, function (name) {
    if (name.length >= 3) {
        return name;
    }
})

//My own filter() method
var myFilter = function (array, callback) {
    var returnArray = [];
    array.forEach(function (item) {
        var resp = callback(item);
        if (resp !== undefined) {
            returnArray.push(resp);
        }
    });
    return returnArray;
}

myFilter(names, function (name) {
    if (name.length >= 3) {
        return name;
    }
});


//EX3
//Adding custom properties to array prototype
Array.prototype.myMap = function (callback) {
    var mappedArray = [];
    console.log("THIS::: " + this);
    this.forEach(function (name) {
        var resp = callback(name);
        //console.log("resp: "+resp);
        if (resp !== undefined) {
            mappedArray.push(resp)
            //console.log("Musnt be undefined: "+ resp)
        }
    });
    console.log("My mapped array: " + mappedArray);
    return mappedArray;
}
//Using my own mapper property on an array object
names.myMap(function (name) {
    return "IT WORKS with " + name;
});

//Adding myFilter() function to the Array prototype
Array.prototype.myFilter = function (callback) {
    var returnArray = [];
    this.forEach(function (item) {
        var resp = callback(item);
        if (resp !== undefined) {
            returnArray.push(resp);
        }
    });
    console.log("Array returned from myFilter(): " + returnArray);
    return returnArray;
}
names.myFilter(function (name) {
    if (name.length >= 3) return name;
});

//EX4 - a).
var makeHTMLStrUL = function (array) {
    var htmlStringUL = '<ul>';
    var namesHTMLList = array.map(function (name) {
        return "<li>" + name + "</li>";
    });
    htmlStringUL += namesHTMLList.join("");
    htmlStringUL += "</li>";
    return htmlStringUL;
}
console.log("EX4 htmlString: \n\t" + makeHTMLStrUL(names));

//EX4 - b).
var data = [{ name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" }, { name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }];

var htmlStringTable = "<table>";
htmlStringTable += '<tr><td>Name</td><td>Phone</td></tr>';
var mappedData = data.map(function (item) {
    var returnStr = "<tr>";
    returnStr += "<td>" + item.name + "</td>";
    returnStr += "<td>" + item.phone + "</td>";
    returnStr += "</tr>";
    return returnStr;
});
htmlStringTable += mappedData.join("");
htmlStringTable += "</table>";

//EX4 - c).
document.getElementById('table').innerHTML = htmlStringTable;
document.getElementById('list').innerHTML = makeHTMLStrUL(names);

//EX4 - d).
var btnFilterNames = function () {
    var filteredNames = names.filter(function (name) {
        return name.length >= 3;
    });
    console.log("Filtered names: "+filteredNames);
    document.getElementById('list').innerHTML = makeHTMLStrUL(filteredNames);
};