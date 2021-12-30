// $(function () {
//     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })

// $('#enviarCorreo').click(function () {
//     alert("El correo fue enviado correctamente...")
// });

// })

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$('#enviarCorreo').click(function () {
    alert("El correo fue enviado correctamente...")
});

$("h3").click(function(){
    $(this).css("color", 'red');
    });

    $('.card-title').dblclick(function () {
        $('.card-text').toggle();
    });
    