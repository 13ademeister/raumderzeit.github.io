import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRoomComponent } from './components/main-room/main-room.component';

// enum AllRoutes {
//   idea,
//   events
// }

const routes: Routes = [
  { path: 'events', component: MainRoomComponent },
  { path: 'idea', component: MainRoomComponent },
  { path: 'contribute', component: MainRoomComponent },
  { path: 'about-us', component: MainRoomComponent },
  { path: 'contact', component: MainRoomComponent },
  { path: 'gallery', component: MainRoomComponent },
  { path: 'impressum', component: MainRoomComponent },
  { path: 'questions', component: MainRoomComponent },
  // disable for web deployment
  { path: 'object/:id', component: MainRoomComponent },
  { path: 'cup/:id', component: MainRoomComponent },
  { path: '**', redirectTo: '', component: MainRoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
