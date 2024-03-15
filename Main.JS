const botoes =queryeSelectorAll (".botao");
for(let i=0; i< botoes.lenght; i++){
    botoes[i].onclick= function(){
        for (j=0; j< botoes.lenght; j++){
            botoes[j].classlist.remove("ativo");
        }
        botoes[i].classlist.add("ativo")
    }
}