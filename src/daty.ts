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

  after(amount: number, unit: 'year' | 'month' | 'date') {
    const daty = this.clone()
    daty[unit] += amount
    return daty
  }

  before(amount: number, unit: 'year' | 'month' | 'date') {
    return this.after(-amount, unit)
  }

  equals(daty: Daty) {
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

  clone() {
    return new Daty(this.year, this.month, this.date)
  }

  // --------------------------------
  // static methods
  // --------------------------------

  static today() {
    return new Daty(new Date())
  }
}
