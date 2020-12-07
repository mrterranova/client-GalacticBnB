import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
declare var jQuery: any;
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  expand: boolean = false;

  showTop: boolean = false;

  name = 'Angular';
  selection: string;
  price_expand: boolean = false;
  public guests : number; 
  public location : string;

  constructor( private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.guests = params["guests"]; 
      this.location = params["location"];
    }); 
  }

  public place : string;

  ngOnInit(): void {
    console.log(this.location)
    this.searchPage();
  }

  searchPage(){
    this.elasticsearch(this.location);
  }

  //elasticsearch imported here...
  elasticsearch(variable){
    (function ($) {
      $(document).ready(function () {
        var parameters = variable;
        var apigatewayendpoint =
          'https://search-galacticlistings-t5gsylsxiuyovdyaa7vwlwldce.us-east-1.es.amazonaws.com/serverdata/_search/';

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

        search();

        async function search() {
          // Clear results before searching
          noresults.hide();
          resultdiv.empty();
          loadingdiv.show();
          // Get the query from the user
          let query = parameters + searchbox.val();

          // Only run a query if the string contains at least three characters
          if (query.length > 1) {
            // Make the HTTP request with the query as a parameter and wait for the JSON results
            let response = await $.get(
              apigatewayendpoint,
              {
                q: `${query}*`,
                size: 25,
              },
              'json'
            );
            // Get the part of the JSON response that we care about
            let results = response['hits']['hits'];

            if (results.length > 0) {
              console.log("Results: " + results)
              loadingdiv.hide();
              // Iterate through the results and write them to HTML
              resultdiv.append(`<h3>Explore all ${results.length} stays.</h3>`);
              console.log(results);
              for (var item in results) {
                let name = results[item]._source.title;
                let price = results[item]._source.price;
                let beds = results[item]._source.beds;
                let pic = results[item]._source.pic1url;
                let bathrooms = results[item]._source.bathrooms;
                let bedrooms = results[item]._source.bedrooms;
                // Construct the full HTML string that we want to append to the div
                resultdiv.append(
                  $('<div></div>').addClass("result").css({
                    "display": "grid",
                    "grid-template-columns": "auto 1fr",
                    "height": "200px",
                  })
                    .append(
                      `<img class="result-img" src="${pic}" 
                      style="height: 100%;
                      width: 300px;
                      float: left;
                      display: block;
                      border-radius: 25px;">`)
                    .append(
                      $('<div></div>').addClass("result-info").css({
                        "justify-content": "start",
                        "display": "grid",
                        "grid-auto-rows": "max-content",
                        "margin-left": "1em",
                        "margin-top": "0px"
                      })
                        .append(
                        `<h2>${name}</h2>
                      <p style="margin-bottom: 0">
                        Price: $${price} 
                        beds: ${beds} &mdash;  
                        bedrooms: ${bedrooms}  &mdash; 
                        bathrooms: ${bathrooms} 
                      </p>`))
                );
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

  //functionality of the map here...
  hideMap() {
    document.getElementById('scroll-section').style.width = '100vw';
    document.getElementById('scroll-section').style.zIndex = '2';
    document.getElementById('map-section').style.visibility = 'hidden';
  }

  otherPlaces(place) {
    this.place = place;
    this.elasticsearch(place)
    return place;
  }
}
