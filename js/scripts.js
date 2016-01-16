
$(document).ready(function() {
  $("form#vacation").submit(function(event) {
   var weatherInput = $("select#weather").val();
    var activityInput = $("select#activity").val();
    var budgetInput = $("select#budget").val();
    var relaxInput = $("select#relax").val();
    var cultureInput = $("select#culture").val();

    if (weatherInput=== "weather1" && activityInput=== "activity1" && budgetInput=== "budget1") {
      var vacationmatch = "Tazmania, Australia is the vacation destination for you!";
    }
    if (weatherInput=== "weather1" && activityInput=== "activity1" && budgetInput=== "budget2") {
      var vacationmatch = "Sedona, Arizona is the vacation destination for you!";
    }
    if (weatherInput=== "weather1" && activityInput=== "activity2" && budgetInput=== "budget2") {
      var vacationmatch = "Orlando, Florida is the vacation destination for you!";
    }
    if (weatherInput=== "weather2" && activityInput=== "activity1" && budgetInput=== "budget2") {
      var vacationmatch = "Valdez, Alaska is the vacation destination for you!";
    }
    if (weatherInput=== "weather2" && activityInput=== "activity2" && budgetInput=== "budget2") {
      var vacationmatch = "Bend, Oregon is the vacation destination for you!";
    }
    if (weatherInput=== "weather2" && activityInput=== "activity1" && budgetInput=== "budget1") {
      var vacationmatch = "Garmisch-Partenkirchen, Germany is the vacation destination for you!";
    }
    if (weatherInput=== "weather2" && activityInput=== "activity2" && budgetInput=== "budget1") {
      var vacationmatch = "Queenstown, New Zealand is the vacation destination for you!";
    }
    if (weatherInput=== "weather1" && activityInput=== "activity2" && budgetInput=== "budget1") {
      var vacationmatch = "Rio De Janeiro, Brazil is the vacation destination for you!";
    }

    $("span#match").text(vacationmatch);
    $("#vacationmatch").show();

    event.preventDefault();


  });
});
