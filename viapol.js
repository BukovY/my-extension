var viapol = '<button id="gettitle" style="position: fixed; top: 15vh; left: 5vw; z-index: 50000;background-color: white;padding: 10px 10px;font-size: 16px;color: black;">Заголовок</button><br><button id="getroute" style="position: fixed; top: 25vh; left: 5vw; z-index: 50000;background-color: white;padding: 10px 10px;font-size: 16px;color: black;">Маршрут</button><br><button id="getdescription" style="position: fixed; top: 35vh; left: 5vw; z-index: 50000;background-color: white;padding: 10px 10px;font-size: 16px;color: black;">Описание</button><br><button id="getinclude" style="position: fixed; top: 35vh; left: 5vw; z-index: 50000;background-color: white;padding: 10px 10px;font-size: 16px;color: black;">Включает</button><br><button id="getprogram" style="position: fixed; top: 45vh; left: 5vw; z-index: 50000;background-color: white;padding: 10px 10px;font-size: 16px;color: black;">Программа</button><br><button id="getadd" style="position: fixed; top: 55vh; left: 5vw; z-index: 50000;background-color: white;padding: 10px 10px;font-size: 16px;color: black;">Получить цены</button>'

//var buffer = '<div id="buffer">some</div>'


if (site == 'viapol') {
    jQuery('body').append(viapol)
}


jQuery('#gettitle').click(function() {
    let title = jQuery('.ptitle-imgaboveinside')[0].innerText;
    console.log(title)

    //copyToClipboard(title);
});
jQuery('#getroute').click(function() {
    var route = jQuery('.psubtitle-imgaboveinside').html()
    copyToClipboard(route);
});
jQuery('#getdescription').click(function() {
    var route = jQuery('.ptourshortdescrzagran-imgaboveInside').html().trim()
    copyToClipboard(route);
});
jQuery('#getprogram').click(function() {
    var route = jQuery('.tdap2')
    var tocopy = '';
    for (i of route) {
        tocopy += viapolReplace(i.innerText) + '<br>'
    }

    //console.log(tocopy)
    for (let i of tocopy) {
        console.log(i)
    }
    //copyToClipboard(tocopy);
});

/*
jQuery('#getadd').click(function() {
    var route = jQuery('.pcoststable')[0].innerHTML.split('/r/n');
    console.log(route)
    for (i of route) {
        var stringneed = ''
        stringneed = '<' + String(i);
        i = stringneed;
        console.log('in')
    }
    console.log(route)
        //copyToClipboard(route);
});
*/

function viapolReplace(argument) {
    argument = argument.replace(/["www.etna.by","www.mir­za­mak.by","www.niasvizh.by","www.dudutki.by"]/g, "")
    return argument;
}