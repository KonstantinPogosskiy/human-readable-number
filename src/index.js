module.exports = function toReadable(number) {

    let upToNineteen = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

    let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let hundred = 'hundred';

    let first = number.toString().split('').slice(0, 1).join('')
    let last = number.toString().split('').slice(1, 3).join('')

    if (number === 0) {
        return 'zero'
    }

    if (number < 20) {
        return upToNineteen[number - 1];
    }

    if (number <= 99 && number % 10 !== 0) {
        return dozens[Math.floor(number / 10) - 1] + ' ' + upToNineteen[number % 10 - 1];
    } else if (number <= 99 && number % 10 === 0) {
        return dozens[Math.floor(number / 10) - 1];

    } else if (number >= 100 && number % 100 !== 0 && last < 20) {
        return upToNineteen[first - 1] + ' ' + hundred + ' ' + upToNineteen[last - 1]

    } else if (number >= 100 && number % 100 !== 0 && last % 10 === 0) {
        return upToNineteen[first - 1] + ' ' + hundred + ' ' + dozens[Math.floor(last / 10) - 1]

    } else if (number >= 100 && number % 100 !== 0 && last > 20) {
        return upToNineteen[first - 1] + ' ' + hundred + ' ' + dozens[Math.floor(last / 10) - 1] + ' ' + upToNineteen[last % 10 - 1]
    }
    return upToNineteen[first - 1] + ' ' + hundred;
}

