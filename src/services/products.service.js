
class ProductsService{
    constructor(){
        this.products =[];
        this.generate();
    }
    generate(){
        const limit =100;
        for(let index =0; index< limit; index++){
            this.products.push({
                id:index,
                nombre: `Producto${index}`,
                precio: 2000,
            });

        }

/*
        const limit =100;
        for(let index =0; index< limit; index++){
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.comerce.productName(),
                price: parseInt(faker.commerce.price(),10),
                image: faker.image.imageUrl()
            });
        }*/
    }
    create(data){
        let aux=0;
        aux=parseInt(this.products[(this.products.length)-1].id)+1;
        const newProduct ={
            id: aux,
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }
    find(){ return this.products;}
    findOne(id){
        return this.products.find(item => item.id === id);
    }
    update(id){
        const index=this.products.findIndex(item =>item.id ===id);
        if(index===-1){
            throw new Error('product not found');
        }
        const product=this.products[index];
        this.products[index]={
            ...product,
            ...changes
        };
        return this.products[index];
    }
    delete(id){
        const index=this.products.findIndex(item =>item.id ===id);
        if(index===-1){
            throw new Error('product not found');
        }
        this.products.splice(index,1);
        return {id};
    }

}

module.exports =ProductsService;

