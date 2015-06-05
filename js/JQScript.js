$(function () {
	$('body').on('click submit', 'input[type="submit"]', function (e) {		
		var hasError = false;
		$(this).closest('form').find('.required').each(function(){
			if($(this).val().trim().length == 0) {
				$(this).addClass('error');
				$(this).next('.error-icon').show();
				hasError = true;
				e.preventDefault();
			}
		});

		if(!hasError) {
			$(this).closest('form').submit();
		}
	});

	$('body').on('keyup blur', 'input.required', function () {
		if($(this).val().trim().length == 0) {
			$(this).addClass('error');
			$(this).next('.error-icon').show();
		} else {
			$(this).removeClass('error');
			$(this).next('.error-icon').hide();
		}
	})
})