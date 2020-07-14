$(function () {

});

function GetServiceDetailDefault(CMSID) {

    $.ajax({
        type: "POST",
        url: _root + "Default/SingaleRecord",
        data: JSON.stringify({ 'CMSID': CMSID }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {
            $("#ServicesModelTitle").html(result.Title);
            $("#ServicesModelDetail").html(result.Details);
            $("#ServicesDetailModal").modal('show');
        }
    });
}

var HiddenID = 0;
function InsertContactUsDetail() {
    debugger
    if ($("#txtName").val() == "") {
        swal("Error", "Please Enter Name", "error");
        return;
    }
    if ($("#txtEmailId").val() == "") {
        swal("Error", "Please Enter email", "error");
        return;
    }
    if ($("#txtWebsite").val() == "") {
        swal("Error", "Please Enter Wbsite / Mobile Number", "error");
        return;
    }
    if ($("#SubmitContactUs").hasClass("disabled") != true) {
        $("#SubmitContactUs").addClass("disabled");
        var objdata = {
            "ContactID": HiddenID,
            "Name": $("#txtName").val(),
            "Email": $("#txtEmailId").val(),
            "Website": $("#txtWebsite").val(),
            "Address": $("#txtAddress").val(),
            "Subject": $("#ddSubject").val(),
            "Detail": $("#txtMessage").val()
        }
        $.ajax({
            type: "POST",
            url: _root + "ContactUs/InsertContactUs",
            data: JSON.stringify(objdata),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {
                $("#SubmitContactUs").removeClass("disabled");
                reset();
            }
        });
    }
    else {
        swal("Error", "Please Enter Valid Data !", "error");
        $("#SubmitContactUs").removeClass("disabled");
    }
}

function reset() {
    $("#SubmitContactUs").removeClass("disabled");
    $("#SubmitContactUs").val("Submit");
    $("#txtName").val("");
    $("#txtEmailId").val("");
    $("#ddSubject").val("");
    $("#txtWebsite").val("");
    $("#txtMessage").val("");
    $("#txtAddress").val("");
}