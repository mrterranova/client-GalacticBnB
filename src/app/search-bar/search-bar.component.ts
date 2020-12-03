import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  expand: boolean = false;

  showTop: boolean = false;
  adults = 0;
  children = 0;
  infants = 0;
  guests_expand: boolean = false;

  constructor() {}

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function () {
        var apigatewayendpoint =
          'https://search-galacticlistings-t5gsylsxiuyovdyaa7vwlwldce.us-east-1.es.amazonaws.com/serverdata/_search/';

         const loadingdiv = $('#loading');
         const noresults = $('#noresults');
         const resultdiv = $('#results');
      });
    });
  }

  receiveAdults($event) {
    this.adults = $event;
  }

  receiveChildren($event) {
    this.children = $event;
  }

  receiveInfants($event) {
    this.infants = $event;
  }

  query = document.getElementById('searchInput');
  value = '';
  update(value: string) {
    this.value = value;
  }

  test() {
    console.log(this.value + '*');
  }


  async search() {
  //   // Clear results before searching
  //   noresults.hide();
  //   resultdiv.empty();
  //   loadingdiv.show();
  //   // Get the query from the user
  //   let query = this.value;
  //   // Only run a query if the string contains at least two characters
  //   if (query.length > 2) {
  //     // Make the HTTP request with the query as a parameter and wait for the JSON results
  //     let response = await $.get(apigatewayendpoint, {
  //       q: `${query}*`,
  //       size: 25
  //     }, 'json');
  //     // Get the part of the JSON response that we care about
  //     let results = response['hits']['hits'];
  //     if (results.length > 0) {
  //       loadingdiv.hide();
  //       // Iterate through the results and write them to HTML
  //       resultdiv.append('<p>Found ' + results.length + ' results.</p>');
  //       console.log(results)
    
  //     } else {
  //       noresults.show();
  //     }
  //   }
  //   loadingdiv.hide();
   }

}
