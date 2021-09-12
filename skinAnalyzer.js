var differentPhases1 = [];
var differentPhases2 = [];
/*var intervalId = window.setInterval(function(){  /// call your function here
}, 5000);*/
/*document.addEventListener('DOMContentLoaded', function () {
      document.getElementById("startProgram").addEventListener('click', beginProgram());     
});*/
/*document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("startProgram").addEventListener('click', idekAnymore());;     
});
function idekAnymore(){
	var w4 = document.getElementsByClassName("csgofloat-itemfloat");
	console.log(w4);

}*/

/*function potato(){
	document.getElementsByClassName("csgofloat-itemfloat")
}*/
/*onload = function() {
	if(location.hostname.match("steamcommunity.com")){
		console.log("yeet again");
		//wait()

	}

};*/
// always waits the document to be loaded when shown
/*document.addEventListener('DOMContentLoaded', function() {

    // opens a communication between scripts
    var port = chrome.runtime.connect();

    // listens to the click of the button into the popup content
    document.getElementById('startProgram').addEventListener('click', function() {

        // sends a message throw the communication port
        port.postMessage({
            'from': 'popup',
            'start': 'Y' 
        });
    });
});*/
/*document.addEventListener('DOMContentLoaded', function () {
	if(location.hostname.match('steamcommunity')){
    	//document.querySelector('button').addEventListener('click', main);

	} 

     
});*/

/*if(location.hostname.match('steamconmmunity')){
	document.addEventListener("DOMContentLoaded", function(){ beginProgram(); }, false);
}*/

	//if(phaseClass[i].textContent.slice(-2,-1))
