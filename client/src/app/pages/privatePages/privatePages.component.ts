import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'private-pages',
    templateUrl: './privatePages.component.html',
    styleUrls: ['./privatePages.component.scss']
})

export class PrivatePagesComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {
        document.getElementById('loader').style.display = 'none';
    }

    onClickOverlay() {
        var toggle = document.getElementById("toggle");
        toggle.classList.toggle("active");
        var overlay = document.getElementById("overlay");
        overlay.classList.toggle("open");
    }
}
