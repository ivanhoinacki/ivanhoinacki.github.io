import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {OnDestroy} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './app/components/home/comp.home.html',
    styleUrls: ['./app/components/home/comp.home.css']
})

export class HomeCmp implements onInit, OnDestroy {

    ngOnInit() {
        $('.description').typed({
            strings: [
                'web deev..', 'Frontend Engineer ;)'
            ],
            backDelay: 300,
            typeSpeed: 30
        });
    }

    ngOnDestroy() { }
}
