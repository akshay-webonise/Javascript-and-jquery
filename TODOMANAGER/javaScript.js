$(document).ready(function(){
   var buttonArray = new Array();
   var buttonArraypop = new Array();
    $(".QTPopup").css('display','none')
	$(".toPopup").click(function(){
		  $(".QTPopup").animate({width: 'show'}, 'slow');
		   
		});
		$(".closeBtn").click(function(){			
			$(".QTPopup").css('display', 'none');
		});

 $("#btnAdd").click(function(){
    if($("#textbox").is(":visible"))
       {    
         var str =$("#textbox").val();
         
         	$('#buttonGroup').append('<input type="label" class=toPopup id='+str+' value=' + str +'>');
		$('#buttonGroup').append('<br>');
         	$('.toPopup').click(function(action){
			$(".QTPopup").animate({width: 'show'}, 'slow');
		   $('#container').html('');
		   if(! buttonArray[action.currentTarget.id]) {
		    	buttonArray[action.currentTarget.id] = new Array();
		   }
		   $('#group').html('');
		   /*for(var i=0; i < buttonArray[action.currentTarget.id].length; i++)
		  {
		 	$('#group').append('<input type="text" value='+buttonArray[action.currentTarget.id][i]+'><br>');  
		 }*/
			
		   
		    
		    
			})
			$(".closeBtn").click(function(){			
			$(".QTPopup").css('display', 'none');
		})
         	$('#textbox').hide();
               
       } 
     else
       {
       	$('#textbox').val('');
         $('#textbox').show();
         
       }  
  });


$("#btnAddpop").click(function(){
    if($("#textboxpop").is(":visible"))
       {    
         var str =$("#textboxpop").val();
         
         	$('#buttonGrouppop').append('<input type="text" class=toPopuppop id='+str+' value=' + str +' disabled>');
		$('#buttonGrouppop').append('<input type="submit" class=edittxt id='+str+' value="edit" >');
		$('#buttonGrouppop').append('<input type="submit" class=deletetxt id='+str+' value="delete" >');
		$('#buttonGrouppop').append('<br>');
		$('.deletetxt').click(function(){
			
			$("#buttonGrouppop").css('display','none');
			//$(".edittxt").css('display','none');
			//$(".deletetxt").css('display','none');
			})
			$(".closeBtn").click(function(){			
			$(".QTPopup").css('display', 'none');
		})
         	$('#textboxpop').hide();
               
       } 
     else
       {
       	$('#textboxpop').val('');
         $('#textboxpop').show();
         
       }  
  });



    
});
