const throttle = (func, duration) => {
  let shouldWait  = false;

  return function(...args) {
    if(!shouldWait) {
      func.apply(this, args);
      shouldWait  = true;
      
      setTimeout(()=> {
        shouldWait  = false;
      }, duration);
    }
  };
};

const debounce = (func, duration) => {
  let timeout;

  return function(...args) {

    const effect = () => {
      timeout = null;
      return func.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(effect, duration);
  };
};

const throttleButton = document.getElementById('throttleBtn');
const debounceButton = document.getElementById('debounceBtn');

throttleButton.addEventListener('click', throttle(function(){
  console.log('throttled');
}, 500));

debounceButton.addEventListener('click', debounce(function(){
  console.log('debounced');
}, 500));