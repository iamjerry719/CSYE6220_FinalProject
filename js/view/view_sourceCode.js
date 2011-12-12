$.fx.speeds._default = 1000;
$(function() {
	
	// AnimatedGameObject.js
	$( "#animatedGO_D" ).dialog({
		autoOpen: false,
		show: "easing",
		hide: "easing",
		width: 400,
		height: 200,
		position: [570, 180]
	});

	$( "#animatedGO" ).click(function() {
		$.ajax({
			type: "GET",
			url: "MainMenu/AnimatedGameObject.js",
			success: function(data){
				$("#animatedGO_D pre").text(data);
			}
		});
		$( "#animatedGO_D" ).dialog( "open" );
		return false;
	});
	
	// ApplicationManager.js
	$( "#appMNG_D" ).dialog({
		autoOpen: false,
		show: "easing",
		hide: "easing",
		width: 400,
		height: 200,
		position: [770, 180]
	});

	$( "#appMNG" ).click(function() {
		$.ajax({
			type: "GET",
			url: "MainMenu/ApplicationManager.js",
			success: function(data){
				$("#appMNG_D pre").text(data);
			}
		});
		$( "#appMNG_D" ).dialog( "open" );
		return false;
	});
	
	// GameObject.js
	$( "#gameO_D" ).dialog({
		autoOpen: false,
		show: "easing",
		hide: "easing",
		width: 400,
		height: 200,
		position: [570, 220]
	});

	$( "#gameO" ).click(function() {
		$.ajax({
			type: "GET",
			url: "MainMenu/GameObject.js",
			success: function(data){
				$("#gameO_D pre").text(data);
			}
		});
		$( "#gameO_D" ).dialog( "open" );
		return false;
	});
	
	// GameObjectManager.js
	$( "#gameOMNG_D" ).dialog({
		autoOpen: false,
		show: "easing",
		hide: "easing",
		width: 400,
		height: 200,
		position: [770, 220]
	});

	$( "#gameOMNG" ).click(function() {
		$.ajax({
			type: "GET",
			url: "MainMenu/GameObjectManager.js",
			success: function(data){
				$("#gameOMNG_D pre").text(data);
			}
		});
		$( "#gameOMNG_D" ).dialog( "open" );
		return false;
	});
	
	// Leve.js
	$( "#level_D" ).dialog({
		autoOpen: false,
		show: "easing",
		hide: "easing",
		width: 400,
		height: 200,
		position: [570, 260]
	});

	$( "#level" ).click(function() {
		$.ajax({
			type: "GET",
			url: "MainMenu/Level.js",
			success: function(data){
				$("#level_D pre").text(data);
			}
		});
		$( "#level_D" ).dialog( "open" );
		return false;
	});
	
	//LevelEndPost.js
	$( "#levelEP_D" ).dialog({
		autoOpen: false,
		show: "easing",
		hide: "easing",
		width: 400,
		height: 200,
		position: [770, 260]
	});

	$( "#levelEP" ).click(function() {
		$.ajax({
			type: "GET",
			url: "MainMenu/LevelEndPost.js",
			success: function(data){
				$("#levelEP_D pre").text(data);
			}
		});
		$( "#levelEP_D" ).dialog( "open" );
		return false;
	});
	
	// Main.js
	$( "#main_D" ).dialog({
		autoOpen: false,
		show: "easing",
		hide: "easing",
		width: 400,
		height: 200,
		position: [570, 300]
	});

	$( "#main" ).click(function() {
		$.ajax({
			type: "GET",
			url: "MainMenu/Main.js",
			success: function(data){
				$("#main_D pre").text(data);
			}
		});
		$( "#main_D" ).dialog( "open" );
		return false;
	});
	
	// MainMenu.js
	$( "#mainmenu_D" ).dialog({
		autoOpen: false,
		show: "easing",
		hide: "easing",
		width: 400,
		height: 200,
		position: [770, 300]
	});

	$( "#mainmenu" ).click(function() {
		$.ajax({
			type: "GET",
			url: "MainMenu/MainMenu.js",
			success: function(data){
				$("#mainmenu_D pre").text(data);
			}
		});
		$( "#mainmenu_D" ).dialog( "open" );
		return false;
	});
	
	// Player.js
	$( "#player_D" ).dialog({
		autoOpen: false,
		show: "easing",
		hide: "easing",
		width: 400,
		height: 200,
		position: [570, 340]
	});

	$( "#player" ).click(function() {
		$.ajax({
			type: "GET",
			url: "MainMenu/Player.js",
			success: function(data){
				$("#player_D pre").text(data);
			}
		});
		$( "#player_D" ).dialog( "open" );
		return false;
	});
	
	// Powerup.js
	$( "#powerup_D" ).dialog({
		autoOpen: false,
		show: "easing",
		hide: "easing",
		width: 400,
		height: 200,
		position: [770, 340]
	});

	$( "#powerup" ).click(function() {
		$.ajax({
			type: "GET",
			url: "MainMenu/Powerup.js",
			success: function(data){
				$("#powerup_D pre").text(data);
			}
		});
		$( "#powerup_D" ).dialog( "open" );
		return false;
	});
	
	// Rectangle.js
	$( "#rectangle_D" ).dialog({
		autoOpen: false,
		show: "easing",
		hide: "easing",
		width: 400,
		height: 200,
		position: [570, 380]
	});

	$( "#rectangle" ).click(function() {
		$.ajax({
			type: "GET",
			url: "MainMenu/Rectangle.js",
			success: function(data){
				$("#rectangle_D pre").text(data);
			}
		});
		$( "#rectangle_D" ).dialog( "open" );
		return false;
	});
	
	// RepeatingGameObject.js
	$( "#repeatGO_D" ).dialog({
		autoOpen: false,
		show: "easing",
		hide: "easing",
		width: 400,
		height: 200,
		position: [770, 380]
	});

	$( "#repeatGO" ).click(function() {
		$.ajax({
			type: "GET",
			url: "MainMenu/RepeatingGameObject.js",
			success: function(data){
				$("#repeatGO_D pre").text(data);
			}
		});
		$( "#repeatGO_D" ).dialog( "open" );
		return false;
	});
	
	// ResourceManager.js
	$( "#resourceMNG_D" ).dialog({
		autoOpen: false,
		show: "easing",
		hide: "easing",
		width: 400,
		height: 200,
		position: [570, 420]
	});

	$( "#resourceMNG" ).click(function() {
		$.ajax({
			type: "GET",
			url: "MainMenu/ResourceManager.js",
			success: function(data){
				$("#resourceMNG_D pre").text(data);
			}
		});
		$( "#resourceMNG_D" ).dialog( "open" );
		return false;
	});
	
	// Utils.js
	$( "#utils_D" ).dialog({
		autoOpen: false,
		show: "easing",
		hide: "easing",
		width: 400,
		height: 200,
		position: [770, 420]
	});

	$( "#utils" ).click(function() {
		$.ajax({
			type: "GET",
			url: "MainMenu/Utils.js",
			success: function(data){
				$("#utils_D pre").text(data);
			}
		});
		$( "#utils_D" ).dialog( "open" );
		return false;
	});
	
	// VisualGameObject.js
	$( "#visualGO_D" ).dialog({
		autoOpen: false,
		show: "easing",
		hide: "easing",
		width: 400,
		height: 200,
		position: [570, 460]
	});

	$( "#visualGO" ).click(function() {
		$.ajax({
			type: "GET",
			url: "MainMenu/VisualGameObject.js",
			success: function(data){
				$("#visualGO_D pre").text(data);
			}
		});
		$( "#visualGO_D" ).dialog( "open" );
		return false;
	});
	
});