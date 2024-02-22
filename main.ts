// assigment 02
 //console.log("my name is Abdul Qadeeer")

 // assigment 03

 //let assi2 : string = ("Qadeer Mahar")
//console.log(assi2.toLowerCase())
//console.log(assi2.toUpperCase())
//console.log(assi2.charAt(0).toUpperCase() + assi2.slice(1))

// assigment 04

//let assi3aouther : string = ("Thoms Edison")
//let assi3quote : string = ("i have not failed i have just 1,000 ways that won't work.")
//console.log(`${assi3aouther} once said, "${assi3quote}" `)

// assigment 05

//let famous_person :string = ("Thomas Edison")
//let messege : string = ("I have not failed. i have just 10,00 ways that won't work.")
//console.log(`${famous_person} once said," ${messege}"`)

// assigment 06

//console.log("my name qadeer mahar")
//console.log("my \t name \t is \t qadeer \t mahar")
//console.log("my \n name \n is \n qadeer \n mahar")

// assigment 07

//console.log(7+7)
//console.log(9-3)
//console.log(2*3)
//console.log(6/2)

//assigment 08

//let favnum : number = (1)
//console.log(`my fav num is ${favnum}.`)

// assgiment 09

//let a : number = ( 8 )
//let b : number = ( 2 )

// addition
//console.log(`${a} + ${b} = ${a + b}`)
// subtrction
//console.log(`${a} - ${b} = ${a - b}`)
//multiplication
//console.log(`${a} * ${b} = ${a * b}`)
//division
//console.log(`${a} / ${b} = ${a / b}`)

// assigment 10

//let names = ["qadeer", "haseeb", "moiz", "basheer"];
//console.log(names);
//export {};

// assigment 11

//let names : string[] = ["qadeer", "haseeb", "mioz", "basheer"]
//let message : string = ("well come to class")

//console.log(names[0] + " " + message)
//console.log(names[1] + " " + message)
//console.log(names[2] + " " + message)
//console.log(names[3] + " " + message)
 
// second method

//console.log(`${names[0]}  ${message}`)
//console.log(`${names[1]}  ${message}`)
//console.log(`${names[2]}  ${message}`)
//console.log(`${names[3]}  ${message}`)

// assigment 12 and 13

//let cars : string[] = ["tyota", "honda", "civic", "audi"]


//cars.map((items) => console.log(`i want to drive ${items}`))


// assigment 14 to 17

//let guest : string[] = ["haseeb", "qadeer", "raqeeb", "moiz"]
//guest.map((item)=> console.log(`${item}, you are invited for party`))
// 15 assigment start

//let notattend : string = "moiz"
//console.log(notattend + " " + " can't attend that party")

//let newguest : string = "farman"
//console.log(newguest + " " +   ",you are invited for party")
//guest[guest.indexOf(notattend)] = newguest

//console.log(guest)
//guest.map((item) => console.log(` ${item}, you are cordinally invited for party`))
//console.log(guest)

// 16th Assigment start from here

//let beginingguest : string = "naveed"
//guest.unshift(beginingguest)
//console.log(guest)

//let midddleguest :  string = "rehman"
//let middleindex = guest.length/2
//guest.splice(middleindex,0,midddleguest)
//console.log(guest)
//guest.push("huzaifa")
//guest.map((item)=> console.log(`${item}, you are invited for party`))

//  17th assigment start from here


//console.log("i can invite only two peoples on party")
//while(guest.length >2){
  ///  let removegugest = guest.pop()
     //console.log(`dear ${removegugest} your are not invited for party`)
      // }
     //guest.map((item)=> console.log(`dear ${item} you are still invited`))

     //guest.pop()
     //guest.pop()
     //console.log(guest)
    //}

    //assigmenet 18

  //  let places : string[] = ["japan", "saudi arab", "dubai", "america", "china"]

//orginal order
//console.log("orginal order:", places)

//alphabetical order 
//console.log("alphabetical order:",[...places].sort())

//array is still in orginal order
//console.log("orginal oder after alphabetical :",places)

// for reverse alphabetic order
//console.log("reverse alphabetical:",[...places].sort().reverse())

//array is still orginal order
//console.log("orginal order after revers alphabetical:",places)

//reverse order
//console.log("reverse order:",[...places].reverse())

//orginal order after revers
//console.log("orginal order after revers:",places)

//sort array 
//places.sort()
//console.log("sort array",places)

// sort to reverse 
//places.sort().reverse()
//console.log("reverse sort",places)

// assigment 19

//let languages : string[] = ["Sindhi", "Balochi", "kashmiri", "pashto"]
//console.log("list of languages:")
//console.log(languages)

// assigment 20

//let card : {name : string , fname : string , age : number}  = {name :"qadeer",fname : "murtaza", age : 20}
//console.log(card)

