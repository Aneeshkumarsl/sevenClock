import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { OptionsComponent } from './components/options/options.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthGuard } from './auth.guard'
import {MatTabsModule} from '@angular/material/tabs';
import { NumberOnlyModule} from '../../sharedServices/directives/number-only/number-only.module'
@NgModule({
  declarations: [LoginComponent, RegisterComponent, OptionsComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    NumberOnlyModule,
  ],
  exports:[OptionsComponent],
  providers:[AuthGuard,NumberOnlyModule]
})
export class AuthModule { }
