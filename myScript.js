
	console.clear();

	//console.group('ificl errors');

	//console.table();

	//console.info();

	//console.dir();

	//console.debug();

	//console.dirxml('asdf');

	const svgcanvas = document.getElementById("svgcanvas");

	var table = document.createElement('table');

	var tr = document.createElement('tr');
	
	const vehicles = new Map();

	const lrus = new Map();

	const whs = new Map();

	const pinMap = new Map();

	const fpaths = new Map();

	const mates = new Map();

	const connectors = new Map();

	//makeLRU("10", "10", "650", "105", "1A1A1");

	var module = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

	module.setAttribute("x", "550");

	module.setAttribute("y", "180");

	module.setAttribute("width", "190");

	module.setAttribute("height", "50");

	module.setAttribute("class", "module");

	svgcanvas.appendChild(module);


	var module = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

	module.setAttribute("x", "550");

	module.setAttribute("y", "240");

	module.setAttribute("width", "190");

	module.setAttribute("height", "50");

	module.setAttribute("class", "module");

	svgcanvas.appendChild(module);


	lrus.set('1A1A1', makeLRU("10", "10", "650", "105", "1A1A1"));

	lrus.set('1F4A3', makeLRU("520", "160", "150", "250", "1F4A3"));

	lrus.set('1F6A3', makeLRU("410", "350", "310", "105", "1F6A3"));


	//whs.set('1W66', makeWH("210", "550", "100", "100", "1W66"));


	//console.log(lrus);

	makeConnector(55, 6, 3, 20, 30, 100, 100, "right", "1A1A1_J107");

	makeConnector(8, 6, 3, 20, 30, 500, 200, "left", "1F4A3_J1");

	makeConnector(24, 6, 3, 20, 30, 400, 400, "left", "1F6A3_J3");


	makeConnector(55, 6, 3, 20, 30, 150, 100, "left", "1W66_P1");

	makeConnector(8, 6, 3, 20, 30, 450, 200, "right", "1W66_P2");

	//makeConnector(8, 6, 3, 20, 30, 300, 560, "right", "1W66_P3");


	var connectorMap = connectors;

	//console.log(connectorMap);

	makeSnake ([svgcanvas.getElementById('1W66_P1_' + Math.floor((Math.random() * 8) + 1)), svgcanvas.getElementById('1W66_P2_' + Math.floor((Math.random() * 8) + 1))], pinMap);

	makeSnake ([svgcanvas.getElementById('1A1A1_J107_'+ Math.floor((Math.random() * 32) + 1)), svgcanvas.getElementById('1W66_P1_' + Math.floor((Math.random() * 8) + 1)), svgcanvas.getElementById('1W66_P2_' + Math.floor((Math.random() * 8) + 1)), svgcanvas.getElementById('1F4A3_J1_' + Math.floor((Math.random() * 8) + 1))], pinMap);

	makeSnake ([svgcanvas.getElementById('1A1A1_J107_'+ Math.floor((Math.random() * 32) + 1)), svgcanvas.getElementById('1W66_P1_' + Math.floor((Math.random() * 8) + 1)), svgcanvas.getElementById('1W66_P2_' + Math.floor((Math.random() * 8) + 1)),svgcanvas.getElementById('1F4A3_J1_' + Math.floor((Math.random() * 8) + 1))], pinMap);

	//makeSnake ([svgcanvas.getElementById('1A1A1_J107_'+ Math.floor((Math.random() * 55) + 1)), svgcanvas.getElementById('1W66_P1_' + Math.floor((Math.random() * 8) + 1)), svgcanvas.getElementById('1W66_P2_' + Math.floor((Math.random() * 8) + 1)),svgcanvas.getElementById('1W66_P1_' + Math.floor((Math.random() * 8) + 1))], pinMap);


	//makeSnake ([svgcanvas.getElementById('1A1A1_J107_'+ Math.floor((Math.random() * 55) + 1)), svgcanvas.getElementById('1W66_P1_' + Math.floor((Math.random() * 8) + 1))], pinMap);


	//makeSnake ([svgcanvas.getElementById('1A1A1_J107_'+ Math.floor((Math.random() * 55) + 1)), svgcanvas.getElementById('1W66_P1_' + Math.floor((Math.random() * 8) + 1))], pinMap);


	//makeSnake ([svgcanvas.getElementById('1W66_P1_'+ Math.floor((Math.random() * 8) + 1)), svgcanvas.getElementById('1W66_P2_' + Math.floor((Math.random() * 8) + 1))], pinMap);


	//makeSnake ([svgcanvas.getElementById('1W66_P1_'+ Math.floor((Math.random() * 8) + 1)), svgcanvas.getElementById('1W66_P2_' + Math.floor((Math.random() * 8) + 1))], pinMap);


	//makeSnake ([svgcanvas.getElementById('1W66_P1_'+ Math.floor((Math.random() * 8) + 1)), svgcanvas.getElementById('1W66_P2_' + Math.floor((Math.random() * 8) + 1))], pinMap);


	//makeSnake ([svgcanvas.getElementById('1W66_P1_'+ Math.floor((Math.random() * 8) + 1)), svgcanvas.getElementById('1W66_P2_' + Math.floor((Math.random() * 8) + 1))], pinMap);




	//makeSnake ([svgcanvas.getElementById('1W66_P2_'+ Math.floor((Math.random() * 8) + 1)), svgcanvas.getElementById('1F6A3_J3_' + Math.floor((Math.random() * 8) + 1))], pinMap);

	//makeSnake ([svgcanvas.getElementById('1W66_P2_'+ Math.floor((Math.random() * 8) + 1)), svgcanvas.getElementById('1F6A3_J3_' + Math.floor((Math.random() * 8) + 1))], pinMap);

	//makeSnake ([svgcanvas.getElementById('1W66_P2_'+ Math.floor((Math.random() * 8) + 1)), svgcanvas.getElementById('1F6A3_J3_' + Math.floor((Math.random() * 8) + 1))], pinMap);

	//makeSnake ([svgcanvas.getElementById('1W66_P2_'+ Math.floor((Math.random() * 8) + 1)), svgcanvas.getElementById('1F6A3_J3_' + Math.floor((Math.random() * 8) + 1))], pinMap);

	//var pid = '1F6A3_J3_' + Math.floor((Math.random() * 8) + 1);

	//alert(pid);

	var pinBID = Math.floor((Math.random() * 8) + 1);

	var fpathID = ('1A1A1_J107_15' + '1F6A3_J3_' + pinBID).replaceAll("_", "");

	fpaths.set(fpathID, 'hello, world!');

	//makeSnake ([svgcanvas.getElementById("1A1A1_J107_15"), svgcanvas.getElementById('1F6A3_J3_' + pinBID)], pinMap);

	//makeSnake ([svgcanvas.getElementById("1A1A1_J107_16"), svgcanvas.getElementById('1F6A3_J3_' + Math.floor((Math.random() * 8) + 1))], pinMap);

	//makeSnake ([svgcanvas.getElementById("1A1A1_J107_11"), svgcanvas.getElementById('1F6A3_J3_' + Math.floor((Math.random() * 8) + 1))], pinMap);

	//makeSnake ([svgcanvas.getElementById("1A1A1_J107_12"), svgcanvas.getElementById('1F6A3_J3_' + Math.floor((Math.random() * 8) + 1))], pinMap);

	//makeSnake ([svgcanvas.getElementById("1A1A1_J107_13"), svgcanvas.getElementById('1F6A3_J3_' + Math.floor((Math.random() * 8) + 1))], pinMap);

	//makeSnake ([svgcanvas.getElementById("1A1A1_J107_8"), svgcanvas.getElementById('1F6A3_J3_' + Math.floor((Math.random() * 8) + 1))], pinMap);

	//makeSnake ([svgcanvas.getElementById("1A1A1_J107_6"), svgcanvas.getElementById('1F6A3_J3_' + Math.floor((Math.random() * 8) + 1))], pinMap);
	
	console.debug(svgcanvas.getElementById('1A1A1_J107'));

	//console.debug(svgcanvas.getElementById('1F6A3_J3'));

	//makeSnake (svgcanvas.getElementById('1A1A1_J107'), svgcanvas.getElementById('1F6A3_J3'), connectorMap);

	console.log('Created ' + connectors.size + ' connectors on ' + lrus.size + ' lrus.');

	var th = document.createElement('th');

	th.innerHTML = "HEADER";

	tr.appendChild(th);

	var th = document.createElement('th');

	var tbody = document.createElement('tbody');

	var tfooter = document.createElement('tfoot');

	var theader = document.createElement('thead');

	var tcaption = document.createElement('caption');

	table.appendChild(tcaption);

	tbody.appendChild(theader);

	tbody.appendChild(tr);

	table.appendChild(tbody);

	table.setAttribute("id", "NFI");

	//alert(table.id);

	connectors.forEach((values, keys) => {

		var tr = document.createElement('tr');

		var td = document.createElement('td');

		td.innerHTML = keys;

		td.setAttribute("onclick", "makeConnectorCap('" + td.innerText + "')");

		tr.appendChild(td);

		tbody.appendChild(tr);

	});

	tbody.appendChild(tfooter);

	document.body.appendChild(table);


	var tbody = document.createElement('tbody');

	var table = document.createElement('table');


	pinMap.forEach((values, keys) => {

		var tr = document.createElement('tr');

		var td = document.createElement('td');

		td.innerHTML = keys;

		tr.appendChild(td);

		tbody.appendChild(tr);

	});

	table.appendChild(tbody);

	document.body.appendChild(table);

	//makeConnectorCap('1A1A1_J107');


	function makeConnectorCap (connectorID) {

		//alert(tableCell);

		//const connectorID = tableCell.innerText;

		const connector = document.getElementById(connectorID).children[0];

		const table = document.getElementById("NFI");
	
		xpos = connector.getAttribute("x");

		ypos = connector.getAttribute("y");

		xdim = connector.getAttribute("width");

		ydim = connector.getAttribute("height");

		const cap = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

		cap.setAttribute("x", xpos);

		cap.setAttribute("y", ypos);

		cap.setAttribute("width", xdim);

		cap.setAttribute("height", ydim);

		cap.setAttribute("class", "nfi");

		cap.setAttribute("id", connectorID);

		cap.setAttribute("onclick", "RemoveNFI('" + cap.id + "')");

		svgcanvas.appendChild(cap);

	}


	function RemoveNFI (nfi) {

		alert(nfi);

	}


	function makeConnector(pinQty, pinHeight, pinSpacing, pinWidth, connectorWidth, xpos, ypos, pinSide, connectorID) {

		const signalArray =  ['RS422', 'PWR', 'HLD', 'TLMA'];

		//alert(pinArray);

		var connectorGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

		// let's calculate the size of the connector based on the pin quantity and spacing

		var connectorHeight = pinQty * pinHeight + pinSpacing * (pinQty + 1);

		var connectorBody = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

		connectorBody.setAttribute("x", xpos);

		connectorBody.setAttribute("y", ypos);

		connectorBody.setAttribute("width", connectorWidth);

		connectorBody.setAttribute("height", connectorHeight);

		connectorBody.setAttribute("class", "connector dropdown dropbtn");

		var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');

		title.innerHTML = connectorID;

		connectorBody.appendChild(title);

		connectorGroup.appendChild(connectorBody);

		connectorGroup.setAttribute("id", connectorID);

		for (var i = 0; i < pinQty; i++) {

			var pin = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

			var pinID = Number(i + 1);

			pin.setAttribute("id", connectorID + '_' + pinID);

			if (pinSide == "right" ) {

				var pinX = xpos + connectorWidth - pinWidth/2;

			} else {

				var pinX = xpos - pinWidth/2;

			}

			pin.setAttribute("x", pinX);

			pinY = ypos + pinSpacing + i * (pinSpacing + pinHeight);

			pin.setAttribute("y", pinY);

			pin.setAttribute("height", pinHeight);

			pin.setAttribute("width", pinWidth);

			var signalIndex = Math.floor(Math.random()*signalArray.length);

			//console.log(signalArray[signalIndex]);

			pin.setAttribute("class", signalArray[signalIndex]);

			var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');

			title.innerHTML = pinID + ': ' + pin.getAttribute("class");

			var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

			text.innerHTML = pinID;

			if (pinSide == "right" ) {

				text.setAttribute("x", xpos + connectorWidth - pinWidth/2 - Number(10));

			} else {

				text.setAttribute("x", xpos + pinWidth/2 + Number(5));

			}

			text.setAttribute("y", Number(pin.getAttribute("y")) + Number(5));

			text.setAttribute("class", 'pintext');

			text.innerHTML = pinID;

			connectorGroup.appendChild(text);

			pin.appendChild(title);

			connectorGroup.appendChild(pin);

			//return(connectorGroup);

			connectors.set(connectorID, connectorGroup);

		}



	svgcanvas.appendChild(connectorGroup);
	
	//DrawFunctionPath (100, 100, connectorHeight, connectorWidth, pinQty);

	//DrawFunctionPath (200, 200, connectorHeight, connectorWidth, pinQty);

	}

	function printMe() {

		//const table = document.getElementById("NFI").outerHTML;


        var el=document.getElementById("NFI");
        el.setAttribute('border', '1px');
        el.setAttribute('cellpadding', '5');
        newPrint=window.open("");
        newPrint.document.write(el.outerHTML);
        newPrint.print();
        newPrint.close();


    }



	function makeLRU(lruX, lruY, lruHeight, lruWidth, lruID) {

		//var connectorGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

		// let's calculate the size of the connector based on the pin quantity and spacing

		//var connectorHeight = pinQty * pinHeight + pinSpacing * (pinQty + 1);

		var lru = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

		lru.setAttribute("x", lruX);

		lru.setAttribute("y", lruY);

		lru.setAttribute("width", lruWidth);

		lru.setAttribute("height", lruHeight);

		lru.setAttribute("class", "lru");

		var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');

		title.innerHTML = lruID;

		lru.appendChild(title);

		svgcanvas.appendChild(lru);

		return(lru);

	} //makeLRU


	/* function DrawFunctionPath (connectorX, connectorY, connectorHeight, connectorWidth, pinQty) {

			console.log(connectorX);

			console.log(connectorY);

			console.log(connectorHeight);

			console.log(connectorWidth);

			console.log(pinQty);


		//M X1, Y1  L X2, Y2 L X3, Y3 A R, R, 0, 0, F1, X4, Y4 L X5, Y5 A R2, R2, 0, 0, F2, X6, Y5 L X7, Y7


		var pinSpacing = connectorHeight/(pinQty + 1);

			//console.log(pinSpacing);


		for (var i = 0; i < pinQty; i++) {

			//console.log(i);

			var x2 = connectorX;

			var x7 = connectorX + connectorWidth;

			var y7 = connectorY + pinSpacing + Number(pinSpacing * i);

			//console.log('pin ' + i + ': ' + x7 + ', ' + y7);


		}

	} */


	function makeWH(lruX, lruY, lruHeight, lruWidth, lruID) {

		var lru = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

		lru.setAttribute("x", lruX);

		lru.setAttribute("y", lruY);

		lru.setAttribute("width", lruWidth);

		lru.setAttribute("height", lruHeight);

		lru.setAttribute("class", "harness");

		var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');

		title.innerHTML = lruID;

		lru.appendChild(title);

		svgcanvas.appendChild(lru);

		return(lru);

	} //makeWH

	//function createArray () {

		//var a = 5;

		//var b = 11;

		//var portArray = Array([,]);

		//j = 5;

		//for (i = 0, i < a, i++) {

			//for (j = 0, j < b, j++) {

				//portArray[i] = [i * 30, 0];

				//portArray[i + a] = [0, j * 30];

			//}
			
		//}

		//alert(portArray.length);

	//}


	function makeSnake (objects, objectMap) {

		var maxRadius = 20;

		var functionPath = "";

		var snakePath = "";

		var connectorAID = "";

		var connectorBID = "";

		var lruAID = "";

		var lruBID = "";

		const aspectRatio = 0.5;

		var sourceObject = objects[0];

		var destObject = objects[objects.length + 1];

		for (i = 0; i < objects.length - 1; i++ ) {

			objectA = objects[i];

			objectB = objects[i + 1];

			//lruAID = (objectA.id).substring(0, (objectA.id).indexOf("_"));

			//lruBID = (objectAB.id).substring(0, (objectB.id).indexOf("_"));

			connectorAID = (objectA.id).substring(0, (objectA.id).indexOf("_", (objectA.id).indexOf("_")+1));

			connectorBID = (objectB.id).substring(0, (objectB.id).indexOf("_", (objectB.id).indexOf("_")+1));

			connectorA = connectors.get(connectorAID).children[0];

			connectorB = connectors.get(connectorBID).children[0];

			//lruA = lrus.get(lruAID);

			//lruB = lrus.get(lruBID);

			//alert(connectorA.id);

			console.debug(connectorA);

			console.debug(connectorB);

			var pinflag = false;

			/* if (objectA.getAttribute("class") == objectB.getAttribute("class")) {

				var pinclass = objectA.getAttribute("class");


			} else {

				var pinclass = 'warning ' + objectA.id + ' [' + objectA.getAttribute("class") + '] ' + objectB.id + ' [' + objectB.getAttribute("class") + '] ';

			} */

			if (objectMap.has(objectA.id)) {

				console.error(objectA.id + ' is already assigned!');

				var pinclass = 'error ' + objectA.id + ' is already assigned!';

				pinflag = true;

			} else {

				objectMap.set(objectA.id, objectA);

			}

			if (objectMap.has(objectB.id)) {

				console.error(objectB.id + ' is already assigned!');

				var pinclass = 'error ' + objectB.id + ' is already assigned!';

				pinflag = true;


			} else {

				objectMap.set(objectB.id, objectB);

			}
	
			var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

			var group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

			var title = document.createElementNS('http://www.w3.org/2000/svg', 'title');

			var text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

			var textpath = document.createElementNS('http://www.w3.org/2000/svg', 'textPath');

			var motionpath = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');

			var mpath = document.createElementNS('http://www.w3.org/2000/svg', 'mpath');

			var ificlPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

			var harnessPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

			var snake = document.createElementNS('http://www.w3.org/2000/svg', 'path');

			var snakeWidth = Number(objectB.getAttribute("x")) - (Number(objectA.getAttribute("x")) + Number(objectA.getAttribute("width")));
		
			var snakeHeight = Number(objectB.getAttribute("y")) + Number(objectB.getAttribute("height")/2) - (Number(objectA.getAttribute("y")) + Number(objectA.getAttribute("height")/2));

			var snakeX1 =  Number(Number(objectA.getAttribute("x")) + Number(objectA.getAttribute("width")));

			var snakeY1 =  Number(Number(objectA.getAttribute("y")) + Number(objectA.getAttribute("height")/2));

			var snakeX2 =  snakeX1 + snakeWidth*aspectRatio/2;

			var snakeY2 =  snakeY1;

			var snakeX3 =  snakeX1 + snakeWidth*aspectRatio;

			var snakeY3 =  snakeY2;

			var snakeX4 =  snakeX3;

			var snakeY4 =  snakeY1 + snakeHeight;

			var snakeX5 =  snakeX3 + snakeWidth*aspectRatio/2;

			var snakeY5 =  snakeY1 + snakeHeight;

			var snakeX6 =  snakeX1 + snakeWidth;

			var snakeY6 =  snakeY5;

			var snakeX7 =  snakeX1 + snakeWidth;

			var snakeY7 =  snakeY6;

			var r = Math.min(Math.abs(snakeHeight/2), maxRadius);

			if (snakeHeight < 0) {

				r = -r;

			}

			if (snakeY1 > snakeY7) {

				arcFlagA = 0;
				arcFlagB = 1;


			} else {

				arcFlagA = 1;
				arcFlagB = 0;

			}

			var path1 = Number(connectorA.getAttribute("x")) + Number(connectorA.getAttribute("width"));
			var path2 = Number(connectorA.getAttribute("y")) + Number(connectorA.getAttribute("height")/2);

			var path3 = Number(connectorB.getAttribute("x")) + Number(connectorB.getAttribute("width"));
			var path4 = Number(connectorB.getAttribute("y")) + Number(connectorB.getAttribute("height")/2);

			harnessPath.setAttribute("d", 'M ' + path1 + ',' + path2 + 'L ' + path3 + ',' + path4);

			harnessPath.setAttribute("class", "hpath");

			console.log(connectorA.getAttribute("x"));

			var fpathID = (objectA.id + objectB.id).replaceAll("_", "");

			var coord0 = Number(snakeX1) + ',' + snakeY1;

			var coord1 = Number(snakeX3 - Math.abs(r)) + ',' + snakeY3;

			var coord2 = snakeX3 + ', '  + Number(snakeY3 + r);

			var coord3 = snakeX4 + ', '  + Number(snakeY4 - r);

			var coord4 = Number(snakeX4 + Math.abs(r)) + ', ' + snakeY4;

			var arcPathA = 'M ' + coord1  + ' A ' + r + ', ' + r + ', 0, 0, ' + arcFlagA + ', ' + coord2;

			var arcPathB = 'M ' + coord3 + ' A ' + r + ', ' + r + ', 0, 0, ' + arcFlagB + ', ' + coord4;

			snakePath = 'M ' + coord0 + ' L ' + coord1 + ' A ' + r + ', ' + r + ', 0, 0, ' + arcFlagA + ', ' + coord2 + ' L ' + coord3 + ' A ' + r + ', ' + r + ', 0, 0, ' + arcFlagB + ', ' + coord4 + ' L ' + snakeX6 + ',' + snakeY6;

			snake.setAttribute("class", 'fpath snakepath1 ' + pinclass);

			snake.setAttribute("d", functionPath);

			snake.setAttribute("id", fpathID);

			textpath.innerHTML = fpathID;

			textpath.setAttribute("href", '#' + fpathID);

			//snake.setAttribute("marker-start", "url(#arrow)");

			//snake.setAttribute("marker-end", "url(#arrow)");

			//snake.setAttribute("marker-mid", "url(#arrow)");

			//var m = snake.getAttribute("marker-mid");

			//console.log(snake);

			if (snake.getAttribute("class").search("error")) {

				console.warn('error detected in path ' + fpathID + '. ' + objectA.getAttribute("class") + ' does not match ' + objectB.getAttribute("class"));

				//console.log(pinA.getAttribute("class") + ' -> ' + pinB.getAttribute("class"));

			}
				
			title.innerHTML = fpathID + ' [' + pinclass + ']';

			group.appendChild(title);

			text.appendChild(textpath);

			textpath.setAttribute("startOffset", "10");

			//console.debug(objectMap.keys());

			group.appendChild(objectA);

			group.appendChild(objectB);

			group.appendChild(snake);

			//svgcanvas.appendChild(text);

			//group.setAttribute("id", fpathID)

			//console.debug(text);

			svgcanvas.appendChild(group);

			//svgcanvas.appendChild(harnessPath);

			functionPath = functionPath + snakePath;

		}

		snake.setAttribute("d", functionPath);

		snake.setAttribute("class", 'fpath');

		console.debug(snake.attributes);

		circle.setAttribute("fill", "red");

		circle.setAttribute("r", "10");

		motionpath.setAttribute("dur", "30s");

		motionpath.setAttribute("repeatCount", "1");

		motionpath.setAttribute("rotate", "auto");

		mpath.setAttribute("href", '#' + fpathID);

		motionpath.appendChild(mpath);

		circle.appendChild(motionpath);

		svgcanvas.appendChild(circle);

		console.debug(motionpath);

		console.debug(objectMap);

	}