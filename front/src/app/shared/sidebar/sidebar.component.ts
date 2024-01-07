import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor() { }

  quitter() {
    localStorage.setItem('isAuthenticated', 'false');
    localStorage.removeItem('token');
  }
  
}
