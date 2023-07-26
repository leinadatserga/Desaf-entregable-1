class ProductManager {
    constructor ( products = [] ) {
        this.products = products
    }
    getProduct () {
        return this.products;
    }
    validateProducts ( product ) {
        const fields = Object.values ( product );
        const invalidFields = fields.find ( field => field === "" )
        if ( invalidFields != "" && fields.length === 7 && fields[6] > 0 ) {
            this.products.push ( product );
        } else {
            console.log ( "Review the data, all fields are required" );
        }
    }
    addProduct ( itemDetail ) {
            let index = this.products.length;
            let compareCod = this.products.find ((cod) => cod.code == itemDetail.code );
            if ( compareCod ) {
                console.log ( "Error! the product already exists" );
            } else { const product = { id:index, ...itemDetail };
            this.validateProducts ( product );
            }                
    }
    getProductById ( id ) {
        const search = this.products.find (( object ) => object.id === id );
        search ? console.log ( search ) : console.log ( "Not found" );
    }
}
const testItem1 = {
    title:"producto prueba",
    description:"Este es un producto prueba",
    price:200,
    thumbnail:"Sin imagen",
    code:"abc123",
    stock:25
}
const testItem2 = {
    title:"Test product",
    description:"This is a test product",
    price:330,
    thumbnail:"Without image",
    code:"xyz321",
    stock:31
}
const testItem3 = {
    title:"",
    description:"This is a test product",
    price:330,
    thumbnail:"Without image",
    code:"xyz000",
    stock:2
}
/* Testing process */

// const productManager = new ProductManager ();
// console.log ( productManager.getProduct () );
// productManager.addProduct ( testItem1 );
// console.log ( productManager.getProduct () );
// productManager.getProductById ( 0 );
// productManager.getProductById ( 1 );
// productManager.addProduct ( testItem1 );
// productManager.addProduct ( testItem2 );
// productManager.addProduct ( testItem3 );
// console.log ( productManager.getProduct () );
