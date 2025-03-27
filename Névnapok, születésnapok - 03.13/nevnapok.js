let honapok = new Array(13);
const ev = new Date().getFullYear();

honapok[1] = new Array(
  "",
  "Fruzsina",
  "Ábel",
  "Genovéva és Benjámin",
  "Titusz és Leona",
  "Simon",
  "Boldizsár",
  "Attila és Ramóna",
  "Gyöngyvér",
  "Marcell",
  "Melánia",
  "Ágota",
  "Ernő",
  "Veronika",
  "Bódog",
  "Lóránt és Loránd",
  "Gusztáv",
  "Antal és Antónia",
  "Piroska",
  "Sára, Márió",
  "Fábián és Sebestyén",
  "Ágnes",
  "Vince és Artúr",
  "Zelma és Rajmund",
  "Timót",
  "Pál",
  "Vanda és Paula",
  "Angelika",
  "Károly és Karola",
  "Adél",
  "Martina és Gerda",
  "Marcella"
);

if (ev % 4 != 0)
  honapok[2] = new Array(
    "",
    "Ignác",
    "Karolina és Aida",
    "Balázs",
    "Ráhel és Csenge",
    "Ágota és Ingrid",
    "Dorottya és Dóra",
    "Tódor és Rómeó",
    "Aranka",
    "Abigél és Alex",
    "Elvira",
    "Bertold és Marietta",
    "Lívia és Lídia",
    "Ella és Linda",
    "Bálint és Valentin",
    "Kolos és Georgina",
    "Julianna és Lilla",
    "Donát és Vilté",
    "Bernadett",
    "Zsuzsanna",
    "Aladár és Álmos",
    "Eleonóra",
    "Gerzson",
    "Alfréd",
    "Mátyás",
    "Géza",
    "Edina",
    "Ákos és Bátor",
    "Elemér",
    "",
    "",
    ""
  );
else
  honapok[2] = new Array(
    "",
    "Ignác",
    "Karolina és Aida",
    "Balázs",
    "Ráhel és Csenge",
    "Ágota és Ingrid",
    "Dorottya és Dóra",
    "Tódor és Rómeó",
    "Aranka",
    "Abigél, Alex",
    "Elvira",
    "Bertold és Marietta",
    "Lívia és Lídia",
    "Ella és Linda",
    "Bálint és Valentin",
    "Kolos és Georgina",
    "Julianna és Lilla",
    "Donát",
    "Bernadett",
    "Zsuzsanna",
    "Aladár és Álmos",
    "Eleonóra",
    "Gerzson",
    "Alfréd",
    "Szökőnap",
    "Mátyás",
    "Géza",
    "Edina",
    "Ákos és Bátor",
    "Elemér",
    "",
    ""
  );

honapok[3] = new Array(
  "",
  "Albin",
  "Lujza",
  "Kornélia",
  "Kázmér",
  "Adorján és Adrián",
  "Leonóra és Inez",
  "Tamás",
  "Zoltán",
  "Franciska és Fanni",
  "Ildikó",
  "Szilárd",
  "Gergely",
  "Krisztián és Ajtony",
  "Matild",
  "Kristóf",
  "Henrietta",
  "Gertrúd és Patrik",
  "Sándor és Ede",
  "József és Bánk",
  "Klaudia",
  "Benedek",
  "Beáta és Izolda",
  "Emőke",
  "Gábor és Karina",
  "Irén és Irisz",
  "Emánuel",
  "Hajnalka",
  "Gedeon és Johanna",
  "Auguszta",
  "Zalán",
  "Árpád"
);

honapok[4] = new Array(
  "",
  "Hugó",
  "Áron",
  "Buda, Richárd",
  "Izidor",
  "Vince",
  "Vilmos és Bíborka",
  "Herman",
  "Dénes",
  "Erhard",
  "Zsolt",
  "Leó és Szaniszló",
  "Gyula",
  "Ida",
  "Tibor",
  "Anasztázia és Tas",
  "Csongor",
  "Rudolf",
  "Andrea és Ilma",
  "Emma",
  "Tivadar",
  "Konrád",
  "Csilla és Noémi",
  "Béla",
  "György",
  "Márk",
  "Ervin",
  "Zita",
  "Valéria",
  "Péter",
  "Katalin és Kitti",
  ""
);

