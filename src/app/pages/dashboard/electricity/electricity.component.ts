import {Component, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { ElectricityService } from '../../../@core/data/electricity.service';

@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
})
export class ElectricityComponent implements OnDestroy, OnInit {

  data: Array<any>;
  mydata: Array<any>;

  type = 'week';
  types = ['week', 'month', 'year'];

  currentTheme: string;
  themeSubscription: any;

  constructor(private eService: ElectricityService, private themeService: NbThemeService) {
    this.data = this.eService.getData();

    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  getFixedMovieData(): any {
    this.mydata = this.eService.getMyData();

  }
  getResultData() {
    this.eService.getResult().subscribe(
      (response: Response) => {
        const data = response.json();
        console.log(data);
      },
    );
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
  ngOnInit (): void {
    this.getFixedMovieData();
    this.getResultData();
  }
}
