import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';
import {Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';

import {Observable} from 'rxjs';


@Injectable()
export class ElectricityService {

  private data = [
    {
      title: 'Screen',
      months: [
        { month: '1' },
        { month: '20' },
      ],
    },
    {
      title: 'Sounds',
      active: true,
      months: [
        { month: 'Jan', delta: '1.56', down: true, kWatts: '789', cost: '91' },
        { month: 'Feb', delta: '0.33', down: false, kWatts: '791', cost: '92' },
        { month: 'Mar', delta: '0.62', down: true, kWatts: '790', cost: '92' },
        { month: 'Apr', delta: '1.93', down: true, kWatts: '783', cost: '87' },
        { month: 'May', delta: '2.52', down: true, kWatts: '771', cost: '83' },
        { month: 'Jun', delta: '0.39', down: false, kWatts: '774', cost: '85' },
        { month: 'Jul', delta: '1.61', down: true, kWatts: '767', cost: '81' },
        { month: 'Aug', delta: '1.41', down: true, kWatts: '759', cost: '76' },
        { month: 'Sept', delta: '1.03', down: true, kWatts: '752', cost: '74' },
        { month: 'Oct', delta: '2.94', down: false, kWatts: '769', cost: '82' },
        { month: 'Nov', delta: '0.26', down: true, kWatts: '767', cost: '81' },
        { month: 'Dec', delta: '1.62', down: true, kWatts: '760', cost: '76' },
      ],
    },
    {
      title: 'Seats',
      months: [
        { month: 'Jan', delta: '1.34', down: false, kWatts: '789', cost: '91' },
        { month: 'Feb', delta: '0.95', down: false, kWatts: '793', cost: '93' },
        { month: 'Mar', delta: '0.25', down: true, kWatts: '791', cost: '92' },
        { month: 'Apr', delta: '1.72', down: false, kWatts: '797', cost: '95' },
        { month: 'May', delta: '2.62', down: true, kWatts: '786', cost: '90' },
        { month: 'Jun', delta: '0.72', down: false, kWatts: '789', cost: '91' },
        { month: 'Jul', delta: '0.78', down: true, kWatts: '784', cost: '89' },
        { month: 'Aug', delta: '0.36', down: true, kWatts: '782', cost: '88' },
        { month: 'Sept', delta: '0.55', down: false, kWatts: '787', cost: '90' },
        { month: 'Oct', delta: '1.81', down: true, kWatts: '779', cost: '86' },
        { month: 'Nov', delta: '1.12', down: true, kWatts: '774', cost: '84' },
        { month: 'Dec', delta: '0.52', down: false, kWatts: '776', cost: '95' },
      ],
    },
  ];

  private mydata= [
    {
      cinemas: [
        { id: 1,
          name: 'Winnetka WAL',
          screens: [
            {
              screen_num: 1,
              sounds: [
                {type: 'A 3D'},
                {type: 'A'},
                {type: 'WF'},
                {type: 'LS'},
              ],
              seats: 100,
            },
            {
              screen_num: 2,
              sounds: [
                {type: 'A 3D'},
                {type: 'A'},
                {type: 'WF'},
                {type: 'LS'},
              ],
              seats: 100,
            },
            {
              screen_num: 3,
              sounds: [
                {type: 'A 3D'},
                {type: 'A'},
                {type: 'WF'},
                {type: 'LS'},
              ],
              seats: 80,
            },
            {
              screen_num: 4,
              sounds: [
                {type: 'A 3D'},
                {type: 'A'},
                {type: 'WF'},
              ],
              seats: 10,
            },
            {
              screen_num: 5,
              sounds: [
                {type: 'A 3D'},
                {type: 'A'},
                {type: 'WF'},
                {type: 'LS'},
              ],
              seats: 60,
            },
            {
              screen_num: 6,
              sounds: [
                {type: 'A 3D'},
                {type: 'A'},
                {type: 'WF'},
                {type: 'LS'},
              ],
              seats: 100,
            },
          ],
        },
        { id: 2,
          name: '4DX',
          screens: [
            {
              screen_num: 1,
              sounds: [
                {type: 'A 3D'},
                {type: 'A'},
                {type: 'WF'},
                {type: 'LS'},
              ],
              seats: 100,
            },
            {
              screen_num: 2,
              sounds: [
                {type: 'A 3D'},
                {type: 'A'},
                {type: 'WF'},
                {type: 'LS'},
              ],
              seats: 100,
            },
            {
              screen_num: 3,
              sounds: [
                {ype: 'A 3D'},
                {type: 'A'},
                {type: 'W'},
                {type: 'LS'},
              ],
              seats: 80,
            },
            {
              screen_num: 4,
              sound: [
                {type: 'A 3D'},
                {type: 'A'},
                {type: 'WF'},
                {type: 'LS'},
              ],
              seats: 100,
            },
            {
              screen_num: 5,
              sound: [
                {type: 'A 3D'},
                {type: 'A'},
                {type: 'WF'},
                {type: 'LS'},
              ],
              seats: 60,
            },
            {
              screen_num: 6,
              sounds: [
                {type: 'A 3D'},
                {type: 'A'},
                {type: 'WF'},
                {type: 'LS'},
              ],
              seats: 100,
            }],
        },
        { id: 3,
          name: 'IMax',
          screens: [
            {
              screen_num: 1,
              sounds: [
                {type: 'A 3D'},
                {type: 'A'},
                {type: 'WF'},
                {type: 'LS'},
              ],
              seats: 100,
            },
            {
              screen_num: 2,
              sounds: [
                {type: 'A 3D'},
                {type: 'A'},
                {type: 'WF'},
                {type: 'LS'},
              ],
              seats: 100,
            },
            {
              screen_num: 3,
              sounds: [
                {type: 'A 3D'},
                {type: 'A'},
                {type: 'WF'},
                {type: 'LS'},
              ],
              seats: 80,
            },
            {
              screen_num: 4,
              sounds: [
                {type: 'A 3D'},
                {type: 'A'},
                {type: 'WF'},
                {type: 'LS'},
              ],
              seats: 100,
            },
            {
              screen_num: 5,
              sounds: [
                {type: 'A 3D'},
                {type: 'A'},
                {type: 'WF'},
                {type: 'LS'},
              ],
              seats: 60,
            },
            {
              screen_num: 6,
              sounds: [
                {type: 'A 3D'},
                {type: 'A'},
                {type: 'WF'},
                {type: 'LS'},
              ],
              seats: 100,
            },
          ],
        },
      ],
      movies: [
        { id: 1,
          name: 'Taken',
          duration: '90min',
          dist: 'IFC',
        },
        { id: 2,
          name: 'Mile 22',
          duration: '115min',
          dist: 'DNY',
        },
        { id: 3,
          name: 'Deadpool 2',
          duration: '135min',
          dist: 'DNY',
        },
      ],
      ads: [
        { id: 1,
          name: 'Vodacom',
          duration: '3min',
        },
        { id: 2,
          name: 'Intel',
          duration: '2min',
        },
        { id: 3,
          name: 'NFL',
          duration: '3min',
        },
      ],
    },
  ];

  constructor(private httpClient: HttpClient, private http: Http) {
  }

  // TODO: observables
  getData() {
    return this.data;
  }

  getMyData() {
    return this.mydata;
  }

  getResul1t() {
    const token = '31108ab2-a269-4225-9ce7-71d01e97f607';
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer' + '' + token);
    return this.httpClient.get('https://10.55.66.11:9002/cinemawebservices/schedule/cinemas' + token,
              {headers: headers});
  }
}
