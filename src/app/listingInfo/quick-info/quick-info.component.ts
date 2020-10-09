import { Component, Input, OnInit } from '@angular/core';
import { TitlelistingService } from '../titlelisting-services/titlelisting.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quick-info',
  templateUrl: './quick-info.component.html',
  styleUrls: ['./quick-info.component.css']
})
export class QuickInfoComponent implements OnInit {

 //global variables
 public location; 
 public reviews;
 public revCount = 0;
 public hostmessage;
 public roomspace;
 public house;
 public entirehouse;
 public cleanliness;
 public host;
 public superhosttext;
 public cancellation;
 public mainbody;
 public othernotes;
 public superhost;
 public truncated;
 public notTruncated;
 public show: boolean = false;
 public buttonName: any = true;
 public other: any = false;
 
 constructor(private tlService: TitlelistingService, private route: ActivatedRoute) { }
 ngOnInit(): void {
   this.getLoc(this.route.snapshot.params.id);
   this.getHostMessage(this.route.snapshot.params.id)
 }
 getLoc(id: number){
   this.tlService.getLoc(id).subscribe(data => {
     this.location = data;
     this.roomspace = this.location.roomspace;
     this.host = this.location.host;
     this.superhost = this.location.superhost;
    });
 }
 getHostMessage(id: number){
   this.tlService.getHostMessage(id).subscribe(data =>{ 
    this.hostmessage = data; 
    this.cleanliness = this.hostmessage.cleanliness;
    this.house = this.hostmessage.entirehouse;
    this.superhosttext = this.hostmessage.superhost;
    this.mainbody = this.hostmessage.mainbody;
    this.cancellation = this.hostmessage.cancellation; 
    this.othernotes = this.hostmessage.othernotes;
     this.spaceDiv(this.hostmessage.hostspace);
    })
  }
  
  spaceDiv(host){
    var newtrunc = host.split("<br/>"); 
    this.truncated = newtrunc[0];
    this.notTruncated = newtrunc.slice(1);
  }

  toggle(){
    this.show = !this.show;
    if (this.show){
      this.buttonName = false;
      this.other = true;
    }
    else {
      this.buttonName=true;
      this.other = false;
    }
  }

}
