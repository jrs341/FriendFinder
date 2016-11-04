// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


var profileArray = [
	{
		name: 'Ahmed',
		photo: 'ahmed@example.com',
		scores: [5,4,3]

	},{
		name:'Jason',
		photo: 'at some link',
		scores: [3,4,5]
	},{
		name: 'Mari',
		photo: 'at some link',
		scores: [7,8,9]
	},{
		name: 'Bob',
		photo: 'at some link',
		scores: [5,6,7]
	},{
		name: 'Heidi',
		photo: 'at some link',
		scores: [3,4,5]
	}
];

module.exports = profileArray;

var totalDifference = [];

var min = [];

var positionArray = [];

var i = 1;

function add (a, b) {
	return a + b;
}

// This function grabs each element object in the profile array

function getArray() {

	for (i ; i < profileArray.length; i++) {
		arrayDifference();
	}
}

// This function determines the difference between the users profile and all of the saved profiles

function arrayDifference() {
	var difference = [];
	for (var x = 0; x < profileArray[0].scores.length; x++) {
		var y = Math.abs(profileArray[0].scores[x] - profileArray[i].scores[x]);
		difference.push(y);
	}
	console.log(difference);
	var total = difference.reduce(add, 0);
	// console.log(total);
	totalDifference.push(total);
	// console.log(totalDifference.join(', '));
}

// This function finds the minimum number or numbers in the position array and returns their position which will correspond to the profile array position i-1

// Need to fix this function to find equal min numbers

function findMatch() {

	for (var i = 0; i < totalDifference.length; i++) {
		min.push(Math.min.apply(Math, totalDifference));
		// var position = totalDifference.indexOf(min);
		// console.log(position);

	}
	
	// var position = totalDifference.indexOf(min);
	// positionArray.push(position);
	// console.log(position);
	// console.log(positionArray);
}

getArray();
findMatch();
console.log(min);

// console.log(min);
// console.log(positionArray);

