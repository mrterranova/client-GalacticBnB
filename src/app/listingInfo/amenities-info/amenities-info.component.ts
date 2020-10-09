import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitlelistingService } from '../titlelisting-services/titlelisting.service'

@Component({
  selector: 'app-amenities-info',
  templateUrl: './amenities-info.component.html',
  styleUrls: ['./amenities-info.component.css']
})
export class AmenitiesInfoComponent implements OnInit {
  public amenities;
  public count= 0;
  public carbonMonoxideAlarm;
  public tv;
  public privateEntrance;
  public freeParking;
  public heating;
  public airconditioning;
  public essentials;
  public essentialstext;
  public heatingtext;
  public wifi;
  public hotwater;
  public laptopFriendly;
  public cableTv;
  public longTermStaysAllowed;
public refrigerator;
public microwave;
public coffeeMaker;
public grill;
public cookingtext;
public shampoo;
public hairDryer;
public hotWater;
public hanger;
public spa;
public swimArea;
public fireExtinguisher;
public lockOnBedroomDoor;
public smokeAlarm;
public lockBox;
public privatetext;
public notIncluded =[];

  constructor(private tlService: TitlelistingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAmeni(this.route.snapshot.params.id);
  }

  getAmeni(id: number){
    this.tlService.getAmeni(id).subscribe( data => {
      this.amenities = data; 
      this.carbonMonoxideAlarm = this.amenities.carbonMonoxideAlarm;
      this.tv = this.amenities.tv;
      this.privateEntrance = this.amenities.privateEntrance;
      this.freeParking = this.amenities.freeParking;
      this.heating = this.amenities.heating;
      this.airconditioning = this.amenities.airconditioning;
      this.essentials = this.amenities.essentials;
      this.essentialstext = this.amenities.essentialstext;
      this.heatingtext = this.amenities.heatingtext;
      this.hotwater = this.amenities.hotwater;
      this.laptopFriendly = this.amenities.laptopFriendly;
      this.wifi = this.amenities.wifi;
      this.cableTv = this.amenities.cableTv;
      this.coffeeMaker = this.amenities.coffeeMaker;
      this.longTermStaysAllowed = this.amenities.longTermStaysAllowed;
      this.refrigerator = this.amenities.refrigerator;
      this.microwave = this.amenities.microwave;
      this.coffeeMaker= this.amenities.coffeeMaker;
      this.grill = this.amenities.grill;
      this.cookingtext= this.amenities.cookingtext;
      this.privateEntrance= this.amenities.privateEntrance;
      this.shampoo= this.amenities.shampoo;
      this.hairDryer= this.amenities.hairDryer;
      this.hotWater= this.amenities.hotWater;
      this.hanger= this.amenities.hanger;
      this.spa= this.amenities.spa;
      this.swimArea= this.amenities.swimArea;
      this.fireExtinguisher= this.amenities.fireExtinguisher;
      this.lockOnBedroomDoor= this.amenities.lockOnBedroomDoor;
      this.smokeAlarm= this.amenities.smokeAlarm;
      this.lockBox= this.amenities.lockBox;
      this.privatetext = this.amenities.enterancetext;
      this.insertamenities();
  })
}

  insertamenities(){
    this.amenities.map(tc => {
      if(tc) this.count++;
    })
  }

}
