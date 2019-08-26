import { Daty } from './daty'

export abstract class DatyExtend<T extends DatyExtend<T>> extends Daty {
  abstract factory(): T

  // --------------------------------
  // calculation
  // --------------------------------

  after(amount: number, unit: 'year' | 'month' | 'date') {
    const instance = this.clone()
    instance[unit] += amount
    return instance
  }

  before(amount: number, unit: 'year' | 'month' | 'date') {
    return this.after(-amount, unit)
  }

  // --------------------------------
  // general methods
  // --------------------------------

  clone() {
    const instance = this.factory()
    instance.year = this.year
    instance.month = this.month
    instance.date = this.date
    return instance
  }
}
