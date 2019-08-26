import { TimyCore } from './timy-core'

export class Timy extends TimyCore {
  // --------------------------------
  // calculation
  // --------------------------------

  valueOf() {
    return this.jsDate.valueOf()
  }

  equals(timy: TimyCore) {
    return (
      ((!this.hasHours && !timy.hasHours) || this.hours === timy.hours) &&
      ((!this.hasMinutes && !timy.hasMinutes) ||
        this.minutes === timy.minutes) &&
      ((!this.hasSeconds && !timy.hasSeconds) ||
        this.seconds === timy.seconds) &&
      ((!this.hasMilliseconds && !timy.hasMilliseconds) ||
        this.milliseconds === timy.milliseconds)
    )
  }

  // --------------------------------
  // general methods
  // --------------------------------

  clear() {
    this.clearHours()
    this.clearMinutes()
    this.clearSeconds()
    this.clearMilliseconds()
  }

  get isFilled() {
    return (
      this.hasHours &&
      this.hasMinutes &&
      this.hasSeconds &&
      this.hasMilliseconds
    )
  }

  now() {
    this.jsDate = new Date()
  }
}
