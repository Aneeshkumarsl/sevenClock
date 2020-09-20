import { Component, PLATFORM_ID, Inject,OnInit} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Settings, AppSettings } from '../../../../app.settings'
@Component({
  selector: 'app-options', 
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {


  public showOptions = true;
  public settings: Settings;  

  constructor(
    public appSettings: AppSettings,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.settings = this.appSettings.settings;
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('optionsTheme')) {
        const tempColor = localStorage.getItem('optionsTheme');
        this.settings.theme = tempColor;
      } else {
        this.settings.theme = 'green';
      }
    }
  }

  ngOnInit(): void {
  }

    public changeTheme(theme) {
      this.settings.theme = theme;
      if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('optionsTheme', theme);
      }
      
    }

}
