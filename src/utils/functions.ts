import { PRODUCTS } from "../store/ducks/products/types";
import { ProductCart } from "../store/ducks/shoppingCart/types";

export const formatMoney = (amount:number, decimalCount = 2, decimal = ",", thousands = ".") => {
    try {

        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";
        amount = Number(Math.abs(Number(amount) || 0).toFixed(decimalCount))
        let i = parseInt(amount.toString()).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - Number(i)).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
        return '0,00'
    }
};

export const updateCart = (type: 'add' | 'rm', cart:ProductCart[], product: PRODUCTS) => {

    let list = [...cart]
    const p = list.find( v => v.id == product.id)
    switch(type){
        case 'add': 
            if(p) {
                list = [...list, { ...p, quantity: p.quantity += 1 }]
            } else 
                list.push({...product, quantity: 1 })
        break;
        case 'rm':
            if(p) {
                list = [...list, { ...p, quantity: p.quantity -= 1 }]
            } else 
                list = list.filter( v => v.id !== product.id)
        break;
    }
    const total = list.length > 0 ? list.map( n => n.price * n.quantity).reduce( (a,b) => a+b) : 0

    return { list , total }
}