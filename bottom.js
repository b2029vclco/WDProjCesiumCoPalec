    const KEY_BREATHING_STYLE = "KEY_BREATHING_STYLE";  

    //show user's breathing style in nav bar
    function updateNavBreathingStyle() {
      let breathingStyle = localStorage.getItem(KEY_BREATHING_STYLE);
      if (breathingStyle) {
        document.getElementById("navBreathingStyle").innerHTML = "&nbsp;("+breathingStyle+")";
      }
    }
    updateNavBreathingStyle();
