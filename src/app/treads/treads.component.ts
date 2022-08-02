import { Component, OnInit } from '@angular/core';
import { MoralisService } from '../service/moralis.service';

@Component({
  selector: 'app-treads',
  templateUrl: './treads.component.html',
  styleUrls: ['./treads.component.scss'],
})
export class TreadsComponent implements OnInit {
  treads: any;
  address: any;
  isAddress: boolean = false;

  ngOnInit(): void {}
  constructor(public moralisService: MoralisService) {}

  getAddress = (e: any) => {
    this.address = e.target.value;
  };

  async getTreads() {
    this.isAddress = true;
    this.treads = await this.moralisService.getTreads(this.address);
  }
}
