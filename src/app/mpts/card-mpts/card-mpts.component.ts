import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';
import { MptsServiceService } from '../mpts-service/mpts-service.service'
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-card-mpts',
  templateUrl: './card-mpts.component.html',
  styleUrls: ['./card-mpts.component.css']
})
export class CardMptsComponent implements OnInit {
//input data from mpts-component ts file
@Input('locate') locate: Data;
@Input('img') img: Data;
@Input('revarr') revarr: Array<String>;

constructor(private mptsService: MptsServiceService, private route: ActivatedRoute) { 
  }
  //global variables
  public reviews : Data = {};
  public revNum : Number;
  public updateForm: FormGroup;
  public heartReg = {};
  public heart = [];

  //update form
  ngOnInit(): void {
    // updating the heart(favorite) feature by click changes boolean value
    this.updateForm = new FormGroup({
      rating : new FormControl(this.locate.rating),
      numberofratings : new FormControl(this.locate.numberofratings),
      superhost : new FormControl( this.locate.superhost),
      price : new FormControl(this.locate.price),
      street : new FormControl( this.locate.street),
      city : new FormControl(this.locate.city),
      state_territory : new FormControl( this.locate.state_territory),
      country : new FormControl(this.locate.country),
      zip : new FormControl( this.locate.zip),
      international : new FormControl( this.locate.international),
      host : new FormControl( this.locate.host),
      title : new FormControl(this.locate.title),
      beds : new FormControl( this.locate.beds),
      bathrooms : new FormControl(this.locate.bathrooms),
      roomspace : new FormControl( this.locate.roomspace),
      favorite : new FormControl( true)
    })
  }

  submitHeart(id){
    // alert("Update 1 heart")
    // console.log(JSON.stringify(this.updateForm))
    // this.mptsService.getLocate(id).subscribe(
    //   data => {this.heartReg = data;
    //     this.mptsService.updateLocate(JSON.stringify(this.updateForm), id); 
    //     alert("Update")
    //   })
  }
  
  
  fillup(id){
    //works only to fill the star - does not unfill star
    // if(document.getElementById("heart"+id).dataset.toggle == "off"){
      document.getElementById("heart"+id).style.fill = "#be09a0";
      document.getElementById("heart"+id).dataset.toggle = "on";
    // } else {
    //   document.getElementById("heart"+id).style.fill = "rgba(0, 0, 0, 0.5);";
    //   document.getElementById("heart"+id).dataset.toggle = "off";
    // }
  };

  //because it was whining on the ngIf reviews that it wasn't a number
  makeInt(reviews){
    return parseInt(reviews);
  }
}
