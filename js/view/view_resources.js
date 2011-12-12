$(function(){
	var ddimgtooltip={

	tiparray:function(){
		var tooltips=[]
		//define each tooltip below: tooltip[inc]=['path_to_image', 'optional desc', optional_CSS_object]
		//For desc parameter, backslash any special characters inside your text such as apotrophes ('). Example: "I\'m the king of the world"
		//For CSS object, follow the syntax: {property1:"cssvalue1", property2:"cssvalue2", etc}

		tooltips[0]=["Resource_View/BlockA0.png", "Here is a red balloon<br /> on a white background"]
		tooltips[1]=["Resource_View/Gem.png", "Here is a duck on a light blue background.", {background:"#DDECFF", width:"200px"}]
		tooltips[2]=["Resource_View/idle_left.png"]
		tooltips[3]=["Resource_View/idle_right.png", {background:"white", font:"bold 12px Arial"}]
		tooltips[4]=["Resource_View/mainmenu.png"]
		tooltips[5]=["Resource_View/portal.png"]
		tooltips[6]=["Resource_View/run_left.png"]
		tooltips[7]=["Resource_View/run_right.png"]
		tooltips[8]=["Resource_View/jsplatformer4_b0.png"]
		tooltips[9]=["Resource_View/jsplatformer4_b1.png"]
		tooltips[10]=["Resource_View/jsplatformer4_b2.png"]
		tooltips[11]=["Resource_View/AnimatedGameObject.jpg", "for more information please click me"]
		tooltips[12]=["Resource_View/jsplatformer12.jpg", "for more information please click me"]
		tooltips[13]=["Resource_View/ApplicationManager.jpg","for more information please click me"]
		tooltips[14]=["Resource_View/GameObject.jpg","for more information please click me"]  
		tooltips[15]=["Resource_View/GameObjectManager.jpg","for more information please click me"]  
		tooltips[16]=["Resource_View/level.jpg","for more information please click me"]  	
		tooltips[17]=["Resource_View/LevelEndPost.jpg","for more information please click me"]  
		tooltips[18]=["Resource_View/Main.jpg","for more information please click me"]
		tooltips[19]=["Resource_View/MainMenu.jpg","for more information please click me"]
		tooltips[20]=["Resource_View/Player.jpg","for more information please click me"]
		tooltips[21]=["Resource_View/Powerup.jpg","for more information please click me"]
		tooltips[22]=["Resource_View/prototype-1.6.0.3.jpg","for more information please click me"]
		tooltips[23]=["Resource_View/Rectangle.jpg","for more information please click me"]
		tooltips[24]=["Resource_View/RepeatingGameObject.jpg","for more information please click me"]
		tooltips[25]=["Resource_View/ResourceManager.jpg","for more information please click me"]
		tooltips[26]=["Resource_View/Utils.jpg","for more information please click me"]
		tooltips[27]=["Resource_View/VisualGameObject.jpg","for more information please click me"]
		
		return tooltips //do not remove/change this line
	}(),

	tooltipoffsets: [20, -30], //additional x and y offset from mouse cursor for tooltips

	//***** NO NEED TO EDIT BEYOND HERE

	tipprefix: 'imgtip', //tooltip ID prefixes

	createtip:function($, tipid, tipinfo){
		if ($('#'+tipid).length==0){ //if this tooltip doesn't exist yet
			return $('<div id="' + tipid + '" class="ddimgtooltip" />').html(
				'<div style="text-align:center"><img src="' + tipinfo[0] + '" /></div>'
				+ ((tipinfo[1])? '<div style="text-align:left; margin-top:5px">'+tipinfo[1]+'</div>' : '')
				)
			.css(tipinfo[2] || {})
			.appendTo(document.body)
		}
		return null
	},

	positiontooltip:function($, $tooltip, e){
		var x=e.pageX+this.tooltipoffsets[0], y=e.pageY+this.tooltipoffsets[1]
		var tipw=$tooltip.outerWidth(), tiph=$tooltip.outerHeight(), 
		x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(ddimgtooltip.tooltipoffsets[0]*2) : x
		y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
		$tooltip.css({left:x, top:y})
	},
	
	showbox:function($, $tooltip, e){
		$tooltip.show()
		this.positiontooltip($, $tooltip, e)
	},

	hidebox:function($, $tooltip){
		$tooltip.hide()
	},


	init:function(targetselector){
		jQuery(document).ready(function($){
			var tiparray=ddimgtooltip.tiparray
			var $targets=$(targetselector)
			if ($targets.length==0)
				return
			var tipids=[]
			$targets.each(function(){
				var $target=$(this)
				$target.attr('rel').match(/\[(\d+)\]/) //match d of attribute rel="imgtip[d]"
				var tipsuffix=parseInt(RegExp.$1) //get d as integer
				var tipid=this._tipid=ddimgtooltip.tipprefix+tipsuffix //construct this tip's ID value and remember it
				var $tooltip=ddimgtooltip.createtip($, tipid, tiparray[tipsuffix])
				$target.mouseenter(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.showbox($, $tooltip, e)
				})
				$target.mouseleave(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.hidebox($, $tooltip)
				})
				$target.mousemove(function(e){
					var $tooltip=$("#"+this._tipid)
					ddimgtooltip.positiontooltip($, $tooltip, e)
				})
				if ($tooltip){ //add mouseenter to this tooltip (only if event hasn't already been added)
					$tooltip.mouseenter(function(){
						ddimgtooltip.hidebox($, $(this))
					})
				}
			})

		}) //end dom ready
	}
}

//ddimgtooltip.init("targetElementSelector")
ddimgtooltip.init("*[rel^=imgtip]")
});
$(function($, d) {
             
                
                $('#one').liteAccordion({
                        onTriggerSlide : function() {
                            this.find('figcaption').fadeOut();
                        },
                        onSlideAnimComplete : function() {    
                            this.find('figcaption').fadeIn();
                        },
                        autoPlay : true,
                        pauseOnHover : true,
                        theme : 'stitch',
                        rounded : true,
                        enumerateSlides : true                  
                }).find('figcaption:first').show();
                $('#two').liteAccordion();
                $('#three').liteAccordion({ theme : 'dark', rounded : true, enumerateSlides : true, firstSlide : 2, linkable : true, easing: 'easeInOutQuart' });
                $('#four').liteAccordion({ theme : 'light', firstSlide : 3, easing: 'easeOutBounce', activateOn: 'mouseover' });  

               

                // Load Plus One Button
                jQuery.getScript('https://apis.google.com/js/plusone.js');
                // Load Tweet Button Script
                jQuery.getScript('https://platform.twitter.com/widgets.js');
                // Load LinkedIn button
                jQuery.getScript('https://platform.linkedin.com/in.js?v=2');                
            })(jQuery, document);

            // analytics
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-17442910-1']);
            _gaq.push(['_trackPageview']);

            (function() {
                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();
