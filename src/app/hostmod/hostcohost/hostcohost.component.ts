import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';
import { CohostDataService } from '../../cohost-data-service/cohost-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hostcohost',
  templateUrl: './hostcohost.component.html',
  styleUrls: ['./hostcohost.component.css']
})
export class HostcohostComponent implements OnInit {
  @Input('hostdata') hostData: Data; // tslint:disable-line: no-input-rename
  constructor(private cohostDataService: CohostDataService,  private route: ActivatedRoute) { }
  cohostData1: Data = {};
  secondCohostBuild: Data = this.cohostData1.nametwo;
  loadCohostData(id : number){
    this.cohostDataService.getCohostData(id).subscribe(data => this.cohostData1 = data);
  }
  ngOnInit() {
    this.loadCohostData(this.route.snapshot.params.id);
  }

}
