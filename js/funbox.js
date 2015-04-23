$( document ).ready(function() {


var text = 'Чего сидишь? Порадуй котэ, <a href="#" class="buy-link">купи.</a>';


function clickEvent(item){
		if(item.closest("li").hasClass("disabled")){
			return;
		}else{

  			item.closest("li").toggleClass("selected");

  			if(item.closest("li").hasClass("selected")){

  				var newText = item.closest("li").find(".bottom-text-change").data("text");
  				item.addClass("first-hover");
  				item.removeClass("hover");
  				item.closest("li").find(".bottom-text-change").html(newText);

  			}else{
  				item.closest("li").find(".bottom-text-change").html(text);
  				item.closest("li").find(".feed-title").html(item.closest("li").find(".feed-title").data("title"));
  			}
  		}
}

	$(".list-feed ").delegate( ".item-feed", "click", function() {

		clickEvent($(this));
	});

	$(".list-feed ").delegate( ".buy-link", "click", function(e) {
		e.preventDefault();

		clickEvent($(this));
	});


///////////////////////////////////////////////////////////////////////////

$(".list-feed .item-feed").hover(
  function() {

    	if($(this).hasClass("first-hover")){
				return;
		}else{
			$(this).addClass("hover");
				if($( this ).parent("li").hasClass("selected")){
					$(this).find(".feed-title").html('<span class="pink-text">Котэ не одобряет?</span>');
				}
		}
  }, function() {
    $(this).removeClass("hover first-hover");
    $(this).find(".feed-title").html($(this).find(".feed-title").data("title"));
  }
);
/////////////////////////////////////////////////////////////////////////////////
$(".list-feed li.disabled").each(function( index ) {

 var food = $( this).find(".feed-extra-text").data("feed");

 $( this ).find(".bottom-text-change").removeClass("white-text");
 $( this ).find(".bottom-text-change").addClass("yellow-text");
 $( this ).find(".bottom-text-change").text("Печалька, " + food + " закончился.");

});


});