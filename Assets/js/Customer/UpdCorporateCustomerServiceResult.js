

function begin() {
    $('#userMsj').empty();
    var dark = $("#newCorparateCustomerForm");
    $(dark).block({
        message: '<i class="icon-spinner spinner"></i> İşleminiz Yapılıyor...',
        overlayCSS: {
            backgroundColor: '#fff',
            opacity: 0.8,
            cursor: 'wait'
        },
        css: {
            border: 0,
            padding: 0,
            backgroundColor: 'none'
        }
    });
}
function success(result) {
    console.log(result);
    var light = $("#newCorparateCustomerForm");
    var msjStartText = "";
    $(light).unblock();
    if (result.AlertType === "success") {
        msjStartText = "Onay! ";
    }
    if (result.AlertType === "info") {
        msjStartText = "Bilgi! ";
    }
    if (result.AlertType === "warning") {
        msjStartText = "Uyarı! ";
    }
    if (result.AlertType === "danger") {
        msjStartText = "Hata! ";
    }
    $("#userMsj").append("<div class='alert alert-" + result.AlertType + " alert-styled-left alert-dismissible'> <span class='font-weight-semibold'>" + msjStartText + "</span>" + result.ReturnMessage + "</div>");
    
    $("#CustomerNo").val(result.ResultValue.Customer.Id);
    
    

}
function complete(result) {
    var light = $("#newCorparateCustomerForm");
    $(light).unblock();
}
function failure(result) {
    var light = $("#newCorparateCustomerForm");
    $(light).unblock();
    $('#userMsj').empty();
    $("#userMsj").append("<div class='alert alert-danger alert-styled-left alert-dismissible'> <span class='font-weight-semibold'>Hata! </span> İşlem Sırasında Hata alındı. " + result.ReturnMessage + "</div>");
}
