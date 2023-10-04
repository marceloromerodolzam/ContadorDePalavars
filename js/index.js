document.addEventListener('DOMContentLoaded', function(){
    var txt = document.getElementById('txtInp');
    var btn = document.getElementById('btn');
    var resultado = document.getElementById('resultado');

    btn.addEventListener('click', function(){

        resultado.innerHTML = '';

        //Remove espaços em branco no início e no final
        var texto = txt.value.trim();
        var contador = 0;

        if( texto.length > 0){

            //Divide o texto em palavras usando espaços em branco como delimitadores
            var palavras = texto.split(/\s+/);

            for(var t = 0;t < palavras.length; t++){

                if(palavras[t].length > 0){

                    contador++;
                    
                }
            }
        }
        
        if(texto.length === 0){

            resultado.innerHTML = `DIgite alguma palavra`;

        }else{

            resultado.innerHTML = `Número de palavras: ${contador}`;

        }
        
    });
});