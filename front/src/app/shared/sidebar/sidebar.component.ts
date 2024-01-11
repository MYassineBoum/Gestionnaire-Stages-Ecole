import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private router: Router) { }

  quitter() {
    if(confirm("Voulez-vous vraiment vous déconnecter?")) {
      localStorage.setItem('isAuthenticated', 'false');
      localStorage.removeItem('token');
    } else {
      this.router.navigateByUrl('/dashboard');
    }
  }

}
