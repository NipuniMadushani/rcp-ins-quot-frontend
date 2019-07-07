import { Formsdto } from './../../../../dto/formsdto';
import { ProductStringParamDto } from './../../../../dto/ProdStringParamsDto';
import { SelectComponent } from './../../../core/dynamicform/form-components/select/select.component';
import { RiderProductDto } from './../../../../dto/RiderProductDto';
import { ProductService } from 'src/app/service/product.service';
import { CommonNumberDto } from './../../../../dto/CommonNumberDto';
import { CommonProductRiderDtop } from 'src/app/dto/CommonProductRiderDtop';
import { CommonStringNumDto } from './../../../../dto/CommonStringNumDto';
import {  CommonProductdtop } from './../../../../dto/CommonProductDtop';
import { RiderdtoP } from 'src/app/dto/Riderp';
import { element } from 'protractor';
import { DynamicFormComponent } from './../../../core/dynamicform/dynamic-form/dynamic-form.component';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { ProductdtoA } from '../../../../dto/ProductA';
import { Observable, observable } from 'rxjs';
import { RiderService } from '../../../../service/RiderService';
import { NumberParamsDtoP } from '../../../../dto/NumberParamsDtop';
import { NumberParamService } from '../../../../service/NumberParamService';
import { StringParamDtoP } from '../../../../dto/StringParamDtop';
import { StringParamService } from '../../../../service/StringParamService';
import { isNgTemplate } from '@angular/compiler';
import { MatSelect } from '@angular/material/select';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductNumService } from '../../../../service/productNumService';
import { ProductStringService } from '../../../../service/productStringservice';
import { ProductNumParamsDto } from '../../../../dto/ProductNumParamsDto';

export class PeriodicElement {
  checked: boolean;
  id: string;
  code: string;
  Rider_Name: string;
  Short_Name: string;
  calculation: string;
}




export interface PeriodicElementnew {
  id: string;
  code: string;
  product_Name: string;
  short_Name: string;
  max_age: number;
  min_age: number;
  calculation: string;
  createBy: string;
  createDate: string;


}

export interface PeriodicElementNewOne {
  id: string;
  name: string;
  short_Name: string;
  }


  export interface PeriodicElementNumber {
    id: string;
    name: string;
    short_Name: string;
    }



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {




  // tslint:disable-next-line:max-line-length
  constructor(private productService: ProductService , private riderservice: RiderService,
    private numberParamService: NumberParamService, private stringParamService: StringParamService
  , private prodnum: ProductNumService, private prodstring: ProductStringService) {
    // this.arps = service.getArps();
    this.selectClickRow = function (index) {
      this.selectRow = index;
    };
  }

  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  @ViewChild(MatPaginator,{static: true}) paginator1: MatPaginator;
  @ViewChild(MatPaginator,{static: true}) paginator2: MatPaginator;
  @ViewChild(MatPaginator,{static: true}) paginator3: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @ViewChild(DynamicFormComponent,{static: true}) form: DynamicFormComponent;

  pageName = 'Product';
  number: NumberParamsDtoP = new NumberParamsDtoP();
  numberList: NumberParamsDtoP[] = new Array();
  product1: ProductdtoA = new ProductdtoA();
  productList: ProductdtoA[] = new Array();
  string: StringParamDtoP = new StringParamDtoP();
  stringList: StringParamDtoP[] = new Array();
  courierArray: PeriodicElement[] = new Array();
  product: Array<ProductdtoA> = [];
  rider: PeriodicElement[] = new Array();
  rider1: RiderdtoP[] = new Array();

  displayedColumns: string[] = ['checked', 'id', 'code', 'name', 'Short_Name', 'calculation'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.rider);
 // mat = new MatTableDataSource();
  selection = new SelectionModel<PeriodicElement>(true, []);

  displayedColumn: string[] = ['productId', 'code', 'name', 'sName',
  'maxAge', 'minAge', 'calculation', 'createBy', 'createDate', 'remove', 'edit'];
  dataSources = new MatTableDataSource<ProductdtoA>(this.productList);

  // tslint:disable-next-line:member-ordering
  displayedColumns1: string[] = ['checked', 'id', 'name', 'sName'];
  dataSource1 = new MatTableDataSource<NumberParamsDtoP>(this.numberList);
  selection1 = new SelectionModel<NumberParamsDtoP>(true, []);

  // tslint:disable-next-line:member-ordering
  displayedColumns2: string[] = ['checked', 'id', 'name', 'sName'];
  // tslint:disable-next-line:member-ordering
  dataSource2 = new MatTableDataSource<StringParamDtoP>(this.stringList);
  selection2 = new SelectionModel<StringParamDtoP>(true, []);



  id = 'none';
  createBy = '';
  createDate = '';
  isEdit = false;
  isDelete = false;
  puc: ProductdtoA = null;
  produc: ProductdtoA = new ProductdtoA();
  maunally = false;
  selectedCustomer: RiderProductDto = new RiderProductDto();
  pro: CommonProductRiderDtop[] = new Array();
  pro1: CommonStringNumDto[] = new Array();
  pro2: CommonProductdtop = null;
  pro4: CommonProductRiderDtop = null;
  np: CommonNumberDto = null;
  riderdto: RiderdtoP = null;
  nps: NumberParamsDtoP = null;
  sps: StringParamDtoP = null;
  riderdto1: PeriodicElement = null;
  sp: CommonStringNumDto = null;
  form1: Formsdto = null;
  formDtos: Formsdto[] = new Array();
  riderProductDto: RiderProductDto[] = new Array();
  rpd: RiderProductDto = null;
  prodstrin: ProductStringParamDto[] = new Array();
  prodn: ProductNumParamsDto[] = new Array();
  ps: ProductStringParamDto = null;
  pn: ProductNumParamsDto = null;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // tslint:disable-next-line:member-ordering
  selectRow12: number;
  selectClickRow: Function;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  setPageSizeOptions1(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  setPageSizeOptions2(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  setPageSizeOptions3(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  ngOnInit() {
    this.loadAllCustomers();
    this.loadData();
    this.loadData2();
    this.loadData3();
    this.paginator.length = 0;
    this.dataSource.paginator = this.paginator;
    this.dataSources.paginator = this.paginator1;
    this.dataSource1.paginator = this.paginator2;
    this.dataSource2.paginator = this.paginator3;
  }

  selectRow2(): any {
    throw new Error('Method not implemented.');
  }



// selected tbl 1
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.connect.length;
    return numSelected === numRows;
  }
// Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row =>
          this.selection.select(row),
      );
  }




  // selected tbl 2

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected1() {
    const numSelected1 = this.selection1.selected.length;
    const numRows1 = this.dataSource1.connect.length;
    return numSelected1 === numRows1;
  }

// Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle1() {
  this.isAllSelected1() ?
      this.selection1.clear() :
      this.dataSource1.data.forEach(row => this.selection1.select(row));
}

