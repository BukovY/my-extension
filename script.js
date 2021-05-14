var readAlso = '<div id="buffer">some</div><br><textarea id="input" placeholder="неразмеченный текст" col="5" style="width:20vw; position: fixed; top: 20vh; left: 5vw; z-index: 50000;background-color: white;padding: 10px 10px;font-size: 16px;color: black;"></textarea><br><button id="readalso" style="position: fixed; top: 5vh; left: 5vw; z-index: 50000;background-color: white;padding: 10px 10px;font-size: 16px;color: black;">Читайте также</button>'
var readAlso2 = '<div id="buffer"></div><button id="readalsovo" style="position: fixed; top: 5vh; left: 5vw; z-index: 50000;background-color: white;padding: 10px 10px;font-size: 16px;color: black;">Get add block</button>'
var getPostButton = '<button id="getpost" style="position: fixed; top: 15vh; left: 5vw; z-index: 50000;background-color: white;padding: 10px 10px;font-size: 16px;color: black;">Get post</button>'
var getSemCloud = '<button id="getSemCloud" style="position: fixed; top: 10vh; left: 5vw; z-index: 50000;background-color: white;padding: 10px 10px;font-size: 16px;color: black;">Получить срез</button>'
var autoalt = '<button id="autoalt" style="position: fixed; top: 5vh; left: 78vw; z-index: 950000;background-color: #008CBA;padding: 10px 10px;font-size: 16px;color: white;">Автоальт</button>'


var url = window.location.href; // получаем текущую страницу
// определяем сайт
var map = ['wp-admin', 'google', 'yandex', 'welcome-belarus', 'epicentr', 'vi-term', 'vash-otdyh', 'viapol', 'elitstroi']


function searchInBase(searchTerm, map) {
    for (i of map) {
        if (searchTerm.indexOf(i) >= 0) {
            return i
        }
    }
    return undefinded;
}
var site = searchInBase(url, map);
// добавляем элементы управления
if (site == 'wp-admin') {
    jQuery('body').append(autoalt)
}


if (site == 'google') {
    jQuery('#result-stats').append(getSemCloud)
}
if (site == 'yandex') {
    jQuery('.serp-navigation').append(getSemCloud)
}
if (site == 'welcome-belarus') {
    jQuery('body').append(readAlso, getPostButton);
}
if (site == 'epicentr') {
    jQuery('body').append(readAlso);
}
if (site == 'vash-otdyh') {
    jQuery('body').append(readAlso2, getPostButton);
}
if (site == 'elitstroi') {
    jQuery('body').append(readAlso);
}
if (site == 'vi-term') {
    jQuery('body').append(readAlso);
}

// кнопка читать также
jQuery('#readalso').click(function() {
    let textArr, reneder, buff;
    reneder = '';
    textArr = jQuery("#input").val().split('\n');
    for (let i of textArr) {
        // если перенос строки то не добавляем к отрисовке
        if (i != '') {
            // gthtlftv d aeyrwb. b tckb rfhnbyrf ghtj,hfpetv rjl
            reneder += redImgCode(i, "#buffer") + '\r\n\r\n';
        }
    }
    if (site == 'welcome-belarus') {
        buff = getArticleWB();
        reneder += buff;
        wbPageReneder("#buffer");
        reneder += jQuery("#buffer").html();
        jQuery("#buffer").html('');
        copyToClipboard(reneder)
    }
    if (site == 'epicentr') {
        buff = getArticleEpicentr();
        reneder += buff;
        lookAlso(epiLink, massUnicalGenerate(5, epiLink.length))
        reneder += jQuery("#buffer").html();
        jQuery("#buffer").html('');
        copyToClipboard(reneder)
    }
    if (site == 'vi-term') {
        buff = getArticleViTerm();
        reneder += buff;
        lookAlso(viTermLink, massUnicalGenerate(5, viTermLink.length))
        reneder += jQuery("#buffer").html();
        jQuery("#buffer").html('');
        copyToClipboard(reneder)
    }
    if (site == 'elitstroi') {
        lookAlso(elitstroiLink, massUnicalGenerate(5, elitstroiLink.length))
        reneder += jQuery("#buffer").html();
        jQuery("#buffer").html('');
        copyToClipboard(reneder);
    }
});
// сформировать дополнительный блок для ваш отдых
jQuery('#readalsovo').click(function() {
    if (site == 'vash-otdyh') {
        var reneder = '';
        buff = getArticleVashOtdyh();
        reneder += buff;
        lookAlso(voLink, massUnicalGenerate(5, voLink.length))
        reneder += jQuery("#buffer").html();
        jQuery("#buffer").html('');
        copyToClipboard(reneder);
    }
});

