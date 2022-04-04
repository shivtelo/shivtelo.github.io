(function($) {
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            } else if(current == contentArray.length) {
                elem.append('<a href="https://www.linkedin.com/company/amazon/">Amazon</a>');
                current++;
            }
        }, 100);
        elem.text(elem.text() + "");
    };

    $.fn.writeTextV2 = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 100);
        elem.text(elem.text() + "");
    };

    $.fn.writeTextV3 = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            } else if(current == 100) {
                $("#bc2").hide();
                current++;
            } else if(current == 150) {
                $("#bc2").show();
                current = 0;
                elem.text("");
            } else {
                current++;
            }
        }, 100);
        elem.text(elem.text() + "");
    };
    
})(jQuery);

$("#intro").writeText("Hi, I am Shiv, a Software Developer at ");

setTimeout(function(){
   $("#bc1").text("");
   $("#hobby").show().writeTextV2("When I am not working,");
}, 6000);

setTimeout(function(){
   $("#hobbies").show();
}, 9000);

setTimeout(function(){
    $("#bc2").show();
    $("#connect").show().writeTextV3("Let's Connect:");
}, 11000);


setTimeout(function(){
    $("#contact").show();
}, 13000);