// selected tbl3

 /** Whether the number of selected elements matches the total number of rows. */
 isAllSelected2() {
  const numSelected2 = this.selection2.selected.length;
  const numRows2 = this.dataSource2.connect.length;
  return numSelected2 === numRows2;
}


// Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle2() {
  this.isAllSelected2() ?
      this.selection2.clear() :
      this.dataSource2.data.forEach(row => this.selection2.select(row));
}

loadData3(): void {
  this.productList = new Array();
  this.productService.getAllProduct().subscribe(value => {
    console.log(value);
    this.productList = value;
    console.log(this.productList);
    this.dataSources.data = this.productList;
    this.paginator1.length = this.productList.length;
  });

}

loadData2(): void {
  this.stringList = new Array();
  this.stringParamService.getAllStringrParamData().subscribe(value => {
    console.log(value);
    this.stringList = value;
    console.log(this.stringList);
    this.dataSource2.data = this.stringList;
    this.paginator3.length = this.stringList.length;
  });

}

loadData(): void {
  this.numberList = new Array();
  this.numberParamService.getAllNumberParamData().subscribe(value => {
    console.log(value);
    this.numberList = value;
    console.log(this.numberList);
    this.dataSource1.data = this.numberList;
    this.paginator2.length = this.numberList.length;
  });

}



  loadAllCustomers(): void {
    this.riderservice.getAllRider().subscribe(
      (result) => {
        this.rider1 = result;
         console.log(result);
         console.log(this.rider1);
         this.rider = new Array();
         for (this.riderdto of result) {
           console.log(this.riderdto.id);

          const e: PeriodicElement = new PeriodicElement();
          e.id = this.riderdto.id;
          e.code = this.riderdto.code;
          e.Rider_Name = this.riderdto.name;
          e.Short_Name = this.riderdto.sName;
          e.calculation = '';
          e.checked = this.riderdto.checked;
          console.log(this.riderdto1);
          this.rider.push(e);
          console.log(this.rider);
         }
         console.log(this.rider);
         this.dataSource.data = this.rider;
         console.log(this.dataSource);
    this.paginator.length = this.rider.length;
      }
    );
  }

