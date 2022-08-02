import { Injectable } from '@angular/core';
import Moralis from 'moralis';

@Injectable({
  providedIn: 'root',
})
export class MoralisService {
  tokens: Array<any> = [];

  constructor() {
    const serverUrl = 'https://l7lwu3a0d7qk.usemoralis.com:2053/server';
    const appId = '93opPtjhfqrnZCoaOwEAT3zfOnWlhm3SFBg2KPBN';
    Moralis.start({ serverUrl, appId });
  }

  getNft = async (address: any) => {
    const options: any = {
      chain: 'rinkeby',
      address: address,
    };
    const NFTs: any = await Moralis.Web3API.account.getNFTs(options);
    console.log(NFTs.result)
  };

  getTreads = async (address: any) => {
    const options: any = {
      address: address,
      limit: '25',
      chain: 'eth',
    };
    const NFTTrades = await Moralis.Web3API.token.getNFTTrades(options);
    return NFTTrades.result;
  };
}
