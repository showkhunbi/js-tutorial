//FUNCTION TO COVERT DATE(dd,mm,yyyy) TO NUMBER OF DAYS
//==> days = currentDate - date

//input argument of date into function
function getDays(day, month, year) {
  day = Number(day);
  month = Number(month);
  year = Number(year);

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth() + 1;
  let currentDay = currentDate.getUTCDate();

  //multiply the years in between the dates by complete number of days in a year
  calyear = year + 1;
  numberOfDaysinYear = 0;
  while (calyear < currentYear) {
    if (calyear % 4 != 0) {
      numberOfDaysinYear += 365;
    }
    if (calyear % 4 == 0) {
      numberOfDaysinYear += 366;
    }
    calyear++;
  }
  //function to get the number of days that has elapsed in a year say months * days
  function GetnumberofDaysinMonth(currentMonth, monthyear) {
    numberOfDaysinMonth = 0;
    //switch function is reversed
    switchMonth = 13 - currentMonth;
    switch (switchMonth) {
      case 1:
        numberOfDaysinMonth += 31;
      case 2:
        numberOfDaysinMonth += 30;
      case 3:
        numberOfDaysinMonth += 31;
      case 4:
        numberOfDaysinMonth += 30;
      case 5:
        numberOfDaysinMonth += 31;
      case 6:
        numberOfDaysinMonth += 31;
      case 7:
        numberOfDaysinMonth += 30;
      case 8:
        numberOfDaysinMonth += 31;
      case 9:
        numberOfDaysinMonth += 30;
      case 10:
        numberOfDaysinMonth += 31;
      case 11:
        if (monthyear % 4 != 0) {
          numberOfDaysinMonth += 28;
        }
        if (monthyear % 4 == 0) {
          numberOfDaysinMonth += 29;
        }
      case 12:
        numberOfDaysinMonth += 31;
    }
    return numberOfDaysinMonth;
  }
  //calculate the number of days remaining in the year
  if (year % 4 != 0) {
    numberOfremainingDays =
      365 - (GetnumberofDaysinMonth(month - 1, year) + day);
  }
  if (year % 4 == 0) {
    numberOfremainingDays =
      366 - (GetnumberofDaysinMonth(month - 1, year) + day);
  }
  //calculate the number of days that has elapsed in the current year
  numberOfElapsedDaysinCurrentYear =
    GetnumberofDaysinMonth(currentMonth - 1, currentYear) + currentDay;

  //calculate (currentdate - date) by summing the number of days in the years in between date and current date, the number of remaining days in date-year and the number of elapsed days in current year
  numberOfDays =
    numberOfremainingDays +
    numberOfElapsedDaysinCurrentYear +
    numberOfDaysinYear;
  if (year == currentYear) {
    numberOfDays =
      numberOfElapsedDaysinCurrentYear -
      (GetnumberofDaysinMonth(month - 1, year) + day);
  }
  return numberOfDays;
}
// getDays(21, 8, 2020);
// console.log(numberOfDays);
