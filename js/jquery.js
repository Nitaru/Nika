$(function(){


    $(document).on("click", "button", function (e) { 
        e.preventDefault();
        $("h1").fadeToggle(1000, function(){
            alert('end')
        })
        
    });
})