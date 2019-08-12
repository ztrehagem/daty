import { Daty, Timy } from './dist'

let d = new Daty()

console.log('d.dateObj = new Date()')
d.jsDate = new Date()
console.log('d', d)
console.log('d.jsDate', d.jsDate)

let t = new Timy()

console.log('t.jsDate = new Date()')
t.jsDate = new Date()
console.log('t', t)
console.log('t.jsDate', t.jsDate)
