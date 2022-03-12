function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')   
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //crinça
                img.setAttribute('src', 'img/bebe.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/adolecente.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/jovem.png')
            }
            else if (idade < 60) {
                //Idoso
                img.setAttribute('src', 'img/idoso.png')
            }else if(idade > 60) {
                img.setAttribute('src', 'img/velho.png')
            }



        }else if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade >=0 && idade < 10) {
                //crinça
                img.setAttribute('src', 'img/beba.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/menina.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/moça.png')
            }
            else if (idade < 60) {
                //Idoso
                img.setAttribute('src', 'img/idoso.png')
            }else if(idade > 60) {
                img.setAttribute('src', 'img/senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}