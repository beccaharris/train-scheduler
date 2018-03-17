$(document).ready(function() {

  $('table').hide();
  // Initialize Firebase // 
  // =================== //
  var config = {
    apiKey: "AIzaSyDYzFn1VQN9pDX3lOS9EprpSP6zHIGxnIk",
    authDomain: "train-schedule-tracker.firebaseapp.com",
    databaseURL: "https://train-schedule-tracker.firebaseio.com",
    projectId: "train-schedule-tracker",
    storageBucket: "",
    messagingSenderId: "921252828224"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // Function on click of submit (add-train) button // 
  $('#add-train').on("click", function(event) {
    event.preventDefault();
    // Grab user input //
    var trainName = $('#train-name').val().trim();
    var trainDestination = $('#train-destination').val().trim();
    var trainTime = $('#train-time').val().trim();
    var trainFrequency = $('#train-frequency').val().trim();
    // Define the object that's gonna be pushed to Firebase
    var newTrain = {
      trainName: trainName,
      trainDestination: trainDestination,
      trainTime: trainTime,
      trainFrequency: trainFrequency
    };
    // Clear out input fields //
    var trainName = $('#train-name').val(null);
    var trainDestination = $('#train-destination').val(null);
    var trainTime = $('#train-time').val(null);
    var trainFrequency = $('#train-frequency').val(null);
    // Push the newTrain object to Firebase db //
    database.ref().push(newTrain)
  })

  // Will run after push of newTrain //
  database.ref().on('child_added', function(childSnapshot, prevChildKey) {
    // Store everything into a variable //
    var trainName = childSnapshot.val().trainName
    var trainDestination = childSnapshot.val().trainDestination
    var trainTime = childSnapshot.val().trainTime
    var trainFrequency = childSnapshot.val().trainFrequency
    
    // Get the minutes until the next train // 
    var trainFrequency = parseInt(trainFrequency)
    var trainTimeConverted = moment(trainTime, 'HH:mm').subtract(1, 'years');
    var currentTime = moment();
    var diffTime = moment().diff(moment(trainTimeConverted), 'minutes');   
    var tRemainder = diffTime % trainFrequency;
    var minutesTillTrain = trainFrequency - tRemainder;

    
  })
})