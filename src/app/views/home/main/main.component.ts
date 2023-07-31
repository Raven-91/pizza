import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";
import {map, Subject, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";



// declare var bootstrap: any; // вариант без тайпинга
// import * as bootstrap from 'bootstrap'; // вариант для npm

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  // private observable: Observable<number>;
  private subject: Subject<number>;

// private promise: Promise<string>; // добавили Promise для сравнения с Observable

  constructor(public cartService: CartService,
              // private modalService: NgbModal
  ) {

    this.subject = new Subject<number>();
    let count = 0;
    const interval = setInterval(() => {
      this.subject.next(count++);
    }, 1000);
    const timeout1 = setTimeout(() => {
      this.subject.complete();
    }, 4000);


    // this.promise = new Promise<string>((resolve) => {
    //   setTimeout(() => {
    //     resolve('Hello world 1');
    //   }, 2000);
    // }); // добавили Promise для сравнения с Observable

    // this.observable = from([1, 2, 3, 4, 5]);

    // this.observable = new Observable((observer) => {
    //   let count = 0;
    //   const interval = setInterval(() => {
    //     observer.next(count++);
    //   }, 1000);
    //   const timeout1 = setTimeout(() => {
    //     observer.complete();
    //   }, 4000);
    //   const timeout2 = setTimeout(() => {
    //     observer.error('Hello world 3');
    //   }, 5000);
    //
    //   return {
    //     unsubscribe() {
    //       clearInterval(interval);
    //       clearTimeout(timeout1);
    //       clearTimeout(timeout2);
    //     }
    //   }
    // })
  }

  private subscription: Subscription | null = null;

  // @ViewChild('popup')
  // popup!: TemplateRef<ElementRef>;

  ngOnInit() {

    // const myModalAlternative = new bootstrap.Modal('#myModal', {});
    // myModalAlternative.show();

    // this.promise.then((param: string) => {
    //     console.log(param);
    // }) // добавили Promise для сравнения с Observable

    this.subscription = this.subject
      .subscribe(
        {
          next: (param: number) => {
            console.log('subscriber 1: ', param);
          },
          error: (error: string) => {
            console.log('ERROR!!! ' + error);
          }
        })

    // this.subscription = this.observable
    //   .subscribe(
    //     {
    //       next: (param: number) => {
    //         console.log('subscriber 1: ', param);
    //       },
    //       error: (error: string) => {
    //         console.log('ERROR!!! ' + error);
    //       }
    //     })

    // this.subscription = this.observable.subscribe(
    //   {
    //     next: (param: number) => {
    //       console.log('subscriber 1: ', param);
    //     },
    //     error: (error: string) => {
    //       console.log('ERROR!!! ' + error);
    //     }
    //   })
  }

  @ViewChild(PopupComponent) private popupComponent!: PopupComponent;

  ngAfterViewInit(): void {
    // this.modalService.open(this.popup, {});

    // const modalRef = this.modalService.open(PopupComponent);
    // modalRef.componentInstance.data = 'Main component';

    // this.popupComponent.open();

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  test() {

    this.subject
      .pipe(
        map(number => {
          return 'Число: ' + number;
        })
      )
      .subscribe((param: string) => {
        console.log('subscriber 2: ', param);
      })
    // this.observable
    //   .pipe(
    //     map(number => {
    //       return 'Число: ' + number;
    //     })
    //   )
    //   .subscribe((param: string) => {
    //     console.log('subscriber 2: ', param);
    //   })
  }
}
