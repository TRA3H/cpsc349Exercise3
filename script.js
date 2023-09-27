//so we need to create a calculator class
// within this calculator it needs to have 3 things
//clear , calculate, and display

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

  //go to the dom
  //everytime a new event is called
  //we will add click event
  //if the event matches what we called
  //do it
  
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