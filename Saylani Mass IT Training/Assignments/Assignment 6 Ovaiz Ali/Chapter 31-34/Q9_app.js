/* Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015  */
var date1 = new Date(2020, 4, 24);
var date2 = new Date(2020,7,15);
var diff = new Date(date2.getTime() - date1.getTime());
document.writeln(diff/(1000*3600*24) + " days have been passed since 1st Ramadan, 2020");