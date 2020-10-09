import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitlelistingService } from '../titlelisting-services/titlelisting.service'


@Component({
  selector: 'app-bio-blurb-info',
  templateUrl: './bio-blurb-info.component.html',
  styleUrls: ['./bio-blurb-info.component.css']
})
export class BioBlurbInfoComponent implements OnInit {
  public amenities;

  constructor(private tlService: TitlelistingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