// сформировать пост в соцсети
jQuery('#getpost').click(function() {
    if (site == 'welcome-belarus') {
        var reneder = '';
        reneder += '😃А у нас новая статья: ' + jQuery('h1.elementor-heading-title').text() + '\n▶' + jQuery('.post-views+p').text().substr(0, 120) + '...\n⚡Читайте на сайте: ';
        reneder += window.location.href + '\n⏰Время прочтения: ';
        var min = Math.ceil(jQuery('.elementor-widget-theme-post-content').text().split(" ").length / 200);
        var add = '';
        if (min == 1) {
            add = 'минута'
        }
        if (min == 2 || min == 3 || min == 4) {
            add = 'минуты'
        }
        if (min > 4) {
            add = 'минут'
        }
        reneder += min + add + '\n#вашотдыхбрест #vo_brest\n📌' + jQuery('h1.elementor-heading-title').text() + ' ⚡Читать!'
        copyToClipboard(reneder);
    }
    if (site == 'vash-otdyh') {
        var reneder = '';
        reneder += '😃А у нас новая статья: ' + jQuery('h1').text() + '\n▶' + jQuery('.katalog-item p').text().substr(0, 120) + '...\n⭐Читайте на сайте: ';
        reneder += window.location.href + '\n⏰Время прочтения: ';
        // рассчитаем длинну 
        var min = Math.ceil(jQuery('.katalog-item p').text().split(" ").length / 200);
        var add = '';
        if (min == 1) {
            add = 'минута'
        }
        if (min == 2 || min == 3 || min == 4) {
            add = 'минуты'
        }
        if (min > 4) {
            add = 'минут'
        }
        reneder += min + add + '\n#вашотдыхбрест #vo_brest\n📌' + jQuery('h1').text() + ' ⚡Читать!'
        copyToClipboard(reneder)
    }
});

