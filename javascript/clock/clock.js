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
    this.rolledOverMinutes();
    
    this.rolledOverHours();
    
    return `${this.dayHours()}:${this.dayMinutes()}`
 
  }

  minTwoDigits(n) {
    if (n < 0) {
      let x = 24 + n
      return (x < 10 ? '0' : '') + x;
    }
    return (n < 10 && n !== '00' ? '0' : '') + n;
  }

  dayHours() {
    return (this.hour === 24) ? '00' : this.minTwoDigits(this.hour) 
  }

  dayMinutes() {
    return this.minTwoDigits(this.minute)
  }

  rolledOverHours() {
    if (this.hour > 24 || this.hour < -24) {
      this.hour = (this.hour % 24)
    } 
  }

  rolledOverMinutes() {
    if (this.minute === 60) {
      this.hour = this.hour + 1 
      this.minute = this.minute - 60
    } else if (this.minute === -60) {
      this.hour = this.hour - 1
      this.minute = this.minute + 60
    } else if (this.minute > 60) {
      this.hour = Math.floor(this.minute / 60) + this.hour
      this.minute = this.minute % 60
    } else if (this.minute < 0) {
      this.hour = Math.floor(this.minute / 60) + this.hour
      this.minute = 60 + (this.minute % 60)
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
