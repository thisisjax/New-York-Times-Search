$(document).ready(function () {
    console.log("ready!");

    var numRecords;
    var search;
    var startDate;
    var endDate;

    //On click Search...
    $("#searchBtn").on("click", function () {
        console.log("button works");
        event.preventDefault();
        search = $("#searchTerm").val().trim();
        console.log(search);
        numberRecords = $("#numberRecords").val();
        console.log(numberRecords);
        startDate = $("#startYear").val();
        console.log("Start Date: " + startDate);
        endDate = $("#endYear").val();
        console.log("End Date: " + endDate);

        //Add function

    })

    // data teams code--------------------------------------------------

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "cb6873945bc241f29505ab2f15970caa",
        //   q is search term
        'q': "trump",
        //   began date
        'began_date': "20180614",
        'end_date': "20180727"

    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        // this is were we build elements and append to UI sites
        for (let i = 0; i < result.response.docs.length; i++) {
            console.log("hello");
            // make div to contain all content
            var article = $("<div>");
            // each aritcle and grab the thumbnail and bind it to the article
            var imageURL = result.response.docs[i].multimedia[3].url;
            console.log("url" + imageURL);
            // now linking image and put the url on the img attr.
            var preFACE = "https://www.nytimes.com/"
            var image = $("<img>").attr("src", preFACE + imageURL);
            console.log(image);
            //  now append to article div

            var title = $("<h1>").text(result.response.docs[i].headline.main);
            console.log(title);

            var paper = $("<p>").text(result.response.docs[i].source);
            console.log(paper);
            var summary = $("<p>").text(result.response.docs[i].snippet);

            $(article).append(image).append(title).append(paper).append(summary);
            console.log(article);
            $("body").append(article);


        }
        //   console.log(response);
    }).fail(function (err) {
        throw err;
    });



});




//On click Clear..
$("#clearBtn").on("click", function () {
    $("#showResults").empty();


})