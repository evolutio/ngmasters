function defaultparams(){
    function incrementa(x, y=1){
        return x + y
    }

    console.log(incrementa(6))
    console.log(incrementa(6, 10))
}

function resto(){
    function soma(x, y=1, ...z){
        let res = x + y
        for(let i=0; i < z.length; i++){
            res += z[i]
        }
        return res
    }

    console.log(soma(1))
    console.log(soma(1, 2))
    console.log(soma(1, 2, 3, 4, 5))
}

function objattrs(event){
    function clicou({x, y}){
        console.log('Voce clicou na posicao '+x+', ' + y)
    }

    clicou(event)
}

//nem olha pra ca aqui ainda... :-)
$(function(){
  $('[jsfunctioncontent]').each(function(index, el){
    el.innerHTML = window[el.getAttribute('jsfunctioncontent')]+"";
  });
});
