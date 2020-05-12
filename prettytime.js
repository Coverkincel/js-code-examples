// input seconds
// output hours:minutes

prettytime = (seconds) => {
    let hours = 0
    let minutes = 0
    let hourspretty = 0
    let minutespretty = 0
    hours = Math.floor(seconds / 3600);
    minutes = Math.floor((seconds - (hours * 3600)) / 60)
  
    if (hours < 10) {
      hourspretty = '0' + hours;
    } else {
      hourspretty = hours;
    }
  
    if (minutes < 10) {
      minutespretty = '0' + minutes;
    } else {
      minutespretty = minutes;
    }
  
    return (`${hourspretty}:${minutespretty}`)
  }
  
  console.log(prettytime(10000))