const validDate = (date1, date2) => {
    return date1.getTime() <= date2.getTime();
}

module.exports = validDate;