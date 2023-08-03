import { Component } from "@angular/core";

@Component({
    selector: 'app-logo',
    template: `<img [src]="imageSrc" [alt]="alt" /> Logo`,
    styleUrls: ["./logo.component.sass"],
})
export class LogoComponent {

    imageSrc: string;
    alt: string;

    constructor() {
        this.imageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU";
        this.alt = "Bird Logo";
    }
}