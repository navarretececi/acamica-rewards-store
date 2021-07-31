export let resultByAvailability = []
export let resultLowestPrice = []
export let resultHighestPrice = []


export const filterByAvailability =(list, user)=>{
    let resultByAvailability = list.filter ((product)=>{
        return product.cost < user.points})
        console.log("disponibles" , resultByAvailability)
    return resultByAvailability
}

export const lowestPrice =(list)=>{
    let resultLowestPrice = list.sort(function(a,b){
        if (a.cost > b.cost) {
            return 1;
        }
        if (a.cost < b.cost) {
            return -1;
        }
        return 0;         
    }) 
    console.table(resultLowestPrice)
    return resultLowestPrice  
}

export const highestPrice =(list)=>{
    let resultHighestPrice = list.sort(function(a,b){
        if (a.cost > b.cost) {
            return -1;
        }
        if (a.cost < b.cost) {
            return 1;
        }
        return 0;         
    }) 
    console.table(resultHighestPrice)
    return resultHighestPrice  
}