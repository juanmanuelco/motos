var somos="Texto de quienes somos"
var mision="Aquí va la misión de la empresa"
var vision = "Aquí va la visión de la empresa"


var sliders= [
    {titulo: 'Slider 1', desc : 'Descripcion 1', imagen: 'https://www.motobuykers.es/weride/wp-content/uploads/2018/02/harley_davidson_electrica.jpg'},
    {titulo: 'Slider 2', desc : 'Descripcion 2', imagen: 'https://www.arpem.com/imagenes/ficha/9/8/4/0/kawasaki-zx-10rr-frontolateral.1589840.jpg'},
    {titulo: 'Slider 3', desc : 'Descripcion 3', imagen: 'https://www.arpem.com/imagenes/ficha/9/8/6/6/bmw-vision-next-100-3.1619866.jpg'},
    
]

var motos=[
    {titulo: 'Moto 1', precio:'700', desc:'Descripción 1', img: 'https://src.soymotero.net/images/timthumb.php?src=91095.jpg&w=800&s=1'},
    {titulo: 'Moto 2', precio:'1000', desc:'Descripción 2', img: 'https://www.flipa.net/wp-content/uploads/motos.jpg'},
    {titulo: 'Moto 3', precio:'790', desc:'Descripción 3', img: 'https://www.arpem.com/imagenes/ficha/5/9/1/8/lateral-derecho.955918.jpg'},
    {titulo: 'Moto 4', precio:'1400', desc:'Descripción 4', img: 'https://src.soymotero.net/images/timthumb.php?src=97896.jpg&w=800&s=1'},
    {titulo: 'Moto 5', precio:'1000', desc:'Descripción 5', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSBzBwU9IbD-feMorEH1rCJKyt0uQnUIge_fXFpJsTBMkkBc5nIg'},
    {titulo: 'Moto 6', precio:'1190', desc:'Descripción 6', img: 'https://img.autocosmos.com/noticias/fotosprinc/NAZ_79b1c88e355d4aadaa335f43fbaa24db.jpg'}
]

var cascos = [
    {titulo: 'Casco 1', precio:'40', desc:'Descripción 1', img: 'https://www.ramirezmoto.es/admin/pictures/zoom/Casco-Bell-Moto-9-Mips-Intake-Negro-Mate.jpg'},
    {titulo: 'Casco 2', precio:'50', desc:'Descripción 2', img: 'https://http2.mlstatic.com/casco-moto-integral-ls2-ff-352-fan-naranjo-mate-D_NQ_NP_891732-MLC26267830465_102017-F.jpg'},
    {titulo: 'Casco 3', precio:'56', desc:'Descripción 3', img: 'https://src.soymotero.net/images/79950t.jpg'}
]

var repuestos = [
    {titulo: 'Repuesto 1', precio:'40', desc:'Descripción 1', img: 'https://http2.mlstatic.com/manubrio-rojo-renthal-twinwall-moto-918-bajo-D_NQ_NP_951974-MLA28417568311_102018-F.jpg'},
    {titulo: 'Repuesto 2', precio:'50', desc:'Descripción 2', img: 'https://http2.mlstatic.com/extensores-elevadores-negros-universales-manubrio-78-moto-D_NQ_NP_441521-MCO20796219534_072016-F.jpg'},
    {titulo: 'Repuesto 3', precio:'56', desc:'Descripción 3', img: 'https://http2.mlstatic.com/espejo-retrovisores-para-moto-mano-de-calavera-8-y-10-mm-D_NQ_NP_751905-MLM25086359123_102016-F.jpg'}
]

var llantas = [
    {titulo: 'Llanta 1', precio:'40', desc:'Descripción 1', img: 'https://mlstaticquic-a.akamaihd.net/cinta-moto-tuning-reflectiva-naranja-puig-llantas-16-a-18-D_NQ_NP_752427-MLU25608998045_052017-F.jpg'},
    {titulo: 'Llanta 2', precio:'50', desc:'Descripción 2', img: 'https://http2.mlstatic.com/llantas-llanta-para-moto-D_NQ_NP_674827-MCO27648885435_062018-F.jpg'},
    {titulo: 'Llanta 3', precio:'56', desc:'Descripción 3', img: 'https://mlstaticquic-a.akamaihd.net/neumatico-moto-llanta-18-metzeler-brasil-275-18-me22-D_NQ_NP_663858-MLU25926630010_082017-F.jpg'}
]

function render(lugar, datos){
    var contenido= document.getElementById(lugar)
    var cadena=''
    for(var i=0; i < datos.length; i++){
        cadena+=`
                <article class="mix portfolio_category_17 portfolio_category_5  mix_all" style="display: inline-block; opacity: 1;">
                    <div class="image_holder">
                        <a class="portfolio_link_for_touch" href="" target="_self">
                            <span class="image">
                                <img width="1100" height="825" src="${datos[i].img}"
                                    class="attachment-full wp-post-image" alt="qode interactive strata">
                            </span>
                        </a>
                        <span class="text_holder">
                            <span class="text_outer">
                                <span class="text_inner">
                                    <span class="feature_holder">
                                        <span class="feature_holder_icons">
                                            <a class="preview qbutton small white" href="javascript: mostrarProducto('${datos[i].titulo}','${datos[i].desc}','${datos[i].precio}','${datos[i].img}')" target="_self">Ver</a>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <div class="portfolio_description ">
                        <h5 class="portfolio_title"> <a href="" target="_self">${datos[i].titulo}</a> </h5>
                        <span class="project_category">${datos[i].desc}</span>
                    </div>
                </article>`
    }
    contenido.innerHTML=cadena
}

function mostrarProducto(t, d, p, i){
    document.getElementById('tit_p').innerHTML=t
    document.getElementById('pre_p').innerHTML='$'+p
    document.getElementById('desc_p').innerHTML=d
    document.getElementById('img_p').setAttribute('src', i)
    $('#modal_producto').modal()
}