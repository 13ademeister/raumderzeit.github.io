import { Component, OnInit } from '@angular/core';
import { DxSchedulerModule } from 'devextreme-angular';

import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dx-calendar',
  templateUrl: './dx-calendar.component.html',
  styleUrls: ['./dx-calendar.component.scss'],
})
export class DxCalendarComponent implements OnInit {
  dataSource: any;

  currentDate: Date = new Date(2017, 4, 25);

  constructor(private http: HttpClient) {
    this.dataSource = new DataSource({
      store: new CustomStore({
        load: (options) => this.getData(options, { showDeleted: false }),
      }),
    });
  }

  private getData(options: any, requestOptions: any) {
    const PUBLIC_KEY = 'AIzaSyBnNAISIUKe6xdhq1_rjor2rxoI3UlMY7k';
    const CALENDAR_ID = 'f7jnetm22dsjc3npc2lu3buvu4@group.calendar.google.com';
    const dataUrl = [
      'https://www.googleapis.com/calendar/v3/calendars/',
      CALENDAR_ID,
      '/events?key=',
      PUBLIC_KEY,
    ].join('');

    return this.http
      .get(dataUrl, requestOptions)
      .toPromise()
      .then((data: any) => data.items);
  }

  ngOnInit(): void {}
}
