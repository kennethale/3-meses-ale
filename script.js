$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var mensaje = $("#mensaje");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
        mensaje.show();
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
        mensaje.hide();
    }
   
});