selectRowTable(pus: ProductdtoA) {
  this.produc = pus;
  this.puc = Object.assign({}, this.produc);
  this.maunally = true;

}


  selectRow(row) {
    console.log(this.form);
    this.form.form.get('name').setValue(row.name);
    this.form.form.get('shortname').setValue(row.sName);
    this.form.form.get('id').setValue(row.productId);
    this.form.form.get('code').setValue(row.code);
    this.form.form.get('maxage').setValue(row.maxAge);
    this.form.form.get('minage').setValue(row.minAge);
    this.form.form.get('validation').setValue(row.validation);
    this.form.form.get('calculation').setValue(row.calculation);
    console.log(row.createBy);
    this.createBy = row.createBy;
    this.createDate = row.createDate;
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

  console.log(row.name);
  console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbb');

  // console.log(i['numberParamId']);
  console.log('cccccccccccccccccccccccccccccccc');

  // this.numId = i['numberParamId'] ;
  // this.createbyName=i['createBy'];
  // this.createDate=i['createDate'];
  // this.isEnable=i['isEnable'];
  // this.modifyBy=i['modifyBy'];
  // this.modifyDate=i['modifyDate'];

  console.log(this.id);
  // console.log('date',this.createDate);
  // console.log('create',this.createbyName);

  this.rpd = new RiderProductDto();
  this.productService.searchRiderProduct(row.productId).subscribe((result) => {
    console.log(row);

    this.riderProductDto = result;
      for (this.rpd of this.riderProductDto) {
        this.riderservice.searchRider4(this.rpd.ryderId).subscribe((result1) => {

        console.log(result1);
        console.log(row);
        this.riderdto = result1;
        this.selection.toggle(row);
        this.selection.isSelected(row);
        this.selectRow3(this.riderdto);
        if (row.id === this.riderdto.id) {
          console.log('called');
          this.selection.toggle(row);
        }
        });
  }
      //this.selection.toggle(row);
      this.form.form.get('gridorder').setValue(this.rpd.gridOrder);
      this.selectedCustomer = this.rpd;
      console.log(this.selectedCustomer);
      this.form.form.get('printorder').setValue(this.rpd.printOrder);

         // this.form.form.get('printorder').setValue(result.printOrder);
  });


  }
  setClickRowww(i, row) {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

  console.log('select:', i);
  console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbb');

  console.log(i['productId']);
  console.log('cccccccccccccccccccccccccccccccc');

  this.id = i['productId'] ;
  // this.createbyName=i['createBy'];
  // this.createDate=i['createDate'];
  // this.isEnable=i['isEnable'];
  // this.modifyBy=i['modifyBy'];
  // this.modifyDate=i['modifyDate'];

  console.log(this.id);
  // console.log('date',this.createDate);
  // console.log('create',this.createbyName);
  // console.log('dul');

  }

selectRow1(row) {
  console.log(row.id);
  this.id = 'a row was clicked122122';
  console.log(this.id);

}
selectRow3(row) {
  console.log(row);
  this.id = 'a row was clicked';
  console.log(row.id);
   // this.selection.toggle(row);
  console.log();

}
deleteSubmit(row) {
  this.isDelete = true;

 console.log(row.productId);

  if (confirm('Are you want to delete this customer?')) {
    this.productService.deleteProduct(row.productId).subscribe(
      (result) => {
        console.log('delete', this.id);
        console.log('dulaaa');
    });
  }

}
selectedItem(row) {
  console.log(row);
  
  
  if (row.checked === true) {
    row.checked = false;
  } else {
  row.checked = true;
  }
}

selectedItemN(row) {
  console.log(row);
  if (row.checked === false) {
    row.checked = true;
  } else {
    row.checked = false;
  }
}

selectedItemS(row) {
  console.log(row);
  if (row.checked === false) {
    row.checked = true;
  } else {
    row.checked = false;
  }
}

