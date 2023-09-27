import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  settingOptions = [
    {
    "id": 1,
    "name": 'Dashboard',
    "icons": 'Home'
  },
  {
    "id": 2,
    "name": 'Properties',
    "icons": 'BuildingOffice'
  },
  {
    "id": 3,
    "name": 'Tenants',
    "icons": 'Users'
  },
  {
    "id": 4,
    "name": 'Invoices',
    "icons": 'ArrowRightOnRectangle'
  },
  {
    "id": 5,
    "name": 'Expenses',
    "icons": 'Wallet'
  },
  {
    "id": 6,
    "name": 'Maintenance',
    "icons": 'WrenchScrewdriver'
  },
  {
    "id": 7,
    "name": 'Announcements',
    "icons": 'Share'
  },
  {
    "id": 8,
    "name": 'Reports',
    "icons": 'ChartBar'
  },
  {
    "id": 9,
    "name": 'Logs',
    "icons": 'InformationCircle'
  },
  {
    "id": 10,
    "name": 'Account',
    "icons": 'User'
  },

]
}
