(function($) {

    $( "#registration" ).click(function() {
        const arr = document.querySelectorAll('.inputbox');
        let k = 0;
        for (let i=0; i<arr.length-1; i++) {
            if (arr[i].children[0].value === '' && i!==4) {
                k++;
            }
        }
        if (k===0) {
            $('.regismessage').fadeIn().delay(1500).fadeOut();
        } else {
            $('.failmessage').fadeIn().delay(1500).fadeOut();
        }
    });

})(jQuery);
