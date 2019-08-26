import { Timy } from './timy'

export abstract class TimyExtend<T extends TimyExtend<T>> extends Timy {
  abstract factory(): T

  // --------------------------------
  // calculation
  // --------------------------------

  after(
    amount: number,
    unit: 'hours' | 'minutes' | 'seconds' | 'milliseconds',
  ) {
    const instance = this.clone()
    instance[unit] += amount
    return instance
  }

  before(
    amount: number,
    unit: 'hours' | 'minutes' | 'seconds' | 'milliseconds',
  ) {
    return this.after(-amount, unit)
  }

  // --------------------------------
  // general methods
  // --------------------------------

  clone() {
    const instance = this.factory()
    instance.hours = this.hours
    instance.minutes = this.minutes
    instance.seconds = this.seconds
    instance.milliseconds = this.milliseconds
    return instance
  }
}
