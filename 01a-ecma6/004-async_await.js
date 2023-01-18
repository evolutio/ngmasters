function promessanormal(){
    const url = 'https://api.githubi.com/repos/freedomsponsors/www.freedomsponsors.org/issues'
    fetch(url).then(response => response.json()).then(data => {
        console.log(data)
    }).catch(err => {
        console.error(err)
    })
}

async function promessaasync(){
    const url = 'https://api.github.com/repos/freedomsponsors/www.freedomsponsors.org/issues'
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.error(err)
    }
}


//nem olha pra ca aqui ainda... :-)
$(function(){
    $('[jsfunctioncontent]').each(function(index, el){
        el.innerHTML = window[el.getAttribute('jsfunctioncontent')]+"";
    });
});
  