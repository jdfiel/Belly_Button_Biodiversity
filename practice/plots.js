// plot practice

// Bar graph

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: { title: "Drinks"},
    yaxis: { title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);

// pie chart

   var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);


// scatter plot

var trace = {
   x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'scatter'
   };
   var data = [trace];
   var layout = {
    title: "'Scatter' Plot",
   };
   Plotly.newPlot("plotArea", data, layout);

// Mapping methods

var doubled = numbers.map(function(num){
    return num + 5;
});
console.log(doubled);

//  use map to extract a specific propery from each object in an array

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPopulation = cities.map(function(pop){
    return pop.population;
});
console.log(cityPopulation);

//  filter words that start with the letter s

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var letterS = words.filter(function(letterS){
    return letterS.match("\s");
});
console.log(letterS);

// sort numbers in ascending order **Appending reverse() will arrange it in descending order
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);
console.log(sortedAge);

// slicing
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);

// Slice first 3 words
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice = words.slice(0,3);
console.log(slice);

// slice end of an array
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );
