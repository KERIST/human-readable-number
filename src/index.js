module.exports = function toReadable (number) {
    let equivalents = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
    6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve',
    13: 'thirteen', 14: 'fourteen', 15: 'fifteen'};
    let dozens = {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'}
    let numbersArray = `${number}`.split('');
  
    if(number >= 0 && number <= 15) {
        return equivalents[number];
    } else if(number === 18) {
        return 'eighteen';
    }else if(number >= 16 && number < 20) {
        return `${equivalents[numbersArray[1]]}teen`
    } else if(number >= 20 && number <= 99){
        if(numbersArray[1] === '0') return dozens[numbersArray[0]];
        return `${dozens[numbersArray[0]]} ${equivalents[numbersArray[1]]}`;
    } else if(number === 100) {
        return 'one hundred';
    } else if(number > 100 && `${numbersArray[1]}${numbersArray[2]}` === '00') {
        return `${equivalents[numbersArray[0]]} hundred`;
    } else if(number > 100 && +`${numbersArray[1]}${numbersArray[2]}` > 1 && +`${numbersArray[1]}${numbersArray[2]}` <=15) {
        if(numbersArray[1] === '0') return `${equivalents[numbersArray[0]]} hundred ${equivalents[`${numbersArray[2]}`]}`
        return `${equivalents[numbersArray[0]]} hundred ${equivalents[`${numbersArray[1]}${numbersArray[2]}`]}`
    } else if(number > 100 && +`${numbersArray[1]}${numbersArray[2]}` >= 16 && +`${numbersArray[1]}${numbersArray[2]}` <=19) {
        if(`${numbersArray[1]}${numbersArray[2]}` === '18') return `${equivalents[numbersArray[0]]} hundred eighteen`;
        return `${equivalents[numbersArray[0]]} hundred ${equivalents[numbersArray[2]]}teen`
    } else if(number > 100 && numbersArray[2] === '0') {
        return `${equivalents[numbersArray[0]]} hundred ${dozens[numbersArray[1]]}`;
    } else if(number > 100 && numbersArray[1] === '0') {
        return `${equivalents[numbersArray[0]]} hundred ${equivalents[numbersArray[2]]}`;
    } else if(number > 100) {
        return `${equivalents[numbersArray[0]]} hundred ${dozens[numbersArray[1]]} ${equivalents[numbersArray[2]]}`;
    }
}