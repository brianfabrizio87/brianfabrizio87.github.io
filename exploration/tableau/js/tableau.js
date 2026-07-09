
// OBJECTS
// #######################################################################################

	// View Objects
	// Description: This object instance is used for the View examples
	// *******************************************************************
	var vizDiv = document.getElementById("tableau_1");
	var vizURL = "http://public.tableau.com/views/VizFun/sheet1";
	var vizOptions = {
		width: "100%",
		height: "350px",
		hideTabs: "true",
		onFirstInteractive: function() { // code in here fires after viz fully loads
		
		}
	};   
	var viz1 = new tableau.Viz(vizDiv, vizURL, vizOptions);

	// Filtering Objects
	// Description: This object is used for the Filtering examples
	// *************************************************************
	var vizDiv2 = document.getElementById("tableau_3");
	var vizURL2 = "http://public.tableau.com/views/VizFun/sheet1";
	var vizOptions2 = {
		width: "100%",
		height: "350px",
		hideTabs: "true",
		onFirstInteractive: function() {
	
		}
	};
	var viz2 = new tableau.Viz(vizDiv2, vizURL2, vizOptions2);
	
	// Event Objects
	// Description: This object is used for the Listener examples
	var vizDiv3 = document.getElementById("tableau_4");
	var vizURL3 = "http://public.tableau.com/views/VizFun/sheet1"
	var vizOptions3 = {
		width: "100%",
		height: "350px",
		hideTabs: "true",
		onFirstInteractive : function() {
		
		}
	};
	var viz3 = new tableau.Viz(vizDiv3, vizURL3, vizOptions3);

// END OBJECTS #################################################################################################






// VIEWS
// ###########################################################################################################

// View specific sheets
// Description: The viewSeet function takes a sheet name string to load the desired sheet based on a UI button
// *******************************************************************************************************************
function viewSheet(sheetName) {
	workbook = viz1.getWorkbook();
	workbook.activateSheetAsync(sheetName);
};

// END VIEWS ###################################################################################################




// FILTERTING 
// ###########################################################################################################

// FIlter on specific dimensions
// Description:  This function accepts a single value used to selectively filter a given dimension
function showOnly(dimension, value) {
	sheet = viz2.getWorkbook().getActiveSheet();
	sheet.applyFilterAsync(dimension, value, "REPLACE");
};


function showMany(dimension, values) {
	sheet = viz2.getWorkbook().getActiveSheet();
	sheet.applyFilterAsync(dimension, values, "ADD");
};

function marking(dimension, values) {
	sheet = viz2.getWorkbook().getActiveSheet();
	if(sheet.getSheetType() === 'worksheet') {
		sheet.selectMarksAsync(dimension, values, "REPLACE");
	} else {
		worksheetArray = sheet.getWorksheets();
		for (var i = 0; i < worksheetArray.length; i++) {
			worksheetArray[i]. selectMarksAsync(dimension, values, "REPLACE");
		}
	}
};

// END FILTERNG #################################################################################################






// GENERAL EVENTS
// ##########################################################################################################

	// Initial View States
	$("#view_sheet_1_description").hide();
	$("#view_sheet_2_description").hide();
	$("#filter_sheet_1_description").hide();
	$("#filter_sheet_2_description").hide();
	$("#marking_sheet_1_description").hide();
	
	$("#view_sheet_1").click(function() {
		$("#view_sheet_2_description").hide('slow');
		$("#marking_sheet_1_description").hide('slow');
		$("#view_sheet_1_description").show('slow').css('background-color', 'black').css('color', 'white');
		
	});
	
	$("#view_sheet_2").click(function() {
		$("#view_sheet_1_description").hide('slow');
		$("#marking_sheet_1_description").hide('slow');
		$("#view_sheet_2_description").show('slow').css('background-color', 'black').css('color', 'white');
	});
	
	$("#filter_sheet_1").click(function() {
		$("#filter_sheet_2_description").hide('slow');
		$("#marking_sheet_1_description").hide('slow');
		$("#filter_sheet_1_description").show('slow').css('background-color', 'black').css('color', 'white');
	});
	
	$("#filter_sheet_2").click(function() {
		$("#filter_sheet_1_description").hide('slow');
		$("#marking_sheet_1_description").hide('slow');
		$("#filter_sheet_2_description").show('slow').css('background-color', 'black').css('color', 'white');
	});
	
	$("#marking_sheet_1").click(function() {
		$("#filter_sheet_1_description").hide('slow');
		$("#filter_sheet_2_description").hide('slow');
		$("#marking_sheet_1_description").show('slow').css('background-color', 'black').css('color', 'white');
	});
	

//  END GENERAL EVENTS #########################################################################################