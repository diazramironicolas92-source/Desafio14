const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial con seguridad 24/7.",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Apartamento tranquilo con vistas panorámicas y ambiente cálido para descansar.",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Disfruta de una terraza panorámica con vistas espectaculares de la ciudad.",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa moderna con jardín",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    descripcion: "Amplia casa con jardín, patio y excelente luminosidad natural.",
    ubicacion: "89 Garden Street, Green Valley, CA 11223",
    habitaciones: 5,
    costo: 6800,
    smoke: false,
    pets: true,
  },
];

const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Apartamento de 2 habitaciones en el corazón de la ciudad, cerca de transporte y comercios.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Hermoso apartamento con vista al mar y amplios ventanales naturales.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Elegante condominio con diseño moderno y ambiente seguro para familias.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Loft industrial renovado",
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    descripcion:
      "Loft moderno con estilo industrial, ideal para personas jóvenes o parejas.",
    ubicacion: "48 Factory Lane, Artisan District, CA 31415",
    habitaciones: 1,
    costo: 1800,
    smoke: true,
    pets: true,
  },
];

function formatMoney(value) {
  return "$" + value;
}

function renderPermiso(condicion, tipo) {
  if (tipo === "smoke") {
    if (condicion === true) {
      return '<p class="text-success">Permitido fumar</p>';
    } else {
      return '<p class="text-danger">No se permite fumar</p>';
    }
  } else {
    if (condicion === true) {
      return '<p class="text-success">Mascotas permitidas</p>';
    } else {
      return '<p class="text-danger">No se permiten mascotas</p>';
    }
  }
}

function crearCard(propiedad) {
  return `
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow-sm">
        <img
          src="${propiedad.src}"
          class="card-img-top"
          alt="${propiedad.nombre}"
          style="height: 220px; object-fit: cover;"
        />
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p>${propiedad.ubicacion}</p>
          <p>${propiedad.habitaciones} Habitaciones | 2 Baños</p>
          <p>${formatMoney(propiedad.costo)}</p>
          ${renderPermiso(propiedad.smoke, "smoke")}
          ${renderPermiso(propiedad.pets, "pets")}
        </div>
      </div>
    </div>
  `;
}

function renderPage(lista, contenedorId, cantidad) {
  const contenedor = document.getElementById(contenedorId);

  if (contenedor !== null) {
    contenedor.innerHTML = "";

    for (let i = 0; i < cantidad; i++) {
      contenedor.innerHTML += crearCard(lista[i]);
    }
  }
}

const page = document.body.dataset.page;

if (page === "venta") {
  renderPage(propiedades_venta, "propiedades", propiedades_venta.length);
} else if (page === "alquiler") {
  renderPage(propiedades_alquiler, "propiedades", propiedades_alquiler.length);
} else {
  renderPage(propiedades_venta, "lista-ventas", 3);
  renderPage(propiedades_alquiler, "lista-alquileres", 3);
}