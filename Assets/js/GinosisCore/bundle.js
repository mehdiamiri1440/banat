const bodyClass = '.navbar-top';




function showloading(loadingtext) {
    var block = $(bodyClass);
    var ldntext = loadingtext;
    //$(block).block({
    //    message: `<i class="icon-spinner4 spinner" style="font-size:20px"></i><span style="font-size:20px"> ${ldntext}</span>`,
    //    fadeIn: 0,
    //    overlayCSS: {
    //        backgroundColor: '#1b2024',
    //        opacity: 0.8,
    //        zIndex: 1200,
    //        cursor: 'wait'
    //    },
    //    css: {
    //        border: 0,
    //        color: '#fff',
    //        zIndex: 1201,
    //        padding: 0,
    //        backgroundColor: 'transparent'
    //    }
    //});
    $.blockUI({
        message: `<i class="icon-spinner4 spinner" style="font-size:20px"></i><span style="font-size:20px"> ${ldntext}</span>`,
        overlayCSS: {
            backgroundColor: '#1b2024',
            opacity: 0.8,
            zIndex: 1200,
            cursor: 'wait'
        },
        css: {
            border: 0,
            color: '#fff',
            padding: 0,
            zIndex: 1201,
            backgroundColor: 'transparent'
        }
    });
}
function endloading() {
    $(bodyClass).unblock();
}



$(function () {
    $('.nmrc').keypress(function (event) {
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    })
});

$(document).ready(function () {
    $('.dpicker').daterangepicker({
        singleDatePicker: true,
        
        locale: {
            "format": "DD/MM/YYYY",
            "separator": " - ",
            "weekStart": 1,
            "applyLabel": "Uygula",
            "cancelLabel": "Vazgeç",
            "fromLabel": "Dan",
            "toLabel": "a",
            "customRangeLabel": "Seç",
            "daysOfWeek": [
                "Pz",
                "Pt",
                "Sl",
                "Çr",
                "Pr",
                "Cm",
                "Ct"
            ],
            "monthNames": [
                "Ocak",
                "Şubat",
                "Mart",
                "Nisan",
                "Mayıs",
                "Haziran",
                "Temmuz",
                "Ağustos",
                "Eylül",
                "Ekim",
                "Kasım",
                "Aralık"
            ],
            "firstDay": 1
        }
       
    });
})
