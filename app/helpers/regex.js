



// Norme RFC2822
export const mailRegex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/ 

// Phone (+352) 123 456 789 | +352 123 456 789 | +352 123 456-7 | 00352 123 456 789
export const phoneRegex = /^([(]{1}[+]{1}[\d]+[)]{1})?([+]{1}[\d]+)?([\d\-\s])+$/


export const ccNumberRegex = /^[\d]{4}[\-\s]?[\d]{4}[\-\s]?[\d]{4}[\-\s]?[\d]{4}$/
export const ccVisaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/
export const ccMastercardRegex = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/
export const ccAmexRegex = /^3[47][0-9]{13}$/
export const ccDinersRegex = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/
export const ccExpRegex = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/?(0[1-9]|1[0-2])$/ // MM/YY
export const ccCvvRegex = /^[0-9]{3,4}$/

