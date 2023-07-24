class ProductManager {
    constructor ( products ) {
        this.products = []
    }
    getProduct () {
        console.log ( this.products );
    }
    addProduct ( a, b, c, d, e, f ) {
        let i = this.products.length;
        let ccc = this.products.find ((cod) => cod.code === e );
        if ( ccc ) {
            console.log ( "Error! the product already exists" );
        } else { const product = { id:i, title:a, description:b, price:c, thumbnail:d, code:e, stock:f };
            this.products.push ( product );
        }
    }
    getProductById ( id ) {
        const search = this.products.find (( object ) => object.id === id );
        search ? console.log ( search ) : console.log ( "Not found" );
    }
}

/* Testing process

const instancia1 = new ProductManager ();
instancia1.getProduct ();
instancia1.addProduct ( "producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25 );
instancia1.getProduct ();
instancia1.getProductById (1);
instancia1.getProductById (0);
instancia1.addProduct ( "producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25 );
instancia1.addProduct ( "product test", "This is a test product", 600, "Without image", "xyz321", 31 );
instancia1.getProduct ();*/