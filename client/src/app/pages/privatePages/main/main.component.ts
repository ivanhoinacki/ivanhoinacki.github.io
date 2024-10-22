import { Component, OnInit } from "@angular/core";
declare var $: any;

@Component({
    selector: "main",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        $(".description").typed({
            strings: ["Senior Software Engineer Consultant...", "Full Lifecycle Management", "Technical Leadership", "Process Optimization", "Project Management", "Mentorship and Best Practices", "Architectural Leadership", "Workflow Organization", "Problem Solving", "Cross-functional Collaboration"],
            backDelay: 300,
            typeSpeed: 30
        });
    }
}
