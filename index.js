// Code your solution herenpm test

function findMatching(drivers, name) {
    return drivers.filter((drivers) => {
        if(drivers.toLowerCase() === name.toLowerCase()) {
            return true;
        }
    })
}


function fuzzyMatch(collection, string) {
    return collection.filter((driver) => {
        if (driver.toLowerCase().startsWith(string.toLowerCase())) {
            return true;
        }
    })
}

function matchName(DriverObj, name) {
    return DriverObj.filter((DriverObj) => {
        if (DriverObj.name.toLowerCase() === name.toLowerCase()) {
            return true;
        }
    })
  
}