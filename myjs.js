 $(document).ready(function() {
 	//sidebar toggle when mouse over
     $("#sidebar").mouseover(function() {
         var width = 100;
         $('#sidebar').width(width + 150);
         $('#sidebar p').show();
         $('#sidebar-arrow').addClass("pl-4");
     });

     //sidebar when mouse out
     $("#sidebar").mouseout(function() {
         $('#sidebar').width(100);
         $('#sidebar').addClass("text-center");
         $('#sidebar p').hide();
         $('#sidebar-arrow').removeClass("pl-4");
     });

     //hiden sidebar
     function hideSidebar(w) {
     	if (w.matches) {
     		$('#sidebar').removeClass("d-flex");
     		$('sidebar').addClass("d-none");
     	}
     }

     // hide sidebar width <= 768 px
     var w = window.matchMedia("(max-width: 768px)");
     hideSidebar(w);
     w.addListener(hideSidebar);
     $("#sidebar-toggler").click(function(){
     	 $('#sidebar').removeClass("d-none");
     	 $('#sidebar').addClass("d-flex");
     	 $("#sidebar").mouseout();
     });

     // close sidebar
     $("#sidebar-close").click(function(){
     	 $('#sidebar').removeClass("d-flex");
     	 $('sidebar').addClass("d-none");
     });
 });