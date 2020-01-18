class Place {
    constructor(
        id,
        categoryId,
        title,
        imageUrl,
        location,
        openingHours     
        ) {
            this.id =id;
            this.categoryId = categoryId;
            this.title = title;
            this.imageUrl = imageUrl;
            this.location = location;
            this.openingHours = openingHours;
        }
}

export default Place;