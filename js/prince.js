//* PRINCE JS IS START HERE || VERSION: 1.0 || © 2024-2025 */
// Set the date we're counting down to
var countDownDate = new Date("April 5, 2025 15:37:25").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
  // Get current date and time
  var now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="prcountdown"
  document.getElementById("prince-countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is finished, display "TIME EXPIRED" and redirect to specific page
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("prince-countdown").innerHTML = "TIME EXPIRED";
    window.location.href = '/login.html';
  }
}, 1000);

// Set the current year in the copyright element
(function () {
  let cpr = document.getElementById("prince-copyright");
  cpr.innerHTML = "&copy; " + new Date().getFullYear() + " Prinsberwa™ - All Rights Reserved";
})();

// Display the copyright holder with a link and animation
$(document).ready(function () {
  $('#prince-content').attr('style', 'display: inline-block !important; visibility: visible!important; opacity: 1!important; position: relative!important; z-index: 1!important; font-size: 13px!important; color: #999!important')
    .html('Made with <i style="color:#ff695d; -webkit-animation: prinsberwaRing 6s 0s ease-in-out infinite; -webkit-transform-origin: 50% 4px; -moz-animation: prinsberwaRing 6s 0s ease-in-out infinite; -moz-transform-origin: 50% 4px; animation: prinsberwaRing 6s 0s ease-in-out infinite; transform-origin: 50% 4px;" class="fa fa-heart"></i> by <a href="https://prince.rf.gd" style="visibility: visible!important; opacity: 1!important; position: relative!important; z-index: 1!important; font-size: 13px!important; color: #3c8cf0!important; font-weight: 500!important;">Prince Jatav</a>');

  // Check visibility of the mscontent element and redirect if hidden
  setInterval(function () {
    if (!$('#prince-content:visible').length) {
      window.location.href = 'error/404.html';
    }
  }, 3000);
});

$(document).addEventListener('DOMContentLoaded', function() {
  // Define the array of colors
  const colors = ['#ff3c5d', '#3c8cf0', '#317efb'];

  // Function to get a random color
  function getRandomColor() {
      return colors[Math.floor(Math.random() * colors.length)];
  }

  // Apply the random color to the main theme color variable
  document.documentElement.style.setProperty('--main-color', getRandomColor());
});

//* PRINCE JS IS ENDING HERE || VERSION: 1.0 || © 2024-2025 */
