import { AfterViewInit, Directive, ElementRef } from '@angular/core'

@Directive({
    selector: 'input[focus]'
})
export class FocusDirective implements AfterViewInit {

    constructor(public element: ElementRef<HTMLElement>) {
    }

    ngAfterViewInit(): void {
        setTimeout(() => this.element.nativeElement.focus(), 0)
    }
}
