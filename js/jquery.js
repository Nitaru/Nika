$(function() {

   
    
    $('.steps div').click(function(){
         $("#stepsec").find('.steps.active').removeClass('active');
         $("#stepsec").find('.colored').removeClass('colored')
         $(this).next().addClass('colored')
         $(this).parent().addClass('active');
           
          let fin = this.getAttribute('data-fill')

         if (fin == 1) {
             $('.middle').addClass('active2')
             $('.right').removeClass('active3')
         }else if (fin == 2) {
             $('.right').addClass('active3')
             $('.middle').addClass('active2')
         }else{
            $('.middle').removeClass('active2')
            $('.right').removeClass('active3')
         }    
      

          $('.forpar.active').removeClass('active');
          $('.forpar').eq(fin).addClass('active');
    })

    $('.btn-danger1').click(function(){

        $('.colored').removeClass('colored')
        $('.steps.active').prev().children('h5').addClass('colored')
        $('.steps.active').prev().addClass('active')
        $('.forpar.active').prev().addClass('active');
        $('.forpar.active').next().removeClass('active');
        $('.steps.active').next().removeClass('active')     
    })

    $('.btn-danger2').click(function(){
        
        $('.colored').removeClass('colored')
        $('.steps.active').next().children('h5').addClass('colored')
        $('.steps.active').next().addClass('active')
        $('.forpar.active').next().addClass('active');
        $('.forpar.active').prev().removeClass('active');
        $('.steps.active').prev().removeClass('active')     
    })

      
        
        
        
        


























})