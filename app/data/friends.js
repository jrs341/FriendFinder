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
	}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = profileArray;

// for (var i = 0; i < profileArray.length; i++) {
// 	console.log(profileArray[i].scores);
// }

var i = 1;

function getArray() {

	for (i ; i < profileArray.length; i++) {
		// console.log(profileArray[i].scores);
		// return profileArray[i].scores;
		arrayDifference();
	}
}

function arrayDifference() {

	for (var x = 0; x < profileArray[0].scores.length; x++) {
		// console.log(profileArray[i].scores);
		console.log(profileArray[0].scores[x] - profileArray[i].scores[x]);
	}
	// i++;
	// console.log('i ' +i);
	// getArray();
	// arrayDifference();
}

getArray();
// arrayDifference();
// console.log(profileArray[0].scores[0] - profileArray[1].scores[0]);
// console.log(profileArray[0].scores.length);
// assume user1 is always going to be in the 0 position
// function totalDifference() {
	// for (var i = 0; i < profileArray.length; i++) {
// var x = 1;
		// for (var i = 0; i < profileArray[0].scores.length; i++) {
		// 		var y = 1;
		// 	for (var x = 0; x < profileArray[0].scores.lenght; x++) {

		// 		console.log(profileArray[0].scores[x] - profileArray[y].scores[x]);
		// 	}
			
		// 		y ++;
		// 	console.log('y: ' + y);
			// console.log(profileArray[0].scores[i] - profileArray[x].scores[i]);
			// x ++;
		// }
		// console.log(profileArray[0].scores[i] - profileArray[1].scores[i]);
		
	 // }
	
// }

// totalDifference();

// var user1 = (5+1+4+4+5+1+2+5+4+1);
// var user2 = (3+2+6+4+5+1+2+5+4+1);

// console.log(user1 + ' ' + user2);