export class Timy {
  protected _hours = NaN
  protected _minutes = NaN
  protected _seconds = NaN
  protected _milliseconds = NaN
  protected _jsDate: Date

  constructor(jsDate: Date)
  constructor(
    hours?: number,
    minutes?: number,
    seconds?: number,
    milliseconds?: number,
  )
  constructor(
    hoursOrJsDate: number | Date = NaN,
    minutes = NaN,
    seconds = NaN,
    milliseconds = NaN,
  ) {
    this._jsDate = new Date(1900, 0, 1, 0, 0, 0, 0)
    if (hoursOrJsDate instanceof Date) {
      this.jsDate = hoursOrJsDate
    } else {
      this.hours = hoursOrJsDate
      this.minutes = minutes
      this.seconds = seconds
      this.milliseconds = milliseconds
    }
  }

  get hours() {
    return this._hours
  }

  set hours(hours: number) {
    hours = Math.round(hours)
    this._hours = ((hours % 24) + 24) % 24
  }

  clearHours() {
    this._hours = NaN
  }

  get hasHours() {
    return !isNaN(this._hours)
  }

  get minutes() {
    return this._minutes
  }

  set minutes(minutes: number) {
    minutes = Math.round(minutes)
    if (minutes < 0) {
      this.hours -= 1
      this.minutes = minutes + 60
    } else if (minutes > 59) {
      this.hours += 1
      this.minutes = minutes - 60
    } else {
      this._minutes = minutes
    }
  }

  clearMinutes() {
    this._minutes = NaN
  }

  get hasMinutes() {
    return !isNaN(this._minutes)
  }

  get seconds() {
    return this._seconds
  }

  set seconds(seconds: number) {
    seconds = Math.round(seconds)
    if (seconds < 0) {
      this.minutes -= 1
      this.seconds = seconds + 60
    } else if (seconds > 59) {
      this.minutes += 1
      this.seconds = seconds - 60
    } else {
      this._seconds = seconds
    }
  }

  clearSeconds() {
    this._seconds = NaN
  }

  get hasSeconds() {
    return !isNaN(this._seconds)
  }

  get milliseconds() {
    return this._milliseconds
  }

  set milliseconds(milliseconds: number) {
    milliseconds = Math.round(milliseconds)
    if (milliseconds < 0) {
      this.seconds -= 1
      this.milliseconds = milliseconds + 1000
    } else if (milliseconds > 999) {
      this.seconds += 1
      this.milliseconds = milliseconds - 1000
    } else {
      this._milliseconds = milliseconds
    }
  }

  clearMilliseconds() {
    this._milliseconds = NaN
  }

  get hasMilliseconds() {
    return !isNaN(this._milliseconds)
  }

  get jsDate() {
    this._jsDate.setHours(this.hours)
    this._jsDate.setMinutes(this.minutes)
    this._jsDate.setSeconds(this.seconds)
    this._jsDate.setMilliseconds(this.milliseconds)
    return this._jsDate
  }

  set jsDate(obj: Date) {
    this.hours = obj.getHours()
    this.minutes = obj.getMinutes()
    this.seconds = obj.getSeconds()
    this.milliseconds = obj.getMilliseconds()
  }

  toDate() {
    return new Date(this.jsDate)
  }
}
