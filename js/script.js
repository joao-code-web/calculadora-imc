function resetInput() {
    $('input[name=peso]').mask('99.9');
    $('input[name=altura]').mask('9.99');
    //aqui estamos formatando os inputs
}

function Imc() {
    $('input[type=submit]').click(()=> {
        var mac = window.document.getElementById('imcNumber');
        var indice = window.document.querySelector('h2');
        var peso = $('input[name=peso]').val();
        var altura = $('input[name=altura]').val();
        var imc = peso / ((altura * altura));

        function veriImc() {
            const pesoBaixo = 18.5;
            const pesoNormal = 24.9;
            const sobrePeso = 29.9;
            const obesidade = 34.9;
            const obesidadeSevera = 39.9;    
        
            //Essa variaveis são para fazer a verificação da saúde//
            
            if(imc < pesoBaixo) {
                mac.innerHTML = 'Abaixo do peso ';
                indice.innerHTML = 'Seu IMC é: ' + imc.toPrecision(4); 
            } else if(imc < pesoNormal) {
                mac.innerHTML = 'Peso adequado ';
                indice.innerHTML = 'Seu IMC é: ' + imc.toPrecision(4);
            } else if(imc < sobrePeso) {
                mac.innerHTML = 'Sobrepeso ';
                indice.innerHTML = 'Seu IMC é: ' + imc.toPrecision(4); // toPrecision esta formatando a variavel imc
            } else if(imc < obesidade) {
                mac.textContent = 'obesidade ';
                indice.innerHTML = 'Seu IMC é: ' + imc.toPrecision(4);
            } else if(imc < obesidadeSevera) {
                mac.innerHTML = 'obesidade Severa ';
                indice.innerHTML = 'Seu IMC é: ' + imc.toPrecision(4);
            } else {
                mac.innerHTML = 'obesidade Morbida ';
                indice.innerHTML = 'Seu IMC é: ' + imc.toPrecision(4);
            }
        }

    veriImc();
    return false; // se não coloca o 'return false' o site vai atualizar quando o usuario clicar no botão
    }); 
}

function openwindow() {
    $('form span').click(function(e){
        e.stopPropagation();
        $('.infor-imc').show(1000);
    });
}

function fecharJanela(e){
    var element1 = $('body');

    element1.click(function(){
        $('.infor-imc').hide(1000);
    });

    $('form span').click(function(e){
        e.stopPropagation();
    });
}

// chamando as funções
openwindow();
fecharJanela();
resetInput();
Imc();
