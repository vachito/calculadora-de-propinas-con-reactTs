export function formatCurrency(quantity: number){
    return new Intl.NumberFormat('es-GT',{
        style:'currency', currency: 'GTQ'
    }).format(quantity)
}