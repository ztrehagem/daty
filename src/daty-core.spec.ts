import { DatyCore } from './daty-core'

function toYmd(daty: DatyCore) {
  return [daty.year, daty.month, daty.date]
}

describe('DatyCore', () => {
  it('instantiate with numbers', () => {
    const ymd = [2000, 0, 1] as const
    const daty = new DatyCore(...ymd)
    expect(toYmd(daty)).toEqual(ymd)
    expect(daty.hasYear).toEqual(true)
    expect(daty.hasMonth).toEqual(true)
    expect(daty.hasDate).toEqual(true)
  })

  it('instantiate with Date', () => {
    const date = new Date(2000, 0, 1)
    const daty = new DatyCore(date)
    expect(toYmd(daty)).toEqual([
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    ])
    expect(daty.hasYear).toEqual(true)
    expect(daty.hasMonth).toEqual(true)
    expect(daty.hasDate).toEqual(true)
  })

  it('instantiate with NaN', () => {
    const daty = new DatyCore()
    expect(toYmd(daty)).toEqual([NaN, NaN, NaN])
    expect(daty.hasYear).toEqual(false)
    expect(daty.hasMonth).toEqual(false)
    expect(daty.hasDate).toEqual(false)
  })

  it('date overflow (Jan)', () => {
    const daty = new DatyCore(2000, 0, 31)
    daty.date += 1
    expect(toYmd(daty)).toEqual([2000, 1, 1])
  })

  it('date overflow (Feb)', () => {
    const daty = new DatyCore(2001, 1, 28)
    daty.date += 1
    expect(toYmd(daty)).toEqual([2001, 2, 1])
  })

  it('date overflow (Feb/Leap year)', () => {
    const daty = new DatyCore(2000, 1, 29)
    daty.date += 1
    expect(toYmd(daty)).toEqual([2000, 2, 1])
  })

  it('shrink date', () => {
    const daty = new DatyCore(2001, 0, 31)
    daty.month += 1
    expect(toYmd(daty)).toEqual([2001, 1, 28])
  })

  it('month overflow', () => {
    const daty = new DatyCore(2000, 11, 1)
    daty.month += 1
    expect(toYmd(daty)).toEqual([2001, 0, 1])
  })

  it('date underflow (Jan)', () => {
    const daty = new DatyCore(2000, 0, 1)
    daty.date -= 1
    expect([1999, 11, 31]).toEqual(toYmd(daty))
  })

  it('date underflow (Feb)', () => {
    const daty = new DatyCore(2001, 2, 1)
    daty.date -= 1
    expect(toYmd(daty)).toEqual([2001, 1, 28])
  })

  it('date underflow (Feb/Leap year)', () => {
    const daty = new DatyCore(2000, 2, 1)
    daty.date -= 1
    expect(toYmd(daty)).toEqual([2000, 1, 29])
  })

  it('month underflow', () => {
    const daty = new DatyCore(2000, 0, 1)
    daty.month -= 1
    expect(toYmd(daty)).toEqual([1999, 11, 1])
  })

  it('clear year', () => {
    const daty = new DatyCore(2000, 0, 1)
    daty.clearYear()
    expect(daty.hasYear).toEqual(false)
    expect(toYmd(daty)).toEqual([NaN, 0, 1])
  })

  it('clear month', () => {
    const daty = new DatyCore(2000, 0, 1)
    daty.clearMonth()
    expect(daty.hasMonth).toEqual(false)
    expect(toYmd(daty)).toEqual([2000, NaN, 1])
  })

  it('clear date', () => {
    const daty = new DatyCore(2000, 0, 1)
    daty.clearDate()
    expect(daty.hasDate).toEqual(false)
    expect(toYmd(daty)).toEqual([2000, 0, NaN])
  })

  it('get jsDate', () => {
    const daty = new DatyCore(2000, 0, 1)
    const date = daty.jsDate
    expect([date.getFullYear(), date.getMonth(), date.getDate()]).toEqual([
      2000,
      0,
      1,
    ])
  })

  it('set jsDate', () => {
    const daty = new DatyCore(2000, 0, 1)
    const ymd = [2001, 1, 2] as const
    daty.jsDate = new Date(...ymd)
    expect(toYmd(daty)).toEqual(ymd)
  })
})
