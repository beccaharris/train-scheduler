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
  // Variables // 
  // ========= //
  var database = firebase.database();

  $('#add-train').on("click", function(event) {
    event.preventDefault();
    // Grab user input //
    var trainName = $('#train-name').val().trim();
    var trainDestination = $('#train-destination').val().trim();
    var trainTime = $('#train-time').val().trim();
    var trainFrequency = $('#train-frequency').val().trim();
  
    var newTrain = {
      trainName: trainName,
      trainDestination: trainDestination,
      trainTime: trainTime,
      trainFrequency: trainFrequency
    };
  
    var trainName = $('#train-name').val(null);
    var trainDestination = $('#train-destination').val(null);
    var trainTime = $('#train-time').val(null);
    var trainFrequency = $('#train-frequency').val(null);
  
    database.ref().push(newTrain)
  })

})