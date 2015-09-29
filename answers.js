//Question 1
var divideByTwo = function(number){
	console.log(number/2);
}
var num = 8;
divideByTwo(num);

//Question 2
var greeting = function(name, name1){
	console.log('Good Morning, ' + name + ' and ' + name1);
}
var nam = 'Sam';
var ame = 'Liz';
greeting(nam, ame);

//Question 3
var cost = function(amount, price){
	console.log(amount*price);
}
var cashews = 6;
var priced = .9;
cost(cashews, priced);
// 5.4

//Question 4
var splitTeam = function(people){
	var team1 = [];
	var team2 = [];
	for(i=0; i < people.length; i++){
		if (i%2 === 0) {
			team1.push(people[i]);
		} else {
			team2.push(people[i]);
		}
	}
	console.log("Team 1: " + team1);
	console.log("Team 2: " + team2);

}

var teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"];
splitTeam(teammates);

//Question 5

var quarter = function(number){
	console.log(number/4);
	if (number%2 === 0) {
		console.log("This number is Even");
	} else {
		console.log('This number is Odd');
	};
}
var numb = 18;
quarter(numb);

//Question 6
var area = function(length, width){
	console.log(length*width);
}
var lengt = 7;
var widt = 5;

var perimeter = function(side1, side2){
	console.log(side1*2 + side2*2);
}
var sid = 4;
var si = 3;

area(lengt, widt);
perimeter(sid,si);

//Question 7
var sleepings = function(hours){
	if (hours > 8) {
		console.log('Getting Enough Rest, Nice!');
	} else {
		console.log('Not getting enough sleep, man.');
	}
}
var aiden = 7;
var sammy = 9;
sleepings(aiden);
sleepings(sammy);

//Question 8
prompt('Enter a Six-Digit Number');

var reverse = function(numbers){

};