updateSubmit(row) {
  console.log(row);
  this.isEdit = true;
  this.form.form.get('name').setValue(row.name);
    this.form.form.get('shortname').setValue(row.sName);
    this.form.form.get('id').setValue(row.productId);
    this.form.form.get('code').setValue(row.code);
    this.form.form.get('maxage').setValue(row.maxAge);
    this.form.form.get('minage').setValue(row.minAge);
    this.form.form.get('validation').setValue(row.validation);
    this.form.form.get('calculation').setValue(row.calculation);
  this.rpd = new RiderProductDto();
  this.ps = new ProductStringParamDto();
  this.pn = new ProductNumParamsDto();
      this.productService.searchRiderProduct(row.productId).subscribe((result) => {
        console.log(row);

        this.riderProductDto = result;
          for (this.rpd of this.riderProductDto) {
            this.riderservice.searchRider4(this.rpd.ryderId).subscribe((result1) => {

            console.log(result1);
            console.log(row);
            this.riderdto = result1;
            console.log(this.riderdto);

            const selectRider = this.rider.find((riders) => this.riderdto.id === riders.id);
            console.log('//////////');
            console.log(selectRider);
            if (selectRider !== null && selectRider !== undefined) {
              selectRider.checked = true;
            }
            // this.selection.toggle(row);
            // this.selection.select(row);
            // this.selectRow3(this.riderdto);
            // if (row.id === this.riderdto.id) {
            //   console.log('called');
            //   this.selection.toggle(row);
            // }
            });
      }
          //this.selection.toggle(row);
          this.form.form.get('gridorder').setValue(this.rpd.gridOrder);
          this.selectedCustomer = this.rpd;
          console.log(this.selectedCustomer);
          this.form.form.get('printorder').setValue(this.rpd.printOrder);

             // this.form.form.get('printorder').setValue(result.printOrder);
      });

      this.prodnum.searchProduct(row.productId).subscribe((result) => {
        this.prodn = result;
        for (this.pn of this.prodn) {
          const selectnum = this.numberList.find((nums) => this.pn.numberParamId === nums.numberParamId);
          console.log('//////////');
          console.log(selectnum);
          if (selectnum !== null && selectnum !== undefined) {
            selectnum.checked = true;
          }
        }
      });

      this.prodstring.searchProduct(row.productId).subscribe((result) => {
        console.log(result);
        this.prodstrin = result;
        for (this.ps of this.prodstrin) {
          const selectnum = this.stringList.find((string) => this.ps.stringParamsId === string.stringParamsId);
          console.log('//////////');
          console.log(selectnum);
          if (selectnum !== null && selectnum !== undefined) {
            selectnum.checked = true;
          }
        }
      });

}

  submit(value: any): void {
    console.log();
    console.log(value);
    console.log(value.code);
    this.pro2 = new CommonProductdtop();
    this.pro2.calculation = value.calculation;
    this.pro2.code = value.code;
    this.pro2.maxAge = value.maxage;
    this.pro2.minAge = value.minage;
    this.pro2.name = value.name;
    this.pro2.sName = value.shortname;
    this.pro2.validation = value.validation;
    this.pro2.gridOrder = value.gridorder;
    console.log(value.gridOrder);
    this.pro2.printOrder = value.printorder;
    const selectedFileIds: CommonProductRiderDtop[] = [];
    this.pro4 = new CommonProductRiderDtop();
    for (const item of this.rider) {
      if (item.checked === true) {
      console.log(item.calculation);
      console.log(item.id);
      const e: CommonProductRiderDtop = new CommonProductRiderDtop();
      e.calculation = item.calculation;
      e.ryderId = item.id;
      console.log(e);
      selectedFileIds.push(e);
      console.log(selectedFileIds);
      }
    }
     this.pro2.commonProductRiderDTOs = selectedFileIds;

     const selectedFileIds1: CommonNumberDto[] = [];
     this.np = new CommonNumberDto();
    for (const item of this.numberList) {
      if ( item.checked === true ) {
        const e: CommonNumberDto = new CommonNumberDto();
      e.numberParamId = item.numberParamId;
      console.log(item.numberParamId);
      selectedFileIds1.push(e);
      console.log(selectedFileIds1);
      }
    }
    this.pro2.ns = selectedFileIds1;

    const selectedFileIds2: CommonStringNumDto[] = [];
     this.sp = new CommonStringNumDto();
    for (const item of this.stringList) {
      if ( item.checked === true) {
        const e: CommonStringNumDto = new CommonStringNumDto();
      e.stringParamsId = item.stringParamsId;
      selectedFileIds2.push(e);
      console.log(selectedFileIds2);
      }
    }
    this.pro2.cs = selectedFileIds2;
    if (this.isEdit) {
      console.log('yes edit');
      this.pro2.productId = value.id;
      this.pro2.createBy = this.createBy;
      this.pro2.createDate = this.createDate;
      this.productService.updateProduct(this.pro2).subscribe((result) => {
        this.isEdit = false;
      });

    } else {
      console.log('yes save');
      this.productService.saveProduct(this.pro2).subscribe((result) => {

      });
    }

  }

}














