$('.formulario-ia form').on('submit', function(e) {
    e.preventDefault();
  
    var nombre = $('#nombre').val();
    var categoria = $('#categoria').val();
    var url = $('#url').val();
  
    // Aquí puedes hacer lo que quieras con los datos del formulario
    // En este ejemplo, se envían los datos a ilimitadasoportunidades.com
    $.post('http://ilimitadasoportunidades.com', {
      nombre: nombre,
      categoria: categoria,
      url: url
    }, function(data) {
      // Aquí puedes manejar la respuesta del servidor
      console.log(data);
    });
  });
  
