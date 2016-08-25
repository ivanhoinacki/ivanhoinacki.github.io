import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {OnDestroy} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './app/components/home/comp.home.html',
    styleUrls: ['./app/components/home/comp.home.css']
})

export class HomeCmp implements OnInit, OnDestroy {

    ngOnInit() {
        $('.description').typed({
            strings: [
                'web deev..', 'Front-end Engineer ;)'
            ],
            backDelay: 300,
            typeSpeed: 30
        });
        $('.button-background').click(function() {
            $('#toggle').toggleClass('active');
            $('#overlay').toggleClass('open');
        });
    }

    ngOnDestroy() {}
}
