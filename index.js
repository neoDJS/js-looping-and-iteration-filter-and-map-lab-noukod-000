// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(d => d.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue){
  return drivers.filter(d => d.revenue > revenue).map(d => d.name)
}

function exactMatch(drivers, matcher){
  return drivers.filter(d => Object.keys(matcher).every(k => matcher[k] === d[k]))
}

function exactMatchToList(drivers, matcher){

}
