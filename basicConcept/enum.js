var daysOfTheWeek;
(function (daysOfTheWeek) {
    daysOfTheWeek[daysOfTheWeek["SUN"] = 0] = "SUN";
    daysOfTheWeek[daysOfTheWeek["MON"] = 1] = "MON";
    daysOfTheWeek[daysOfTheWeek["TUE"] = 2] = "TUE";
    daysOfTheWeek[daysOfTheWeek["WED"] = 3] = "WED";
    daysOfTheWeek[daysOfTheWeek["THRU"] = 4] = "THRU";
    daysOfTheWeek[daysOfTheWeek["FRI"] = 5] = "FRI";
    daysOfTheWeek[daysOfTheWeek["SAT"] = 6] = "SAT";
})(daysOfTheWeek || (daysOfTheWeek = {}));
var day = daysOfTheWeek.MON;
if (day == daysOfTheWeek.MON) {
    console.log('its monday');
}
else
    console.log('its not mondasy');
