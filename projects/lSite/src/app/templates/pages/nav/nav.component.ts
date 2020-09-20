import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints,BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
  badgeCount:Number = 2;
  isMenuOpen = true;
  contentMargin = 240;

  onToolbarMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
    if(!this.isMenuOpen) {
      this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.contentMargin = 0;          
        } else {
          this.contentMargin = 70;          
        }
      });
    } else {
      this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.contentMargin = 70;          
        } else {
          this.contentMargin = 240;          
        }
      });
    }
  }

  sideBars=[
    {
      icon:"dashboard",
      name:"Dashboard",
      router:"/home/dashBoard"
    },
    {
      icon:"store",
      name:"Inventory",
      router:"/home/inventory"
    },
    {
      icon:"receipt",
      name:"Billings",
      router:"/home/billing"
    },
    {
      icon:"phone",
      name:"Contact Us",
      router:"/home/aboutUs"
    }
  ]

}