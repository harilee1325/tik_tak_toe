$(document).ready(function () {


    const BASE_URL = "http://127.0.0.1:5500/";
    const O_NAME = "name of o";
    const X_NAME = "name of x";

    $x_box = $('.x');
    $o_box = $('.o');
    $alert_modal = $('#alert')
    $x_name_bt = $('#x_bt');
    $o_name_bt = $('#o_bt');
    $submit_bt = $('#submit');
    $alert_txt = $('#alert_txt');
    $x_modal = $('#x_name');
    $o_modal = $("#o_name");




    //adding animation to modal
    $($x_box).click(function (e) {
        $($x_modal).show();
        $($x_modal).modal({
            fadeDuration: 100
        });
    });
    $($o_box).click(function (e) {
        $($o_modal).show();
        $($o_modal).modal({
            fadeDuration: 100
        });
    });


    //getting corresponding name and storing them in session
    $($x_name_bt).click(function (e) {

        var x_name = $("#xname").val();
        console.log(x_name);
        sessionStorage.setItem(X_NAME, x_name);
        $x_modal.hide();

    });
    $($o_name_bt).click(function (e) {

        var o_name = $("#oname").val();
        console.log(o_name);
        sessionStorage.setItem(O_NAME, o_name);
        $o_modal.hide();
    });

    //while clicking submit button we have to check for session storage for both users name
    //if both names are entered only we can proceed with the game

    $($submit_bt).click(function () {

        var x_name = sessionStorage.getItem(X_NAME);
        var o_name = sessionStorage.getItem(O_NAME);

        if (x_name) {
            if (o_name) {
                window.location = BASE_URL + "main.html"
            } else {
                $($alert_txt).text("Please enter player O's name");
                $($alert_modal).modal('show');
                $($alert_modal).modal({
                    fadeDuration: 100
                });
            }
        } else {
            $($alert_txt).text("Please enter player X's name");
            $($alert_modal).modal('show');
            $($alert_modal).modal({
                fadeDuration: 100
            });
        }
    });

});