const getDate = () => {
  const currentDate = new Date();

  // create date string
  const dayNum = currentDate.getDay();
  const monthNum = currentDate.getMonth();
  const dateNum = currentDate.getDate();
  const date = dateNum.toString();

  let day = "";
  switch (dayNum) {
    case 1:
      day = "Mon";
      break;
    case 2:
      day = "Tue";
      break;
    case 3:
      day = "Wed";
      break;
    case 4:
      day = "Thu";
      break;
    case 5:
      day = "Fri";
      break;
    case 6:
      day = "Sat";
      break;
    case 0:
      day = "Sun";
      break;
  }

  let month = "";
  switch (monthNum) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
  }

  // finish work on date
  const dateOutput = `${day} ${month} ${date}`;

  // create time string
  let hours: string;
  const hoursNum = currentDate.getHours();
  if (hoursNum < 10) {
    let hourString = hoursNum.toString();
    hours = `0${hourString}`;
  } else {
    if (hoursNum > 12) {
      hours = (hoursNum - 12).toString();
    } else {
      hours = hoursNum.toString();
    }
  }

  let minutes: string;
  const minutesNum = currentDate.getMinutes();
  if (minutesNum === 0) {
    minutes = "00";
  } else if (minutesNum === 1) {
    minutes = "01";
  } else if (minutesNum === 2) {
    minutes = "02";
  } else if (minutesNum === 3) {
    minutes = "03";
  } else if (minutesNum === 4) {
    minutes = "04";
  } else if (minutesNum === 5) {
    minutes = "05";
  } else if (minutesNum === 6) {
    minutes = "06";
  } else if (minutesNum === 7) {
    minutes = "07";
  } else if (minutesNum === 8) {
    minutes = "08";
  } else if (minutesNum === 9) {
    minutes = "09";
  } else {
    minutes = minutesNum.toString();
  }

  let daytime = "";
  if (hoursNum > 12) {
    daytime = "PM";
  } else {
    daytime = "AM";
  }

  // finish work on time (as always (pun intended))
  const timeOutput = `${hours}:${minutes} ${daytime}`;

  // return date and time
  return [dateOutput, timeOutput];
};

export default getDate;
