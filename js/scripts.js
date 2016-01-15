
$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    var weatherInput = $("input#weather").val();
    var activitiesInput = $("select#activities").val();
    var budgetInput = $("select#budget").val();
    var relaxationInput = $("select#relaxation").val();
    var cultureInput = $("select#culture").val();


    if (VarInput === 'variablegoeshere' && VarInput=== 'variablegoeshere') {
       var vacationMatch = "Spain";
    if (VarInput === 'variablegoeshere' && VarInput=== 'variablegoeshere') {
       var vacationMatch = "Spain";
    if (VarInput === 'variablegoeshere' && VarInput=== 'variablegoeshere') {
        var vacationMatch = "Spain";


    $("span#match").text(vacationmatch);
    $("#vacationmatch").show();

    event.preventDefault();
  });
});
