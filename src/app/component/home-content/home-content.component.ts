import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-content',
    templateUrl: './home-content.component.html',
    styleUrls: ['./home-content.component.css'],
})
export class HomeContentComponent implements OnInit {
    customOptions: any;
    constructor() {}

    ngOnInit(): void {
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: { items: 1 },
                400: { items: 2 },
                740: { items: 3 },
                940: { items: 5 },
            },
            nav: true,
        };
    }
}
