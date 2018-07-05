function initGetUserMediaDemo() {


	var myVideoElement = $('main.gmu-demo video');
	function successCallback(stream) {
		try {
			myVideoElement.attr('src', window.URL.createObjectURL(stream));
			myVideoElement.get(0).onloadedmetadata = function() {
				 myVideoElement.get(0).play();
			};

		}
		catch(e) {
			console.log(e);
		}
	}





	$('main.gmu-demo .size').on('click', function() {
		var $this = $(this).parents('main.gmu-demo');
		if($this.hasClass('open')) {
			if($this.hasClass('fs')) {
				$this.removeClass('fs');
				$this.removeClass('open');
			}
			else {
				$this.addClass('fs');
			}
		}
		else {
			$this.addClass('open');
		}
	});

	$('main.gmu-demo .capture').on('click', function() {
		if(navigator.mediaDevices.getUserMedia) {
			var mediaPromise = navigator.mediaDevices.getUserMedia({video: true, audio:false});
				mediaPromise.then(successCallback,
				function() {

				});

		}
		else {
			navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
			var mediaPromise = navigator.webkitGetUserMedia({video: true, audio:false}, successCallback, function() {
			});
		}
	});
}
