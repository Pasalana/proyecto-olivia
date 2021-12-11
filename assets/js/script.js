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

$("h3").dblclick(function(){
    $(this).css("color", 'red');
    });

    $('.card-title').click(function () {
        $('.card-text').toggle();
    });
    