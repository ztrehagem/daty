import { DatyCore } from './daty-core'

function toYmd (daty: DatyCore) {
  return [daty.year, daty.month, daty.date]
}

describe('DatyCore', () => {
  it('instantiate with numbers', () => {
    const ymd = [2000, 0, 1] as const
    const daty = new DatyCore(...ymd)
    expect(toYmd(daty)).toEqual(ymd)
  })

  it('instantiate with Date', () => {
    const date = new Date(2000, 0, 1)
    const daty = new DatyCore(date)
    expect(toYmd(daty)).toEqual([
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    ])
  })

  it('date overflow (Jan)', () => {
    const daty = new DatyCore(2000, 0, 31)
    expect(toYmd(daty)).toEqual([2000, 0, 31])
    daty.date += 1
    expect(toYmd(daty)).toEqual([2000, 1, 1])
  })

  it('date overflow (Feb)', () => {
    const daty = new DatyCore(2001, 1, 28)
    expect(toYmd(daty)).toEqual([2001, 1, 28])
    daty.date += 1
    expect(toYmd(daty)).toEqual([2001, 2, 1])
  })

  it('date overflow (Feb/Leap year)', () => {
    const daty = new DatyCore(2000, 1, 29)
    expect(toYmd(daty)).toEqual([2000, 1, 29])
    daty.date += 1
    expect(toYmd(daty)).toEqual([2000, 2, 1])
  })

  it('shrink date', () => {
    const daty = new DatyCore(2001, 0, 31)
    expect(toYmd(daty)).toEqual([2001, 0, 31])
    daty.month += 1
    expect(toYmd(daty)).toEqual([2001, 1, 28])
  })

  it('month overflow', () => {
    const daty = new DatyCore(2000, 11, 1)
    expect(toYmd(daty)).toEqual([2000, 11, 1])
    daty.month += 1
    expect(toYmd(daty)).toEqual([2001, 0, 1])
  })

  it('date underflow (Jan)', () => {
    const daty = new DatyCore(2000, 0, 1)
    expect(toYmd(daty)).toEqual([2000, 0, 1])
    daty.date -= 1
    expect([1999, 11, 31]).toEqual(toYmd(daty))
  })

  it('date underflow (Feb)', () => {
    const daty = new DatyCore(2001, 2, 1)
    expect(toYmd(daty)).toEqual([2001, 2, 1])
    daty.date -= 1
    expect(toYmd(daty)).toEqual([2001, 1, 28])
  })

  it('date underflow (Feb/Leap year)', () => {
    const daty = new DatyCore(2000, 2, 1)
    expect(toYmd(daty)).toEqual([2000, 2, 1])
    daty.date -= 1
    expect(toYmd(daty)).toEqual([2000, 1, 29])
  })

  it('month underflow', () => {
    const daty = new DatyCore(2000, 0, 1)
    expect(toYmd(daty)).toEqual([2000, 0, 1])
    daty.month -= 1
    expect(toYmd(daty)).toEqual([1999, 11, 1])
  })
})
