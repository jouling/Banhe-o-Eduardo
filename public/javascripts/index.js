$(function () {
    ['collapseOne', 'collapseTwo', 'collapseThree', 'collapseFour'].forEach((item, index) => {
        $(`#${item}`).on('show.bs.collapse', () => {
            $('.collapse-icon').each(function (i) {
                if (i == index) {
                    $(this).html('&#8722;');
                }
            });
        });

        $(`#${item}`).on('hide.bs.collapse', () => {
            $('.collapse-icon').each(function (i) {
                if (i == index) {
                    $(this).html('+');
                }
            });
        });
    });

    var cont = 1;
    setInterval(() => {
        cont = cont == 1 ? 2 : 1;
        $('body').css('background-image', `url("../public/images/bg/edward${cont}.jpeg")`);
    }, 5000)
});
