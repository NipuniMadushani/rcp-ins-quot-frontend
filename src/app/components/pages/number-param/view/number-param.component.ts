import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { DynamicFormComponent } from '../../../core/dynamicform/dynamic-form/dynamic-form.component';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { NumberParamsDto } from '../../../../dto/NumberParamsDto';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { NumberParamService } from './../../../../service/NumberParamService';
import { PageEvent } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';


export interface PeriodicElement {
  numberParamId:string;
  name: string;
  sName: string;
}

@Component({
  selector: 'app-number-param',
  templateUrl: './number-param.component.html',
  styleUrls: ['./number-param.component.css']
})

export class NumberParamComponent implements OnInit {
  constructor(private numberservice:NumberParamService) {
    this.selectClickRow = function (index){
      this.selectRow = index;
    }
  }
  
  bbb = 'a';
  ccc = 'c';
  eee = 'g';
  isEdit=false;
  isDelete=false;
 

  selectRow:number;
  selectClickRow:Function;

  displayedColumns: string[] = ['name', 'sName','edit','remove'];
  
  
  number:NumberParamsDto = new NumberParamsDto();
  numberList:NumberParamsDto[] =new Array();
  
  dataSource = new MatTableDataSource<NumberParamsDto>(this.numberList);
 
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
 

  // tslint:disable-next-line:member-ordering
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort

  @ViewChild(DynamicFormComponent,{static: true}) form: DynamicFormComponent;

  pageName = 'Number';
  id = 'none';

  ngOnInit(): void {
    this.loadData();
    this.dataSource.sort = this.sort;
    this.paginator.length=0;
    this.dataSource.paginator = this.paginator;
    
  }
  
  
  

  

  setClickRow(row){
    console.log(this.form);
    this.form.form.get("Name").setValue(row.name);
    this.form.form.get("Shotname").setValue(row.sName);
    this.form.form.get("ID").setValue(row.numberParamId);
   
  }
  

  
loadData():void{
  this.numberList=new Array();
  this.numberservice.getAll().subscribe(value=>{
    console.log(value);
    this.numberList = value;
    console.log(this.numberList); 
    this.dataSource.data=this.numberList;
    this.paginator.length = this.numberList.length;
  });
 
}

deleteSubmit(row){
  this.isDelete =true;
 
 console.log(row.numberParamId);
 
  if (confirm('Are you want to delete this customer?')) {
    this.numberservice.deleteNumberParam(row.numberParamId).subscribe(
      (result)=>{
        alert('delete sucsesful')
        this.loadData();
        
    });
  }

}

updateSubmit(row){
  console.log(row);
  if(confirm('Are you want to Edit this customer?')){
  this.isEdit=true;
  this.form.form.get("Name").setValue(row.name);
  this.form.form.get("Shotname").setValue(row.sName);
  this.form.form.get("ID").setValue(row.numberParamId);
  }
}


submit(value: any) {

  this.number = new NumberParamsDto();
  this.number.CreateBy='kavi';
  this.number.CreateDate='2013-01-05';
  this.number.IsEnabled=1;
  this.number.Modifyby='';
  this.number.ModifyDate='';
  this.number.Name = value.Name;
  this.number.SName =value.Shotname;
  
 
    
  if(this.isEdit){
    
    this.number.NumberParamId = value.ID;

    this.numberservice.updateNumberParam(this.number).subscribe((result)=>{

      this.isEdit=false;
     this.loadData();
      
    });

  }else{
    
    this.numberservice.saveNumberParam(this.number).subscribe((result)=>{
      this.loadData();
     
    });
  }
}

}


