const calculator = {
    display: document.getElementById('display'),
    clearDisplay() 
    {
      this.display.value = '';
    },

    appendToDisplay(value) 
    {
      this.display.value += value;
    },

    calculate() {
      try 
      { 
        this.display.value = new Function('return ' + this.display.value)();
      } 
      catch (e) 
      {
        this.display.value = 'Error';
      }
    },
  };
  
  document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.calculator').addEventListener('click', (event) => {
      const target = event.target;
      if (target.matches('.clear')) 
      {
        calculator.clearDisplay();
      } 
      else if (target.matches('.equals')) 
      {
        calculator.calculate();
      } 
      else if (target.matches('.number, .operator')) 
      {
        calculator.appendToDisplay(target.textContent);
      }
    });
  });