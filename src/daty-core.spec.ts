import { DatyCore } from './daty-core'

describe('basics', () => {
  it('instantiate with numbers', () => {
    const [year, month, date] = [2000, 0, 1]
    const daty = new DatyCore(year, month, date)
    expect(daty.year).toBe(year)
    expect(daty.month).toBe(month)
    expect(daty.date).toBe(date)
  })

  it('instantiate with Date', () => {
    const date = new Date(2000, 0, 1)
    const daty = new DatyCore(date)
    expect(daty.year).toBe(date.getFullYear())
    expect(daty.month).toBe(date.getMonth())
    expect(daty.date).toBe(date.getDate())
  })
})
