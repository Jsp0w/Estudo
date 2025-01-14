/* importando o codigo e criando os componente html */
import { PageHeader } from "./PageHeader.js";
import { TopMain } from "./TopMain.js";

customElements.define('page-header', PageHeader)
customElements.define('top-main', TopMain)

/* trabalhando com arquivos .json */
var requestURL ="./src/data/teste.json";
var request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function() {
    console.log(request.response)
}