/*function wait(){
	if(typeof document.getElementsByClassName("csgofloat-itemfloat") ===undefined){

		console.log("YEET");
		setTimeout(wait(),50);
		return;


	}
	else{
		console.log("yeet");
		if(document.getElementsByClassName("csgofloat-itemfloat").textContent!== undefined){
			console.log("YEET");
			setTimeout(wait(),50);
			return;
			console.log(document.getElementsByClassName("csgofloat-itemfloat").textContent)
			if( document.getElementsByClassName("csgofloat-itemfloat").textContent.slice(6,23)>0===false){
				console.log("YEET");
				setTimeout(wait(),50);
				return;

			}
			else{
				setTimeout(beginProgram(),20000);
			}

		
		}
		else{
			console.log("YEET");
			setTimeout(wait(),50);
			return;

		}
		

		
	}
}*/
function beginProgram(w4){
	//console.log("it begins");

	var prices= [];
	var floats =[];
	var ranks = [];
	var phases = [];
	var paintSeeds =[];
	var skins = [];

	var defaultPhase = 0;
	var multiplier;
	var comparator;
	var recommendations = [];
	//get prices
	var xm = document.getElementsByClassName("hover_item_name")[0].textContent.includes("XM1014 | Seasons")
	var ckimono = document.getElementsByClassName("hover_item_name")[0].textContent.includes("P250 | Crimson Kimono")
	var gsandstorm = document.getElementsByClassName("hover_item_name")[0].textContent.includes("Galil AR | Sandstorm")
	var acidClover = document.getElementsByClassName("hover_item_name")[0].textContent.includes("P2000 | Acid Etched")
	var glockStar = document.getElementsByClassName("hover_item_name")[0].textContent.includes("Glock-18 | Moonrise")
	var glockHB = document.getElementsByClassName("hover_item_name")[0].textContent.includes("Glock-18 | High Beam")
	var glockReactor = document.getElementsByClassName("hover_item_name")[0].textContent.includes("Glock-18 | Reactor")
	var fiveSevenCase = document.getElementsByClassName("hover_item_name")[0].textContent.includes("Five-SeveN | Case Hardened")
	var akCase = document.getElementsByClassName("hover_item_name")[0].textContent.includes("AK-47 | Case Hardened")
	var fiveSevenKami = document.getElementsByClassName("hover_item_name")[0].textContent.includes("Five-SeveN | Kami")
	var tecSandstorm = document.getElementsByClassName("hover_item_name")[0].textContent.includes("Tec-9 | Sandstorm")
	var awppaw = document.getElementsByClassName("hover_item_name")[0].textContent.includes("AWP | PAW")
	

	var widget3 = document.getElementsByClassName("market_listing_price market_listing_price_with_fee")
	var phaseClass = document.getElementsByClassName("csgofloat-itemseed")

	var w4 = document.getElementsByClassName("csgofloat-itemfloat")
	//console.log(w4)
	//console.log(xm)

	

	if (parseFloat(w4[0].textContent.slice(6,23))<0.07){
		multiplier = (14.286);
	}
	else if(parseFloat(w4[0].textContent.slice(6,23))<0.15){
		multiplier =6.66666666;
	}
	else if(parseFloat(w4[0].textContent.slice(6,23))<0.38){
		multiplier = 2.63157;
	}
	else if(parseFloat(w4[0].textContent.slice(6,23))<0.45){
		multiplier = 2.222222222;
	}
	else{
		multiplier = 1
	}
		/*function filterOutliers(someArray) {

  if(someArray.length < 4)
    return someArray;

  let values, q1, q3, iqr, maxValue, minValue;

  values = someArray.slice().sort( (a, b) => a - b);//copy array fast and sort

  if((values.length / 4) % 1 === 0){//find quartiles
    q1 = 1/2 * (values[(values.length / 4)] + values[(values.length / 4) + 1]);
    q3 = 1/2 * (values[(values.length * (3 / 4))] + values[(values.length * (3 / 4)) + 1]);
  } else {
    q1 = values[Math.floor(values.length / 4 + 1)];
    q3 = values[Math.ceil(values.length * (3 / 4) + 1)];
  }

  iqr = q3 - q1;
  maxValue = q3 + iqr * 1.5;
  minValue = q1 - iqr * 1.5;

  return values.filter((x) => (x >= minValue) && (x <= maxValue));
}*/
/*	if (parseFloat(w4[0].textContent.slice(6,23))<0.07){
		multiplier = (2-parseFloat(w4[0].textContent.slice(6,23))*(14.286))/2;
	}
	else if(parseFloat(w4[0].textContent.slice(6,23))<0.15){
		multiplier =(2-parseFloat(w4[0].textContent.slice(6,23))*(6.66666666))/2;
	}
	else if(parseFloat(w4[0].textContent.slice(6,23))<0.38){
		multiplier = (2-parseFloat(w4[0].textContent.slice(6,23))*(2.63157))/2;
	}
	else if(parseFloat(w4[0].textContent.slice(6,23))<0.45){
		multiplier = (2-parseFloat(w4[0].textContent.slice(6,23))*(2.222222))/2;
	}
	else{
		multiplier =(2-parseFloat(w4[0].textContent.slice(6,23))*(1))/2;
	}	*/
/*	function setValue(pAvg){
		for(i = 0; i<w4.length;i++){
			skins[i].value = pAvg*multiplier;
		}
	}*/
/*	for(i = 0; i<widget3.length;i++){
	    
	}
	//get floats
	//phases.push()
	if(phaseClass[0].textContent.includes("Phase")){
		defaultPhase = phaseClass[i].textContent.slice(-2,-1);
	}

/*	if (skins[0][0]<0.07){
		multiplier = 14.286/2;
	}
	else if(skins[0][0]<0.15){
		multiplier = 6.66666666/2;
	}
	else if(skins[0][0]<0.38){
		multiplier = 2.63157/2;
	}
	else if(skins[0][0]<0.45){
		multiplier = 2.22222/2;
	}
	else{
		multiplier = 1/2;
	}
	*/
	//differentPhases1.push(defaultPhase);
	makePhaseOne(phaseClass);
	makePhaseTwo();
	var priceSliceN1 = 10;
	var priceSliceN2 = 15;	
	for(i = 0; i<w4.length;i++){
		phaseValue = "0";
		//floats.push(w4[i].textContent.slice(6,23));
		//ranks.push(w4[i].textContent.slice(31,-1))
		//paintSeeds.push(phaseClass[i].textContent.slice(-2,-1));
		//phases.push(phaseClass[i].textContent.slice(12,15))
		//prices.push(widget3[i].textContent.slice(7,13))
		if(defaultPhase!=0){
			phaseValue = phaseClass[i].textContent.slice(-2,-1);
		}
		if(i>0){
			if((widget3[i].textContent.slice(priceSliceN1,priceSliceN2).replace(",", ""))){
				var skin = {float: parseFloat(w4[i].textContent.slice(6,23)),
					phase: phaseValue,
					ranks: w4[i].textContent.slice(31,-1),
					paintSeed: phaseClass[i].textContent.slice(-3),
					price: widget3[i].textContent.slice(priceSliceN1,priceSliceN2).replace(",", ""),
					value: parseFloat(widget3[i].textContent.slice(priceSliceN1,priceSliceN2).replace(",", ""))*multiplier,
					priceToAverage: 0.0,
					numberInList: 0
				};

			}
		}
		else{
			var skin = {float: parseFloat(w4[i].textContent.slice(6,23)),
				phase: phaseValue,
				ranks: w4[i].textContent.slice(31,-1),
				paintSeed: phaseClass[i].textContent.slice(-3),
				price: widget3[i].textContent.slice(priceSliceN1,priceSliceN2).replace(",", ""),
				value: parseFloat(widget3[i].textContent.slice(priceSliceN1,priceSliceN2).replace(",", ""))*multiplier,
				priceToAverage: 0.0,
				numberInList: 0
			};

		}

		
		if(isNaN(widget3[i].textContent.slice(priceSliceN1,priceSliceN2).replace(",", ""))==false){
			skins.push(skin);
		}
		//console.log(widget3[i].textContent.slice(priceSliceN1,priceSliceN2).replace(",", ""))

		




	}
	skins.sort(function(a, b){return a.phase - b.phase});
	//console.log(skins);
	differentPhases2.sort(function(a, b){return a.phase - b.phase});
		//get phase
/*	for(i = 0; i<phaseClass.length;i++){
		
	}*/


	//skins = filterOutliers(skins);
var previousCounter = 0;

	for(i = 0; i<differentPhases2.length;i++){
		//console.log(differentPhases2.length)

		var total = 0.0;
		var phaseCounter = 1;
		var floatTotal = 0.0;
		//console.log(skins[1].price)
		//console.log(total);
		//console.log(parseInt(skins[i].price))
		for(var j = 0; j<skins.length;j++){
/*			console.log(i);
			console.log(j);
			differentPhases[i][0];
			skins[j][1];*/
			
			if(differentPhases2[i].phase == skins[j].phase){
				//console.log(j);
				if(j>0){
					if(skins[j].phase == skins[j-1].phase){
						phaseCounter += 1;
					}
					else{
						phaseCounter = 1;
					}
					

				}


				previousCounter +=1;
				total += parseFloat(skins[j].price);
				floatTotal += skins[j].float;
				//console.log(previousCounter-phaseCounter/2);
				//console.log(i);

				//console.log(phaseCounter);
				skins[j].numberInList = phaseCounter;

				//console.log(previousCounter);
				if(defaultPhase == 1){
					differentPhases2[i].pAvg = skins[Math.ceil(previousCounter-phaseCounter/2)].price;
				}
				else{
					differentPhases2[i].pAvg = skins[Math.floor(previousCounter-phaseCounter/2)].price;
				}
				differentPhases2[i].pAvg = skins[Math.ceil(previousCounter-phaseCounter/2)].price;
				differentPhases2[i].fAvg = (floatTotal/phaseCounter);
				
				comparator = (1+(1-(2-parseFloat(differentPhases2[i].fAvg)*multiplier))*-3)*differentPhases2[i].pAvg;
			}
			//differentPhases[i][1] = total;


			

			//console.log(multiplier);

			//console.log(skins[j].value);
			//console.log(differentPhases2[i].fAvg);
			//console.log(differentPhases2[i].pAvg);
			//console.log(skins[i].value);

		}
	}
	var patternRecommendations = [];
	//console.log(skins);
	for(j=0;j<differentPhases2.length;j++){
		
		for(i = 0;i<skins.length;i++){
			if(skins[i].phase == differentPhases2[j].phase){
				skins[i].priceToAverage = (skins[i].price/differentPhases2[j].pAvg);
				//console.log(skins[i].price)
				//console.log(skins[i].priceToAverage);
				skins[i].value = ((2-parseFloat(skins[i].float)*multiplier))/skins[i].priceToAverage;
				//console.log(skins[i].value)

				if(skins[i].value*comparator*differentPhases2[j].fAvg*13>comparator){
					//console.log(skins[i]);
					var y = {skin: skins[i], valuePercent: skins[i].value/comparator};
					recommendations.push(y);
				}
			}
			if(xm == true){
/*				if (skins[i].paintSeed =="26"||skins[i].paintSeed =="78"||skins[i].paintSeed =="115"||skins[i].paintSeed =="130"||skins[i].paintSeed =="182"||skins[i].paintSeed =="234"||skins[i].paintSeed =="286"||skins[i].paintSeed =="334"||skins[i].paintSeed =="338"||skins[i].paintSeed =="390"||skins[i].paintSeed =="442"||skins[i].paintSeed =="494"||skins[i].paintSeed =="546"||skins[i].paintSeed =="598"||skins[i].paintSeed =="605"||skins[i].paintSeed =="650"||skins[i].paintSeed =="659"||skins[i].paintSeed =="698"||skins[i].paintSeed =="955"){
					patternRecommendations.push(skins[i]);
				} */
				if (skins[i].paintSeed == skins[i].paintSeed == "26"||skins[i].paintSeed == "78"||skins[i].paintSeed == "115"||skins[i].paintSeed == "130"||skins[i].paintSeed == "182"||skins[i].paintSeed == "234"||skins[i].paintSeed == "286"||skins[i].paintSeed == "334"||skins[i].paintSeed == "338"||skins[i].paintSeed == "390"||skins[i].paintSeed == "442"||skins[i].paintSeed == "494"||skins[i].paintSeed == "546"||skins[i].paintSeed == "598"||skins[i].paintSeed == "605"||skins[i].paintSeed == "650"||skins[i].paintSeed == "659"||skins[i].paintSeed == "698"||skins[i].paintSeed == "955"){
					patternRecommendations.push(skins[i]);
				}

			}
			if(ckimono == true){
				//all good ones
				if (skins[i].paintSeed == "222"||skins[i].paintSeed == "760"||skins[i].paintSeed == "86"||skins[i].paintSeed == "399"||skins[i].paintSeed == "425"||skins[i].paintSeed == "784"||skins[i].paintSeed == "739"||skins[i].paintSeed == "519"||skins[i].paintSeed == "583"||skins[i].paintSeed == "328"||skins[i].paintSeed == "818"||skins[i].paintSeed == "814"||skins[i].paintSeed == "736"||skins[i].paintSeed == "457"||skins[i].paintSeed == "449"||skins[i].paintSeed == "337"||skins[i].paintSeed == "761"||skins[i].paintSeed == "471"||skins[i].paintSeed == "299"||skins[i].paintSeed == "832"){
					patternRecommendations.push(skins[i]);
				}  

				if (skins[i].paintSeed == "328"||skins[i].paintSeed == "832"){
					patternRecommendations.push(skins[i]);
				}

			}
			if(gsandstorm == true){
				if (skins[i].paintSeed == "583"||skins[i].paintSeed == "761"){
					patternRecommendations.push(skins[i]);
				}

			}
			if(acidClover == true){
				if (skins[i].paintSeed == "326"){
					patternRecommendations.push(skins[i]);
				}

			}
			if(glockStar == true){
				if (skins[i].paintSeed == "31"||skins[i].paintSeed == "59"||skins[i].paintSeed == "90"||skins[i].paintSeed == "95"||skins[i].paintSeed == "102"||skins[i].paintSeed == "121"||skins[i].paintSeed == "165"||skins[i].paintSeed == "194"||skins[i].paintSeed == "237"||skins[i].paintSeed == "281"||skins[i].paintSeed == "355"||skins[i].paintSeed == "448"||skins[i].paintSeed == "484"||skins[i].paintSeed == "487"||skins[i].paintSeed == "617"||skins[i].paintSeed == "630"||skins[i].paintSeed == "667"||skins[i].paintSeed == "796"||skins[i].paintSeed == "769"||skins[i].paintSeed == "83"||skins[i].paintSeed == "913"||skins[i].paintSeed == "958"||skins[i].paintSeed == "968"||skins[i].paintSeed == "986"){
					patternRecommendations.push(skins[i]);
				}

			}
			if(akCase == true){
				if (skins[i].paintSeed == "45"||skins[i].paintSeed == "154"||skins[i].paintSeed == "219"||skins[i].paintSeed == "321"||skins[i].paintSeed == "661"||skins[i].paintSeed == "3148"||skins[i].paintSeed == "523313"||skins[i].paintSeed == "1313"){
					patternRecommendations.push(skins[i]);
				}

			}
			if(fiveSevenCase == true){
				if (skins[i].paintSeed == "28"||skins[i].paintSeed == "30"||skins[i].paintSeed == "278"||skins[i].paintSeed == "670"){
					patternRecommendations.push(skins[i]);
				}

			}
			if(glockHB == true){
				if (skins[i].paintSeed == "897"){
					patternRecommendations.push(skins[i]);
				}

			}
			if(glockReactor == true){
				if (skins[i].paintSeed == "923"||skins[i].paintSeed == "281"){
					patternRecommendations.push(skins[i]);
				}

			}
			if(fiveSevenKami == true){
				if (skins[i].paintSeed == "662"||skins[i].paintSeed == "909"||skins[i].paintSeed == "537"||skins[i].paintSeed == "439"){
					patternRecommendations.push(skins[i]);
				}

			}

			if(tecSandstorm == true){
				if (skins[i].paintSeed == "227"||skins[i].paintSeed == "519"||skins[i].paintSeed == "471"||skins[i].paintSeed == "758"){
					patternRecommendations.push(skins[i]);
				}

			}
			if(awppaw == true){
				if (skins[i].paintSeed == "435"||skins[i].paintSeed == "988"||skins[i].paintSeed == "999"||skins[i].paintSeed == "35"){
					patternRecommendations.push(skins[i]);
				}

			}
		}
	}
		
	recommendations.sort(function(a, b){return b.valuePercent - a.valuePercent});
	skins.sort(function(a, b){return b.value - a.value});
	console.log("---- Recommended Skins ----")
	for(i=0;i<recommendations.length;i++){
		console.log(recommendations[i].skin);
		console.log("With A Rating of: " + recommendations[i].valuePercent)
		console.log("-------------------------------------")
	}



/*

	for(i = 0; i<differentPhases2.length;i++){
		//var total = 0.0;
		//var phaseCounter = 0;
		//console.log(skins[1].price)
		//console.log(total);
		//console.log(parseInt(skins[i].price))
		for(var j = 0; j<w4.length;j++){
			//console.log(i);
			//console.log(j);
			//differentPhases[i][0];
			//skins[j][1];
			if(differentPhases2[i].phase == skins[j].paintSeed){
				total += parseFloat(skins[j].price);
				phaseCounter += 1
			}
			//differentPhases[i][1] = total;
			differentPhases2[i].pAvg = total/phaseCounter
		}
	}
	*/

	//console.log(skins)
	//console.log("Comparator: "+comparator)
	//console.log(differentPhases2)
	if(patternRecommendations !== []){
		console.log(patternRecommendations)
	}
	var valueOrder = [];
	for(i = 0; i<skins.length;i++){
		valueOrder.push(skins[i])
	}
	printValueOrder(valueOrder)
	printBestFloats(skins)




	//Oz's Knife Price (based on the other knife)
	//skins[i].value = ((2-parseFloat(skins[i].float)*multiplier))/skins[i].priceToAverage;
	//skins[i].priceToAverage = (skins[i].price/differentPhases2[j].pAvg);
/*	oPTA =  ((2-0.03430814296007*multiplier))/1.691888228860509
	oP = oPTA*differentPhases2[1].pAvg
	console.log(oP);*/
/*	oS1 = ((2-0.03430814296007*multiplier))/0.919276270006959;
	oS2 = (oS1*1437);
	console.log(oS2);
*/


	/*	for(i = 0; i<phaseClass.length;i++){

	}*/
	const dopplerPhases = {
	    418: 'Phase 1',
	    419: 'Phase 2',
	    420: 'Phase 3',
	    421: 'Phase 4',
	    415: 'Ruby',
	    416: 'Sapphire',
	    417: 'Black Pearl',
	    569: 'Phase 1',
	    570: 'Phase 2',
	    571: 'Phase 3',
	    572: 'Phase 4',
	    568: 'Emerald',
	    618: 'Phase 2',
	    619: 'Sapphire',
	    617: 'Black Pearl',
	    852: 'Phase 1',
	    853: 'Phase 2',
	    854: 'Phase 3',
	    855: 'Phase 4'
	};

}
function makePhaseOne(phaseClass){
	if(phaseClass[0].textContent.includes("Phase") == true){
		for(i = 0; i<w4.length;i++){
			if(differentPhases1.includes(0)==false){
				if(differentPhases1.includes(phaseClass[i].textContent.slice(-2,-1))==false){
					differentPhases1.push(phaseClass[i].textContent.slice(-2,-1));
					defaultPhase = 1;
				}

			}

		}

	}
	else{
		defaultPhase= 0;
		differentPhases1.push(defaultPhase);

	}
	
}

