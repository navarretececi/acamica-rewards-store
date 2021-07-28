export const filterByAvailability =(list, user)=>{
    const resultByAvailability = list.filter ((product)=>{
        return product.cost < user.points})
        console.log("disponibles" , resultByAvailability)
    return resultByAvailability
}

export const lowestPrice =(list)=>{
    const resultOrderByPrice = list.sort(function(a,b){
        if (a.cost > b.cost) {
            return 1;
        }
        if (a.cost < b.cost) {
            return -1;
        }
        return 0;         
    }) 
    console.table(resultOrderByPrice)
    return resultOrderByPrice  
}

export const highestPrice =(list)=>{
    const resultOrderByPrice = list.sort(function(a,b){
        if (a.cost > b.cost) {
            return -1;
        }
        if (a.cost < b.cost) {
            return 1;
        }
        return 0;         
    }) 
    console.table(resultOrderByPrice)
    return resultOrderByPrice  
}