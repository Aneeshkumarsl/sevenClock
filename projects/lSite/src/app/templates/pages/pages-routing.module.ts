import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavComponent } from "./nav/nav.component";
import { DashBoardComponent } from "./dash-board/dash-board.component";
import { InventoryComponent } from './inventory/inventory.component';
import { BillingComponent } from './billing/billing.component';
import { AboutComponent } from './about/about.component';
import { NewBillComponent } from './billing/component/new-bill/new-bill.component';

const routes: Routes = [
  {
    path: "",
    component: NavComponent,
    children: [
      {
        path: "dashBoard",
        component: DashBoardComponent
      },
      {
        path: "inventory",
        component: InventoryComponent
      },
      {
        path: "billing",
        component: BillingComponent
      },
      {
        path: "aboutUs",
        component: AboutComponent
      },
      {
        path:"newBill",
        component:NewBillComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
