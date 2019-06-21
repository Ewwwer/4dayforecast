window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  //let locationTimezone = document.querySelector(".location-timezone");
  let temperatureSection = document.querySelector(".temperature");
  const temperatureSpan = document.querySelector(".temperature span");
  //var fondoTiempo = document.querySelector("body");
  let temperatureDegreeOnemax = document.querySelector(".temperature-degree-max-1");
  let temperatureDegreeOnemin = document.querySelector(".temperature-degree-min-1");

  let temperatureDegreeTwomax = document.querySelector(".temperature-degree-max-2");
  let temperatureDegreeTwomin = document.querySelector(".temperature-degree-min-2");

  let temperatureDegreeTreemax = document.querySelector(".temperature-degree-max-3");
  let temperatureDegreeTreemin = document.querySelector(".temperature-degree-min-3");

  let temperatureDegreeFourmax = document.querySelector(".temperature-degree-max-4");
  let temperatureDegreeFourmin = document.querySelector(".temperature-degree-min-4");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.darksky.net/forecast/30a0a1deb5b8512aa9b6789ef5f99624/${lat},${long}?units=auto&lang=es`;

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(datos => {

          console.log(datos);
          var { temperature, summary, icon } = datos.currently;
          //DOM tiempo actual
          temperatureDegree.textContent = Math.trunc(temperature);
          temperatureDescription.textContent = summary;
          //Icon general
          setIcons(icon, document.querySelector(".icon"));
          function setIcons(icon, iconID) {
            const skycons = new Skycons({ color: "white" });
            const currentIcon = icon.replace(/-/g, "_").toUpperCase();
            skycons.play();
            return skycons.set(iconID, Skycons[currentIcon]);
          }
          
          //Max + Min 1º dia + ICONO 
          //console.log(datos.daily.data['2']);
          var { temperatureMax, temperatureMin, icon } = datos.daily.data['2'];
          //DOM 1º dia
          temperatureDegreeOnemax.textContent = Math.trunc(temperatureMax);
          temperatureDegreeOnemin.textContent = Math.trunc(temperatureMin);

          //Set icon 1º dia
          setIconFirst(icon,document.querySelector(".icon-1"));

          //función cambio icono 1
          function setIconFirst(icon, iconID) {
            const skycons = new Skycons({ color: "white" });
            const firstDayIcon = icon.replace(/-/g, "_").toUpperCase();
            skycons.play();
            return skycons.set(iconID, Skycons[firstDayIcon]);
          }

          //Max + Min 2º dia + ICONO 
          console.log(datos.daily.data['3']);
          var { temperatureMax, temperatureMin, icon } = datos.daily.data['3'];
          //DOM 2º dia
          temperatureDegreeTwomax.textContent = Math.trunc(temperatureMax);
          temperatureDegreeTwomin.textContent = Math.trunc(temperatureMin);
          //Set icon 2º dia
          setIconSecond(icon,document.querySelector(".icon-2"));
          //función cambio icono 3 día
          function setIconSecond(icon, iconID) {
            const skycons = new Skycons({ color: "white" });
            const secondDayIcon = icon.replace(/-/g, "_").toUpperCase();
            skycons.play();
            return skycons.set(iconID, Skycons[secondDayIcon]);
          }

          //Max + Min 3º dia + ICONO 
          console.log(datos.daily.data['4']);
          var { temperatureMax, temperatureMin, icon } = datos.daily.data['4'];
          //DOM 3º dia
          temperatureDegreeTreemax.textContent = Math.trunc(temperatureMax);
          temperatureDegreeTreemin.textContent = Math.trunc(temperatureMin);
          //Set icon 3º dia
          setIconThird(icon,document.querySelector(".icon-3"));
          //función cambio icono 3 día
          function setIconThird(icon, iconID) {
            const skycons = new Skycons({ color: "white" });
            const thirdDayIcon = icon.replace(/-/g, "_").toUpperCase();
            skycons.play();
            return skycons.set(iconID, Skycons[thirdDayIcon]);
          }

          //Max + Min 4º dia + ICONO 
          console.log(datos.daily.data['5']);
          var { temperatureMax, temperatureMin, icon } = datos.daily.data['5'];
          //DOM 4º dia
          temperatureDegreeFourmax.textContent = Math.trunc(temperatureMax);
          temperatureDegreeFourmin.textContent = Math.trunc(temperatureMin);
          //Set icon 4º dia
          setIconFourth(icon,document.querySelector(".icon-4"));
          //función cambio icono 4 día
          function setIconFourth(icon, iconID) {
            const skycons = new Skycons({ color: "white" });
            const fourthDayIcon = icon.replace(/-/g, "_").toUpperCase();
            skycons.play();
            return skycons.set(iconID, Skycons[fourthDayIcon]);
          }
          
        });
    
    });
  }
  
  
  // funcion icono 1º
  

  /*//Cambia color del fondo dependiendo del tiempo
if (icon =='rain'){
    $('body').addClass('background: linear-gradient(rgb(6,6,6), rgb(15,15,15));');
    $('body').removeClass('background: linear-gradient(rgb(47,150,164), rgb(48,62,143));');
  }
  else if (icon =='day'){
    $('body').removeClass('background: linear-gradient(rgb(47,150,164), rgb(48,62,143));');
    $('body').addClass('background: linear-gradient(rgb(155,150,164), rgb(208,62,143));');}
*/
});
