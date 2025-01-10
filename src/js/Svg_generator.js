/* Gerador de SVGs */
class Svg{
    constructor(height){
        this.xmlns = 'http://www.w3.org/2000/svg'
        this.mother_tag = document.createElementNS(this.xmlns, 'svg')
        this.mother_tag.setAttribute('xmlns', this.xmlns)
        this.mother_tag.setAttribute('viewBox','0 0 512 512')
        this.mother_tag.style.height = height
        // this.mother_tag.className = 'ionicon'
    }
}


/* Gera um SVG do Facebook */
class FbIcon extends Svg{
    constructor(height, color){
        super(height)
        this.path = document.createElementNS(this.xmlns,'path')
        this.path.setAttribute('d','M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z')
        this.path.setAttribute('fill-rule','evenood')
        color != undefined ? this.path.setAttribute('fill', color):'';
        this.mother_tag.appendChild(this.path)
    }
}


/* gera um SVG de uma nota musical */
class MusicIcon extends Svg{
    constructor(height,color){
        super(height)
        this.path = document.createElementNS(this.xmlns,'path')
        this.path.setAttribute('d','M421.84 37.37a25.86 25.86 0 00-22.6-4.46L199.92 86.49A32.3 32.3 0 00176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0023.23 45.63A54.78 54.78 0 00135.34 480a55.82 55.82 0 0017.75-2.93l.38-.13 21.84-7.94A47.84 47.84 0 00208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 015 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09-50.89 18.11A49.09 49.09 0 00304 375.92a55.67 55.67 0 0023.23 45.8 54.63 54.63 0 0049.88 7.35l.36-.12 21.84-7.95A47.83 47.83 0 00432 375.92V58a25.74 25.74 0 00-10.16-20.63z')
        color != undefined ? this.path.setAttribute('fill', color):'';
        this.mother_tag.appendChild(this.path)
    }
}


/* gera um SVG de uma seta */
class SetaIcon extends Svg{
    constructor(height,color,direcao){
        super(height)
        this.path = document.createElementNS(this.xmlns,'path')
        this.sentido(direcao)
        color != undefined ? this.path.setAttribute('fill', color):'';
        this.mother_tag.appendChild(this.path)
    }
    sentido(direcao) {
        this.direcao = direcao
        if(direcao == 'botton'){
            this.path.setAttribute('d', 'M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z')
            return
    
        }
        this.path.setAttribute('d', 'M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z')
    }
}