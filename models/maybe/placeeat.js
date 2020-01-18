class PlaceEat {
    constructor(
        id,
        categoryIds,
        title,
        imageUrl,
        type,
        distance,
        location,
        description,
        isVegan, 
        isVegatarian
        ) {
            this.id=id;
            this.categoryIds =categoryIds;
            this.title = title;
            this.imageUrl = imageUrl;
            this.type = type;
            this.distance = distance;
            this.location = location;
            this.description = description;
            this.isVegan = isVegan;
            this.isVegatarian = isVegatarian;
            this.isKosher = isKosher;
            
        }
}

export default PlaceEat;

// export const PLACEEAT = [
//     new PlaceEat(
//         'm1',
//         [c1],
//         'Pizza Caldo',
//         'https://caldo.co.il/uploads/images/image-2320180515162615_20190207101140.jpg',
//         false,
//         'Derech Metsada 47, Be\'er Sheva, 8435729',
//         'Caldo Gourmet Pizza Bar was founded in 2012 by a chef from a gourmet restaurant background who decided to take the pizza a few levels above\. The restaurant specializes in making varied pizzas consisting of only quality ingredients. At Caledo, we maintain the quality of the product, so every pizza opens in front of the customer\'s eyes, no pizza is ready in advance. Our pizza comes in a uniform size of about 30 cm\. The menu features more than 70 different types of pizzas built on three types of sauces. In our large selection of pizzas you will find various meat, seafood, fish, vegetarian and vegan additions. In addition, the menu offers a variety of entrees, main courses and homemade desserts\. * Each pizza can be ordered as vegan.',
//         true,
//         true,
//         false
//     )
// ];