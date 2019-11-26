import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { JobdescriptionComponent } from './jobdescription/jobdescription.component';
const routes: Routes = [
  {path:'', pathMatch:'full', component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'profile/edit',component:EditprofileComponent},
  {path:'jobdescription',component:JobdescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
