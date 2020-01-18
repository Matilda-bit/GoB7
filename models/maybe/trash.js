class Trash {
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

export default Trash;


// export const TRASH =[
//     new Trash(
//         't1',
//         [c5],
//         'green',
//         'http://www.tmir.org.il/download/pictures/where-pachim.jpg',
//         '31.252254, 34.790706' 
//     )
//    
// ];