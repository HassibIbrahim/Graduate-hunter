$(document).ready(function(){


var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	// sections.waypoint({
  //
  //     handler: function(event, direction) {
  //
	// 	   var active_section;
  //
	// 		active_section = $(this);
	// 		if (direction === "up") active_section = active_section.prev();
  //
	// 		var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');
  //
  //        navigation_links.parent().removeClass("current");
	// 		active_link.parent().addClass("current");
  //
	// 	},
	// 	offset: '35%'
  //
	// });

  var coll = document.getElementsByClassName("collapsible");

  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});
