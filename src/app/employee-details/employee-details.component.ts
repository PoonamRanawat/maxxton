import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee-details.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  candidate_data: {
    "id": number;
    "name": string;
    "department": string;
    "joining_date": any;
  }[] = [];

  formatsDateTest: string[] = [
    'dd/MM/yyyy',
    ];
  filteredItems: any;
  result: {
    "id": number;
    "name": string;
    "department": string;
    "joining_date": any;
  }[] = [];
  keys: any;
  values: any;
  

  constructor(private empService : EmployeeService) { }

  ngOnInit() {
    this.candidate_data = this.empService.customerData();
    this.filteredItems = this.candidate_data;
  }

  //sort by name and joining date
  sortOn(param : any) {
    if(param === 'name') {
      this.candidate_data.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
    } else if(param === 'joining_date') {
      this.candidate_data.sort(function(a, b){
        if(a.joining_date < b.joining_date) { return -1; }
        if(a.joining_date > b.joining_date) { return 1; }
        return 0;
      })
    }
    
  }

  //filter 

  
    filterItem(value: any){   
      this.filteredItems = this.candidate_data.filter(function(el) {
        return el.name.toLowerCase().includes(value);
      });
    }

    remove() {
      this.candidate_data.forEach((el, index) => {
        if(el.department === 'Development') {
          delete this.candidate_data[index];
        }
        this.filteredItems = this.candidate_data;
      })
    }

    getDistinctDepartment() {
      let data = JSON.parse(JSON.stringify(this.candidate_data));
      this.result = data.reduce( (acc: any, o: any) => (acc[o.department] = (acc[o.department] || 0)+1, acc), {} );

      this.keys = Object.keys(this.result);
      this.values = Object.values(this.result);
      
    }

    expMoreThanTwoYears() {
      let date = new Date();

      this.filteredItems = this.candidate_data.filter(el => {
        if(!(el.joining_date.includes(2019))) {
          return this.filteredItems.push(el)
        }
      });
    }
  

}
