//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.functionOne();
  },
  functionOne: function () {
  }
};
$("document").ready(function () {
  app.init();

  // daterange http://www.daterangepicker.com/
  $(function() {

      var start = moment().subtract(29, 'days');
      var end = moment();

      function cb(start, end) {
          $('#reportrange span').html(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
      }

      $('#reportrange').daterangepicker({
        "locale": {
          "format": "DD/MM/YYYY",
          "separator": " - ",
          "applyLabel": "Aplicar",
          "cancelLabel": "Cancelar",
          "fromLabel": "Desde",
          "toLabel": "Hasta",
          "customRangeLabel": "Definir Rango",
          "weekLabel": "S",
          "daysOfWeek": [
              "Do",
              "Lu",
              "Ma",
              "Mi",
              "Ju",
              "Vi",
              "Sá"
          ],
          "monthNames": [
              "Enero",
              "Febrero",
              "Marzo",
              "Abril",
              "Mayo",
              "Junio",
              "Julio",
              "Agosto",
              "Septiembre",
              "Octubre",
              "Noviembre",
              "Diciembre"
          ],
          "firstDay": 1
      },
          startDate: start,
          endDate: end,
          ranges: {
            'Últimos 30 días': [moment().subtract(29, 'days'), moment()],
            'Último Año': [moment().subtract(1, 'year'), moment()]
          }
      }, cb);

      cb(start, end);

  });

   // inspired by http://jsfiddle.net/arunpjohny/564Lxosz/1/
   $('.table-responsive-stack').find("th").each(function (i) {
      
    $('.table-responsive-stack td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">'+ $(this).text() + ':</span> ');
    $('.table-responsive-stack-thead').hide();
 });

 
 
 
 
$( '.table-responsive-stack' ).each(function() {
var thCount = $(this).find("th").length; 
 var rowGrow = 100 / thCount + '%';
 //console.log(rowGrow);
 $(this).find("th, td").css('flex-basis', rowGrow);   
});
 
 
 
 
function flexTable(){
 if ($(window).width() < 1001) {
    
 $(".table-responsive-stack").each(function (i) {
    $(this).find(".table-responsive-stack-thead").show();
    $(this).find('thead').hide();
 });
    
  
 // window is less than 1001px   
 } else {
    
    
 $(".table-responsive-stack").each(function (i) {
    $(this).find(".table-responsive-stack-thead").hide();
    $(this).find('thead').show();
 });
    
    

 }
// flextable   
}      

flexTable();
 
window.onresize = function(event) {
  flexTable();
};




// ,ultiselect
$(function () {
  $('.selectpicker').selectpicker();
});


var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $('.aside-nav').toggleClass("active");
  });


  /* accordion.js */

function getAccordion(element_id,screen) 
{
    $(window).resize(function () { location.reload(); });

	if ($(window).width() < screen) 
	{
		var concat = '';
		obj_tabs = $( element_id + " li" ).toArray();
		obj_cont = $( ".tab-content .tab-pane" ).toArray();
		jQuery.each( obj_tabs, function( n, val ) 
		{
			concat += '<div id="' + n + '" class="panel panel-default">';
			concat += '<div class="panel-heading" role="tab" id="heading' + n + '">';
			concat += '<h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent=".the-accordion" href="#collapse' + n + '" aria-expanded="false" aria-controls="collapse' + n + '">' + val.innerText + '</a></h4>';
			concat += '</div>';
			concat += '<div id="collapse' + n + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading' + n + '">';
			concat += '<div class="panel-body">' + obj_cont[n].innerHTML + '</div>';
			concat += '</div>';
			concat += '</div>';
		});
		$(".the-accordion").html(concat);
		$(".the-accordion").find('.panel-collapse:first').addClass("in");
		$(".the-accordion").find('.panel-title a:first').attr("aria-expanded","true");
		$(element_id).remove();
		$(".tab-content").remove();
	}	
}
getAccordion(".to-accordion",991);

});