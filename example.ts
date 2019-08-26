import { Daty, DatyExtend, Timy } from './dist'

let d = new Daty()

console.log(d.hasYear)
console.log(d.year, d.month, d.date)

d.year = 2020
console.log(d.hasYear)
console.log(d.year, d.month, d.date)

d.month = 0
d.date = 31
console.log(d.year, d.month, d.date)

d.month = 2
console.log(d.year, d.month, d.date)

d.month = 1
console.log(d.year, d.month, d.date)

d.year = 2021
console.log(d.year, d.month, d.date)

d.month = 0
console.log(d.year, d.month, d.date)

console.log('// ---')
// ---

class ExDaty extends DatyExtend<ExDaty> {
  factory() {
    return new ExDaty()
  }

  toString(pad: boolean = true) {
    return [
      this.year,
      this.month + 1,
      this.date
    ].map(v => !pad ? v : v.toString().replace(/^(\d)$/, '0$1'))
    .join('-')
  }
}

d = new ExDaty(2020, 0, 1)
console.log('' + d)
d.month = 10
d.date = 30
console.log('' + d)

console.log(new ExDaty(new Date()).after(3, 'date').constructor === ExDaty)

console.log(new ExDaty(new Date()).equals(new ExDaty(new Date())))

console.log('// ---')
// ---

let t = new Timy()

console.log(t.hasHours)
console.log(t.hours, t.minutes, t.seconds)

t.hours = 12
console.log(t.hasHours)
console.log(t.hours, t.minutes, t.seconds)

t.minutes = 10
t.seconds = 20
console.log(t.hours, t.minutes, t.seconds)


t.minutes = 70
console.log(t.hours, t.minutes, t.seconds)
