$(document).ready(function () {

    $alert_txt = $('#alert_txt');
    $alert_modal = $('#alert')
    const O_NAME = "name of o";
    const X_NAME = "name of x";


    $(".tictactoe").children().mouseover(function () {


        $(this).css({ "opacity": '10' });


    });

    $(".tictactoe").children().mouseout(function () {

        $(this).css('opacity', '0.5');


    });


    $(".tictactoe").children().click(function () {

        var myClass = "." + this.className;
        $(this).data('clicked', true);
        var imageUrl = "img/image-o.png";

        $(".tictactoe").children().each(function () {


            if (!$(this).data('clicked')) {


                if ($(this).hasClass('X')) {
                    $(this).removeClass('X').addClass('O');
                }
                else if ($(this).hasClass('O')) {
                    $(this).removeClass('O').addClass('X');
                }


            }

        });
        $(this).css({ "opacity": '10' });
        $(this).off('mouseout');
        $(this).off('click');

        //call function to check win
        getCheck();

    });


    function getCheck() {

        // Checking for X Start	

        // Horizontal Check for X
        if (($(".box1").hasClass('X')) && ($(".box1").data('clicked'))) {

            if (($(".box2").hasClass('X')) && ($(".box2").data('clicked'))) {

                if (($(".box3").hasClass('X')) && ($(".box3").data('clicked'))) {

                    alert_show(sessionStorage.getItem(X_NAME))
                }
            }

        }
        if (($(".box4").hasClass('X')) && ($(".box4").data('clicked'))) {

            if (($(".box5").hasClass('X')) && ($(".box5").data('clicked'))) {

                if (($(".box6").hasClass('X')) && ($(".box6").data('clicked'))) {

                    alert_show(sessionStorage.getItem(X_NAME))
                }
            }

        }
        if (($(".box7").hasClass('X')) && ($(".box7").data('clicked'))) {

            if (($(".box8").hasClass('X')) && ($(".box8").data('clicked'))) {

                if (($(".box9").hasClass('X')) && ($(".box9").data('clicked'))) {

                    alert_show(sessionStorage.getItem(X_NAME))
                }
            }

        }

        //Vertical Check for X

        if (($(".box1").hasClass('X')) && ($(".box1").data('clicked'))) {

            if (($(".box4").hasClass('X')) && ($(".box4").data('clicked'))) {

                if (($(".box7").hasClass('X')) && ($(".box7").data('clicked'))) {

                    alert_show(sessionStorage.getItem(X_NAME))
                }
            }

        }
        if (($(".box2").hasClass('X')) && ($(".box2").data('clicked'))) {

            if (($(".box5").hasClass('X')) && ($(".box5").data('clicked'))) {

                if (($(".box8").hasClass('X')) && ($(".box8").data('clicked'))) {

                    alert_show(sessionStorage.getItem(X_NAME))
                }
            }

        }
        if (($(".box3").hasClass('X')) && ($(".box3").data('clicked'))) {

            if (($(".box6").hasClass('X')) && ($(".box6").data('clicked'))) {

                if (($(".box9").hasClass('X')) && ($(".box9").data('clicked'))) {

                    alert_show(sessionStorage.getItem(X_NAME))
                }
            }

        }

        // Diagonal for X

        if (($(".box1").hasClass('X')) && ($(".box1").data('clicked'))) {

            if (($(".box5").hasClass('X')) && ($(".box5").data('clicked'))) {

                if (($(".box9").hasClass('X')) && ($(".box9").data('clicked'))) {

                    alert_show(sessionStorage.getItem(X_NAME))
                }
            }

        }
        if (($(".box3").hasClass('X')) && ($(".box3").data('clicked'))) {

            if (($(".box5").hasClass('X')) && ($(".box5").data('clicked'))) {

                if (($(".box7").hasClass('X')) && ($(".box7").data('clicked'))) {

                    alert_show(sessionStorage.getItem(X_NAME))
                }
            }

        }

        // Checking for X End	




        // Checking for O Start	

        // Horizontal Check for O
        if (($(".box1").hasClass('O')) && ($(".box1").data('clicked'))) {

            if (($(".box2").hasClass('O')) && ($(".box2").data('clicked'))) {

                if (($(".box3").hasClass('O')) && ($(".box3").data('clicked'))) {

                    alert_show(sessionStorage.getItem(O_NAME))
                }
            }

        }
        if (($(".box4").hasClass('O')) && ($(".box4").data('clicked'))) {

            if (($(".box5").hasClass('O')) && ($(".box5").data('clicked'))) {

                if (($(".box6").hasClass('O')) && ($(".box6").data('clicked'))) {

                    alert_show(sessionStorage.getItem(O_NAME))
                }
            }

        }
        if (($(".box7").hasClass('O')) && ($(".box7").data('clicked'))) {

            if (($(".box8").hasClass('O')) && ($(".box8").data('clicked'))) {

                if (($(".box9").hasClass('O')) && ($(".box9").data('clicked'))) {

                    alert_show(sessionStorage.getItem(O_NAME))
                }
            }

        }

        //Vertical Check for X

        if (($(".box1").hasClass('O')) && ($(".box1").data('clicked'))) {

            if (($(".box4").hasClass('O')) && ($(".box4").data('clicked'))) {

                if (($(".box7").hasClass('O')) && ($(".box7").data('clicked'))) {

                    alert_show(sessionStorage.getItem(O_NAME))
                }
            }

        }
        if (($(".box2").hasClass('O')) && ($(".box2").data('clicked'))) {

            if (($(".box5").hasClass('O')) && ($(".box5").data('clicked'))) {

                if (($(".box8").hasClass('O')) && ($(".box8").data('clicked'))) {

                    alert_show(sessionStorage.getItem(O_NAME))
                }
            }

        }
        if (($(".box3").hasClass('O')) && ($(".box3").data('clicked'))) {

            if (($(".box6").hasClass('O')) && ($(".box6").data('clicked'))) {

                if (($(".box9").hasClass('O')) && ($(".box9").data('clicked'))) {

                    alert_show(sessionStorage.getItem(O_NAME))
                }
            }

        }

        // Diagonal for X

        if (($(".box1").hasClass('O')) && ($(".box1").data('clicked'))) {

            if (($(".box5").hasClass('O')) && ($(".box5").data('clicked'))) {

                if (($(".box9").hasClass('O')) && ($(".box9").data('clicked'))) {

                    alert_show(sessionStorage.getItem(O_NAME))
                }
            }

        }
        if (($(".box3").hasClass('O')) && ($(".box3").data('clicked'))) {

            if (($(".box5").hasClass('O')) && ($(".box5").data('clicked'))) {

                if (($(".box7").hasClass('O')) && ($(".box7").data('clicked'))) {

                    alert_show(sessionStorage.getItem(O_NAME))
                }
            }

        }

        // Checking for O End	


        function alert_show(param) {

            $($alert_txt).text(`Congratulations ${param} is the winner`);
            $($alert_modal).modal('show');
            $($alert_modal).modal({
                fadeDuration: 100
            });

            set_to_default();

        }

        function set_to_default() {

            $(".tictactoe").children().each(function () {
                $(this).off('mouseout');
                $(this).off('click');

            });

        }






    }


});











