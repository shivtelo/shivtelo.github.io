(function($) {
    $.fn.renderTextAsync = function(content, textToAppend) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            } else if(current == contentArray.length && textToAppend != null) {
                elem.append(textToAppend);
                current++;
            }
        }, 100);
        elem.text(elem.text() + "");
    };



    $.fn.renderTextAsyncV2 = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            } else if(current == 100) {
                $("#bc2").text('\u00a0');
                current++;
            } else if(current == 150) {
                $("#bc2").text('|');
                current = 0;
                elem.text("");
            } else {
                current++;
            }
        }, 100);
        elem.text(elem.text() + "");
    };

})(jQuery);

$("#intro").renderTextAsync("Hi, I am Shiv, a Software Developer at ", "<a href=\"https://www.linkedin.com/company/amazon/\">Amazon</a>");

setTimeout(function(){
   $("#bc1").text('\u00a0');
   $("#hobby-title-placeholder").show().renderTextAsync("When I am not working,", null);
}, 6000); // 0+6 s

setTimeout(function(){
   $("#hobby-list").show();
}, 9000); // 0+6+3 s

setTimeout(function(){
    $("#bc2").show();
    $("#connect-title-placeholder").show().renderTextAsyncV2("Let's Connect:");
}, 11000); // 0+6+3+2 s


setTimeout(function(){
    $("#contact").show();
}, 13000); // 0+6+3+2+2 s
