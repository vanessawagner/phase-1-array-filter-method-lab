function findMatching (driver, argument) {
    return driver.filter(function(name) {
        return name.toLowerCase() === argument.toLowerCase();
    } )
}

// function fuzzyMatch(driver, argument) {
//     return driver.filter(function(name) {
//         return name.toLowerCase().indexOf(argument.toLowerCase()) !== -1;
//     })
// }

function fuzzyMatch (driver, argument) {
    return driver.filter(function(name) {
        //return name.toLowerCase().indexOf(argument.toLowerCase())!==-1
        return name.startsWith(argument)
    })
}

function matchName(driver, argument) {
    const result = driver.filter(driver => driver.name === argument);
    return result
}