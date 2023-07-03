const pizza={
    "muzza":{"queso":"muzzarella", 
            "masa":"a la piedra"}, 
    "cuatroQuesos":{"queso":"cremosa, muzza, ricota, cheddar", 
            "masa":"a la piedra"}
}
console.log(pizza)
console.log(pizza.muzza)
pizza.muzza={"salsa":"tomate"};
console.log(pizza)
// hacer fetch...