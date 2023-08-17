// variável display recebe o elemento input do tipo texto 
var display = document.querySelector('#display');
// variável botoes recebe todos os elementos input do tipo botão
var botoes = document.querySelectorAll('.botao');

// adiciona um evento de clique para cada botão encontrado
botoes.forEach(function(botao){

    // ao clicar no botão, o valor é exibido no display
    /* botão 'DEL', 'AC' e '=' tem suas respectivas funções, como deletar o último número digitado, limpar o 
    display por completo e calcular operações retornando o resultado*/
    botao.addEventListener('click', function(event) {

        var valorBotao = event.target.value;

        if(valorBotao === 'DEL' ){
            display.value = display.value.slice(0,-1);
        } else if (valorBotao === '='){
            if (display.value === ''){
                return;
            }

            display.value = eval(display.value);
        } else if (valorBotao === 'AC'){
            display.value = ''
        } 
        
        else{
            display.value += valorBotao
        }
    });

});