// assigment 21 and 22

//let card : {name : string , fname : string , age : number}  = {name :"qadeer",fname : "murtaza", age : 20}
//console.log(card)

// assigment 23

//let name1 = 'Abdul';
//let name2 = 'qadeer';
//let name3 = 'abdul';
//console.log(name1 == name2)
//console.log(name1 != name2)
//console.log(name1 == name3)
//console.log(name1 != name3)




//let num1 = 8;
//let num2 = 9;


//console.log(num1 == num2)
//console.log(num1 != num2)
//console.log(num1 > num2)
//console.log(num1 < num2)
//console.log(num1 >= num2)
//console.log(num1 <= num2)

//when both statment is true it will print true AND '&&'.
//console.log(num1 < num2 && num2 >= num1)
//console.log(num1 > num2 && num2 >= num1)

//when one of them is true it will show true OR '||' 

//console.log(num1 > num2 || num1 <= num2)
//console.log(num1 > num2 || num1 >= num2)






//let city : string[] = ["karachi", "sukkur" , "multan" ]
//if(city.includes("sukkur")){
  //  console.log("sukkur is present")
//}else{
    //console.log("not present")
//}

//let city : string[] = ["karachi", "sukkur" , "multan" ]
//if(city.includes("rohri")){
    //console.log("sukkur is present")
//}else{
  //  console.log("not present")
//}


// assigment 24 to 26

//let alien_color = 'green'
//if (alien_color == 'green')
 //console.log("you earn 5 points")


 //let alien_color = 'green'
 //if (alien_color == 'red'){
   // console.log("no output")
//}

// Assigment 25

//let alien_color = 'green'
//if (alien_color == 'green'){
  //  console.log("player just earned 5 points for shooting the alien")
//}else{
  //  console.log("you just earned 10 points")
//}

//let alien_color = 'green'
//if (alien_color == 'red'){
  //  console.log("player just earned 5 points for shooting the alien")
//}else{
  //  console.log("you just earned 10 points")
//}


//Assigment 26

//let alien_color = 'yellow'
//if (alien_color == 'green'){
  //  console.log("you erned 5 points")
//}
//if(alien_color == 'yellow'){
  //  console.log("you earned 10 points")
//}
//if(alien_color == 'red'){
  //  console.log("you earned 15 points")
//}
 
// assigment 27

//let age : number = 65
//if(age < 2){
  //  console.log("your are a baby")
//}else if(age < 4){
  //  console.log("you are a toddler ")
//}else if(age < 13){
  //  console.log("you are a kid ")
//}else if(age < 20){
  //  console.log("you are a teenager ")
//}else if(age < 64){
  //  console.log("you are a adult ")
//}else{
   // console.log(
    //    "you are older"
  //  )
//}

// assigment 28

//let favorite_friut : string[] = ["mango", "banana", "orange"]
//if (favorite_friut.includes("orange")){
  //  console.log("i really like oranes")
//}
//if (favorite_friut.includes("kivi")){
  //  console.log("i really like kivi")
//}
//if (favorite_friut.includes("mango")){
  //  console.log("i really like mangos")
//}
//if (favorite_friut.includes("apple")){
  //  console.log("i really like apples")
//}
//if (favorite_friut.includes("banana")){
  //  console.log("i really like banana")
//}


// assigment 29 and 30

//let usernames: string[] = ['admin', 'haseeb',  'raqeeb', 'moiz', 'qadeer'];

//for (let username of usernames) {
    //if (username === 'admin') {
     //   console.log("Hello admin, would you like to see a status report?");
   // } else {
     //   console.log(`Hello ${username}, thank you for logging in again.`);
   // }
//}
//usernames = [];

//if (usernames.length === 0) {
  //  console.log('We need to find some users!');
//}

//assigment 31

// List of current usernames
//let current_users: string[] = ['john', 'alice', 'bob', 'emma', 'sam'];

// List of new usernames
//let new_users: string[] = ['peter', 'ALICE', 'emily', 'sarah', 'John'];

// Function to check if a username already exists (case insensitive)
//function isUsernameTaken(username: string): boolean {
  //  return current_users.some(currentUsername => currentUsername.toUpperCase() === username.toUpperCase());
//}

// Loop through new usernames to check if they are available
//for (let new_username of new_users) {
   // if (isUsernameTaken(new_username)) {
      //  console.log(`Sorry, the username '${new_username}' is already taken. Please choose a different one.`);
    //} else {
    //    console.log(`Congratulations! The username '${new_username}' is available.`);
  //  }
//}
// assigment 32

//const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//for (let number of numbers) {

//   let ordinalEnding: string;

    //if (number === 1) {
      //  ordinalEnding = "st";
    //} else if (number === 2) {
      //  ordinalEnding = "nd";
    //} else if (number === 3) {
     //   ordinalEnding = "rd";
   // } else {
     //   ordinalEnding = "th";
   // }

 //   console.log(number + ordinalEnding);
