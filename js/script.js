$(function () {
    //Parar o submit do formulário
    $("form").submit(function (e) {
        e.preventDefault();
    });

    //Ao clicar em enviar incia as verificações
    $("input[name=enviar]").click(function () {
        //Em caso de erro do telefone em branco
        if ($('input[name=telefone]').val() == "") {
            $(".link").html("<b> Seu telefone não pode estar em branco ");
        } else {

            //Em caso de erro do texto em branco
            if ($("input[name=texto]").val() == "") {
                $(".link").html("<b> Seu texto não pode estar em branco ");
            } else {

                //Strings Telefone e texto
                var tel = $('input[name=telefone]').val();
                var texto = $("input[name=texto]").val();

                //Retorno na tela do link do whatsapp.
                $(".link").html("seu link é  <b class='weblink' >https://api.whatsapp.com/send?phone=" + tel + "&text=" + texto + "</b>" +
                    "<input type='text' value='https://api.whatsapp.com/send?phone=" + tel + "&text=" + texto + "' name='link' >" +
                    " <input type='button' value='copiar' name='copy' class='btn btn-blue' >  " +
                    "<input type='button' value='reset' name='reset' class='btn btn-red' >");


                // Cria copia do whatapplink

                $('input[name=copy]').click(function () {

                    // Seleciona o input
                    $('input[name=link]').select();
                    // Copia o que foi selecionado
                    var ok = document.execCommand("copy");
                    if (ok) {

                        // Remove o copiar e adiciona o copiado!! após 1s
                        $('input[name=copy]').fadeOut(1000, function () {
                            $('.link').html("seu link é  <b class='weblink' >https://api.whatsapp.com/send?phone=" + tel + "&text=" + texto + "</b>" +
                                "<input type='text' value='https://api.whatsapp.com/send?phone=" + tel + "&text=" + texto + "' name='link' >" +
                                "<input type='button' value='Copiado!!!' name='copy' class='btn btn-yelow' >" +
                                "<input type='button' value='reset' name='reset' class='btn btn-red' >");
                            //Remove o coipado!! e adiciona o copiar após 3s
                            $('input[name=copy]').fadeOut(3000, function () {
                                $(".link").html("seu link é  <b class='weblink' >https://api.whatsapp.com/send?phone=" + tel + "&text=" + texto + "</b>" +
                                    "<input type='text' value='https://api.whatsapp.com/send?phone=" + tel + "&text=" + texto + "' name='link' >" +
                                    " <input type='button' value='copiar' name='copy' class='btn btn-blue' >  " +
                                    "<input type='button' value='reset' name='reset' class='btn btn-red' >");
                            });
                        });


                    } else {
                        alert$("error");
                    }

                });

                // Reset

                $('input[name=reset]').click(function () {
                    $(".link").html(" ");
                });


            }
        }
    });


});