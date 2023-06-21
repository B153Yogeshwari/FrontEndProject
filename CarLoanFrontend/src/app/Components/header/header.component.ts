import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dashboardrole } from 'src/app/Model/dashboardrole';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerRoles:any[];
  constructor(private router:Router){}

  ngOnInit(){
    this.headerRoles=Dashboardrole.dashHeaderRoles;
    console.log(this.headerRoles);
  }

  navigateTo(path:any){
    this.router.navigateByUrl('/dash/'+path);
  }
}
