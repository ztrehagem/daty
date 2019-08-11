export function endOfMonth(year: number, month: number) {
  const d = new Date(year, month)
  d.setMonth(d.getMonth() + 1)
  d.setDate(0)
  return d.getDate()
}