function makePhaseTwo(){
	differentPhases2 = [];
	for(i = 0; i<differentPhases1.length;i++){
			var x = {phase: differentPhases1[i], pAvg: 0.0,fAvg: 0.0 };
			differentPhases2.push(x);

	}
}
function printValueOrder(valueOrder){
	valueOrder.sort(function(a, b){return b.value - a.value});
	console.log("----------- Skins in value order ----------")
	console.log(valueOrder)

}
function printBestFloats(skins){
	skins.sort(function(a, b){return a.float - b.float});
	console.log("Best Floats")
	console.log(skins[0])
	console.log(skins[1])
	console.log(skins[2])
}






//////////////////////////////////////CODE TO BE CHANGED FROM CS FLOAT/////////////////////////////////////////////////////////////////
/*    for (const i of [10, 25, 50, 100,200,300]) {
        const option = document.createElement('option');
        option.innerText = i;
        option.value = i;

        if (i === savedPageSize) {
            option.setAttribute('selected', '');
        }

        pageSize.appendChild(option);
    }

    pageSize.addEventListener('change', e => {
        const newSize = parseInt(e.srcElement.value);
        window.postMessage(
            {
                type: 'changePageSize',
                pageSize: newSize
            },
            '*'
        );
        savePageSize(newSize);
    });

    parentDiv.appendChild(pageSize);

    // Change the page size on first load
    if (savedPageSize && savedPageSize !== 10) {
        window.postMessage(
            {
                type: 'changePageSize',
                pageSize: savedPageSize
            },
            '*'
        );
    }

    // A
	const savePageSize = function(size) {
   		const storageType = chrome.storage.sync ? chrome.storage.sync : chrome.storage.local;
   		storageType.set({ pageSize: size });
	};*/