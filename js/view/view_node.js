$.fx.speeds._default = 1000;

$(function(){
	$("#loadMainMenu").click(function(){
		$.getJSON('files/MainMenu_1.json', function(data){
			$.each(data.nodes, function(i, item){
				var id = item.txt;
				$("#nodes").append("<div id='" + id + "' class='node'><p class='title'>"
									+ id + "</p><hr><input type='button' id='title"
									+ id + "' value='Code' class='viewCode'/>"
									+ ""
									+ "</div>");
				if( id == 'jsplatformer12'){
					var fileType = '.html';
				}
				else {
					var fileType = '.js';
				}
				$("#title" + id + "_D").dialog({
					autoOpen: false,
					show: "easing",
					hide: "easing",
					width: 600,
					height: 500,
				});
				$( "#title" + id ).live("click", function() {
					$.ajax({
						type: "GET",
						url: "MainMenu/" + id + fileType,
						success: function(data){
							$("#title" + id + "_D pre").text(data);
						}
					});
					$( "#title" + id + "_D" ).dialog( "open" );
					return false;
				});
				$("#" + id).draggable({
					revert: false,
					opacity: 0.50,
				});
			});
			$(".node span").append(function(){
				$.getJSON('files/MainMenu.json', function(data){
					$.each(data.nodes, function(i, item){
						var code = item.txt;
						alert(code);
						$("#nodes").append("<pre>" + code + "</pre>");
					});
				});
			});
		});
		$("#loadMainMenu").remove();
	});
	
});
