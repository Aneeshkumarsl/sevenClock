
import { Component,ViewChild,OnInit } from '@angular/core';
import {MatPaginator } from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  public showHidePopup:boolean = false

  options={
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };
  displayedColumns: string[] = ['id', 'name', 'rate', 'color','brand','total'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  constructor( private http: HttpClient) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  closePoup(data:boolean) {
    this.showHidePopup = data;
  }
  
  addMoreClick(){
  
    this.showHidePopup = true;
  }

     request() {
        const url = 'https://jsonplaceholder.typicode.com/posts/1';
        this.http.get(url).subscribe();
    }

ngOnInit(){
  
  this.request()
  }

}

export interface PeriodicElement {
  name: string;
  id: number;
  rate: number;
  color: string;
  brand:string;
  total:string
}


const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'T-shirt', rate: 200, color: 'red',brand:'Puma',total:"10"},
  {id: 2, name: 'Inner-wear', rate: 90, color: 'black',brand:'Poomex',total:"13"}, 
  {id: 3, name: 'Rounded-neck tshirt', rate: 300, color: 'blue',brand:'Puma',total:"11"},
  {id: 4, name: 'Shirt', rate: 500, color: 'green',brand:'Peter england',total:"10"},
  {id: 5, name: 'Jeans', rate: 700, color: 'blue',brand:'Peter england',total:"14"},
  {id: 6, name: 'shoe', rate: 800, color: 'brown',brand:'Woodland',total:"50"},
  {id: 7, name: 'Baniyan', rate: 220, color: 'yellow',brand:'Puma',total:"60"},
  {id: 1, name: 'Jocky', rate: 20, color: 'red',brand:'puma',total:"10"},
  {id: 1, name: 'Jocky', rate: 20, color: 'red',brand:'puma',total:"10"},
  {id: 1, name: 'Jocky', rate: 20, color: 'red',brand:'puma',total:"10"},
  {id: 1, name: 'Jocky', rate: 20, color: 'red',brand:'puma',total:"10"},
  {id: 1, name: 'Jocky', rate: 20, color: 'red',brand:'puma',total:"10"},
  {id: 1, name: 'Jocky', rate: 20, color: 'red',brand:'puma',total:"10"},
  {id: 1, name: 'Jocky', rate: 20, color: 'red',brand:'puma',total:"10"}, 
  {id: 1, name: 'Jocky', rate: 20, color: 'red',brand:'puma',total:"10"},
  {id: 1, name: 'Jocky', rate: 20, color: 'red',brand:'puma',total:"10"},
  {id: 1, name: 'Jocky', rate: 20, color: 'red',brand:'puma',total:"10"},
  {id: 1, name: 'Jocky', rate: 20, color: 'red',brand:'puma',total:"10"},
  {id: 1, name: 'Jocky', rate: 20, color: 'red',brand:'puma',total:"10"},
  {id: 1, name: 'Jocky', rate: 20, color: 'red',brand:'puma',total:"10"},
  {id: 1, name: 'Jocky', rate: 20, color: 'red',brand:'puma',total:"10"},
  {id: 1, name: 'Jocky', rate: 20, color: 'red',brand:'puma',total:"10"},
  {id: 1, name: 'Jocky', rate: 20, color: 'red',brand:'puma',total:"10"},
];