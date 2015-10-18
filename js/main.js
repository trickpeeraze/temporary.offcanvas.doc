/* global window, jQuery, hljs, offcanvas */
(function ($) {

	hljs.configure({tabReplace: '  '});
	hljs.initHighlightingOnLoad();

	$(function(){
		init();
	});
	
	function init () {
	
		$('.getFullHeight').css('min-height',  $(window).height() );

		var usage = new offcanvas('container',{
			content: $('#usage_panel').html(),
			size: '600',
			canvasClass: 'option-panel box-shadow-d1',
			duration: 200,
			offset: 145,
			onBeforeClose: onOverlayClose
		});

		var optionPanel = new offcanvas('container',{
			content: $('#option_panel').html(),
			size: '600',
			offset: 145,
			canvasClass: 'option-panel box-shadow-d1',
			tapToClose: true,
			duration: 200,
			onBeforeClose: onOverlayClose
		});
		var methodPanel = new offcanvas('container',{
			content: $('#method_panel').html(),
			size: '600',
			offset: 145,
			canvasClass: 'option-panel box-shadow-d1',
			tapToClose: true,
			duration: 200,
			onBeforeClose: onOverlayClose
		});

		groupControlCanvas(
			[usage, optionPanel, methodPanel], // canvas group
			[$('#usage'), $('#options'), $('#methods')] // btn group
		);

		var downloadPanel = new offcanvas('container',{
			content: $('#download_panel').html(),
			size: '260',
			canvasClass: 'option-panel box-shadow-d1',
			position: 'bottom',
			toggleButtonSelector: '#download'
		});

		new offcanvas('container',{
			content: $('#changelog_panel').html(),
			size: '320',
			canvasClass: 'option-panel box-shadow-d1',
			position: 'left',
			toggleButtonSelector: '#changelog'
		});

		$('.btn-download').on('click', function(){
			downloadPanel.open();
			$(this).addClass('active');
			return false;
		});
		$('.btn-option').on('click', function(){
			optionPanel.open();
			$('#options').addClass('active');
			return false;
		});
		$('.btn-method').on('click', function(){
			methodPanel.open();
			$('#methods').addClass('active');
			return false;
		});
	
	}

	function groupControlCanvas (canvasGroup, btnGroup) {
		$.each(btnGroup, function (i, btn) {
			btn.on('click', function () {

				if(canvasGroup[i].isClose){
					$.each(canvasGroup, function(i, canvas){
						btnGroup[i].removeClass('active');
						canvas.close();
					});
					btn.addClass('active');
					canvasGroup[i].open();
				} else {
					btn.removeClass('active');
					canvasGroup[i].close();
				}

				return false;
			});
		});
	}

	function onOverlayClose(){
		$('.menu a').removeClass('active');
	}

})(jQuery);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-48867785-7', 'auto');
ga('send', 'pageview');

