
$(document).ready(function() {
  $("form#vacation").submit(function(event) {
   var weatherInput = $("select#weather").val();
    var activityInput = $("select#activity").val();
    var budgetInput = $("select#budget").val();
    var relaxInput = $("select#relax").val();
    var cultureInput = $("select#culture").val();

    if (weatherInput=== "weather1" && activityInput=== "activity1" && budgetInput=== "budget1") {
      var vacationmatch = "A";
    }
    if (weatherInput=== "weather1" && activityInput=== "activity1" && budgetInput=== "budget2") {
      var vacationmatch = "B";
    }
    if (weatherInput=== "weather1" && activityInput=== "activity2" && budgetInput=== "budget2") {
      var vacationmatch = "C";
    }
    if (weatherInput=== "weather2" && activityInput=== "activity1" && budgetInput=== "budget2") {
      var vacationmatch = "D";
    }
    if (weatherInput=== "weather2" && activityInput=== "activity2" && budgetInput=== "budget2") {
      var vacationmatch = "E";
    }
    if (weatherInput=== "weather2" && activityInput=== "activity1" && budgetInput=== "budget1") {
      var vacationmatch = "F";
    }
    if (weatherInput=== "weather2" && activityInput=== "activity2" && budgetInput=== "budget1") {
      var vacationmatch = "G";
    }
    if (weatherInput=== "weather1" && activityInput=== "activity2" && budgetInput=== "budget1") {
      var vacationmatch = "H";
    }

    $("span#match").text(vacationmatch);
    $("#vacationmatch").show();

    event.preventDefault();


  });
});
