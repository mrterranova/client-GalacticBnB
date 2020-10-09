import {Component, OnInit, Directive, Input, Output, EventEmitter} from '@angular/core';
import { MptsServiceService } from '../mpts/mpts-service/mpts-service.service';
import { ActivatedRoute } from '@angular/router';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})

export class FooterComponent implements OnInit {
  constructor(
    private mptsService: MptsServiceService,
    private route: ActivatedRoute
  ) {}
  public location;
  public locates = {};
  public lArr = [];
  public sameArr;
  public state = "";
  public locsLength;

  ngOnInit(): void {
    this.getLocate(this.route.snapshot.params.id);
    this.getLocates();
  }

  getLocate(id: number) {
    this.mptsService.getLocate(id).subscribe( loc => {
      this.location = loc;
      this.fullStateName(this.location.state_territory);
      this.getSameStateLocates(this.location);
    });
  }

  getLocates() {
    this.mptsService.getLocates().subscribe((data) => {
      this.locates = data;
      this.locsLength = Object.keys(data).length;
    });
  }

  getSameStateLocates(location) {
    this.mptsService.getLocates().subscribe((data) => {
      this.lArr = Object.values(data);
      this.sameArr = this.lArr.filter(loc => loc.state_territory === location.state_territory && loc.id !== location.id);
      // console.log(this.sameArr);
    });
  }

  fullStateName( state ) {
    switch (state){
      case "AL":
        this.state = "Alabama";
        break;
      case "AK":
        this.state = "Alaska";
        break;
      case "FL":
        this.state = "Florida";
        break;
      case "GA":
        this.state = "Georgia";
        break;
      case "CO":
        this.state = "Colorado";
        break;
      case "NY":
        this.state = "New York";
        break;
      case "CA":
        this.state = "California";
        break;
      case "MO":
        this.state = "Missouri";
      case "VT":
        this.state = "Vermont";
        break;
      case "SD":
        this.state = "South Dakota";
        break;
      case "TN":
        this.state = "Tennessee";
        break;
      case "WY":
        this.state = "Wyoming";
        break;
      case "TX":
        this.state = "Texas";
        break;
    }
  }

}
