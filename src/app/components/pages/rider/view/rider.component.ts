import { ProductRiderdto } from './../../../../dto/ProductRiderDto';
import { RiderProductDto } from './../../../../dto/RiderProductDto';
import { Formsdto } from './../../../../dto/formsdto';
import { RiderService } from './../../../../service/RiderService';


import { ProductService } from './../../../../service/product.service';


import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { Riderdto } from 'src/app/dto/Rider';
import { Observable } from 'rxjs';
import { Productdto } from 'src/app/dto/Product';
import { DynamicFormComponent } from 'src/app/components/core/dynamicform/dynamic-form/dynamic-form.component';
import { CommonProductRiderDto } from 'src/app/dto/CommonProductRiderDto';
import { CommonRiderdto } from 'src/app/dto/CommonRiderDto';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  productId?: string;
  id: string;
  Code: string;
  Product_Name: string;
  Short_Name: string;
  calculation: string;
  maxAge: number;
  minAge: number;
}

export interface PeriodicElementnew {

  id: string;
  code: string;
  product_Name: string;
  short_Name: string;
  calculation: string;

}

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.css']
})
export class RiderComponent implements OnInit {

  constructor( private riderService: RiderService, private productService: ProductService) {
    this.selectClickRow = function (index) {
      this.selectRow = index;
    };
}

  @ViewChild(DynamicFormComponent,{static: true}) form: DynamicFormComponent;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  ProductDataSource: any;
  UserDataSource: any;
  pageName = 'Rider';
  rider: Array<Riderdto> = [];
  productList: Productdto[] = new Array();
  selectClickRow: Function;
  id = 'none';
  rid: Riderdto = null;
  ride: Riderdto = new Riderdto();
  maunally = false;
  isEdit = false;
  ri: CommonProductRiderDto[] = new Array();
  ri2: CommonRiderdto = null;
  ri4: CommonProductRiderDto = null;
  rpd: RiderProductDto = null;
  productRiderDto: ProductRiderdto[] = new Array();
  productRiderDto1: Productdto = null;
  productdto: Productdto = null;
  selectedCustomer: ProductRiderdto = new ProductRiderdto();
  formDtos: Formsdto[] = new Array();
  createBy: string;


  displayedColumns: string[] = ['checked', 'Id' , 'Code', ' Product_Name', 'Short_Name', 'calculation', '  maxAge', 'minAge'];
  dataSource = new MatTableDataSource<Productdto>(this.productList);
  mat = new MatTableDataSource();
  
  displayedColumn: string[] = ['id', 'code', 'combination', 'name', 'sName', 'actions', 'Edit'];

  dataSources = new MatTableDataSource<Riderdto>(this.rider);

  ngOnInit() {
    this.loadAllCustomers();
    this.loadData3();
    this.dataSources.paginator = this.paginator;

  }

  loadData3(): void {
    this.productList = new Array();
    this.productService.getAllProductforRider().subscribe(value => {
      console.log(value);
      this.productList = value;
      console.log(this.productList);
      this.dataSource.data = this.productList;
    });

  }


  loadAllCustomers(): void {
    this.riderService.getAllRider().subscribe(
      result => {
        this.rider = result;
         console.log(this.rider);
         this.dataSources.data = this.rider;
         this.paginator.length = this.rider.length;
      }
    );
  }


  selectRowTable(rid: Riderdto) {
    this.ride = rid;
    this.rid = Object.assign({}, this.ride);
    this.maunally = true;

  }

  selectRow(row) {
    console.log(this.form);
    this.form.form.get('name').setValue(row.name);
    this.form.form.get('shortname').setValue(row.sName);
    this.form.form.get('code').setValue(row.code);
    this.form.form.get('combination').setValue(row.combination);

      this.form.form.get('id').setValue(row.id);
  console.log(row.name);
  console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbb');

  console.log(row.code);
  console.log('code');

  console.log(row. short);
  console.log('shortname');
  }
  setClickRowww(i, row) {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  }
   onDelete (id: number): void {
    if (confirm('Are you want to delete this rider?')) {
      this.riderService.deleteRider(id).subscribe(
        (result) => {
          alert('Rider Delete');
        }
      );
    }
  }
  selectedItem(row) {
    console.log(row);
  if (row.checked === false) {
   // this.productList.find((element) => row.id === element.productId).checked = true;
   row.checked = true;
    console.log(row);
  } else {
    //this.productList.find((element) => row.id === element.productId).checked = true;
    row.checked = false;
  }
  }

updateSubmit(row) {
  console.log(row.id);
  this.isEdit = true;
  this.form.form.get('name').setValue(row.name);
  console.log(row.name);
  this.form.form.get('shortname').setValue(row.sName);

  this.form.form.get('code').setValue(row.code);
    this.form.form.get('combination').setValue(row.combination);
    this.form.form.get('id').setValue(row.id);
    this.rpd = new ProductRiderdto();
     this.riderService.searchRiderProduct(row.id).subscribe((result) => {
      console.log(result);
      this.productRiderDto = result;

      for (this.rpd of this.productRiderDto) {
        this.riderService.searchProduct4(this.rpd.productId).subscribe((result1) => {

        console.log(result1);
        console.log(row);
        this.productRiderDto1 = result1;
        console.log(this.productRiderDto1);

        const selectProduct = this.productList.find((products) => this.productRiderDto1.productId === products.productId);
        console.log('//////////');
        console.log(selectProduct);
        if (selectProduct !== null && selectProduct !== undefined) {
          console.log('//////////');
          selectProduct.checked = true;
        }
      });

this.form.form.get('gridorder').setValue(this.rpd.gridOrder);

this.form.form.get('type').setValue(row.type);
this.form.form.get('validation').setValue(this.rpd.validation);
this.selectedCustomer = this.rpd;

console.log(this.selectedCustomer);
this.form.form.get('printorder').setValue(this.rpd.printOrder);
       }
        });

      }

  submit(value: any): void {
    console.log();
    console.log(value);
    console.log(value.code);
    this.ri2 = new CommonRiderdto();
    this.ri2.combination = value.combination;
    this.ri2.code = value.code;
    this.ri2.createBy = 'Nayana',
    this.ri2.createDate = '2019-10-07',

    this.ri2.name = value.name;
    this.ri2.sName = value.shortname;
    this.ri2.type = value.type;
    this.ri2.gridOrder = value.gridorder;
    this.ri2.validation = value.validation;
    console.log(value.gridOrder);
   this.ri2.printOrder = value.printorder;
   const selectedFileIds: CommonProductRiderDto[] = [];
   this.ri4 = new CommonProductRiderDto();
   for (const item of this.productList) {
    console.log(item);
    if (item.checked === true) {
      console.log(item.calculation);
    const e: CommonProductRiderDto = new CommonProductRiderDto();
    e.calculation = item.calculation;
    e.productId = item.productId;

    e.maxAge = item.maxAge;
    e.minAge = item.minAge;
    console.log(e);
    selectedFileIds.push(e);
    console.log(selectedFileIds);
    }
  }

   this.ri2.commonproductRiderDto = selectedFileIds;
    if (this.isEdit) {
      console.log('yes edit');
      this.ri2.id = value.id;
  this.riderService.updateRider(this.ri2).subscribe((result) => {
         this.isEdit = false;
      });


   } else {
    console.log('yes save');
  this.riderService.saveRider(this.ri2).subscribe((result) => {
  }
   );
}
 }
}
















