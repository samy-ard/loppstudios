(function($) {
	$(document).ready(function() {
		$('.navbar-btn').on('click', function(e) {
			e.preventDefault();
			$('.header').toggleClass('show');
			$('.navbar-icon').toggleClass('hidden');
		});
	});
})(jQuery);