import RangeDate from './range_date'

export default class DateRange {
  constructor(...args) {
    let [ from, to ] = args

    this.from = new RangeDate(from)
    this.to = new RangeDate(to)
  }

  daysInRange() {
    return this.to.date.diff(this.from.date, 'hours') + 1

  }

  toString() {
    var daysInRange = this.to.date.diff(this.from.date, 'days') + 1;
    if(daysInRange <= 1)
    {
      return `${this.from.toString()}`
    }
    else
    {
      return `${this.from.toString()} - ${this.to.toString()}`
    }

  }

  advance(reverse = false) {
    var from = new RangeDate();
    var to  = new RangeDate();
    if(reverse == true){
      from = this.from.advance('days', -1)
      to = this.to.advance('days', -1)
    }
    else{
      from = this.from.advance('days', 1)
      to = this.to.advance('days', 1)
    }
    return new DateRange(from, to)
  }

  map(func) {
    let current = this.from,
        dates = []

    while (current.value() <= this.to.value()) {
      dates.push(func(current))
      current = current.advance('hours', 1)
    }

    return dates
  }

  forEach(func) {
    let current = this.from

    while (current.value() <= this.to.value()) {
      func(current)
      current = current.advance('hours', 1)
    }
  }
}
