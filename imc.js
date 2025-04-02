var botao = document.getElementById('btnExecutar');

botao.addEventListener('click', calcularIMC);

function calcularIMC() 
{
    var nomeUsuario = document.getElementById('inputNome').value.trim();
    var alturaUsuario = parseFloat(document.getElementById('inputAltura').value);
    var pesoUsuario = parseFloat(document.getElementById('inputPeso').value);
    var resultado = document.getElementById('exibirResultado');

    var imc = (pesoUsuario / (alturaUsuario * alturaUsuario)).toFixed(1);
        
    var status = '';

    if (alturaUsuario >= 3 && alturaUsuario <= 300 ) {
        alturaUsuario /= 100
    } 

    else if (alturaUsuario < 0 || alturaUsuario > 300)
    {    alert("Por favor, insira uma altura válida (em cm ou m).")

    }
    
    if (nomeUsuario !== '' && alturaUsuario !== '' && pesoUsuario !== '') {
        
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


 
