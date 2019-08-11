import { Daty, Timey } from './dist'

let d = new Daty()

console.log('d.dateObj = new Date()')
d.dateObj = new Date()
console.log('d', d)
console.log('d.dateObj', d.dateObj)

let t = new Timey()

console.log('t.dateObj = new Date()')
t.dateObj = new Date()
console.log('t', t)
console.log('t.dateObj', t.dateObj)
