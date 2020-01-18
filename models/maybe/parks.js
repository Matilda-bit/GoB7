class Parks {
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

export default Parks;


// export const PARKS =[
//     new Parks(
//         'p1',
//         [c2],
//         'Australian Soldier Park',
//         'https://lh5.googleusercontent.com/p/AF1QipOBh0SY59ZLelZ9J40jeCxx_MlWW5rFtdel3rS4=w203-h114-k-no',
//         'address' 
//     ),
//     new Parks(
//         'p2',
//         [c2],
//         'Australian Soldier Park',
//         'https://lh5.googleusercontent.com/p/AF1QipOBh0SY59ZLelZ9J40jeCxx_MlWW5rFtdel3rS4=w203-h114-k-no',
//         'address' 
//     ),
//     new Parks(
//         'p3',
//         [c2],
//         'Australian Soldier Park',
//         'https://lh5.googleusercontent.com/p/AF1QipOBh0SY59ZLelZ9J40jeCxx_MlWW5rFtdel3rS4=w203-h114-k-no',
//         'address' 
//     )
// ];