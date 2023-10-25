
    const checkImg = async (url, optionalImg) => {

        // URL de la imag
        const imageUrl = url

        // Crea un nuevo objeto de imagen
        const img = new Image();

        // Define una función para ejecutar cuando la imagen se cargue
        img.onload = function() {
        // Accede a las dimensiones de la imagen
        const width = this.width;
        const height = this.height;

        // Verifica el tamaño de la imagen (por ejemplo, 100x100 píxeles)
        if (width >= 50 && height >= 50) {
            // La imagen tiene el tamaño deseado
            console.log("La imagen tiene el tamaño deseado (100x100 píxeles).");
        } else {
            // La imagen no tiene el tamaño deseado
            console.log("La imagen no tiene el tamaño deseado.");
        }
        };

        // Define una función para ejecutar si la imagen no se puede cargar
        img.onerror = function() {
        console.log("Error al cargar la imagen.");
        };

        // Establece la fuente de la imagen
        img.src = imageUrl;
    }
