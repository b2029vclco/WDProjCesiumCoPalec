    const KEY_HISTORY = "KEY_HISTORY";  

    //latest breathing style is the last entry in the history
    function getLatestBreathingStyle() {
      let history = JSON.parse(localStorage.getItem(KEY_HISTORY)) || [];
      if (history.length > 0) {
        return history[history.length - 1].result;
      }
      return null;
    }

    //show user's breathing style in nav bar
    function updateNavBreathingStyle() {
      let breathingStyle = getLatestBreathingStyle();
      if (breathingStyle) {
        document.getElementById("navBreathingStyle").innerHTML = "&nbsp;("+breathingStyle+")";
      } else {
        document.getElementById("navBreathingStyle").innerHTML = "";
      }
    }
    updateNavBreathingStyle();
