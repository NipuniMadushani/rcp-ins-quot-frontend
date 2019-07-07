import { Formsdto } from './../../../../../dto/formsdto';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'app-table',
    template: `
    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

        <ng-container matColumnDef="position">
        <th mat-header-cell *matHeaderCellDef> No. </th>
        <td mat-cell *matCellDef="let element"> {{element.position}} </td>
    </ng-container>

    <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Name </th>
        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
    </ng-container>

    <ng-container matColumnDef="weight">
        <th mat-header-cell *matHeaderCellDef> Weight </th>
        <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
    </ng-container>

    <ng-container matColumnDef="symbol">
        <th mat-header-cell *matHeaderCellDef> Symbol </th>
        <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>

    `,
    styles:[]
})

export class TableComponent implements OnInit{

    field:Formsdto;
    group:FormGroup;
    constructor() {}
    ngOnInit() {}
}