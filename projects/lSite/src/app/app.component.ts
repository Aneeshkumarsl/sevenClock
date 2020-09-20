import { Component } from '@angular/core';
import {Settings, AppSettings} from './app.settings';
import { OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit  {

  
  public settings: Settings;

  constructor(public appSettings: AppSettings,
              @Inject(PLATFORM_ID) private platformId: Object) {
      this.settings = this.appSettings.settings;
  }
  ngOnInit() {
  }
}
