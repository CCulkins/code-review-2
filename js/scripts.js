
$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var weatherInput = $("input#weather").val();
    var activitiesInput = $("select#activities").val();
    var budgetInput = $("select#budget").val();
    var relaxationInput = $("select#relaxation").val();
    var cultureInput = $("select#culture").val();

    if ("sum1" > "sum2" && "sum1" > "sum3" && "sum2" >= "sum3") {
        var vacationMatch = "Sun";
  //  if (VarInput === >7 <12) {
  //     var vacationMatch = "Snow";
  //  if (VarInput === >11 <16) {
  //      var vacationMatch = "Mid";


    $("span#match").text(vacationmatch);
    $("#vacationmatch").show();

    event.preventDefault();
  });
});