// кнопка семантического среза поисковой выдачи
jQuery('#getSemCloud').click(function() {
    if (site == 'google') {
        var arrTitle = getTitleGoogle();
        var arrDescription = getDescriptionGoogle();
        var reneder = '<style>TD, TH {padding: 3px;border: 1px solid black;}TABLE {border-collapse: collapse;}</style>';
        reneder += '<textarea id="titleRed" placeholder="неразмеченный текст" col="5" style="width:20vw; background-color: white;padding: 10px 10px;font-size: 16px;color: black;"></textarea><br>'
        reneder += '<button id="copytitle" style="background-color: #008CBA;padding: 10px 10px;font-size: 16px;color: white;">Title в буффер обмена</button>'
        reneder += '<h2>Срез по Title</h2>'
        reneder += wordFreqencyReneder(arrTitle);
        reneder += '<textarea id="descriptionRed" placeholder="неразмеченный текст" col="5" style="width:20vw; background-color: white;padding: 10px 10px;font-size: 16px;color: black;"></textarea><br>'
        reneder += '<button id="copydescription" style="background-color: #008CBA;padding: 10px 10px;font-size: 16px;color: white;">Description в буффер обмена</button>'
        reneder += '<h2>Срез по Description</h2>'
        reneder += wordFreqencyReneder(arrDescription);
        jQuery('#taw').html(reneder)
    }
    if (site == 'yandex') {
        var arrTitle = getTitleYandex();
        var arrDescription = getDescriptionYandex();
        var reneder = '<style>TD, TH {padding: 3px;border: 1px solid black;}TABLE {border-collapse: collapse;}</style>';
        reneder += '<textarea id="titleRed" placeholder="неразмеченный текст" col="5" style="width:20vw; background-color: white;padding: 10px 10px;font-size: 16px;color: black;"></textarea><br>'
        reneder += '<button id="copytitle" style="background-color: #008CBA;padding: 10px 10px;font-size: 16px;color: white;">Title в буффер обмена</button>'
        reneder += '<h2>Срез по Title</h2>'
        reneder += wordFreqencyReneder(arrTitle);
        reneder += '<textarea id="descriptionRed" placeholder="неразмеченный текст" col="5" style="width:20vw; background-color: white;padding: 10px 10px;font-size: 16px;color: black;"></textarea><br>'
        reneder += '<button id="copydescription" style="background-color: #008CBA;padding: 10px 10px;font-size: 16px;color: white;">Description в буффер обмена</button>'
        reneder += '<h2>Срез по Description</h2>'
        reneder += wordFreqencyReneder(arrDescription);
        jQuery('.main__content').html(reneder)
    }
    jQuery('#copytitle').click(function() {
        copyToClipboardOnId('#titleRed')
    });
    jQuery('#copydescription').click(function() {
        copyToClipboardOnId('#descriptionRed')
    });
});



//copyToClipboardOnId(id)

// автоальт
jQuery('#autoalt').click(function() {
    var alt = jQuery('#attachment-details-two-column-title').val();
    jQuery('#attachment-details-two-column-alt-text').val(alt);
});

// все функции сформировать текст для блока смотрите также
function getArticleWB() {
    var array = [];
    var arrRez = [];
    var string = '<h3>Читайте также</h3><ul>';
    // получает заголовки поиска
    $("article h3 a").each(function() {
        array.push(this);
    });
    for (var i of array) {
        arrRez.push([i.href, i.innerText])
    }
    for (var i = 0; i < 5; i++) {
        string += '<li><a href="' + arrRez[i][0] + '">' + arrRez[i][1] + '</a></li>'
    }
    string += '</ul>'
    return string;

}

function getArticleEpicentr() {
    var array = [];
    var arrRez = [];
    var string = '<h3>Читайте также</h3><ul>';
    // получает заголовки поиска
    $("article h3 a").each(function() {
        array.push(this);
    });
    for (var i of array) {
        arrRez.push([i.href, i.innerText])
    }
    for (var i = 0; i < 5; i++) {
        string += '<li><a href="' + arrRez[i][0] + '">' + arrRez[i][1] + '</a></li>'
    }
    string += '</ul>'
    return string;
}

// пока нет вывода статей не обращать внимания, как появится поменять return
function getArticleViTerm() {
    return '<br>Вызов getArticleViTerm()<br>'
    var array = [];
    var arrRez = [];
    var string = '<h3>Читайте также</h3><ul>';
    // получает заголовки поиска
    $("article h3 a").each(function() {
        array.push(this);
    });
    for (var i of array) {
        arrRez.push([i.href, i.innerText])
    }
    for (var i = 0; i < 5; i++) {
        string += '<li><a href="' + arrRez[i][0] + '">' + arrRez[i][1] + '</a></li>'
    }
    string += '</ul>'
    return string;
}

function getArticleVashOtdyh() {
    var array = [];
    var arrRez = [];
    var string = '<h3>Читайте также</h3><ul>';
    // получает заголовки статей
    jQuery("h2 a").each(function() {
        array.push(this);
    });
    // вычлиняем ссылки и заголовки статей
    for (var i of array) {
        arrRez.push([i.href, i.innerHTML])
    }
    // добавляем для отрисовки
    for (var i = 0; i < 5; i++) {
        string += '<li><a href="' + arrRez[i][0] + '">' + arrRez[i][1].replace(/\r?\n/g, "").trim() + '</a></li>'
    }
    string += '</ul>'
    return string;
}


