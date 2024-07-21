document.getElementById("currentyear").innerHTML = new Date().getFullYear();
let date = document.lastModified;
      let lastModified = new Date(date);
      document.getElementById("result").innerHTML = "Last modified : " + lastModified;