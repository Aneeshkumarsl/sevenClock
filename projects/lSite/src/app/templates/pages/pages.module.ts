import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AuthModule } from '../../authModule/auth/auth.module';
import { ProfileComponent } from './profile/profile.component';
import { MatTooltipModule } from  '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InventoryComponent } from './inventory/inventory.component';
import { BillingComponent } from './billing/billing.component';
import { AboutComponent } from './about/about.component';
import { InventoryPopupComponent } from './inventory/popup/inventory-popup/inventory-popup.component';
import { FooterComponent } from './footer/footer.component';
import { NewBillComponent } from './billing/component/new-bill/new-bill.component';
import { PrintbillComponent } from './billing/popup/printbill/printbill.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberOnlyModule} from '../../sharedServices/directives/number-only/number-only.module'


@NgModule({
  declarations: [NavComponent, DashBoardComponent, ProfileComponent, InventoryComponent, BillingComponent, AboutComponent, InventoryPopupComponent, FooterComponent, NewBillComponent, PrintbillComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AuthModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NumberOnlyModule
  ]
})
export class PagesModule { }
