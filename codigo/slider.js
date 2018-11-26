function cargarSlider(){
    var slider = document.getElementById('slider')
    var activo= 'active'
    var cadena=''
    for(var i=0; i < sliders.length; i++){
        cadena+=`
                <div class="carousel-item ${activo}">
                    <img src="${sliders[i].imagen}" alt="${sliders[i].titulo}">
                    <div class="carousel-caption d-none d-md-block" style="background-color:rgba(000,000,000,0.8)">
                        <h5>${sliders[i].titulo}</h5>
                        <p>${sliders[i].desc}</p>
                    </div>
                </div>
        `
        activo=''
    }
    slider.innerHTML=cadena;
}
function cargarDatosEmpresa(){
    document.getElementById('somos').innerHTML=somos
    document.getElementById('mision').innerHTML=mision
    document.getElementById('vision').innerHTML=vision
}