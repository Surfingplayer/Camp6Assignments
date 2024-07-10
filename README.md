# Camp6Assignments

**Connection String**
"ConnectionStrings": {
  "ConnectionStringMVC": "Server =KEVIN_PC\\TEW_SQLEXPRESS;database=Camp5_Machine_test; Trusted_Connection=True; TrustServerCertificate=True"
}

**Accsessing the connection String**
  private readonly string connectionString;

  public StudentRepository(IConfiguration configuration)
  {
      connectionString = configuration.GetConnectionString("ConnectionStringMVC");
  }
  
public async Task<ActionResult<IEnumerable<Department>>> Name(){

}


---------------------------------------------=-------------------------
npm install ng2-search-filter ng2-datepicker --save


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchText: string = '';
  searchDate: string = '';
  items = [
    { name: 'Item 1', date: '2024-07-01' },
    { name: 'Item 2', date: '2024-07-02' },
    { name: 'Item 3', date: '2024-07-03' },
    // Add more items here
  ];
  filteredItems = [...this.items];

  filterItems() {
    this.filteredItems = this.items.filter(item => {
      const matchesName = item.name.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesDate = this.searchDate ? item.date === this.searchDate : true;
      return matchesName && matchesDate;
    });
  }
}
--------------------------------------------------------------------------------------------------
<div>
  <h1>Search Filter with Date Picker</h1>
  <input type="text" [(ngModel)]="searchText" (ngModelChange)="filterItems()" placeholder="Search by name" />
  <input type="date" [(ngModel)]="searchDate" (ngModelChange)="filterItems()" placeholder="Search by date" />
  <ul>
    <li *ngFor="let item of filteredItems">
      {{ item.name }} - {{ item.date }}
    </li>
  </ul>
</div>
