//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour, minute='00') {
    this.hour = hour;
    this.minute = minute;
  }


  toString() {
    if (this.hour < 25) {
      return `${this.dayHours()}:${this.dayMinutes()}`
    } 
      return `${this.rolledOverHours()}:${this.dayMinutes()}`
  }

  dayHours() {
    if (this.hour < 10 ) {
      return `0${this.hour}`
    } else if (this.hour < 24) {
      return this.hour
    } else if (this.hour === 24 ) {
      return '00'
    }
  }

  dayMinutes() {
    return this.minute < 10 && this.minute !== '00' ? `0${this.minute}` : this.minute
  }

  rolledOverHours() {
    if (this.hour > 24) {
      let newHours = this.hour % 24
      return newHours < 10 ? `0${newHours}` : newHours
    }
  }

  plus() {
    throw new Error('Remove this statement and implement this function');
  }

  minus() {
    throw new Error('Remove this statement and implement this function');
  }

  equals() {
    throw new Error('Remove this statement and implement this function');
  }
}
