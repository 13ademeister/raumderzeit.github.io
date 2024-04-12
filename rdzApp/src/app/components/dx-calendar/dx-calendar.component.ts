import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient } from '@angular/common/http';

import { locale } from 'devextreme/localization';

@Component({
  selector: 'app-dx-calendar',
  templateUrl: './dx-calendar.component.html',
  styleUrls: ['./dx-calendar.component.scss'],
})
export class DxCalendarComponent implements OnInit {
  dataSource: any;

  currentDate: Date = new Date();
  startDate: Date;

  constructor(private http: HttpClient) {
    console.log(this.currentDate);
    this.startDate = new Date(this.currentDate.getTime() - 7 * 24 * 60 * 60 * 1000); 
    console.log(this.startDate);
    locale(navigator.language);

    this.dataSource = new DataSource({
      store: new CustomStore({
        load: (options) => this.getData(options, { showDeleted: false }),
      }),
    });
  }

  private getData(options: any, requestOptions: any) {
    const PUBLIC_KEY = 'AIzaSyCHCizWWIPVrrBwCnd3rlAbY92u4HYamAs';
    const CALENDAR_ID = 'vlrfhmscr09a89urrkm855908c@group.calendar.google.com';
    const dataUrl = [
      'https://www.googleapis.com/calendar/v3/calendars/',
      CALENDAR_ID,
      '/events?key=',
      PUBLIC_KEY,
      '&timeMin=',
      this.startDate.toISOString()
    ].join('');

    return this.http
      .get(dataUrl, requestOptions)
      .toPromise()
      .then((data: any) => data.items);
  }

  ngOnInit(): void {}
}
