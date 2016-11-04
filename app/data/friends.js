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
	}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = profileArray;

var totalDifference = [];

// var min = Math.min.apply(Math, totalDifference);

var min 

var positionArray = [];

var i = 1;

function add (a, b) {
	return a + b;
}

function getArray() {

	for (i ; i < profileArray.length; i++) {
		// console.log(profileArray[i].scores);
		// return profileArray[i].scores;
		arrayDifference();
		// findMatch();
	}
	findMatch();
}

function arrayDifference() {
	var difference = [];
	for (var x = 0; x < profileArray[0].scores.length; x++) {
		// console.log(profileArray[i].scores);
		// console.log(profileArray[0].scores[x] - profileArray[i].scores[x]);
		var y = Math.abs(profileArray[0].scores[x] - profileArray[i].scores[x]);
		difference.push(y);
	}
	console.log(difference);
	var total = difference.reduce(add, 0);
	// console.log(total);
	totalDifference.push(total);
	console.log(totalDifference.join(', '));
	// min = Math.min.apply(Math, totalDifference);
	// console.log(min);
	// var position = totalDifference.indexOf(min);
	// positionArray.push(position);
	// console.log(position);

}

function findMatch() {
	min = Math.min.apply(Math, totalDifference);
	var position = totalDifference.indexOf(min);
	positionArray.push(position);
	console.log(position);
	console.log(positionArray);
}

getArray();

// console.log(min);
// console.log(positionArray);