// функции семантического среза для Google
function getTitleGoogle() {
    var array = [];
    // получает заголовки поиска
    $(".g h3 span").each(function() {
        array.push(this.innerText);
    });
    return array;
}

function getDescriptionGoogle() {
    var array = [];
    // получает содержимое поиска
    $(".g div+div div span span").each(function() {
        array.push(this.innerText);
    });
    // срезать 15 т.к по заголовкам другие мусорные идут
    var arrBuff = []
    for (let i = 0; i < 15; i++) {
        arrBuff.push(array[i]);
    }
    return arrBuff;
}

// функции семантического среза для Яндекс
function getTitleYandex() {
    var array = [];
    // получает заголовки поиска
    $("h2 .OrganicTitle-LinkText").each(function() {
        array.push(this.innerText);
    });
    return array;
}

function getDescriptionYandex() {
    var array = [];
    // получает содержимое поиска
    $(".organic__content-wrapper .extended-text__short").each(function() {
        array.push(this.innerText);
    });
    // срезать 15 т.к по заголовкам другие мусорные идут
    var arrBuff = []
    for (let i = 0; i < 15; i++) {
        arrBuff.push(array[i]);
    }
    return arrBuff;
}

// генерирует таблицу семантического среза
// принимает массив строк возвращает срезанную по 3 аргументу таблицу
function wordFreqencyReneder(arr) {
    var reneder = '';
    //все буквы к нижнему регистру
    allWordSplit = arr.join(' ').split(' ');
    var byff = []
    for (let i of allWordSplit) {
        // убираем все лишние символы кроме букв и преобразуем в строчный регистр
        byff.push(i.replace(/[^A-Za-zА-Яа-яЁё]/g, "").toLowerCase());
    }
    allWordSplit = byff;
    // удаляем думбликаты в массиве
    unicalWord = allWordSplit.filter(function(elem, pos) {
        return allWordSplit.indexOf(elem) == pos;
    });
    unicalWordsWithFrq = [];
    for (let i of unicalWord) {
        // i - уникальное значение
        counter = 0;
        for (let k of allWordSplit) {
            if (i == k) {
                counter++
            }
        }
        unicalWordsWithFrq.push([i, counter])
    }
    unicalWordsWithFrq = sortArray2KeyDown(unicalWordsWithFrq)
        // отрисовываем пулы по сайтам
    reneder += '<table><tr><td>Слово</td><td>Количество</td></tr>';
    for (let i of unicalWordsWithFrq) {
        reneder += "<tr><td>" + i[0] + "</td><td>" + i[1] + "</td></tr>";
    }
    reneder += "</table>";
    return reneder;
}

// сортировка по 2 ключу
function sortArray2KeyDown(arr) {
    var getMax = [];
    for (i of arr) {
        getMax.push(i[1])
    }
    buf = [];
    for (let i = Math.max(...getMax); i > 0; i--) {
        // i - цифра от 0 до 101
        for (let k of arr) {
            if (k[1] == i) {
                buf.push(k);
            }
        }
    }
    return buf;
}

// функция копирования в буффер обмена
function copyToClipboard(string) {
    navigator.clipboard.writeText(string)
        .then(() => { alert(`Скопировано!`) })
        .catch((error) => { alert(`Чтото пошло не так! ${error}`) })
}

// функция копирования в буффер обмена по id для среза поисковой выдачи
function copyToClipboardOnId(id) {
    var string = jQuery(id).val()
    navigator.clipboard.writeText(string)
        .then(() => { alert(`Скопировано!`) })
        .catch((error) => { alert(`Чтото пошло не так! ${error}`) })
}