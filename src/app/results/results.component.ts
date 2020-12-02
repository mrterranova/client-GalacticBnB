import { Component, OnInit } from '@angular/core';
declare var jQuery: any; 

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})

export class ResultsComponent implements OnInit {
  name = 'Angular';

  selection: string;
  price_expand: boolean = false;
  constructor() {}

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function(){
        var apigatewayendpoint = 'https://search-galacticlistings-t5gsylsxiuyovdyaa7vwlwldce.us-east-1.es.amazonaws.com/serverdata/_search/';

var loadingdiv = $('#loading');
var noresults = $('#noresults');
var resultdiv = $('#results');
var searchbox = $('input#search');
var timer = 0;

// Executes the search function 250 milliseconds after user stops typing
searchbox.keyup(function () {
  clearTimeout(timer);
  timer = setTimeout(search, 250);
});

async function search() {
  // Clear results before searching
  noresults.hide();
  resultdiv.empty();
  loadingdiv.show();
  // Get the query from the user
  let query = searchbox.val();
  // Only run a query if the string contains at least three characters
  if (query.length > 1) {
    // Make the HTTP request with the query as a parameter and wait for the JSON results
    let response = await $.get(apigatewayendpoint, {
      q: `${query}*`,
      size: 25
    }, 'json');
    // Get the part of the JSON response that we care about
    let results = response['hits']['hits'];
    if (results.length > 0) {
      loadingdiv.hide();
      // Iterate through the results and write them to HTML
      resultdiv.append('<p>Found ' + results.length + ' results.</p>');
      console.log(results)
      for (var item in results) {
        let name = results[item]._source.title;
        let price = results[item]._source.price;
        let beds = results[item]._source.beds;
        let pic = results[item]._source.pic1url;
        let bathrooms = results[item]._source.bathrooms;
        let bedrooms = results[item]._source.bedrooms;
        // Construct the full HTML string that we want to append to the div
        resultdiv.append('<div class="result">' +
          '<div><h2>' + name + '</h2><p>' + "Price: $" + price + ' beds: '+beds+' &mdash;'+'  bedrooms: '+bedrooms +'  &mdash; bathrooms: '+bathrooms  + ' </p>' +'<img src="' + pic + '"> </div></div>');
      }
    } else {
      noresults.show();
    }
  }
  loadingdiv.hide();
}

// Tiny function to catch images that fail to load and replace them
function imageError(image) {
  image.src = 'images/no-image.png';
}
      });
    })(jQuery);
  }

//elasticsearch imported here...



  
//functionality of the map here...
  hideMap() {
    document.getElementById('scroll-section').style.width = '100vw';
    document.getElementById('scroll-section').style.zIndex = '2';
    document.getElementById('map-section').style.visibility = 'hidden';
  }

//individual child components for the elasticsearch here...
  showAlert(variable){
    console.log(variable);
  }

}
