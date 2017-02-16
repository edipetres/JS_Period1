
require('/Users/edmondpetres/Desktop/webpack/main.css')
import '/Users/edmondpetres/Desktop/webpack/node_modules/bootstrap/dist/css/bootstrap.css';

const name = 'Scotch.io';

setTimeout(() => alert(`Hello there from ${name}`), 300);

function Person(fn,ln,s){
  this.firstName = fn;
  this.lastName = ln;
  this.favoriteSport = s;
}

var persons = [
  new Person("Kurt", "Wonnegut","Socker"),
  new Person("Jan", "Peterson","Hockey"),
  new Person("Jane", "Peterson","Skating"),
  new Person("John", "Hansen","Socker"),
]

var generateTable = function (persons) {
  var html = '<table class="table"><thead><tr>';

  var keyNames = Object.keys(persons[0]);
  keyNames.forEach(function (key) {
    console.log("Key: "+key);
    key.replace(/([A-Z])/g, ' $1');
    key.replace(/^./, function(str){ return str.toUpperCase(); });
    html += '<td>';
    html += key;
    html += '</td>';
  });

  html += ' </tr></thead><tbody>';

  persons.forEach(function (person) {
    html += '<tr>';
    keyNames.forEach(function(keyname) {
      html += "<td>" + person[keyname] + "</td>";
    })
    html += '</tr>';
  });

  html += "</tbody></table>";

  return html;
}

document.getElementById('mydiv').innerHTML = generateTable(persons);
