class GuessingGame {
    constructor() {
      this.min = 0;
      this.max = 0;
      this.target = 0;
    }
  
    setRange(min, max) {
      this.min = min;
      this.max = max;
      this.target = Math.ceil(Math.random() * (max - min)) + min;
    }
  
    guess() {
      return Math.ceil((this.min + this.max) / 2);
    }
  
    lower() {
      this.max = this.guess();
    }
  
    greater() {
      this.min = this.guess();
    }
  }
  
  
  
  module.exports = GuessingGame;

module.exports = GuessingGame;
