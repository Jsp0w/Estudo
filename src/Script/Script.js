/* gera os links que ficam no cabeçalho */
function linksCabecalho(){
    const header = document.getElementsByClassName('header-link');
    const header_icon = [new FbIcon('80%','#fff'), new MusicIcon('80%','#fff')]

    for (let i = 0; i < 2; i++) {
        header[i].style.gridColumn = i==0? '2/3':'3/4';
        const header_text = document.createElement('span')
        header_text.append(i==0 ? 'Facebook': 'Playlist')
        header[i].addEventListener('mouseover',function(){header[i].style.filter = 'drop-shadow(0 0 2px #fff8)';header[i].style.cursor = 'pointer';header[i].style.transition = '0.25s';})
        header[i].addEventListener('mouseout',function(){header[i].style.filter = 'drop-shadow(0 0 0px #fff8)';header[i].style.transition = '0.25s'})
        header[i].appendChild(header_icon[i].mother_tag)
        header[i].appendChild(header_text)
    }
}


/* controla as setas do menu principal e não permite que tenham dois menus abertos ao mesmo tempo */
function manipulacaoMenu(menu_icon,activeted){
    if(menu_icon[activeted].direcao == 'botton'){

        menu_icon[activeted].sentido('left')

    }else{

        menu_icon[activeted].sentido('botton')
        
        switch (activeted) {
            case 0:

                for (let i = 0; i < 3; i++) {
                    menu_icon[i+1].sentido('left')
                }
                break;
        
            case 1:

                for (let i = 0; i < 3; i++) {
                    menu_icon[i==0?i:i+1].sentido('left')
                }

                break;

            case 2:

            for (let i = 0; i < 3; i++) {
                menu_icon[i<2?i:i+1].sentido('left')
            }

                break;

            case 3:

            for (let i = 0; i < 3; i++) {
                menu_icon[i].sentido('left')
            }

                break;
        }
    }
}


/* gera as setas do menu prncipal */
function setasMenu(){
    const sub_menu = document.getElementsByClassName('sub-menu')
    var menu_icon = []

    for (let i=0; i < sub_menu.length; i++){
        menu_icon.push(new SetaIcon('0.875em', '#fff','left'))
        sub_menu[i].addEventListener('click',function(){manipulacaoMenu(menu_icon,i)})
        sub_menu[i].appendChild(menu_icon[i].mother_tag)
    }
}


linksCabecalho()
setasMenu()


var newslether = document.getElementsByClassName('link-newslether')

function divAleatoria(texto){
    const noticias = document.createElement('div')
    noticias.style.height = '150px'
    noticias.style.width = '150px'
    noticias.style.display = 'flex'
    noticias.style.flexDirection = 'column'
    noticias.style.alignItems = 'center'
    noticias.style.justifyContent = 'space-between'
    
    const imagens = document.createElement('div')
    imagens.style.height = '125px'
    imagens.style.width = '125px'
    imagens.style.border = '1px solid #000'
    
    noticias.appendChild(imagens)
    noticias.append(texto)
    return noticias
}

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 4; j++) {
        newslether[i].appendChild(divAleatoria(i==0?`Noticia ${j+1}`:`Formação ${j+1}`))
    }
}