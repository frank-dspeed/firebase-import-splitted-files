// Import Admin SDK
//var ref = db.ref("https://tesseractgeneral.firebaseio.com/")
var firebase = require('firebase')
  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "apiKey",
    authDomain: "t",
    databaseURL: "https://tesseal.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();





function writeUserData(data) {
	try {
	console.log(typeof data,Object.keys(data)[0])

	
	firebase.database().ref('personas/'+Object.keys(data)[0]).set(data[Object.keys(data)[0]]);
	} catch (e) {
	console.log(typeof data,data)
	console.log(e)
	}
}


var files = ["xaa","xad","xag","xaj","xam","xap","xas","xav","xay","xbb","xbe","xbh","xbk","xbn","xbq","xbt","xbw","xbz","xcc","xcf","xci","xcl","xco","xcr","xcu","xcx","xda","xdd","xdg","xdj","xdm","xdp","xds","xdv","xdy","xeb","xee","xeh","xek","xen","xeq","xet","xew","xez","xab","xae","xah","xak","xan","xaq","xat","xaw","xaz","xbc","xbf","xbi","xbl","xbo","xbr","xbu","xbx","xca","xcd","xcg","xcj","xcm","xcp","xcs","xcv","xcy","xdb","xde","xdh","xdk","xdn","xdq","xdt","xdw","xdz","xec","xef","xei","xel","xeo","xer","xeu","xex","xfa","xac","xaf","xai","xal","xao","xar","xau","xax","xba","xbd","xbg","xbj","xbm","xbp","xbs","xbv","xby","xcb","xce","xch","xck","xcn","xcq","xct","xcw","xcz","xdc","xdf","xdi","xdl","xdo","xdr","xdu","xdx","xea","xed","xeg","xej","xem","xep","xes","xev","xey","xfb"]
var timeOut=0
files.forEach((file) => {
	timeOut=timeOut+60000
	console.log(timeOut)
	setTimeout(() => readIt(file), timeOut)
})

function readIt(myFile) {

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream(myFile)
});

lineReader.on('line', function (line) {
try {
  var line2 = line.split('},')[0].split('" :{"')
  var values = line2[1].split(",")
  var key = line2[0].replace('"','')
//  console.log(key,values)
  var lineDATA = {}
  lineDATA[key] = {}
  for (let i=0; i<values.length; i++) {
   let clean = values[i].replace(',','\,').split(":")
   //console.log(clean)
   let valKey = clean[0].replace(/"/g,'')
   let valVal = clean[1].replace(/"/g,'')
   lineDATA[key][valKey] = valVal
  }


lineDATA[key]["cuadra"]=""
lineDATA[key]["edad"]=""
lineDATA[key]["email"]=""
lineDATA[key]["estadocivil"]=""
lineDATA[key]["genero"]=""
lineDATA[key]["hijos"]=""
lineDATA[key]["lat"]=""
lineDATA[key]["long"]=""
lineDATA[key]["niveldeeducacion"]=""
lineDATA[key]["nivelsocioeconomico"]=""
lineDATA[key]["telefono"]=""
lineDATA[key]["situacionlaboral"]=""
lineDATA[key]["ocupacion"]=""
   //console.log(lineDATA)
  

//  console.log(Object.keys(JSON.parse(line2)));
  
  writeUserData(lineDATA)
   } catch (e) {
        console.log(line2,lineDATA)
        console.log(e)
        }

});
}
