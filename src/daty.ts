import { endOfMonth } from './utils'

export class Daty {
  protected _year = NaN
  protected _month = NaN
  protected _date = NaN
  protected _jsDate: Date

  constructor(jsDate: Date)
  constructor(year?: number, month?: number, date?: number)
  constructor(
    yearOrJsDate: number | Date = NaN,
    month: number = NaN,
    date: number = NaN,
  ) {
    this._jsDate = new Date(1900, 0, 1, 0, 0, 0, 0)
    if (yearOrJsDate instanceof Date) {
      this.dateObj = yearOrJsDate
    } else {
      this.year = yearOrJsDate
      this.month = month
      this.date = date
    }
  }

  get year() {
    return this._year
  }

  set year(year: number) {
    year = Math.round(year)
    this._year = Math.max(year, 1900)
    this.date = Math.min(this.date, this.endOfMonth)
  }

  clearYear() {
    this._year = NaN
  }

  get hasYear() {
    return !isNaN(this._year)
  }

  get month() {
    return this._month
  }

  set month(month: number) {
    month = Math.round(month)
    if (month < 0) {
      this.year -= 1
      this.month = month + 12
    } else if (month > 11) {
      this.year += 1
      this.month = month - 12
    } else {
      this._month = month
      this.date = Math.min(this.date, this.endOfMonth)
    }
  }

  clearMonth() {
    this._month = NaN
  }

  get hasMonth() {
    return !isNaN(this._month)
  }

  get date() {
    return this._date
  }

  set date(date: number) {
    date = Math.round(date)
    const endOfThisMonth = this.endOfMonth
    if (date < 1) {
      this.month -= 1
      this.date = date + this.endOfMonth
    } else if (date > endOfThisMonth) {
      this.month += 1
      this.date = date - endOfThisMonth
    } else {
      this._date = date
    }
  }

  get hasDate() {
    return !isNaN(this._date)
  }

  get endOfMonth() {
    if (isNaN(this.year) || isNaN(this.month)) {
      return 31
    }
    return endOfMonth(this.year, this.month)
  }

  get dateObj() {
    this._jsDate.setFullYear(this.year)
    this._jsDate.setMonth(this.month)
    this._jsDate.setDate(this.date)
    return this._jsDate
  }

  set dateObj(obj: Date) {
    this.year = obj.getFullYear()
    this.month = obj.getMonth()
    this.date = obj.getDate()
  }

  toDate() {
    return new Date(this.dateObj)
  }
}
