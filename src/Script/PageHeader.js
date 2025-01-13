export class PageHeader extends HTMLElement{
    constructor(){
        super();
        this.build();
    };
    
    /* constroi a tag page-header */
    build(){
        const shadow = this.attachShadow({mode:'open'});
        /* define a posição da grid e qual icone aparecerá junto */
        const grids = ['facebook','playlist']
        const icons = ['logo-facebook','musical-notes']

        shadow.adoptedStyleSheets = [this.styles(grids)];

        const header = document.createElement('header');


        for(let i=0;i<grids.length;i++){
            header.appendChild(this.linksHeader(grids[i],icons[i]));
        }

        shadow.appendChild(header);
    };

    /* css do componente */
    styles(grids){
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(`
            *{
                border: 0;
                padding: 0;
                margin: 0;
            }
            header{
                width: 100%;
                height: 26px;
                display: grid;
                grid-template-columns: 1fr repeat(2, 150px) 10px;
                grid-template-areas: '. ${grids[0]} ${grids[1]} .';
                align-itens: center;
                justify-contents: center;
                color: #fff;
                background: #048;
                font-size: 1.25em;
            }

            div{
                display:flex;
                align-items:center;
                gap:5px
            }

            .${grids[0]}{
                grid-area: ${grids[0]};
            }

            .${grids[1]}{
                grid-area: ${grids[1]};
            }

        `);
        return sheet;
    };

    /* função que cria os links da header */
    linksHeader(texto,icone){
        const div = document.createElement('div');
        div.classList.add(texto);

        const icon = document.createElement('ion-icon');
        icon.setAttribute('name', icone);
        div.appendChild(icon);
        div.append(texto);

        return div
    }
};