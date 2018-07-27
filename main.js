$( document ).ready(function() {
    console.log( "ready!" );

    var numRecords;
    var search;
    var startDate;
    var endDate;

//On click Search...
$("#searchBtn").on("click", function(){
    console.log("button works");
    event.preventDefault();
    search = $("#searchTerm").val().trim();
    console.log(search);
    numberRecords = $("#numberRecords").val();
    console.log(numberRecords);
    startDate = $("#startYear").val();
    console.log("Start Date: " +startDate);
    endDate = $("#endYear").val();
    console.log("End Date: " + endDate);

//Add function

})

//On click Clear..
$("#clearBtn").on("click", function(){
    $("#showResults").empty();
    
})
});