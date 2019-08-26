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
