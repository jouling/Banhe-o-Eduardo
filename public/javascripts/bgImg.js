$(function () {
    var cont = 1;
    setInterval(() => {
        cont = cont >= 5 ? 1 : ++cont;

        $('#img-transition').attr('src', `../public/images/bg/bath${cont}.jpg`);
    }, 5000);
});