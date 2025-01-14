export class TopMain extends HTMLElement{
    constructor(){
        super();
        this.build();
    };

    /* constroi a tag top-main */
    build(){
        const shadow = this.attachShadow({mode:'open'});
        shadow.adoptedStyleSheets = [this.styles()];

        const div = document.createElement('div')

        /* logo da tag */
        const title = document.createElement('h1')
        title.append('Sua logo')
        div.appendChild(title)

        /* menu da tag */
        const menu = document.createElement('menu')
        menu.appendChild(this.menu(4))

        shadow.appendChild(div)
        shadow.appendChild(menu)
    };

    /* css do componente */
    styles(){
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(`
            *{
                border: 0;
                padding: 0;
                margin: 0;
            }

            :host{
                display: flex;
                flex-direction: column;
                gap: 15px
            }

            div{
                width: 100%;
                font-size: 4em;
                justify-items: center;
                color: #fd0;
                background-image: linear-gradient(#048,#fff 50px);
            }

            h1{
                width: 80%;
                text-shadow: 0 0 1rem #000
            }
            
            menu{
                justify-items: center;
            }

            ul{
                width: 80%;
                height: 1.5em;
                display: flex;
                justify-content: center;
                align-items:center;
                list-style: none;
                gap: 40px;
                padding: 5px 0 5px 0;
                font-size: 2em;
                border-radius: calc(0.25em + 10px);
                color: #fff;
                background: #048;
            }
            
            li{
                width: 14%;
                display: flex;
                justify-content: center;
                align-items:center;
                transition: 0.5s
            }

            li:hover{
                cursor: pointer;
                filter: drop-shadow(0 0 0.25rem #fff);
                /*text-shadow: 0 0 0.25rem #fff;*/
            }

        `);
        return sheet;
    };

    /* função que cria os itens do menu */
    menu(items){
        const un_lista = document.createElement('ul')
        
        for(let i=0; i<items;i++){
            const lista_item = document.createElement('li')
            // lista_item.addEventListener('mouseover',function(){activetMenu(i)})

            const icone = document.createElement('ion-icon')
            icone.setAttribute('name', 'caret-back')

            lista_item.append(`Menu ${i}`)
            lista_item.appendChild(icone)
            un_lista.appendChild(lista_item)
        }
        
        return un_lista
    }

    // scripts(){
    //     var script = document.
    // }
}