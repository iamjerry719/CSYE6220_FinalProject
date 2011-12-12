$(function(){
    $("#varTable").tablesorter({widgets: ['zebra']});
	
//	$("#varTable tr:odd").css( "background-color", "#808080" );

//	$("#FPS")
//	$("SECONDS_BETWEEN_FRAMES")
//	$("g_GameObjectManager")
//	$("g_ApplicationManager")
//	$("g_ResourceManager")
//	$("g_score")
//	$("g_player")
	
	// Highlight
	$("#FPS").click(function(){
		$("table.tablesorter tbody td").tablesorter().css("background-color", "#A6A6A6");
		$("table.tablesorter tbody tr.odd td").tablesorter().css("background-color", "#808080");
		$("#varTable.tablesorter tbody tr.FPS_tr td").tablesorter().css("background-color", "yellow");
	});
	$("#SECONDS_BETWEEN_FRAMES").click(function(){
		$("table.tablesorter tbody td").tablesorter().css("background-color", "#A6A6A6");
		$("table.tablesorter tbody tr.odd td").tablesorter().css("background-color", "#808080");
		$("#varTable.tablesorter tbody tr.SBF_tr td").css("background-color", "yellow");
	});
	$("#g_GameObjectManager").click(function(){
		$("table.tablesorter tbody td").tablesorter().css("background-color", "#A6A6A6");
		$("table.tablesorter tbody tr.odd td").tablesorter().css("background-color", "#808080");
		$("#varTable.tablesorter tbody tr.g_GOM_tr td").css("background-color", "yellow");
	});
	$("#g_ApplicationManager").click(function(){
		$("table.tablesorter tbody td").tablesorter().css("background-color", "#A6A6A6");
		$("table.tablesorter tbody tr.odd td").tablesorter().css("background-color", "#808080");
		$("#varTable.tablesorter tbody tr.g_AM_tr td").css("background-color", "yellow");
	});
	$("#g_ResourceManager").click(function(){
		$("table.tablesorter tbody td").tablesorter().css("background-color", "#A6A6A6");
		$("table.tablesorter tbody tr.odd td").tablesorter().css("background-color", "#808080");
		$("#varTable.tablesorter tbody tr.g_RM_tr td").css("background-color", "yellow");
	});
	$("#g_score").click(function(){
		$("table.tablesorter tbody td").tablesorter().css("background-color", "#A6A6A6");
		$("table.tablesorter tbody tr.odd td").tablesorter().css("background-color", "#808080");
		$("#varTable.tablesorter tbody tr.g_score_tr td").css("background-color", "yellow");
	});
	$("#g_player").click(function(){
		$("table.tablesorter tbody td").tablesorter().css("background-color", "#A6A6A6");
		$("table.tablesorter tbody tr.odd td").tablesorter().css("background-color", "#808080");
		$("#varTable.tablesorter tbody tr.g_player_tr td").css("background-color", "yellow");
	});

// Tooltip
	// FPS
	$("#FPS_dec").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#FPS_ini").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#FPS_used1").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#FPS_used2").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    
	// SECONDS_BETWEEN_FRAMES
    $("#SBF_dec").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#SBF_ini").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#SBF_used").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    
	// g_GameObjectManager
    $("g_GOM_dec").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_GOM_ini").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_GOM_used1").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_GOM_used2").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_GOM_used3").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_GOM_used4").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });

	// g_ApplicationManager
    $("#g_AM_dec").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_AM_ini").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_AM_used1").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_AM_used2").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_AM_used3").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    
	// g_ResourceManager
    $("#g_RM_dec").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_RM_ini").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_RM_used1").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_RM_used2").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_RM_used3").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_RM_used4").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_RM_used5").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });

	// g_score
    $("#g_score_dec").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_score_ini").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_score_change").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_score_used1").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_score_used2").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    
	// g_player
    $("#g_player_dec").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_player_ini").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_player_used1").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_player_used2").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });
    $("#g_player_used3").tooltip({
	   	track: true,
	    delay: 200,
	    showURL: false,
	    fixPNG: false,
	    showBody: " - ",
	    extraClass: "dialog fancy",
	    top: -15,
	    fade: 200,
    });


});

