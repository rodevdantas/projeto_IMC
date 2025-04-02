var botao = document.getElementById('btnExecutar');

botao.addEventListener('click', calcularIMC);

function calcularIMC() 
{
    var nomeUsuario = document.getElementById('inputNome').value.trim();
    var alturaUsuario = parseFloat(document.getElementById('inputAltura').value);
    var pesoUsuario = parseFloat(document.getElementById('inputPeso').value);
    var resultado = document.getElementById('exibirResultado');

    if (alturaUsuario >= 100) {
        alturaUsuario /= 100  
    }
    
    if (nomeUsuario !== '' && alturaUsuario !== '' && pesoUsuario !== '')

    {
        var imc = (pesoUsuario / (alturaUsuario * alturaUsuario)).toFixed(1);
        
        var status = '';

        if (imc < 18.5)
        {
            status = 'abaixo do peso adequado.';
        }

        else if (imc < 25)
        {
            status = 'com o peso adequado!';
        }

        else if (imc < 30)
        { 
            status = 'com sobrepeso.';
        }

        else if (imc < 35)
        {
            status = 'com obesidade leve.';
        }

        else if (imc < 40)
        { 
            status = 'obesidade moderada.'
        }

        else 
        {
            status = 'extremamente obeso, balofo. Cuide-se.' 
        }

        resultado.innerHTML = `${nomeUsuario}, seu IMC é <strong> ${imc} </strong> e você está ${status}`;

    }

    else 
    {
        alert('Por favor, preencha todos os campos corretamente.') 
    }




}


 
