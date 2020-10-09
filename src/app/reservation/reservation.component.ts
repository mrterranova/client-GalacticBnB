import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import {HostDataService} from '../host-data-service/host-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private hostDataService: HostDataService, private route: ActivatedRoute) { }
  mptsdata: Data = {};
  loadMPTSData(id : number) {
    this.hostDataService.getMptsData(id).subscribe(data => this.mptsdata = data);
  }
  ngOnInit(): void {
    this.loadMPTSData(this.route.snapshot.params.id);
  }

}
