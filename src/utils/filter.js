export const filterByAvailability =(list, user)=>{
    let resultByAvailability = [...list].filter ((product)=>{
        return product.cost < user.points})
    return resultByAvailability
}

export const sortByLowestPrice =(list)=>{
    let resultLowestPrice = list.sort(function(a,b){
        if (a.cost > b.cost) {
            return 1;
        }
        if (a.cost < b.cost) {
            return -1;
        }
        return 0;         
    }) 
    return [...resultLowestPrice]  
}

export const sortByhighestPrice =(list)=>{
    let resultHighestPrice = list.sort(function(a,b){
        if (a.cost > b.cost) {
            return -1;
        }
        if (a.cost < b.cost) {
            return 1;
        }
        return 0;         
    }) 
    return [...resultHighestPrice]  
}