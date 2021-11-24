import {Component} from '@angular/core';
import {NgbDate, NgbCalendar, NgbDatepickerI18n, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-range',
  templateUrl: './datepicker-range.html',
  providers: [{provide: NgbDatepickerI18n, useClass: NgbdDatepickerRange}],
  styles: [`
    .custom-day {
      text-align: center;
      padding: 0.185rem 0.25rem;
      display: inline-block;
      height: 2rem;
      width: 2rem;
    }
    .custom-day.focused {
      background-color: #e6e6e6;
    }
    .custom-day.range, .custom-day:hover {
      background-color: rgb(2, 117, 216);
      color: white;
    }
    .custom-day.faded {
      background-color: rgba(2, 117, 216, 0.5);
    }
  `]
})
export class NgbdDatepickerRange extends NgbDatepickerI18n {

  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;

  constructor(calendar: NgbCalendar) {
    super()
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  getWeekdayShortName(weekday: number): string {return "td"};
  getMonthShortName(month: number): string {return "mt"};
  getMonthFullName(month: number): string {return "month"};
  getDayAriaLabel(date: NgbDateStruct): string {return "e"};

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered = (date: NgbDate) => this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  isInside = (date: NgbDate) => date.after(this.fromDate) && date.before(this.toDate);
  isRange = (date: NgbDate) => date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date)
}
