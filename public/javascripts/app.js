$().ready(function() {
    $.getJSON("api/v1/schools", function(data) {
        var str = '';
        $.each(data, function(key, val) {
            str += `<div class="media">  
            <div class="media-body">
             <h4 class="media-heading">${val.Name}</h4> 
             <p>${val.Adress}</p>
             <p>${val.Contacts}</p>
            </div>
          </div>`;
        });
        $("div.container").first().html(str);
        console.log(str);
    }).fail(function() {
        $("<h1/>", {
            "class": "text-center",
            html: err
        }).appendTo("div.container");
    });
});