//}

// assigment 33

//let fav_pizza : string[] = ["peproni", "mashroom", "chiken"]

//for(let pizzas of fav_pizza){
  //  console.log(`I like ${pizzas} pizza `)

//}
//fav_pizza.map((item)=> console.log(`\n i really love ${item} pizza`))

//assigment 34

//let animals : string[] = ["Lion", "Tiger", "Dog"]

//for(let animal of animals){
  //  console.log(animal)
//}
//console.log("\n")

//for(let animal of animals){
  //  console.log(`A ${animal} have sharp teeth`)
//}
//console.log(" \n \t dogs are the best pets of all time. ")

//asigment 35 and 36

//function make_shirt(size : string , text : string): void {
  //  console.log(`you order ${size} size that says ${text}`)

//}
//make_shirt('large', '" i love typescript"')
//make_shirt('midium', '"i need large shirt"')


//assigment 37

//function describe_city(city : string , country : string): void{
  //  console.log(`${city} is in ${country}`)
//}
//describe_city('Sukkur','"pakistan"')
//describe_city('Karachi', '"pakistan"')
//describe_city('Lahore', '"pakistan"')

//assigment 38

//function city_country(city : string , country : string): string {
  //  return `${city} , ${country}`
//}
//console.log(city_country("Sukkur","Pakistan"))
//console.log(city_country("Multan","Pakistan"))
//console.log(city_country("Khairpur","Pakistan"))

//assigment 39

//interface Album {
  //  artist: string;
    //title: string;
    //tracks?: number;
//}

//function make_album(artist: string, title: string, tracks?: number): Album {
  //  const album: Album = {
    //    artist: artist,
      //  title: title
    //};
    
    //if (tracks !== undefined) {
      //  album.tracks = tracks;
    //}
    
   // return album;
//}

// Testing the function
//const album1 = make_album("Artist1", "Album1");
//console.log(album1);

//const album2 = make_album("Artist2", "Album2", 12);
//console.log(album2);

//const album3 = make_album("Artist3", "Album3", 8);
//console.log(album3);

//assigment 40 to 42

//function show_magician(name:string[]) :void {
    //for(let magician of name){
    //    console.log(magician)
  //  }


//}
//let magicians : string[] = ["haseeb", "qadeer", "raqeeb"]
 
//show_magician(magicians)

//function make_great(magicians: string[]): void {
    //for (let i = 0; i < magicians.length; i++) {
    //    magicians[i] = " \n the Great " + magicians[i];
  //  }
//}

// Function to show magicians
//function show_magicians(magicians: string[]): void {
    //for (let magician of magicians) {
    //    console.log(magician);
  //  }
//}


// Array of magician's names
//let magician: string[] = ["haseeb", "qadeer", "raqeeb"]
// Call make_great to modify the array
//make_great(magicians);

// Call show_magicians to see the modified list
//show_magicians(magicians);


//function make_greats(magicians: string[]): string[] {
    //let modifiedMagicians: string[] = [];
    //for (let magician of magicians) {
      //  modifiedMagicians.push("the Great " + magician);
    //}
  //  return modifiedMagicians;
//}

// Function to show magicians
//function showe_magicians(magicians: string[]): void {
    //for (let magician of magicians) {
    //    console.log(magician);
  //  }
//}

// Original array of magician's names
//const originalMagicians: string[] = ["haseeb", "qadeer", "raqeeb"];

// Call make_great with a copy of the original array
//const greatMagicians: string[] = make_greats([...originalMagicians]);

// Call show_magicians to show the original array
//console.log("\nOriginal Magicians:");
//show_magicians(originalMagicians);

// Call show_magicians to show the array with "the Great" added
//console.log("\nMagicians with 'the Great' added:");
//show_magicians(greatMagicians);


//assigment 43

//function order_sandwich(...item : string[]):void{
   // for(let items of item)
  //   console.log("- " + items)
//}
//order_sandwich('cheese','tomato')
//order_sandwich('peanut butter')
//order_sandwich('jelly')

// assigment 44

//interface Car {
    //manufacturer: string;
  //  model: string;
  //  [key: string]: any; // Allow arbitrary properties
//}

//function storeCarInfo(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): Car {
  //  const carInfo: Car = {
        //manufacturer: manufacturer,
      //  model: model
    //};

    // Assign additional properties
    //extras.forEach(extra => {
        //const key = Object.keys(extra)[0];
      //  carInfo[key] = extra[key];
    //});

  //  return carInfo;
//}

// Call the function with required information and additional properties
//const car = storeCarInfo("Toyota", "Camry", {color: "blue"}, {year: 2023});

// Print the object to verify the information
//console.log(car);


























