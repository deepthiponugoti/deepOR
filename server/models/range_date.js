var moment = require('moment-timezone')

module.exports = function RangeDate(date) {
    if (date) {
        this.date = date instanceof RangeDate ? moment(date.value()) : moment(date)
    } else {
        this.date = moment()
    }

this.toString = function() {
    return this.date.format('MMMM D, YYYY')
}

this.toCal = function() {
    return this.date.format('MMM[\n]M/D')
}

this.toRef = function() {
    return this.date.format('YYYY-MM-DD, HH')
}

this.value = function() {
    return this.date._d
}

this.advance = function(increment, amount) {
    return new RangeDate(
        this.date.clone().add(amount, increment)
    )
}
}