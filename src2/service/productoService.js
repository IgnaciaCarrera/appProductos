import config from '../config/knexConfig.js'
import knex from 'knex'
export default class ProductService{
    constructor(){
        this.knex = knex(config)
    }

    getProductos = async() =>{
        const productos = await this.knex.from('productos').select('*')
        return Object.values(JSON.parse(JSON.stringify(productos)))
    }
    addProductos = async(producto) =>{
        const respuesta = this.knex('productos').insert(producto)
        return respuesta
    }
    updateProductoById = async(id,producto) =>{
        return this.knex('productos').where({producto_id:id}).update(producto)
    }
    showProductoById = async(id,producto) =>{
        return this.knex('productos').where({producto_id:id}).first()
    }
    deleteProductoById= async(id) =>{
        return this.knex('productos').where({producto_id:id}).del()  
    }
}
