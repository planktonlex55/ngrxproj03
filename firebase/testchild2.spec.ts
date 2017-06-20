//describe("f1", function(){});

// Initialize Firebase
var firebase = require ('firebase');
var uuid = require ('uuid');

 var config = {
   apiKey: "AIzaSyABoMrguKqlNldGKO7YU6dqJENbQ3OTVLA",
   authDomain: "ngrxproj03.firebaseapp.com",
   databaseURL: "https://ngrxproj03.firebaseio.com",
   projectId: "ngrxproj03",
   storageBucket: "",
   messagingSenderId: "442403274153"
 };

 //firebase.initializeApp(config);
 // Initialize the default app
 var defaultApp = firebase.initializeApp(config);
 var db = defaultApp.database();

 // console.log(uuid.v1()); //there are other methods like v2, v3, v4.
//step1:- basic write operations
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
var userId1 = uuid.v1();
writeUserData(userId1, 'plankton', 'planktonlex55@gmail.com', 'http://i.imgur.com/WOu31KQ.jpg');

//step2: read only once
var username, email, profile_picture;
function myReadFunction(){
  return firebase.database().ref('/users/' + userId1).once('value');
}

var myReadVal = myReadFunction();
myReadVal.then(function(snapshot){
  var xx = snapshot.val().username;
  cb (xx, snapshot.val().email, snapshot.val().profile_picture);
});

function cb(x, y, z ){
  console.log('x is: ' + x + y + z );
  username = x;  email = y; profile_picture = z;
}

console.log('1---------------------'); //executes first
console.log(username, email, profile_picture); //executes last.
console.log('2---------------------'); //executes second

setTimeout(function(){}, 5000);

fdescribe("firebase write/read suite", function(){
  it("firebase write/read 1.1", function(){
    expect(username).toEqual('plankton');
  });
  it("firebase write/read 1.2", function(){
    expect(email).toEqual('planktonlex55@gmail.com');
  });
});