honapok[5] = new Array(
  "",
  "Fülöp és Jakab",
  "Zsigmond",
  "Tímea és Irma",
  "Mónika és Flórián",
  "Györgyi",
  "Ivett és Frida",
  "Gizella",
  "Mihály",
  "Gergely",
  "Ármin és Pálma",
  "Ferenc",
  "Pongrác",
  "Szervác és Imola",
  "Bonifác",
  "Zsófia és Szonja",
  "Mózes és Botond",
  "Paszkál",
  "Erik és Alexandra",
  "Ivó és Milán",
  "Bernát és Felícia",
  "Konstantin",
  "Júlia és Rita",
  "Dezső",
  "Eszter és Eliza",
  "Orbán",
  "Fülöp és Evelin",
  "Hella",
  "Emil és Csanád",
  "Magdolna",
  "Janka és Zsanett",
  "Angéla és Petronella"
);

honapok[6] = new Array(
  "",
  "Tünde",
  "Kármen, Anita",
  "Klotild",
  "Bulcsú",
  "Fatime",
  "Norbert és Cintia",
  "Róbert",
  "Medárd",
  "Félix",
  "Margit és Gréta",
  "Barnabás",
  "Villő",
  "Antal és Anett",
  "Vazul",
  "Jolán és Vid",
  "Jusztin",
  "Laura és Alida",
  "Arnold és Levente",
  "Gyárfás",
  "Rafael",
  "Alajos és Leila",
  "Paulina",
  "Zoltán",
  "Iván",
  "Vilmos",
  "János és Pál",
  "László",
  "Levente és Irén",
  "Péter és Pál",
  "Pál",
  ""
);

honapok[7] = new Array(
  "",
  "Tihamér, Annamária",
  "Ottó",
  "Kornél és Soma",
  "Ulrik",
  "Emese és Sarolta",
  "Csaba",
  "Appolónia",
  "Ellák",
  "Lukrécia",
  "Amália",
  "Nóra és Lili",
  "Izabella és Dalma",
  "Jenő",
  "Őrs és Stella",
  "Henrik és Roland",
  "Valter",
  "Endre és Elek",
  "Frigyes",
  "Emília",
  "Illés",
  "Dániel és Daniella",
  "Magdolna",
  "Lenke",
  "Kinga és Kincső",
  "Kristóf és Jakab",
  "Anna és Anikó",
  "Olga és Liliána",
  "Szabolcs",
  "Márta és Flóra",
  "Judit és Xénia",
  "Oszkár"
);

honapok[8] = new Array(
  "",
  "Boglárka",
  "Lehel",
  "Hermina",
  "Domonkos és Dominika",
  "Krisztina",
  "Berta és Bettina",
  "Ibolya",
  "László",
  "Emőd",
  "Lőrinc",
  "Zsuzsanna és Tiborc",
  "Klára",
  "Ipoly",
  "Marcell",
  "Mária",
  "Ábrahám",
  "Jácint",
  "Ilona",
  "Huba",
  "István",
  "Sámuel és Hajna",
  "Menyhért és Mirjam",
  "Bence",
  "Bertalan",
  "Lajos és Patrícia",
  "Izsó",
  "Gáspár",
  "Ágoston",
  "Beatrix és Erna",
  "Rózsa",
  "Erika és Bella"
);

honapok[9] = new Array(
  "",
  "Egyed és Egon",
  "Rebeka és Dorina",
  "Hilda",
  "Rozália",
  "Viktor és Lőrinc",
  "Zakariás",
  "Regina",
  "Mária és Adrienn",
  "Ádám",
  "Nikolett és Hunor",
  "Teodóra",
  "Mária",
  "Kornél",
  "Szeréna és Roxána",
  "Enikő és Melitta",
  "Edit",
  "Zsófia",
  "Diána",
  "Vilhelmina",
  "Friderika",
  "Máté és Mirella",
  "Móric",
  "Tekla",
  "Gellért és Mercédesz",
  "Eufrozina és Kende",
  "Jusztina",
  "Adalbert",
  "Vencel",
  "Mihály",
  "Jeromos",
  ""
);

honapok[10] = new Array(
  "",
  "Malvin",
  "Petra",
  "Helga",
  "Ferenc",
  "Aurél",
  "Brúnó és Renáta",
  "Amália",
  "Koppány",
  "Dénes",
  "Gedeon",
  "Brigitta",
  "Miksa",
  "Kálmán és Ede",
  "Helén",
  "Teréz",
  "Gál",
  "Hedvig",
  "Lukács",
  "Nándor",
  "Vendel",
  "Orsolya",
  "Előd",
  "Gyöngyi",
  "Salamon",
  "Blanka és Bianka",
  "Dömötör",
  "Szabina",
  "Simon és Szimonetta",
  "Nárcisz",
  "Alfonz",
  "Farkas"
);

