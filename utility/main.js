// Counter for all 
function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -2;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
  }
  
  // goal counter call functions
  animateValue("counter1", 1, 1000,-1000);
  animateValue("counter2", 1, 500,-500);
  animateValue("counter3", 1, 5,2000);