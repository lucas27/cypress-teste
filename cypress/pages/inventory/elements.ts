export const elements = {
    addToCart: (itemName:string) => `[data-test="add-to-cart-${transform(itemName)}"]`,
    removeFromCart: (itemName:string) => `[data-test="remove-${transform(itemName)}"]`
}


function transform(texto: string) {
    return texto.replaceAll(' ', '-').toLowerCase()
}