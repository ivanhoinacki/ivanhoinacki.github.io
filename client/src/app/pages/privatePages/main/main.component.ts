import { Component, OnInit } from '@angular/core';
declare var $ : any;

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        $('.description').typed({
            strings: [
                'web deev..', 'Noow Team Leader ;)'
            ],
            backDelay: 300,
            typeSpeed: 30
        });
    }
}
