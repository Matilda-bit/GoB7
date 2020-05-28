// class Place {
//     constructor(
//         id,
//         categoryId,
//         title,
//         imageUrl,
//         location,
//         openingHours,
//         isOpenShabbath,
//         isOpenNow,
//         isVegan,
//         isVegetarian,
//         isKosher,
//         isNotKosher,
//         isCafe,
//         isRestaurant,
//         isDelivery,
//         isTakeAway,
//         isFastFood,
//         isGrill,
//         isSushi,
//         isItalian,
//         isAsian,
//         isEuropean,
//         isIndian
//         ) {
//             this.id = id;
//             this.categoryId = categoryId;
//             this.title = title;
//             this.imageUrl = imageUrl;
//             this.location = location;
//             this.openingHours = openingHours;
//             this.isOpenShabbath = isOpenShabbath;
//             this.isOpenNow = isOpenNow;
//             this.isVegan = isVegan;
//             this.isVegetarian = isVegetarian;
//             this.isKosher = isKosher;
//             this.isNotKosher = isNotKosher;
//             this.isCafe = isCafe;
//             this.isRestaurant = isRestaurant;
//             this.isDelivery = isDelivery;
//             this.isTakeAway = isTakeAway;
//             this.isFastFood = isFastFood;
//             this.isGrill = isGrill;
//             this.isSushi = isSushi;
//             this.isItalian = isItalian;
//             this.isAsian = isAsian;
//             this.isEuropean = isEuropean;
//             this.isIndian = isIndian;
//         }
// }
class Place {
  constructor(
    id,
    categoryId,
    ownerId,
    title,
    imageUrl,
    location,
    openingHours,
    isOpenShabbath,
    isOpenNow
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.ownerId = ownerId;
    this.title = title;
    this.imageUrl = imageUrl;
    this.location = location;
    this.openingHours = openingHours;
    this.isOpenShabbath = isOpenShabbath;
    this.isOpenNow = isOpenNow;
  }
}
export default Place;
