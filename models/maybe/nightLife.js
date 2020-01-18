class NightLife {
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

export default NightLife;

// export const NIGHTLIFE =[
//     new NightLife(
//         'b1',
//         [c3],
//         'Rosa Bar',
//         'https://www.google.com/maps/uv?hl=en&pb=!1s0x15026667717193d9%3A0x6b2baf72394de95f!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOAN18LlXzjnEEwKYXv4N8sdQL9Gxnwq5fM4OwI%3Dw390-h262-n-k-no!5sBar%20-%20Google%20Search!15sCAQ&imagekey=!1e10!2sAF1QipOAN18LlXzjnEEwKYXv4N8sdQL9Gxnwq5fM4OwI#',
//         'Rabbi Akiva St, Be\'er Sheva' 
//     )
// ];