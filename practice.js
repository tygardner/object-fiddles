//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  var me = {
    name: "Tyler",
    age: "26",
  };

  alert(me.name);






//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

var favoriteThings = {
  band: "Dashboard Confessionals",
  food: "Steak and Aspargus",
  person: "Emily-My Hot Wife",
  book: "Sword of Truth",
  movie: "Dark Knight Series",
  holiday: "Christmas",
};

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = "Toyota Camry"; 


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";



//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

var backPack = {};
var item = 'firstPocket';

backPack[item] = 'chapstick';
backPack.color = 'black';




//After you do the above, alert your entire backPack object.

 alert(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

console.log(backPack);




//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

var me = {
  name: "Tyler Gardner",
  age: "26",
  height: "5'11''",
  gender: "Male",
  married: "Yes",
  eyeColor: "Brown",
  hairColor: "Brown",
}

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

var looper = function () {
    for(keyName in me) {
        alert(me[keyName]);
    }
};

looper();

or

for (keyName in me) {
  alert(me[keyName]);
}



//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

var album = {
  Hello: "2:30",
  Goodmorning: "4:49",
  Afternoon: "5:23",
  Goodnight: "2:20",
  Bye: "2:12",
}
//Now, loop through your album object alerting every song title individually.

for (keyName in album){
  alert(keyName);
}




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

var states = {
  Utah = 5000000,
  California = 50000000,
  Wyoming = 10,
  Kansas = 3000000,
  Hawaii = 2000000,
}

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  for (keyName in states){
    if(states[keyName] > 30000){
      alert(keyName);
    }
 }




//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}



// truthy: Things that aren't falsey
// falsey: 0, false, null, undefined, NaN,, '', 
//   can test if(0, etc..){alert("hi")}

// var jake = {name: 'jake', age: null, wisdom: 0}
// if(jake.age){alert("true")}

// for (keyName in jake){
//   if(!jake[keyName]){
//     delete jake[keyname];
//   }
// }


/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

for (keyName in user){
  if(!user[keyName]){
    delete user[keyname];
  }
}

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user.name = "Tyler Gardner";
user.pwHash = "Hello Everyone"
user.username = "tygardner11"




//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

user.name = 'Tyler S McGinnis';
user.email = 'tyler.mcginnis@devmounta.in';

//Now call the sayName method that's on the user object which will alert the users email

user.sayName();





//NEXT PROBLEM




//Create an empty object called methodCollection.

var methodCollection = {}

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

   methodCollection.alerthello = function(){
      alert('hello');
    };
    methodCollection.logHello = function(){
      console.log('hello');
    };


//Now call your alertHello and logHello methods.

methodCollection.alerthello();
methodCollection.console.log();



//NEXT PROBLEM




var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
}

/*Above you're given an empty array with four objects. Fill the devMountainEmployees
array with those four objects. After that console.log the length of the Array and make
sure that it's equal to 4. */

devMountainEmployees.tyler(tyler, cahlan, ryan, colt);

console.log(devMountainEmployees.length);



/*Now let's say Cahlan has a mental breakdown and has to take a leave of absense to 'find himself'.
Loop through your devMountainEmployees until you find cahlan, then remove him from the array.*/

for (var i = 0; i<devMountainEmployees.length; i++){
  if(devMountainEmployees[i].name === 'Cahlan'){
    devMountainEmployees.splice(i, 1);
  }
}




//NEXT PROBLEM




/*Now we're going to combine what we've learned today (objects) with what we learned
yesterday (arrays). Yeah, take a deep breathe. You're ready for this, promise.
Let's think back to our itunes example (tylermcginnis.com/itunes).
Notice that when you type in an artist name, iTunes gives us back a LOT of data.
What they're really giving us is an Array full of Objects. It probably looks something
like this. */

var data = [
    {
        artist: 'shakira',
        album: 'hips don\'t lie',
        tracks: 16,
    },
    {
        artist: 'shakira',
        album: 'mariposa',
        tracks: 12,
    },
    {
        artist: 'shakira',
        album: 'greatest hits',
        tracks: 19
    }
];



/*A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
of Data is to have an Array full of objects. */

//Create an empty array called users.

 var users = [];

/*Now add three user objects to your users array. Each user object should contain the
following properties. name, email, password, username.*/

//include this as one of the objects in your array.
var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
}

var user2 = {
    name: 'Tyler Gardner',
    email: 'tygardner16@gmail.com',
    password: 'helloworld',
    username: 'hieveryone'
}

var user3 = {
    name: 'James Bond',
    email: 'iam007@gmail.com',
    password: 'coolbeans',
    username: 'goldeneye'
}

users.push(user1, user2, user3);

/*Now you have a very common data structure. Twitter is a good use case.
It's easy to imagine that your followers list on Twitter is an Array full or objects
and those objects contain properties about the specific person you follow.*/

/*Now let's say that Tyler decided to delete his account. Loop through your array of
objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
Once you find the particular indice he's located in, delete him from the array.*/

  for (var i = 0; i < users.length; i++){
    if(users[i].name === 'Tyler McGinnis'){
    users.splice(i, 1);
  }
}

//The activity we just did is very much how data works in 'the real world'.



