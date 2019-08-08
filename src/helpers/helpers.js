import iconCloudy from '../assets/icons/cloudy.png';
import iconPartlyCloudy from '../assets/icons/partly_cloudy.png';
import iconRainLight from '../assets/icons/rain_light.png';
import iconRainCloudy from '../assets/icons/rain_s_cloudy.png';
import iconSunny from '../assets/icons/sunny.png';

export const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const weatherIcons = {
  Cloudy: iconCloudy,
  PartlyCloudy: iconPartlyCloudy,
  RainLight: iconRainLight,
  RainAndCloudy: iconRainCloudy,
  Sunny: iconSunny,
};

export function celsiusToFarenheit(celsiusTemp) {
  return celsiusTemp * 1.8 + 32;
}

export function getDaySufix(day) {
  const j = day % 10;
  const k = day % 100;
  if (j === 1 && k !== 11) {
    return `st`;
  }
  if (j === 2 && k !== 12) {
    return `nd`;
  }
  if (j === 3 && k !== 13) {
    return `rd`;
  }
  return `th`;
}

export function convertDateFormat(date) {
  const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const year = date.getFullYear();
  const fullDate = `${year}-${month}-${day}`;

  return fullDate;
}
