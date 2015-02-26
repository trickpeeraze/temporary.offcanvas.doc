hljs.configure({tabReplace: '  '});
hljs.initHighlightingOnLoad();
$(function(){
	// onload event
	$('.getFullHeight').css('min-height',  $(window).height() );
	
	usage = $('.container').offcanvas({
		content: $('#usage_panel'),
		size: '600',
		canvasClass: 'option-panel box-shadow-d1',
		tapToClose: true,
		duration: 200,
		offset: 145,
		onBeforeClose: onOverlayClose
	});
	optionPanel = $('.container').offcanvas({
		content: $('#option_panel'),
		size: '600',
		offset: 145,
		canvasClass: 'option-panel box-shadow-d1',
		tapToClose: true,
		duration: 200,
		onBeforeClose: onOverlayClose
	});
	methodPanel = $('.container').offcanvas({
		content: $('#method_panel'),
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
	downloadPanel = $('.container').offcanvas({
		content: $('#download_panel'),
		size: '260',
		canvasClass: 'option-panel box-shadow-d1',
		position: 'bottom',
		toggleButton: $('#download')
	});
	changelogPanel = $('.container').offcanvas({
		content: $('#changelog_panel'),
		size: '320',
		canvasClass: 'option-panel box-shadow-d1',
		position: 'left',
		toggleButton: $('#changelog')
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
	
});

function groupControlCanvas(canvasGroup, btnGroup){
	$.each(btnGroup, function(i, btn){
		btn.on('click', function(e){
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
function onOverlayClose(){ $('.menu a').removeClass('active'); }

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-48867785-7', 'auto');
  ga('send', 'pageview');

