import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { HostDataService } from '../../host-data-service/host-data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hostslice',
  templateUrl: './hostslice.component.html',
  styleUrls: ['./hostslice.component.css']
})
export class HostsliceComponent implements OnInit {
  constructor(private hostDataService: HostDataService, private route: ActivatedRoute) { }
  hostdata: Data = {};
  mptsdata: Data = {};
  loadHostData(id:number) {
    this.hostDataService.getHostData(id).subscribe(data => this.hostdata = data);
  }
  loadMPTSData(id : number) {
    this.hostDataService.getMptsData(id).subscribe(data => this.mptsdata = data);
  }
  ngOnInit() {
    this.loadHostData(this.route.snapshot.params.id);
    this.loadMPTSData(this.route.snapshot.params.id);
  }

}
