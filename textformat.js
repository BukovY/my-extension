function redImgCode(i, area) {
    let alt;
    jQuery(area).html(i);
    let cons = jQuery(area);
    // если найден элемент картинки
    if (cons.html().indexOf("<img") != -1) {
        // удаляем класс
        cons.children().removeAttr('class');
        // получаем текс альта
        alt = cons.children().attr("alt");
        // модернизируем размеры картинки
        cons.children().attr("width", '100%');
        cons.children().attr("height", 'auto');
        // дописываем описание
        cons.append('\r\n<div class="imgalt">' + alt + '</div>')
    }
    return jQuery("#buffer").html();
}
/*
делаем дописыванеи кода рандомом из массива для WB + инпуты из похожих статей
*/
// формируем блок читайте также из внесенных данных
function getArticle(buffer) {
    // проверяем не пустые ли, если не пустые дописываем к ренедеру
    // затираем буффер
    let str = '';

    // дописываем буффер
    if (jQuery('#inputReadAlso').val()) {
        str += jQuery('#inputReadAlso').val();


    } else {
        str = str + '<h3>Читайте также</h3>\r\n<ul>';
        for (let i = 1; i < 6; i++) {
            a = '#article' + i;
            b = '#link' + i;
            if (jQuery(a).val() != '' && jQuery(b).val() != '') {
                str = str + '\r\n<li><a href="' + jQuery(b).val() + '">' + jQuery(a).val() + '</a></li>';
            }
        }
        str = str + '\r\n</ul>\r\n';

    }

    jQuery(buffer).html(str);
}

// генерируем случайное число для блоков смотрите также. принимает длинну массива
function randomInteger(max) {
    // случайное число от min до (max)
    let rand = 0 + Math.random() * (max);
    return Math.floor(rand);
}

function lookAlso(arrLink, arrSort) {
    let str = '';
    str = str + '<h3>Смотрите также</h3>\r\n<ul>';
    for (i of arrSort) {
        str = str + '\r\n<li><a href="' + arrLink[i][0] + '">' + arrLink[i][1] + '</a></li>';
    }
    str = str + '\r\n</ul>\r\n';
    jQuery("#buffer").html(str);
}
// формирует ссылки на страницы в буффере
function wbPageReneder(buffer) {
    let str = '';
    str = str + '<h3>Смотрите также</h3>\r\n<ul>';

    let random = randomInteger(wbTourAgregated.length);
    str = str + '\r\n<li><a href="' + wbTourAgregated[random][0] + '">' + wbTourAgregated[random][1] + '</a></li>';

    random = randomInteger(wbTour.length);
    str = str + '\r\n<li><a href="' + wbTour[random][0] + '">' + wbTour[random][1] + '</a></li>';

    random = randomInteger(wbExcursion.length);
    str = str + '\r\n<li><a href="' + wbExcursion[random][0] + '">' + wbExcursion[random][1] + '</a></li>';

    random = randomInteger(wbObject.length);
    str = str + '\r\n<li><a href="' + wbObject[random][0] + '">' + wbObject[random][1] + '</a></li>';

    random = randomInteger(wbInfo.length);
    str = str + '\r\n<li><a href="' + wbInfo[random][0] + '">' + wbInfo[random][1] + '</a></li>\r\n</ul>\r\n';
    jQuery(buffer).html(str);
}
// принимает количество нужных ссылок и максимальную длинну массива, возвращает массив значений по индексам которых потом нужно отрисовать ссылки
function massUnicalGenerate(number, length) {
    arr = []
    count = 0;
    random = -1;
    for (let i = 0; i < number; i++) {
        countNeed = i + 1;
        while (count != countNeed) {
            random = randomInteger(length);
            if (arr.indexOf(random) == -1) {
                arr.push(random);
                count++;
            }
        }
    }
    return arr;
}