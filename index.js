const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function () {
   return drivers.slice(0,2)
}
const returnLastTwoDrivers = function () {
    return drivers.slice(-2,)
 }
const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]
function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer;
      } 
}
const Double = createFareMultiplier(integer);
function fareDoubler(fare) {
    return fare * 2;
}
const triple = createFareMultiplier(integer);
function fareTripler(fare) {
    return fare * 3;
}
function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers)
}
selectDifferentDrivers(drivers, returnFirstTwoDrivers);