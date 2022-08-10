document.addEventListener('DOMContentLoaded', function() {

    var enableButton = document.getElementById('enable-extension');
    enableButton.addEventListener('click', function() {


      var thisButton = this;
      var disable = thisButton.innerText == "Disable" ? true : false;
      thisButton.innerText = disable ? 'Enable' : 'Disable';

    });

    document.getElementById("get-greeding").addEventListener('click', displayGreeding)

  }, false);

  function displayGreeding() {
    document.getElementById("greeding-message").innerHTML = " Hey Deepak How are you ";
  }