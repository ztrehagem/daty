import { DatyCore } from './daty-core'

export class Daty extends DatyCore {
  // --------------------------------
  // week day
  // --------------------------------

  get day() {
    return this.jsDate.getDay()
  }

  // --------------------------------
  // calculation
  // --------------------------------

  valueOf() {
    return this.jsDate.valueOf()
  }

  equals(daty: DatyCore) {
    return (
      ((!this.hasYear && !daty.hasYear) || this.year === daty.year) &&
      ((!this.hasMonth && !daty.hasMonth) || this.month === daty.month) &&
      ((!this.hasDate && !daty.hasDate) || this.date === daty.date)
    )
  }

  after(amount: number, unit: 'year' | 'month' | 'date') {
    this[unit] += amount
    return this
  }

  before(amount: number, unit: 'year' | 'month' | 'date') {
    return this.after(-amount, unit)
  }

  // --------------------------------
  // general methods
  // --------------------------------

  clear() {
    this.clearYear()
    this.clearMonth()
    this.clearDate()
  }

  get isFilled() {
    return this.hasYear && this.hasMonth && this.hasDate
  }

  today() {
    this.jsDate = new Date()
    return this
  }
}
