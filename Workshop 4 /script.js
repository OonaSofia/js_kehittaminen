// Tehtävä 1
function changeHeading() {
  let otsikko = document.querySelector("#Tehtävä1");
  otsikko.textContent = "Muokattu otsikko!";
}
function secondButton() {
  let otsikkotoinen = document.querySelector("#Tehtävä2");
  otsikkotoinen.style.fontWeight = "300";
  otsikkotoinen.style.color = "blue";
  otsikkotoinen.style.backgroundColor = "red";
}
function thirdbutton() {
  let kolmasotsikko = document.querySelector("#lorem2");
  kolmasotsikko.textContent = "Tänään aurinko paistaa kirkkaasti ja keväinen sää houkuttelee ulos kävelylle. Puissa näkyy jo uusia silmuja ja ilma tuntuu raikkaalta.";
}
// Tehtävä 2

let sisalto = document.querySelector("#sisalto");


let otsikko = document.createElement("h3");
otsikko.textContent = "Etusivun uutinen";

otsikko.style.color = "darkgreen";
otsikko.style.fontFamily = "Arial";
otsikko.style.fontSize = "24px";

sisalto.appendChild(otsikko);

let kuva = document.createElement("img");
kuva.src = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee";
kuva.alt = "Luontokuva";

kuva.style.width = "300px";
kuva.style.display = "block";
kuva.style.marginTop = "10px";
kuva.style.marginBottom = "10px";

sisalto.appendChild(kuva);

let piilotaNappi = document.createElement("button");
piilotaNappi.textContent = "Piilota";

let naytaNappi = document.createElement("button");
naytaNappi.textContent = "Näytä";

sisalto.after(piilotaNappi);
piilotaNappi.after(naytaNappi);

piilotaNappi.addEventListener("click", function () {
  sisalto.style.display = "none";
});

naytaNappi.addEventListener("click", function () {
  sisalto.style.display = "block";
});

// Tehtävä 3

let autoValikko = document.querySelector("#mySelect");
let autonKuva = document.querySelector("#carimage");

autoValikko.addEventListener("change", function () {
  let valittuAuto = autoValikko.value;

  alert("Valitsit auton: " + valittuAuto);

  if (valittuAuto == "BMW") {
    autonKuva.src =
      "https://www.bmw.fi/content/dam/bmw/common/all-models/m-series/m8-coupe/2022/navigation/bmw-8series-coupe-modellfinder.png";
  }

  if (valittuAuto == "Audi") {
    autonKuva.src =
      "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=800&q=80";
  }

  if (valittuAuto == "Mercedes") {
    autonKuva.src =
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80";
  }

  if (valittuAuto == "Volvo") {
    autonKuva.src =
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80";
  }
});

autonKuva.addEventListener("mouseover", function () {
  autonKuva.style.border = "5px solid red";
});

autonKuva.addEventListener("mouseout", function () {
  autonKuva.style.border = "none";
});

// Tehtävä 4

let lisaaNappi = document.querySelector("#Insert");

lisaaNappi.addEventListener("click", function () {
  let nimi = document.querySelector("#nimi").value;
  let tehtava = document.querySelector("#tehtava").value;
  let palkka = document.querySelector("#palkka").value;

  if (nimi.length <= 5) {
    alert("Nimen tulee olla yli 5 merkkiä pitkä.");
  } else if (tehtava == "") {
    alert("Tehtävä-kenttä ei saa olla tyhjä.");
  } else if (palkka == "" || isNaN(palkka) || Number(palkka) <= 0) {
    alert("Palkan pitää olla yli 0 ja sisältää vain numeroita.");
  } else {
    let taulukko = document.querySelector("#data tbody");

    let uusiRivi = document.createElement("tr");

    let nimiSolu = document.createElement("td");
    nimiSolu.textContent = nimi;

    let tehtavaSolu = document.createElement("td");
    tehtavaSolu.textContent = tehtava;

    let palkkaSolu = document.createElement("td");
    palkkaSolu.textContent = palkka;

    uusiRivi.appendChild(nimiSolu);
    uusiRivi.appendChild(tehtavaSolu);
    uusiRivi.appendChild(palkkaSolu);

    taulukko.appendChild(uusiRivi);

    document.querySelector("#nimi").value = "";
    document.querySelector("#tehtava").value = "";
    document.querySelector("#palkka").value = "";
  }
});