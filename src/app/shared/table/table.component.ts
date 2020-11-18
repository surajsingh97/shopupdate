import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SetItemService } from 'src/app/services/set-item.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import $ from 'jquery';
import { ApiService } from 'src/app/services/api.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
    id: any;
    gap: any;
    custompageindex = 0;
    nAcending = true;
    nDecending = false;
    pAcending = true;
    pDecending = false;
    cAcending = true;
    cDecending = false;
    sAcending = true;
    sDecending = false;
    qAcending = true;
    qDecending = false;
    subAcending = true;
    subDecending = false;

    constructor(
        private route: Router,
        private activated: ActivatedRoute,
        private apiService: ApiService,
        private setService: SetItemService
    ) {}

    displayedColumns: string[] = [
        'productName',
        'Description',
        'Price',
        'Suplier',
        'Category',
        'Size',
        'Quantity',
        'subCategory',
        'File',
        'Edit',
        'Delete',
    ];
    dataSource = new MatTableDataSource();

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    async ngOnInit(): Promise<void> {
        this.gap = await this.apiService.request('getItem');
        this.dataSource = new MatTableDataSource(this.gap);
        let variable = 0;
        if (localStorage.getItem('elementIndex') !== null) {
            variable = parseInt(localStorage.getItem('elementIndex'), 0);
            variable--;
        }
        this.paginator.pageIndex = Math.floor(variable / 10);
        this.dataSource.paginator = this.paginator;
        setTimeout(() => {
            if (variable > 1) {
                $('html, body').animate(
                    {
                        scrollTop: $('#row_' + variable++).offset().top,
                    },
                    1000
                );
            }
        }, 500);
    }

    applyFilter(filterValue: string): void {
        console.log(filterValue);
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    edit(element, i): void {
        console.log(this.setService.setValue(element));
        localStorage.setItem('edit', JSON.stringify(element));
        this.route.navigate(['/item/edit-item'], {
            queryParams: { _name: element.productName },
        });
    }

    async fucn(element, i): Promise<void> {
        const v = confirm('Are u sure?');
        if (v === true) {
            await this.apiService.request('Delete', element);
            const data = await this.apiService.request('getItem');
            console.log('after delete', data);
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.route.navigateByUrl('/admin');
        }
    }

    ascendingOrder(option): void {
        if (option === 'name') {
            const arr = _.sortBy(this.gap, [(o) => o.Productname]);
            this.dataSource = new MatTableDataSource(arr);
            this.nAcending = false;
            this.nDecending = true;
        } else if (option === 'Price') {
            const arr = this.gap.sort((a, b) => a.Price - b.Price);
            this.dataSource = new MatTableDataSource(arr);
            this.pAcending = false;
            this.pDecending = true;
        } else if (option === 'category') {
            const arr = _.sortBy(this.gap, [(o) => o.Category]);
            this.dataSource = new MatTableDataSource(arr);
            this.cDecending = true;
            this.cAcending = false;
        } else if (option === 'size') {
            const arr = _.sortBy(this.gap, [(o) => o.size]);
            this.dataSource = new MatTableDataSource(arr);
            this.sAcending = false;
            this.sDecending = true;
        } else if (option === 'quantity') {
            const arr = this.gap.sort((a, b) => a.Quantity - b.Quantity);
            this.dataSource = new MatTableDataSource(arr);
            this.qAcending = false;
            this.qDecending = true;
        } else if (option === 'subcategory') {
            const arr = _.sortBy(this.gap, [(o) => o.Subcategory]);
            this.dataSource = new MatTableDataSource(arr);
            this.subAcending = false;
            this.subDecending = true;
        }
        this.dataSource.paginator = this.paginator;
    }
    descendingOrder(option): void {
        if (option === 'name') {
            const arr = _.sortBy(this.gap, [(o) => o.Productname]);
            arr.reverse();
            this.dataSource = new MatTableDataSource(arr);
            this.nAcending = true;
            this.nDecending = false;
        } else if (option === 'Price') {
            const arr = this.gap.sort((a, b) => a.Price - b.Price);
            arr.reverse();
            this.dataSource = new MatTableDataSource(arr);
            this.pAcending = true;
            this.pDecending = false;
        } else if (option === 'category') {
            const arr = _.sortBy(this.gap, [(o) => o.Category]);
            arr.reverse();
            this.dataSource = new MatTableDataSource(arr);
            this.cDecending = false;
            this.cAcending = true;
        } else if (option === 'size') {
            const arr = _.sortBy(this.gap, [(o) => o.size]);
            arr.reverse();
            this.dataSource = new MatTableDataSource(arr);
            this.sAcending = true;
            this.sDecending = false;
        } else if (option === 'quantity') {
            const arr = this.gap.sort((a, b) => a.Quantity - b.Quantity);
            arr.reverse();
            this.dataSource = new MatTableDataSource(arr);
            this.qAcending = true;
            this.qDecending = false;
        } else if (option === 'subcategory') {
            const arr = _.sortBy(this.gap, [(o) => o.Subcategory]);
            arr.reverse();
            this.dataSource = new MatTableDataSource(arr);
            this.subAcending = true;
            this.subDecending = false;
        }
        this.dataSource.paginator = this.paginator;
    }
}
