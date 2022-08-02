import { Component, OnInit } from '@angular/core';
import { MoralisService } from '../service/moralis.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  address: any;
  constructor(public moralisService: MoralisService) {}
  ngOnInit(): void {}

  getAddress = (e: any) => {
    this.address = e.target.value;
  };

  getNft = (address: any) => {
    this.moralisService.getNft(address);
  };
}
