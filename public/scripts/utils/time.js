const timeNow = dayjs().format('HHmm');
let set = '';

export function setMeal(timeNow) {
    if (timeNow >= 0 && timeNow <= 1800) {
      set = meals[0].lunch;
    } else if (timeNow >=1801 && timeNow <= 2400) {
      set = meals[0].dinner;
    }
    return set;
}


const refreshInterval = 10000;
export function refreshPage() {
  location.reload();
} 
setInterval(10000, refreshInterval);

export function lunchActivatedTab(timeNow) {
  if (timeNow >= 0 && timeNow <= 1800)  {
      return 'lunchActivatedTab'
    } else {
      return ''
    }
}
export function dinnerActivatedTab(timeNow) {
  if (timeNow >=1801 && timeNow <= 2400)  {
      return 'dinnerActivatedTab'
  } else {
    return ''
  }
}

export function dayInWeekChi(showDay) {
  let html;

  switch (showDay) {
    case 'Mon':
      html = `(一)`;
      break;
    case 'Tue':
      html = `(二)`;
      break;
    case 'Wed':
      html = `(三)`;
      break;
    case 'Thu':
      html = `(四)`;
      break;
    case 'Fri':
      html = `(五)`;
      break;
    case 'Sat':
      html = `(六)`;
      break;
    case 'Sun':
      html = `(日)`;
      break;
  }
  return html;
} 



  // return html;


