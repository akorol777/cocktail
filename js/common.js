$(document).ready(function() {
	// select
	function select() {
		var el = $('.js-select');
		var el_title = el.children("span");
		var item = el.find('li');
		var input = el.find(".js-select-input");
		var el_text = el.find(".js-select-text");
		var checkbox = el.find(".checkbox");
		var list = el.find('.js-select-drop');
		el_title.click(function(event){
			if ($(this).parent().hasClass('is-open')) {
				$(this).parent().removeClass('is-open');
			}
			else {
				el.removeClass('is-open');
				$(this).parent().addClass('is-open');
			};
			event.stopPropagation();
		});
		checkbox.click(function(event){
			event.stopPropagation();
		});
		item.bind("click",function(){
			$(this).toggleClass("is-selected");
			var text = $(this).text();
			var id = $(this).attr("data-id");
			$(this).parents(".js-select").find(".js-select-text").text(text);
			// BEGIN FOR token.html right select; two-point;
			if (id == 1) {
				$(this).parents(".tokens__search").find(".js-value").val("הזן מספר כרטיס אשראי.");
			}
			else {
				$(this).parents(".tokens__search").find(".js-value").val("הזן מספר טוקן");
			}
			// END
			$(this).parents(".js-select").find(".js-select-input").val(id);
			// BEGIN FOR settings.html select theme
			$(this).parents(".js-select").find(".js-theme").text(text);
			if (id == 1) {
				$(this).parents(".invoice__block").removeClass("settings-transaction");
				$(this).parents(".settrans__def").find(".default-style").addClass("is-open");
				$(this).parents(".settrans__def").find(".custom-style").removeClass("is-open");
				$(this).parents(".settrans__def").find(".iframe-style").removeClass("is-open");
				$(this).parents(".settrans").find(".js-search1").show();
				$(this).parents(".settrans__def").find(".notebook").show();
			}
			if (id == 2) {
				$(this).parents(".invoice__block").addClass("settings-transaction");
				$(this).parents(".settrans__def").find(".users__form-label").removeClass("users__form-label_mod2");
				$(this).parents(".settrans__def").find(".style-wrap").addClass("is-custom");
				$(this).parents(".settrans").find(".js-search1").hide();
				$(this).parents(".settrans__def").find(".custom-style").addClass("is-open");
				$(this).parents(".settrans__def").find(".default-style").removeClass("is-open");
				$(this).parents(".settrans__def").find(".iframe-style").removeClass("is-open");
				$(this).parents(".settrans__def").find(".notebook").hide();
			}
			if (id == 3) {
				$(this).parents(".invoice__block").removeClass("settings-transaction");
				$(this).parents(".settrans__def").find(".iframe-style").addClass("is-open");
				$(this).parents(".settrans__def").find(".custom-style").removeClass("is-open");
				$(this).parents(".settrans__def").find(".default-style").removeClass("is-open");
				$(this).parents(".settrans").find(".js-search1").show();
				$(this).parents(".settrans__def").find(".notebook").show();
			}
			// END
	});
	};
	select();
	$(document).click(function() {
		$('.js-select').removeClass('is-open');
	});
});