import Category from '../models/category';
import Color from '../constants/Colors';
import Place from '../models/place';


export const CATEGORIES = [
    new Category('c1', 'Food', Color.c1),
    new Category('c2', 'Shopping', Color.c6),
    new Category('c3', 'Bars & Pubs', Color.c3),
    new Category('c4', 'Clubs', Color.c5),
    new Category('c5', 'Parks', Color.c2),
    new Category('c6', 'City sight', Color.c4),
    new Category('c7', 'Water', Color.c4),
    new Category('c8', 'Trash', Color.c5)
];

export const PLACE = [
    new Place(
        'p1',
        ['c1'],
        'Caldo Gourmet Pizza Bar',
        'https://caldo.co.il/uploads/images/image-2320180515162615_20190207101140.jpg',
        'Derech Metsada 47, Be\'er Sheva, 8435729',
        '12pm–12am'
    ),
    new Place(
        'p2',
        ['c1','c3'],
        'Sifriya',
        'https://hasifria.com/wp-content/uploads/2016/12/14114792_1244442835606710_5278934233671757650_o.jpg',
        'one center, Yitshak Nafha St 25, Be\'er Sheva',
        '12pm–2am'
    ),
    new Place(
        'p3',
        ['c1','c3'],
        'Nafis',
        'https://www.nafis.co.il/wp-content/uploads/2017/08/p1.jpg',
        'Derekh Hebron 62, Be\'er Sheva',
        'Open 24 hours' 
    ),
    new Place(
        'p4',
        ['c1'],
        'Goomba',
        'https://lh5.googleusercontent.com/p/AF1QipN799OydWhv4jzaV-tEXorRV5hMiaB4yb1NshTH=s507-k-no',
        'ברוך קטניקא 2, Be\'er Sheva',
        '12pm–12am' 
    ),
    new Place(
        'p5',
        ['c5'],
        'Australian Soldier Park',
        'https://lh5.googleusercontent.com/p/AF1QipOBh0SY59ZLelZ9J40jeCxx_MlWW5rFtdel3rS4=w203-h114-k-no',
        'Abba Ahimeir St 43, Be\'er Sheva',
        '11am–8:45pm' 
    ),
    new Place(
        'p6',
        ['c5'],
        'Be\'er Sheva River Park',
        'https://lh5.googleusercontent.com/p/AF1QipOClEh51pxlZERb5_nyDRaL4T4dfh5wK3PvS32K=s653-k-no',
        'Be\'er Sheva' ,
        '8am–9pm'
    ),
    new Place(
        'p7',
        ['c5'],
        'Rambam Park',
        'https://lh5.googleusercontent.com/p/AF1QipP3_iDIcc_MviQmJ2bO4Dwkg2u_VtIiwZuI8ez6=s676-p-k-no',
        'Be\'er Sheva',
        'Open 24 hours' 
    ),
    new Place(
        'p8',
        ['c3'],
        'Rosa Bar',
        'https://www.google.com/maps/uv?hl=en&pb=!1s0x15026667717193d9%3A0x6b2baf72394de95f!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOAN18LlXzjnEEwKYXv4N8sdQL9Gxnwq5fM4OwI%3Dw390-h262-n-k-no!5sBar%20-%20Google%20Search!15sCAQ&imagekey=!1e10!2sAF1QipOAN18LlXzjnEEwKYXv4N8sdQL9Gxnwq5fM4OwI#',
        'Rabbi Akiva St, Be\'er Sheva' ,
        '9pm–4am' 
    ),
    new Place(
        'p9',
        ['c1'],
        'Kampai - קמפאי',
        'https://eatintlv.com/wp-content/uploads/2017/11/Kampai-3.jpg',
        'מתחם ביג, ha\'handasa 1, Be\'er Sheva' ,
        '12pm–12:30am' 
    ),
    new Place(
        'p10',
        ['c3'],
        'BarBaSaba',
        'https://lh5.googleusercontent.com/p/AF1QipNOQBz-pSIO8RE51IHsfpiPD2wrjohTFTo_QFHz=s676-k-no',
        'Ha-Tikva St 8, Be\'er Sheva',
        '9pm–4am' 
    ),
    new Place(
        'p11',
        ['c6'],
        'Tel Be’er Sheba',
        'https://upload.wikimedia.org/wikipedia/commons/6/62/Tel_Be%27er_Sheva_Overview_2007041.JPG',
        'Be\'er Sheva' ,
        '8am–4pm'
    ),
    new Place(
        'p12',
        ['c5','c6'],
        'Carasso Science Park',
        'https://www.israel-in-photos.com/wp-content/uploads/2018/10/Carasso-Science-Park-in-Beersheba-2.jpg',
        'HaAtsmaut St 79, Be\'er Sheva' ,
        '9am–5pm'
    ),
    new Place(
        'p13',
        ['c6'],
        'Negev Museum of Art',
        'https://media-cdn.tripadvisor.com/media/photo-s/0d/2c/d8/63/negev-museum-of-art-first.jpg',
        'HaAtsmaut St 60, Be\'er Sheva',
        '12-7 pm' 
    ),
    new Place(
        'p14',
        ['c8'],
        'green',
        'http://www.dolav.co.il/media/1427490/wc_240_main_green.jpg',
        '31.252254, 34.790706',
        '' 
    ),
    new Place(
        'p15',
        ['c8'],
        'green',
        'http://www.tmir.org.il/download/pictures/where-pachim.jpg',
        '31.252254, 34.790706' ,
        ''
    ),
    new Place(
        'p16',
        ['c8'],
        'green',
        'http://www.tmir.org.il/download/pictures/where-pachim.jpg',
        '31.252254, 34.790706',
        '' 
    ),
    new Place(
        'p17',
        ['c2'],
        'עופר גרנד קניון באר שבע',
        'https://lh5.googleusercontent.com/p/AF1QipOJXcAeb5sCnDwS33vAi5fgS96Tr3EVwJnSSh9H=s648-k-no',
        'David Tuviyahu Ave 125, Be\'er Sheva',
        '9:30am–10pm' 
    ),
    new Place(
        'p18',
        ['c2'],
        'IKEA',
        'https://lh5.googleusercontent.com/p/AF1QipMxb7N1WkyFSvlvTFqUnah2Yh3N4jYsdt-BhpiD=s773-k-no',
        'Yarden St 24, Be\'er Sheva',
        '10am–9pm' 
    ),
    new Place(
        'p19',
        ['c2'],
        'Azrieli Negev Mall',
        'https://lh5.googleusercontent.com/p/AF1QipM4whQYHwJOeHdUtECeFQgWAXMLhMTUfJGTOKuC=s1016-k-no',
        'Be\'er Sheva',
        '9am–9:45pm' 
    ),
    new Place(
        'p20',
        ['c4'],
        'Forum Night Club',
        'https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/79986682_10156465162971736_6609777269214806016_o.jpg?_nc_cat=109&_nc_ohc=ofm8VH3xQRQAQlicEJuFb3IkrlMLcajqlCGnv3E3X2O4BKe1N2uPf9ZQw&_nc_ht=scontent.ftlv2-1.fna&oh=e98be2f1c2861883a562075dbe4a50f3&oe=5EA40C97',
        'Nisim Elkayam St 10, Beer Shava',
        '11:30pm–5:30am' 
    ),
    new Place(
        'p21',
        ['c4'],
        'Club Nika B7',
        'https://lh5.googleusercontent.com/p/AF1QipPeuEy842JpUH3DbY4wIgN2s3QyzbCInScmD9nh=s634-k-no',
        'Hadassa St 20, Be\'er Sheva',
        '11pm–4am' 
    ),
    new Place(
        'p22',
        ['c4'],
        'Baraka Club',
        'https://lh5.googleusercontent.com/p/AF1QipMZeErHp1q3k28lW7mZKzs3zxTC7nSU1PEzSN8U=s773-k-no',
        'Be\'er Sheva',
        '...' 
    ),

];





// export const CATEGORIES = [
//     new Category('c1', 'Eat', '#1abc9c'),
//     new Category('c2', 'NightLife', '#2c3e50'),
//     new Category('c3', 'Parks', '#27ae60'),
//     new Category('c4', 'City sight', '#3498db'),
//     new Category('c5', 'Trash', '#95a5a6')
// ];