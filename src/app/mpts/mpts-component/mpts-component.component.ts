import { Component, OnInit } from '@angular/core';
import { MptsServiceService } from '../mpts-service/mpts-service.service'

@Component({
  selector: 'app-mpts-component',
  templateUrl: './mpts-component.component.html',
  styleUrls: ['./mpts-component.component.css']
})
export class MptsComponentComponent implements OnInit {
//global variables
public locates;
public imges;
public reviews;
public revarr = [];
public count = 0;
public len = 0;
public num = 78;

  constructor(private mptsService: MptsServiceService) { }

  ngOnInit() {
    this.getLocates();
    this.getImges();
    this.getReviews();
  }

  //get locations from location table
  getLocates()  {
      this.mptsService.getLocates().subscribe(
        data => { this.locates = data; this.len = this.locates.length},
        () => {
          for (var i=0; i < this.locates.length; +i++){
          }
        }
      );
  }

  // get images from image table
  getImges(){
    this.mptsService.getImgs().subscribe(
      data => { this.imges = data }, 
      err => {console.log("Imgs errrrrr")},
    )
  }

  //get reviews and map reviews into an array. Use index to keep count of reviews by locationReviewed number.
  getReviews(){
    this.mptsService.getReviews().subscribe(data => {this.reviews = data;
      this.reviews.map( rev =>{
        //if null error handled
          if(this.revarr[rev.locationReviewed] ==null){
            this.revarr[rev.locationReviewed] = 1;
            //add 1 to every location reviewed index if > 1
          } else {
            this.revarr[rev.locationReviewed] += 1;
          }
      })
    }
      ), 
    () => {
      console.log("Hey this")
      console.log(this.revarr);
    }
  }

  
  scrollLeft(){
    //More dynamic solution but not fully fleshed out
    // document.getElementById("pag-mpts-clickable").scrollLeft -= window.innerWidth-175;
    document.getElementById("pag-mpts-clickable").scrollLeft -= 1248;

    //this moves on computers full screen - hard coded solution
    var count = parseInt(document.getElementById("pgnum1").innerHTML)-1;
    //attentiong more dynamic features - it isn't functioning(would have to revisit later)
    if(window.innerWidth==1248){
      console.log("-", window.innerWidth)
      count = parseInt(document.getElementById("pgnum2").innerHTML);
      document.getElementById("pag-mpts-clickable").scrollLeft = 4992;
      //if the count reachs 0 then change the page count to the number of pages and scroll to the last page -hardcoded.
    } else if(count === 0){
      count = parseInt(document.getElementById("pgnum2").innerHTML);
      document.getElementById("pag-mpts-clickable").scrollLeft = 4992;
    }
      document.getElementById("pgnum1").innerHTML = count+"";
  }

  scrollRight(){
    console.log("Scrolling Right");
    //More dynamic solution but not fully fleshed out
    // document.getElementById("pag-mpts-clickable").scrollLeft += window.innerWidth-175;

    //this moves on computers full screen - hard coded solution
    document.getElementById("pag-mpts-clickable").scrollLeft += 1248;
    // keeps track of the page numbering through variable count
    var count = 1 + parseInt(document.getElementById("pgnum1").innerHTML);
    //if the count reaches the end of the document, then make sure the page number does not exceed the number of pages
    if(count == parseInt(document.getElementById("pgnum2").innerHTML)){
      count = parseInt(document.getElementById("pgnum2").innerHTML)
      //if the count does exceed the number of pages, revert count to 1 and scroll back to beginning
    } else if (count > parseInt(document.getElementById("pgnum2").innerHTML)) {
      document.getElementById("pag-mpts-clickable").scrollLeft = 0;
      count = 1;
    } 
    //print page count as string
    document.getElementById("pgnum1").innerHTML = count+"";
  }

  //trying out dynamic styling - it works!
  dynamicWidth(){
    this.endPgCount(this.len/4)
    return this.num*(this.len/4)+'rem'
  }

  endPgCount(pgcount){
    document.getElementById("pgnum2").innerHTML = Math.ceil(pgcount)+"";
  }
}

