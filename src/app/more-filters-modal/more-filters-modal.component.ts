import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgbActiveModal,
  NgbModal,
  ModalDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-more-filters-modal-content',
  template: `
    <div class="modal-header">
      <h4>More Filters</h4>
      <!--center on header-->
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div class="modal-content">
      <div class="modal-body">
        <app-more-filters></app-more-filters>
      </div>
    </div>

    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-dark"
        (click)="activeModal.close('Close click')"
      >
        Close
      </button>
    </div>
  `,
  host: {
    '[style.display]': '"flex"',
    '[style.flex-direction]': '"column"',
    '[style.overflow]': '"hidden"',
  },
})
export class MoreFiltersModalContent {
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-more-filters-modal',
  templateUrl: './more-filters-modal.component.html',
  styleUrls: ['./more-filters-modal.component.css'],
})
export class MoreFiltersModalComponent implements OnInit {
  title: string = 'More Filters';
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openMoreFilters() {
    this.modalService
      .open(MoreFiltersModalContent, {
        ariaLabelledBy: 'modal-basic-title',
        backdropClass: 'dark-backdrop',
        scrollable: true,
        size: 'lg',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
