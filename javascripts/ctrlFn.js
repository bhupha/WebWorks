
console.log('filecalled')

	
	for(var i=1; i<=6; i++){
		var knowBtn = "#know" + i;
		$(knowBtn).hide()

		$('.imgOver'+i).mouseover(function(){
			var str = $(this).children(0).attr('src')
			console.log('str ' + $(this).children(0).attr('src') )
			str = str.substring(str.length, str.length-5)
			str = str.charAt(0)
			$("#" + "know" + str).show();	
		})
		$('.row4_imgBlock').mouseout(function(){
			var str = $(this).attr('src')
			str = str.substring(str.length, str.length-5)
			str = str.charAt(0)
			$("#" + "know" + str).hide();	
		})
	}

	$('#menuBtn').click(function(){
		console.log('>> ' + $('#verticalMenu').css('display'))
		if($('#verticalMenu').css('display') == 'none'){
			$('#verticalMenu').slideDown()
		}else if($('#verticalMenu').css('display') == 'block'){
			$('#verticalMenu').slideUp()
		}
	})

	$( window ).resize(function() {
  		$('#verticalMenu').css('display', 'none')
	});
	$(window).scroll(function() {
  		$('#verticalMenu').css('display', 'none')
	});


