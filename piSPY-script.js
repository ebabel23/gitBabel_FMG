//HTML-Elements to search global vars
//to git copy from fiddle

const searchvid = "video";
const searchgal =  "carousel-fwid2";
const searchpic =  6;
const searchgap = searchgal + "-" + searchpic;
const btnStart = document.querySelector("[id='btnStart']");

//observer -list
let foundvid = (document.querySelector("[id='"+searchvid+"']") !== null ) ? document.querySelector("[id='"+searchvid+"']") : null;
let foundgal = (document.querySelector("[id='"+searchgal+"']") !== null ) ? document.querySelector("[id='"+searchgal+"']") : null;
let foundpic = (document.querySelector("[data-current-slide="+searchgal+"-"+searchpic+"]") !== null ) ? document.querySelector("[data-current-slide="+searchgal+"-"+searchpic+"]") : null;

const pac = document.getElementById('crPI');
//console.log("obspy triggerd");
//console.log(pac.id);

 function obspy(){

let mList = foundgal,
options = {
  attributes: true,
  attributeFilter: ['data-current-slide'],
  
  
},
observer = new MutationObserver(log);

function log(mutations) {
        for (let mutation of mutations) {
            if (mutation.type === 'attributes') {
                console.log(mutation);
                console.log("Something happened");
               // call Piano-Trigger 
               piARRAY();
               //observer.disconnect();
            }
        }
    }

 //call Observer
// observer.observe(mList, options);
if (mList !== null) {observer.observe(mList, options);
console.log("observing", mList.id);}
else {console.log("Ziel verloren")}
}

function piARRAY() {
let piLIST = [];
let piTYPE = [];

//declare later workingtitles for arrays
const rvid = "video";
const rgal = "gallery";
const roth = "other";

//HTML-Elements to search
const searchvid = "video";
const searchgal =  "carousel-fwid2";
const searchpic =  6;

//declare piano-action-container (pac)
const pac = document.getElementById('crPI'); 

//find a video
//let foundvid = (document.querySelector("[id='"+searchvid+"']") !== null ) ? true : null;
console.log(foundvid +"   | Vid?");

//find a gallery
//let foundgal = (document.querySelector("[id='"+searchgal+"']") !== null ) ? true : null;
console.log(foundgal  +"   | Gal?");
//let foundpic = (document.querySelector("[data-current-slide="+searchgal+"-"+searchpic+"]") !== null ) ? true : null;
console.log(foundpic + "   | Pic?");


//find other stuff
//let findother = document.getElementById("esq");

//curate IDs
let videoplay = document.querySelector("[id='"+searchvid+"']");
let vidid = (videoplay !== null) ? videoplay.id : null;
console.log(vidid);
let gallery = document.querySelector("[data-current-slide="+searchgal+"-"+searchpic+"]");
let galid = (gallery !== null) ? gallery.id: null;
let galpic = (gallery !== null) ? gallery.getAttribute('data-current-slide') : null;
console.log(galid);
console.log(galpic + "   |   found galpic to compare");


//Array results new
if (foundvid !== null) {piLIST.push("Video", vidid); piTYPE.push(rvid)}
if (foundgal !== null && foundpic !== null && galpic === searchgap) {piLIST.push("Gallery", galid); piTYPE.push(rgal)}
//if (galpic == searchgap) {console.log("ja")}
//console.log(searchgap, galid, searchgal+"-"+searchpic)
//Array results old
//if (findother !== null) {piLIST.push(findother.id); piTYPE.push(roth)}

//choose winner
let piCASE = (piTYPE.length) ? piTYPE[0]:"empty";

//present results
console.log(piLIST + "  |  " + "gefundene Selektoren oder IDs");
console.log(piTYPE + "  |  " + "gefundene Typen");
console.log(piCASE + "  |  " + "gültiger Typ");


//ab hier passiert endlich etwas
switch (piCASE) {
  case "video":
    console.log("Piano macht was für Videos.");
    // CODE
			pac.insertAdjacentHTML('afterend', '<a id="picl" href="#" class="js-tploader" data-tags="piSPY" data-customvars="tp_piSPY_'+rvid+'">Created Piano-Link for '+rvid+' to Autoclick</a>');
			//document.getElementById("picl").click();
			console.log("Autoklick auf:" + " " + pac.id);
    break;
  case "gallery":
    console.log("Piano macht was für Fotostrecken.");
    // CODE
    	pac.insertAdjacentHTML('afterend', '<a id="picl" href="#" class="js-tploader" data-tags="piSPY" data-customvars="tp_piSPY_'+rgal+'">Created Piano-Link for '+rgal+' to Autoclick</a>');
      pac.innerHTML = "Hier jetzt Piano!";
			//document.getElementById("picl").click();
			console.log("Autoklick auf:" + " " + pac.id);
    break;
  case "other":
    console.log("Piano macht irgendwas anderes.");
    // CODE
    break;
  case "placeholder":
    console.log("placeholder");
    // CODE
    break;
  case "one_type":
  case "second_type":
    console.log("Ausführung für verschiedene Elemente.");
    // CODE
    break;
  default:
    console.log("Piano spielt einfach nur Piano");
}

}

function findgallery() {
const searchgal =  "carousel-fwid2";
const searchpic =  6;


let foundgal = (document.querySelector("[id='"+searchgal+"']") !== null ) ? "foundg" : "empty";
console.log(foundgal);
let foundpic = (document.querySelector("[data-current-slide="+searchgal+"-"+searchpic+"]") !== null ) ? "foundp" : "empty";
console.log(foundpic);
console.log("findgallery triggered")

}

function changecrPI() {
document.getElementById('crPI').innerHTML = "Hier bald Piano!";
document.getElementById('crPI').setAttribute("data-current-slide", "data");
}

//die Trigger

// für die Suche im DOM
document.addEventListener("DOMContentLoaded", piARRAY, false);
document.addEventListener("DOMContentLoaded", obspy, false);

// Clickevents
document.getElementById("init").addEventListener("click", piARRAY);
//document.getElementById("btnStart").addEventListener("click", obspy);
//Fokus-Event für Fotostrecke nach Bild X ???
//document.addEventListener("focus", piARRAY, false);