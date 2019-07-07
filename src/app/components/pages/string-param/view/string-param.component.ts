import { FormControl } from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { StringParamService } from './../../../../service/StringParamService';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { DynamicFormComponent } from '../../../core/dynamicform/dynamic-form/dynamic-form.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { StringParamDto } from '../../../../dto/StringParamDto';
import { Observable } from 'rxjs';
import { AfterViewInit } from '@angular/core';
import {Location} from '@angular/common';



export interface PeriodicElement {
  name: string;
  sName: string;
  stringParamsId:string;

}

@Component({
  selector: 'app-string-param',
  templateUrl: './string-param.component.html',
  styleUrls: ['./string-param.component.css']
})
export class StringParamComponent implements OnInit,AfterViewInit {

 

  strId='';
  createBy='';
  createDate='';
  isEnable=0;
  modifyBy='';
  modifyDate='';
  isEdit=false;
  isDelete=false;

  resultsLength = 0;
  pageSize =10;
  pageSizeOptions: number[] =[10,15];

  setPageSizeOptions(setPageSizeOptionsInput: string){
    this.pageSizeOptions =setPageSizeOptionsInput.split(',').map(str => +str);
  }


  selectRow:number;
  selectClickRow:Function;

  displayedColumns: string[] = ['name',  'sName' ,  'Edit' , 'remove'];
 


  String:StringParamDto =new StringParamDto();
  StringList:StringParamDto[] =new Array();

  dataSource = new MatTableDataSource<StringParamDto>(this.StringList);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort;

  @ViewChild(DynamicFormComponent,{static: true}) form: DynamicFormComponent;


  // currentTradesData = new MatTableDataSource();    
  // currentTrades: Trades[] = [];

  ngAfterViewInit(): void {
    this.dataSource.sort=this.sort;
  }

  pageName = 'String';
  id = 'none';
  isLoading = true;


  ngOnInit() {
    this.loadData();
    this.paginator.length=0;
    this.dataSource.paginator = this.paginator;
    
    
   
  }

  constructor(private stringservice: StringParamService){
    this.selectClickRow=function(index){
      this.selectRow=index;

    }
  }


  setClickRow(row){
    console.log(this.form);
console.log("This is a boject In geting row selecters :",row);

    this.form.form.get("name").setValue(row.name);
    this.form.form.get("shortname").setValue(row.sName);
    this.form.form.get("Id").setValue(row.stringParamsId);

    console.log('weda...');

    console.log(row.name);
    console.log(row.sName);
    console.log(row.stringParamsId);


  }

  loadData():void{
    this.StringList=new Array();
    this.stringservice.getAllStringrParamData().subscribe(value=>{
      console.log(value);
      this.StringList=value;
      console.log(this.StringList);
      this.dataSource.data=this.StringList;
      this.paginator.length=this.StringList.length;
    });
  }

  scrollBottom() {
    document.querySelector('mat-elevation-z8').scrollBy(0, 10000);
  }

  submit(value: any){
    // console.log(value.Name);
    this.String=new StringParamDto();
    this.String.CreateBy='Sadu';
    this.String.CreateDate='1996-07-22';
    this.String.IsEnabled=1;
    this.String.Modifyby='';
    this.String.ModifyDate='';
    this.String.Name=value.name;
    this.String.SName=value.shortname;

    console.log(value.name);
    console.log(value.shortname);
    console.log(value.Id);


    
    if(this.isEdit){
      console.log("Yes Edit");
      this.String.StringParamId=value.Id;

      this.stringservice.updateStringParam(this.String).subscribe((result)=>{
        alert("Customer Has Edit Sucess..!");
        this.isEdit=false;
        this.loadData();
        
      });

    }else{
      console.log("Yes Save");
      this.stringservice.saveStringParam(this.String).subscribe((result)=>{
        alert("Customer Has Save Sucess..!");
        this.loadData();
      });
      
    }
  }
  

  deleteSubmit(row){
    this.isDelete=true;

    console.log(row.stringParamsId);

    if(confirm('Are You Want to Delete this Customer...!')){
      this.stringservice.deleteStringParam(row.stringParamsId).subscribe(
        (result)=>{
          alert("Customer Has Delete Sucess..!"+this.strId);
          this.loadData();
          console.log('delete',this.strId);
          console.log('hhh');
          
        }
      )
    }
  }

  updateSubmit(row){
    console.log(row);
    if(confirm('Are You Want to Edit this Customer...!')){
    
    this.isEdit=true;
    this.form.form.get("name").setValue(row.name);
    this.form.form.get("shortname").setValue(row.sName);
    this.form.form.get("Id").setValue(row.stringParamsId);
   
    this.loadData();
    
    }
  }


 


  
}

  

export class StringDataSource extends DataSource<StringParamDto> {
  
  paginator: MatPaginator;
  
  constructor(private stringService : StringParamService){
    super();
  }

  connect(): Observable<StringParamDto[]> {
    return this.stringService.getAllStringrParamData();
   
  }
  disconnect() {}
}
