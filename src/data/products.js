

const products = [
    {
        id: "ALM001",
        name: "Alimento Seco Perro Adulto Razas Pequeñas",
        description: "Nutrición completa y balanceada para perros adultos de razas pequeñas. Rico en proteínas.",
        price: 28.50,
        stock: 150,
        image: "/img/Gemini_Generated_Image_29faoj29faoj29fa.png", // comida perro
        category: "Alimentos"
    },
    {
        id: "JUG002",
        name: "Set de Pelotas de Goma para Gatos (3 unidades)",
        description: "Pelotas ligeras y coloridas, ideales para el juego interactivo y solitario de tu gato.",
        price: 7.99,
        stock: 220,
        image: "/img/Gemini_Generated_Image_hre8vshre8vshre8.png", // juguetes gato
        category: "Otros"
    },
    {
        id: "HIG003",
        name: "Shampoo Hipoalergénico para Mascotas",
        description: "Fórmula suave sin parabenos ni sulfatos, ideal para pieles sensibles de perros y gatos.",
        price: 15.25,
        stock: 90,
        image: "/img/Gemini_Generated_Image_3pgjs23pgjs23pgj.png", // shampoo
        category: "Otros"
    },
    {
        id: "CAM004",
        name: "Cama Redonda Suave para Gatos",
        description: "Cama cómoda y acogedora de felpa, perfecta para que tu gato descanse y se sienta seguro.",
        price: 29.99,
        stock: 75,
        image: "/img/Gemini_Generated_Image_lbmm8glbmm8glbmm.png", // cama gato
        category: "Camas"
    },
    {
        id: "ACC005",
        name: "Correa Retráctil para Perros Medianos (5m)",
        description: "Correa con mango ergonómico y sistema de bloqueo fácil, ideal para paseos controlados.",
        price: 22.00,
        stock: 60,
        image: "/img/Gemini_Generated_Image_pet3bhpet3bhpet3.png", // correa
        category: "Correas"
    },
    {
        id: "COM006",
        name: "Comedero Doble de Acero Inoxidable",
        description: "Set de dos tazones de acero inoxidable con base antideslizante, fácil de limpiar.",
        price: 18.75,
        stock: 110,
        image: "/img/Gemini_Generated_Image_9f6v879f6v879f6v.png", // comedero
        category: "Otros"
    },
    {
        id: "MED007",
        name: "Suplemento Vitamínico para Articulaciones (Perros)",
        description: "Formulado con glucosamina y condroitina para apoyar la salud articular y la movilidad en perros.",
        price: 39.00,
        stock: 40,
        image: "/img/Gemini_Generated_Image_8e80vm8e80vm8e80.png", // suplemento
        category: "Alimentos"
    },
    {
        id: "ARE008",
        name: "Arena Sanitaria Aglomerante sin Perfume (10kg)",
        description: "Arena de bentonita de alta absorción, aglomera rápidamente para fácil limpieza. Ideal para gatos sensibles.",
        price: 16.90,
        stock: 80,
        image: "/img/Gemini_Generated_Image_ff1l2kff1l2kff1l.png", // arena
        category: "Otros"
    },
    {
        id: "TRA009",
        name: "Transportadora Rígida para Mascotas Pequeñas",
        description: "Caja de transporte de plástico resistente con ventilación, apta para gatos y perros pequeños.",
        price: 45.00,
        stock: 35,
        image: "/img/Gemini_Generated_Image_iejze0iejze0iejz.png", // transportadora
        category: "Otros"
    },
    {
        id: "SNK010",
        name: "Snacks Dentales para Perros Sabor Pollo",
        description: "Deliciosos snacks que ayudan a limpiar los dientes de tu perro y a refrescar su aliento.",
        price: 10.50,
        stock: 180,
        image: "/img/Gemini_Generated_Image_kq958rkq958rkq95.png", // snack
        category: "Alimentos"
    }
];




const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 3000);
    });
}


const getsingleproduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((product) => (product.id === id))
            resolve(product)
        }, 3000);
    })

}
export { getProducts, getsingleproduct };