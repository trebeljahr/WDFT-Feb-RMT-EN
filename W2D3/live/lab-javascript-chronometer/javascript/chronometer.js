class Chronometer {
  constructor() {
    this.currentTime = 0; // is now in centiseconds
    this.intervalId = null;
  }

  start(cb) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (cb) {
        const time = this.split();
        cb(time);
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60 / 100);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) - this.getMinutes() * 60 * 100;
  }

  getCentiseconds() {
    return (
      this.currentTime - this.getMinutes() * 60 * 100 - this.getSeconds() * 100
    );
  }

  computeTwoDigitNumber(value) {
    const digitRepresentation = value.toString();
    if (digitRepresentation.length < 2) {
      return '0' + digitRepresentation;
    }
    return digitRepresentation;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.stop();
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}:${centiSeconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
