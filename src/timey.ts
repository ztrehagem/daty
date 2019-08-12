export class Timey {
  protected _hour = NaN
  protected _minute = NaN
  protected _second = NaN
  protected _millisecond = NaN
  protected _jsDate: Date

  constructor(jsDate: Date)
  constructor(
    hour?: number,
    minute?: number,
    second?: number,
    millisecond?: number,
  )
  constructor(
    hourOrJsDate: number | Date = NaN,
    minute = NaN,
    second = NaN,
    millisecond = NaN,
  ) {
    this._jsDate = new Date(1900, 0, 1, 0, 0, 0, 0)
    if (hourOrJsDate instanceof Date) {
      this.jsDate = hourOrJsDate
    } else {
      this.hour = hourOrJsDate
      this.minute = minute
      this.second = second
      this.millisecond = millisecond
    }
  }

  get hour() {
    return this._hour
  }

  set hour(hour: number) {
    hour = Math.round(hour)
    this._hour = ((hour % 24) + 24) % 24
  }

  clearHour() {
    this._hour = NaN
  }

  get hasHour() {
    return !isNaN(this._hour)
  }

  get minute() {
    return this._minute
  }

  set minute(minute: number) {
    minute = Math.round(minute)
    if (minute < 0) {
      this.hour -= 1
      this.minute = minute + 60
    } else if (minute > 59) {
      this.hour += 1
      this.minute = minute - 60
    } else {
      this._minute = minute
    }
  }

  clearMinute() {
    this._minute = NaN
  }

  get hasMinute() {
    return !isNaN(this._minute)
  }

  get second() {
    return this._second
  }

  set second(second: number) {
    second = Math.round(second)
    if (second < 0) {
      this.minute -= 1
      this.second = second + 60
    } else if (second > 59) {
      this.minute += 1
      this.second = second - 60
    } else {
      this._second = second
    }
  }

  clearSecond() {
    this._second = NaN
  }

  get hasSecond() {
    return !isNaN(this._second)
  }

  get millisecond() {
    return this._millisecond
  }

  set millisecond(millisecond: number) {
    millisecond = Math.round(millisecond)
    if (millisecond < 0) {
      this.second -= 1
      this.millisecond = millisecond + 1000
    } else if (millisecond > 999) {
      this.second += 1
      this.millisecond = millisecond - 1000
    } else {
      this._millisecond = millisecond
    }
  }

  clearMillisecond() {
    this._millisecond = NaN
  }

  get hasMillisecond() {
    return !isNaN(this._millisecond)
  }

  get jsDate() {
    this._jsDate.setHours(this.hour)
    this._jsDate.setMinutes(this.minute)
    this._jsDate.setSeconds(this.second)
    this._jsDate.setMilliseconds(this.millisecond)
    return this._jsDate
  }

  set jsDate(obj: Date) {
    this.hour = obj.getHours()
    this.minute = obj.getMinutes()
    this.second = obj.getSeconds()
    this.millisecond = obj.getMilliseconds()
  }

  toDate() {
    return new Date(this.jsDate)
  }
}