honapok[11] = new Array(
  "",
  "Marianna",
  "Achilles",
  "Győző",
  "Károly",
  "Imre",
  "Lénárd",
  "Rezső",
  "Zsombor",
  "Tivadar",
  "Réka",
  "Márton",
  "Jónás és Renátó",
  "Szilvia",
  "Aliz",
  "Albert és Lipót",
  "Ödön",
  "Hortenzia és Gergő",
  "Jenő",
  "Erzsébet",
  "Jolán",
  "Olivér",
  "Cecília",
  "Kelemen és Klementina",
  "Emma",
  "Katalin",
  "Virág",
  "Virgil",
  "Stefánia",
  "Taksony",
  "András és Andor",
  ""
);

honapok[12] = new Array(
  "",
  "Elza",
  "Melinda és Vivien",
  "Ferenc és Olívia",
  "Borbála és Barbara",
  "Vilma",
  "Miklós",
  "Ambrus",
  "Mária",
  "Natália",
  "Judit",
  "Árpád",
  "Gabriella",
  "Luca és Otília",
  "Szilárda",
  "Valér",
  "Etelka és Aletta",
  "Lázár és Olimpia",
  "Auguszta",
  "Viola",
  "Teofil",
  "Tamás",
  "Zéno",
  "Viktória",
  "Ádám és Éva",
  "Eugénia",
  "István",
  "János",
  "Kamilla",
  "Tamás és Tamara",
  "Dávid",
  "Szilveszter"
);

const sznapok = {
"Bakos Dominik":"2007.11.20.",
"Chlebik Krisztofer Benjámin":"2007.09.28.",
"Debreczeni Michael":"2006.11.07.",
"Farkas Máté Csanád":"2007.05.10.",
"Földi Roland":"2008.02.13.",
"Garaba Kornél":"2008.07.22.",
"Gyurik Áron":"2007.08.03.",
"Halmai Valentin":"2006.09.25.",
"Nagy Álmos Botond":"2008.01.18.",
"Pintér Gergő Ádám":"2007.11.05.",
"Rátkai Krisztián Bence":"2007.01.06.",
"Tóth Mór":"2008.08.09."
};

const dateInput = document.getElementById("date");
const nameInput = document.getElementById("name");
const plusName = document.getElementById("plus-name");
const submitBtn = document.getElementById("submit");
const szulnapSubmit = document.getElementById("szulnap-submit");
const sznapDate = document.getElementById("szulnap-date");
const actual = document.getElementById("actual");
const sznapos = document.getElementById("sznapos");

const today = new Date();
dateInput.value =  today.getFullYear().toString() + '-' + String(today.getMonth() + 1).padStart(2, 0) + '-' + String(today.getDate()).padStart(2, 0);
const splitted = dateInput.value.split("-");
const nev = honapok.at(splitted[1]).at(splitted[2]);
plusName.innerText = nev + " névnap(ok) vannak.";

Object.keys(sznapok).forEach((nev)=>{
  if(dateInput.value == sznapok[nev].replaceAll(".", "-")){
    sznapos.value = nev;
  }
});

submitBtn.addEventListener("click",(e)=>{

  honapok.forEach((honap)=>{
    if(nameInput.value.trim() == ""){
      const splitted = dateInput.value.split("-");
      const nev = honapok.at(splitted[1]).at(splitted[2]);
      plusName.innerText = nev + " névnapok vannak.";
    }else{
    honap.forEach((nev)=>{
      if(String(nev).includes(nameInput.value)){
        dateInput.value =  today.getFullYear().toString() + '-' + String(honapok.findIndex(x => x ==honap)).padStart(2, 0) + '-' + String(honap.findIndex(x => x == nev) + 1).padStart(2, 0);
        if(String(nev).length > nameInput.value.length){
          plusName.innerText = nev + " névnapok vannak.";
        }
      }
    });
  }
  });
});

szulnapSubmit.addEventListener("click",(e)=>{

  Object.keys(sznapok).forEach((nev)=>{
    const splitted = sznapok[nev].split("."); 
    if(splitted[1] == sznapDate.value.split("-")[1] && splitted[2] == sznapDate.value.split("-")[2] ){
      console.log("Hi")
      sznapos.value = nev + " a " + String( parseInt(sznapDate.value.split("-")[0]) - parseInt(splitted[0])) + ". évét tölti.";
    }
  });
});

actual .addEventListener("click", (e) => {
  const today = new Date();
  plusName.innerText = honapok.at(today.getMonth() + 1).at(today.getDate());
});
