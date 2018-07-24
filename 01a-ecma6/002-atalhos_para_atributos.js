function valorvalor(){
    let x = 10;
    let y = 20;

    let antes_era = {
        a: 1,
        x: x,
        y: y
    };

    let agora_pode = {
        a: 1,
        x,
        y
    }
    console.log(antes_era)
    console.log(agora_pode)
}

function atributofuncao(){
    let saldo = 0;

    let conta_antes = {
        saldo: saldo,
        depositar: function(valor){
            this.saldo += valor
        }
    }

    let conta_depois = {
        saldo,
        depositar(valor) {
            this.saldo += valor
        }
    }

    conta_antes.depositar(50)
    conta_depois.depositar(100)
    console.log(conta_depois)
}

function trespontinhos(){
    let saldo = 0;

    let x = 10;
    let y = 20;
    let z = 100;
    let w = 200;

    let o1 = {
        x: 10, 
        y: 20
    }

    let o2 = {
        x: o1.x,
        y: o1.y,
        z,
        w
    }

    let o3 = {
        z,
        ...o1,
        w
    }

    let o4 = {
        a: 11,
        b: 12,
    }

    let o5 = {
        ...o1,
        ...o4
    }
    console.log(o3)

}


//nem olha pra ca aqui ainda... :-)
$(function(){
  $('[jsfunctioncontent]').each(function(index, el){
    el.innerHTML = window[el.getAttribute('jsfunctioncontent')]+"";
  });
});
