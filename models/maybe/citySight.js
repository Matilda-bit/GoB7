class CitySight {
    constructor(
        id,
        categoryIds,
        title,
        imageUrl,
        location     
        ) {
            this.id =id;
            this.categoryIds = categoryIds;
            this.title = title;
            this.imageUrl = imageUrl;
            this.location = location;
        }
}

export default CitySight;


// export const CITYSIGHT =[
//     new CitySight(
//         's1',
//         [c4],
//         'Tel Be’er Sheba',
//         'https://upload.wikimedia.org/wikipedia/commons/6/62/Tel_Be%27er_Sheva_Overview_2007041.JPG',
//         '...' 
//     ),
//     new CitySight(
//         's2',
//         [c4],
//         'Carasso Science Park',
//         'https://www.israel-in-photos.com/wp-content/uploads/2018/10/Carasso-Science-Park-in-Beersheba-2.jpg',
//         '...' 
//     ),
//     new CitySight(
//         's3',
//         [c4],
//         'Negev Museum of Art',
//         'https://media-cdn.tripadvisor.com/media/photo-s/0d/2c/d8/63/negev-museum-of-art-first.jpg',
//         '...' 
//     )

// ];