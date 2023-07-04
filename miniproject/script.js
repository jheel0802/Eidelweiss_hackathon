let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
//Thane
{
    id: 1,
    name: 'Bombay Nail Company - Highlights',
    name2:'Thane',
    price: 7000,
    image: 'img1.jpg',
    nature: {
        color: ['Highlights'],
        type: 'thane'
    }
        
},

{
    id: 2,
    name: 'Hair Beauty Salon - Highlights',
    name2:'Thane',
    price: 10000,
    image: 'img2.jpg',
    nature: {
        color: ['Highlights'],
        type: 'thane'
    }
    
},
{
    id: 3,
    name: 'Snips Salon & Spa - Highlights',
    name2:'Thane',
    price: 4000,
    image: 'img3.jpg',
    nature: {
        color: ['Highlights'],
        type: 'thane'
    }
},
{
    id: 4,
    name: 'Global Grace - Highlights',
    name2:'Thane',
    price: 8000,
    image: 'img4.jpg',
    nature: {
        color: ['Highlights'],
        type: 'thane'
    }
},
{
    id: 5,
    name: 'Bueclat Salon & Spa - Highlights',
    name2:'Thane',
    price: 6500,
    image: 'img5.jpg',
    nature: {
        color: ['Highlights'],
        type: 'thane'
    }
},
// ++++
{
    id: 6,
    name: 'Bombay Nail Company - Haircut',
    name2:'Thane',
    price: 700,
    image: 'img6.jpg',
    nature: {
        color: ['Haircut'],
        type: 'thane'
    }
        
},

{
    id: 7,
    name: 'Hair Beauty Salon - Haircut',
    name2:'Thane',
    price: 2000,
    image: 'img7.jpg',
    nature: {
        color: ['Haircut'],
        type: 'thane'
    }
    
},
{
    id: 8,
    name: 'Snips Salon & Spa - Haircut',
    name2:'Thane',
    price: 1000,
    image: 'img8.jpg',
    nature: {
        color: ['Haircut'],
        type: 'thane'
    }
},
{
    id: 9,
    name: 'Global Grace - Haircut',
    name2:'Thane',
    price: 1500,
    image: 'img9.jpg',
    nature: {
        color: ['Haircut'],
        type: 'thane'
    }
},
{
    id: 10,
    name: 'Bueclat Salon & Spa - Haircut',
    name2:'Thane',
    price: 2500,
    image: 'img10.jpg',
    nature: {
        color: ['Haircut'],
        type: 'thane'
    }
},
// ++++
{
    id: 11,
    name: 'Bombay Nail Company - Straightening',
    name2:'Thane',
    price: 5600,
    image: 'img11.jpg',
    nature: {
        color: ['Straightening'],
        type: 'thane'
    }
        
},

{
    id: 12,
    name: 'Hair Beauty Salon - Straightening',
    name2:'Thane',
    price: 9000,
    image: 'img12.jpg',
    nature: {
        color: ['Straightening'],
        type: 'thane'
    }
    
},
{
    id: 13,
    name: 'Snips Salon & Spa - Straightening',
    name2:'Thane',
    price: 10000,
    image: 'img13.jpg',
    nature: {
        color: ['Straightening'],
        type: 'thane'
    }
},
{
    id: 14,
    name: 'Global Grace - Straightening',
    name2:'Thane',
    price: 8000,
    image: 'img14.jpg',
    nature: {
        color: ['Straightening'],
        type: 'thane'
    }
},
{
    id: 15,
    name: 'Bueclat Salon & Spa - Straightening',
    name2:'Thane',
    price: 8500,
    image: 'img15.jpg',
    nature: {
        color: ['Straightening'],
        type: 'thane'
    }
},
// ++++

{
    id: 16,
    name: 'Bombay Nail Company - Keratin',
    name2:'Thane',
    price: 4000,
    image: 'img16.jpg',
    nature: {
        color: ['Keratin'],
        type: 'thane'
    }
      
},

{
    id: 17,
    name: 'Hair Beauty Salon - Keratin',
    name2:'Thane',
    price: 8000,
    image: 'img17.jpg',
    nature: {
        color: ['Keratin'],
        type: 'thane'
    }
    
},
{
    id: 18,
    name: 'Snips Salon & Spa - Keratin',
    name2:'Thane',
    price: 5000,
    image: 'img18.jpg',
    nature: {
        color: ['Keratin'],
        type: 'thane'
    }
},
{
    id: 19,
    name: 'Global Grace - Keratin',
    name2:'Thane',
    price: 9000,
    image: 'img19.jpg',
    nature: {
        color: ['Keratin'],
        type: 'thane'
    }
},
{
    id: 20,
    name: 'Bueclat Salon & Spa - Keratin',
    name2:'Thane',
    price: 7000,
    image: 'img20.jpg',
    nature: {
        color: ['Keratin'],
        type: 'thane'
    }
},
// ++++

{
    id: 21,
    name: 'Bombay Nail Company - Hairspa',
    name2:'Thane',
    price: 600,
    image: 'img21.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'thane'
    }
      
},

{
    id: 22,
    name: 'Hair Beauty Salon - Hairspa ',
    name2:'Thane',
    price: 1000,
    image: 'img22.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'thane'
    }
    
},
{
    id: 23,
    name: 'Snips Salon & Spa - Hairspa',
    name2:'Thane',
    price: 1500,
    image: 'img23.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'thane'
    }
},
{
    id: 24,
    name: 'Global Grace - Hairspa',
    name2:'Thane',
    price: 1200,
    image: 'img24.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'thane'
    }
},
{
    id: 25,
    name: 'Bueclat Salon & Spa - Hairspa',
    name2:'Thane',
    price: 1300,
    image: 'img25.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'thane'
    }
},
// ++++

//Ghatkopar
{
    id: 26,
    name: 'Hair Castle Salon - Highlights',
    name2:'Ghatkopar',
    price: 7000,
    image: 'img26.jpg',
    nature: {
        color: ['Highlights'],
        type: 'ghatkopar'
    }
      
},
{
    id: 27,
    name: 'Hair Castle Salon - Haircut',
    name2:'Ghatkopar',
    price: 1000,
    image: 'img27.jpg',
    nature: {
        color: ['Haircut'],
        type: 'ghatkopar'
    }
      
},
{
    id: 28,
    name: 'Hair Castle Salon - Straightening',
    name2:'Ghatkopar',
    price: 8000,
    image: 'img28.jpg',
    nature: {
        color: ['Straightening'],
        type: 'ghatkopar'
    }
      
},
{
    id: 29,
    name: 'Hair Castle Salon - Keratin',
    name2:'Ghatkopar',
    price: 4000,
    image: 'img29.jpg',
    nature: {
        color: ['Keratin'],
        type: 'ghatkopar'
    }
},
{
    id: 30,
    name: 'Hair Castle Salon - Hairspa',
    name2:'Ghatkopar',
    price: 2500,
    image: 'img30.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'ghatkopar'
    }
      
},
// ++++

{
    id: 31,
    name: 'Pearl Salon - Keeps your look perfect - Highlights',
    name2:'Ghatkopar',
    price: 7000,
    image: 'img31.jpg',
    nature: {
        color: ['Highlights'],
        type: 'ghatkopar'
    }
      
},
{
    id: 32,
    name: 'Pearl Salon - Keeps your look perfect - Haircut',
    name2:'Ghatkopar',
    price: 2600,
    image: 'img32.jpg',
    nature: {
        color: ['Haircut'],
        type: 'ghatkopar'
    }
      
},
{
    id: 33,
    name: 'Pearl Salon - Keeps your look perfect - Straightening',
    name2:'Ghatkopar',
    price: 8000,
    image: 'img33.jpg',
    nature: {
        color: ['Straightening'],
        type: 'ghatkopar'
    }
      
},
{
    id: 34,
    name: 'Pearl Salon - Keeps your look perfect - Keratin',
    name2:'Ghatkopar',
    price: 5000,
    image: 'img34.jpg',
    nature: {
        color: ['Keratin'],
        type: 'ghatkopar'
    }
},
{
    id: 35,
    name: 'Pearl Salon - Keeps your look perfect - Hairspa',
    name2:'Ghatkopar',
    price: 1100,
    image: 'img35.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'ghatkopar'
    }
      
},
// ++++

{
    id: 36,
    name: 'Tress Tales : Unisex Salon - Highlights',
    name2:'Ghatkopar',
    price: 7000,
    image: 'img36.jpg',
    nature: {
        color: ['Highlights'],
        type: 'ghatkopar'
    }
      
},
{
    id: 37,
    name: 'Tress Tales : Unisex Salon - Haircut',
    name2:'Ghatkopar',
    price: 1000,
    image: 'img37.jpg',
    nature: {
        color: ['Haircut'],
        type: 'ghatkopar'
    }
      
},
{
    id: 38,
    name: 'Tress Tales : Unisex Salon - Straightening',
    name2:'Ghatkopar',
    price: 9000,
    image: 'img38.jpg',
    nature: {
        color: ['Straightening'],
        type: 'ghatkopar'
    }
      
},
{
    id: 39,
    name: 'Tress Tales : Unisex Salon - Keratin',
    name2:'Ghatkopar',
    price: 10000,
    image: 'img39.jpg',
    nature: {
        color: ['Keratin'],
        type: 'ghatkopar'
    }
},
{
    id: 40,
    name: 'Tress Tales : Unisex Salon - Hairspa',
    name2:'Ghatkopar',
    price: 2500,
    image: 'img40.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'ghatkopar'
    }
      
},
// ++++

{
    id: 41,
    name: 'X Hair And Beauty Studio - Highlights',
    name2:'Ghatkopar',
    price: 12000,
    image: 'img41.jpg',
    nature: {
        color: ['Highlights'],
        type: 'ghatkopar'
    }
      
},
{
    id: 42,
    name: 'X Hair And Beauty Studio - Haircut',
    name2:'Ghatkopar',
    price: 2500,
    image: 'img42.jpg',
    nature: {
        color: ['Haircut'],
        type: 'ghatkopar'
    }
      
},
{
    id: 43,
    name: 'X Hair And Beauty Studio - Straightening',
    name2:'Ghatkopar',
    price: 10000,
    image: 'img43.jpg',
    nature: {
        color: ['Straightening'],
        type: 'ghatkopar'
    }
      
},
{
    id: 44,
    name: 'X Hair And Beauty Studio - Keratin',
    name2:'Ghatkopar',
    price: 6000,
    image: 'img1.jpg',
    nature: {
        color: ['Keratin'],
        type: 'ghatkopar'
    }
},
{
    id: 45,
    name: 'X Hair And Beauty Studio - Hairspa',
    name2:'Ghatkopar',
    price: 999,
    image: 'img2.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'ghatkopar'
    }
      
},
// ++++

{
    id: 46,
    name: 'STUDIO11 Salon & Spa - Highlights',
    name2:'Ghatkopar',
    price: 5500,
    image: 'img3.jpg',
    nature: {
        color: ['Highlights'],
        type: 'ghatkopar'
    }
      
},
{
    id: 47,
    name: 'STUDIO11 Salon & Spa - Haircut',
    name2:'Ghatkopar',
    price: 1500,
    image: 'img4.jpg',
    nature: {
        color: ['Haircut'],
        type: 'ghatkopar'
    }
      
},
{
    id: 48,
    name: 'STUDIO11 Salon & Spa - Straightening',
    name2:'Ghatkopar',
    price: 15000,
    image: 'img5.jpg',
    nature: {
        color: ['Straightening'],
        type: 'ghatkopar'
    }
      
},
{
    id: 49,
    name: 'STUDIO11 Salon & Spa - Keratin',
    name2:'Ghatkopar',
    price: 5000,
    image: 'img6.jpg',
    nature: {
        color: ['Keratin'],
        type: 'ghatkopar'
    }
},
{
    id: 50,
    name: 'STUDIO11 Salon & Spa - Hairspa',
    name2:'Ghatkopar',
    price: 1000,
    image: 'img7.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'ghatkopar'
    }
      
},
// ++++

//Panvel
{
    id: 51,
    name: 'Swaroop Salon - Highlights',
    name2:'Panvel',
    price: 8000,
    image: 'img8.jpg',
    nature: {
        color: ['Highlights'],
        type: 'panvel'
    }
      
},
{
    id: 52,
    name: 'Swaroop Salon - Haircut',
    name2:'Panvel',
    price: 5600,
    image: 'img9.jpg',
    nature: {
        color: ['Haircut'],
        type: 'panvel'
    }
      
},
{
    id: 53,
    name: 'Swaroop Salon - Straightening',
    name2:'Panvel',
    price: 15000,
    image: 'img10.jpg',
    nature: {
        color: ['Straightening'],
        type: 'panvel'
    }
      
},
{
    id: 54,
    name: 'Swaroop Salon - Keratin',
    name2:'Panvel',
    price: 6000,
    image: 'img11.jpg',
    nature: {
        color: ['Keratin'],
        type: 'panvel'
    }
},
{
    id: 55,
    name: 'Swaroop Salon - Hairspa',
    name2:'Panvel',
    price: 3000,
    image: 'img12.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'panvel'
    }
      
},
// ++++
{
    id: 56,
    name: 'Nazims Salon And Academy - Highlights',
    name2:'Panvel',
    price: 12000,
    image: 'img13.jpg',
    nature: {
        color: ['Highlights'],
        type: 'panvel'
    }
      
},
{
    id: 57,
    name: 'Nazims Salon And Academy - Haircut',
    name2:'Panvel',
    price: 1500,
    image: 'img14.jpg',
    nature: {
        color: ['Haircut'],
        type: 'panvel'
    }
      
},
{
    id: 58,
    name: 'Nazims Salon And Academy - Straightening',
    name2:'Panvel',
    price: 10000,
    image: 'img15.jpg',
    nature: {
        color: ['Straightening'],
        type: 'panvel'
    }
      
},
{
    id: 59,
    name: 'Nazims Salon And Academy - Keratin',
    name2:'Panvel',
    price: 4000,
    image: 'img16.jpg',
    nature: {
        color: ['Keratin'],
        type: 'panvel'
    }
},
{
    id: 60,
    name: 'Nazims Salon And Academy - Hairspa',
    name2:'Panvel',
    price: 2560,
    image: 'img17.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'panvel'
    }
      
},
// ++++
{
    id: 61,
    name: 'Kapils Salon - Highlights',
    name2:'Panvel',
    price: 7000,
    image: 'img18.jpg',
    nature: {
        color: ['Highlights'],
        type: 'panvel'
    }
      
},
{
    id: 62,
    name: 'Kapils Salon - Haircut',
    name2:'Panvel',
    price: 2500,
    image: 'img19.jpg',
    nature: {
        color: ['Haircut'],
        type: 'panvel'
    }
      
},
{
    id: 63,
    name: 'Kapils Salon - Straightening',
    name2:'Panvel',
    price: 9000,
    image: 'img20.jpg',
    nature: {
        color: ['Straightening'],
        type: 'panvel'
    }
      
},
{
    id: 64,
    name: 'Kapils Salon - Keratin',
    name2:'Panvel',
    price: 3000,
    image: 'img21.jpg',
    nature: {
        color: ['Keratin'],
        type: 'panvel'
    }
},
{
    id: 65,
    name: 'Kapils Salon - Hairspa',
    name2:'Panvel',
    price: 2600,
    image: 'img22.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'panvel'
    }
      
},
// ++++
{
    id: 66,
    name: 'Infinity salon - Highlights',
    name2:'Panvel',
    price: 16000,
    image: 'img23.jpg',
    nature: {
        color: ['Highlights'],
        type: 'panvel'
    }
      
},
{
    id: 67,
    name: 'Infinity salon - Haircut',
    name2:'Panvel',
    price: 2000,
    image: 'img24.jpg',
    nature: {
        color: ['Haircut'],
        type: 'panvel'
    }
      
},
{
    id: 68,
    name: 'Infinity salon - Straightening',
    name2:'Panvel',
    price: 11000,
    image: 'img25.jpg',
    nature: {
        color: ['Straightening'],
        type: 'panvel'
    }
      
},
{
    id: 69,
    name: 'Infinity salon - Keratin',
    name2:'Panvel',
    price: 6500,
    image: 'img26.jpg',
    nature: {
        color: ['Keratin'],
        type: 'panvel'
    }
},
{
    id: 70,
    name: 'Infinity salon - Hairspa',
    name2:'Panvel',
    price: 3000,
    image: 'img27.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'panvel'
    }
      
},
// ++++
{
    id: 71,
    name: 'Hair Craft Family Salon - Highlights',
    name2:'Panvel',
    price: 15000,
    image: 'img28.jpg',
    nature: {
        color: ['Highlights'],
        type: 'panvel'
    }
      
},
{
    id: 72,
    name: 'Hair Craft Family Salon - Haircut',
    name2:'Panvel',
    price: 900,
    image: 'img29.jpg',
    nature: {
        color: ['Haircut'],
        type: 'panvel'
    }
      
},
{
    id: 73,
    name: 'Hair Craft Family Salon - Straightening',
    name2:'Panvel',
    price: 10000,
    image: 'img30.jpg',
    nature: {
        color: ['Straightening'],
        type: 'panvel'
    }
      
},
{
    id: 74,
    name: 'Hair Craft Family Salon - Keratin',
    name2:'Panvel',
    price: 5000,
    image: 'img31.jpg',
    nature: {
        color: ['Keratin'],
        type: 'panvel'
    }
},
{
    id: 75,
    name: 'Hair Craft Family Salon - Hairspa',
    name2:'Panvel',
    price: 2500,
    image: 'img32.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'panvel'
    }
      
},
// ++++


//Juhu
{
    id: 76,
    name: 'Jean-Claude Biguine Salon & Spa - Highlights',
    name2:'Juhu',
    price: 8500,
    image: 'img33.jpg',
    nature: {
        color: ['Highlights'],
        type: 'juhu'
    }
        
},
{
    id: 77,
    name: 'Jean-Claude Biguine Salon & Spa - Haircut',
    name2:'Juhu',
    price: 2500,
    image: 'img34.jpg',
    nature: {
        color: ['Haircut'],
        type: 'juhu'
    }
        
},
{
    id: 78,
    name: 'Jean-Claude Biguine Salon & Spa - Straightening',
    name2:'Juhu',
    price: 8000,
    image: 'img35.jpg',
    nature: {
        color: ['Straightening'],
        type: 'juhu'
    }
        
},
{
    id: 79,
    name: 'Jean-Claude Biguine Salon & Spa - Keratin',
    name2:'Juhu',
    price: 3000,
    image: 'img36.jpg',
    nature: {
        color: ['Keratin'],
        type: 'juhu'
    }
},
{
    id: 80,
    name: 'Jean-Claude Biguine Salon & Spa - Hairspa',
    name2:'Juhu',
    price: 2600,
    image: 'img37.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'juhu'
    }
        
},
// ++++

{
    id: 81,
    name: 'BBLUNT Salon  - Highlights',
    name2:'Juhu',
    price: 9500,
    image: 'img38.jpg',
    nature: {
        color: ['Highlights'],
        type: 'juhu'
    }
        
},
{
    id: 82,
    name: 'BBLUNT Salon  - Haircut',
    name2:'Juhu',
    price: 2100,
    image: 'img39.jpg',
    nature: {
        color: ['Haircut'],
        type: 'juhu'
    }
        
},
{
    id: 83,
    name: 'BBLUNT Salon  - Straightening',
    name2:'Juhu',
    price: 6000,
    image: 'img40.jpg',
    nature: {
        color: ['Straightening'],
        type: 'juhu'
    }
        
},
{
    id: 84,
    name: 'BBLUNT Salon  - Keratin',
    name2:'Juhu',
    price: 3500,
    image: 'img41.jpg',
    nature: {
        color: ['Keratin'],
        type: 'juhu'
    }
},
{
    id: 85,
    name: 'BBLUNT Salon  - Hairspa',
    name2:'Juhu',
    price: 3000,
    image: 'img42.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'juhu'
    }
        
},
// ++++

{
    id: 86,
    name: 'Maya Hair and Beauty Lounge - Highlights',
    name2:'Juhu',
    price: 7000,
    image: 'img43.jpg',
    nature: {
        color: ['Highlights'],
        type: 'juhu'
    }
        
},
{
    id: 87,
    name: 'Maya Hair and Beauty Lounge - Haircut',
    name2:'Juhu',
    price: 2500,
    image: 'img1.jpg',
    nature: {
        color: ['Haircut'],
        type: 'juhu'
    }
        
},
{
    id: 88,
    name: 'Maya Hair and Beauty Lounge - Straightening',
    name2:'Juhu',
    price: 8000,
    image: 'img2.jpg',
    nature: {
        color: ['Straightening'],
        type: 'juhu'
    }
        
},
{
    id: 89,
    name: 'Maya Hair and Beauty Lounge - Keratin',
    name2:'Juhu',
    price: 5000,
    image: 'img3.jpg',
    nature: {
        color: ['Keratin'],
        type: 'juhu'
    }
},
{
    id: 90,
    name: 'Maya Hair and Beauty Lounge - Hairspa',
    name2:'Juhu',
    price: 2000,
    image: 'img4.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'juhu'
    }
        
},
// ++++

{
    id: 91,
    name: 'Shiva’s Signature Salon - Haircut',
    name2:'Juhu',
    price: 7000,
    image: 'img5.jpg',
    nature: {
        color: ['Highlights'],
        type: 'juhu'
    }
        
},
{
    id: 92,
    name: 'Shiva’s Signature Salon - Haircut',
    name2:'Juhu',
    price: 2000,
    image: 'img6.jpg',
    nature: {
        color: ['Haircut'],
        type: 'juhu'
    }
        
},
{
    id: 93,
    name: 'Shiva’s Signature Salon - Straightening',
    name2:'Juhu',
    price: 12000,
    image: 'img7.jpg',
    nature: {
        color: ['Straightening'],
        type: 'juhu'
    }
        
},
{
    id: 94,
    name: 'Shiva’s Signature Salon - Keratin',
    name2:'Juhu',
    price: 3000,
    image: 'img8.jpg',
    nature: {
        color: ['Keratin'],
        type: 'juhu'
    }
},
{
    id: 95,
    name: 'Shiva’s Signature Salon - Hairspa',
    name2:'Juhu',
    price: 1500,
    image: 'img9.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'juhu'
    }
        
},
// ++++

{
    id: 96,
    name: 'Tip Top Salon - Highlights',
    name2:'Juhu',
    price: 14000,
    image: 'img10.jpg',
    nature: {
        color: ['Highlights'],
        type: 'juhu'
    }
        
},
{
    id: 97,
    name: 'Tip Top Salon - Haircut',
    name2:'Juhu',
    price: 2500,
    image: 'img11.jpg',
    nature: {
        color: ['Haircut'],
        type: 'juhu'
    }
        
},
{
    id: 98,
    name: 'Tip Top Salon - Straightening',
    name2:'Juhu',
    price: 8500,
    image: 'img12.jpg',
    nature: {
        color: ['Straightening'],
        type: 'juhu'
    }
        
},
{
    id: 99,
    name: 'Tip Top Salon - Keratin',
    name2:'Juhu',
    price: 4000,
    image: 'img13.jpg',
    nature: {
        color: ['Keratin'],
        type: 'juhu'
    }
},
{
    id: 100,
    name: 'Tip Top Salon - Hairspa',
    name2:'Juhu',
    price: 2500,
    image: 'img14.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'juhu'
    }
        
},
// ++++

//Bandra
{
    id: 101,
    name: 'Dessange Salon & Spa - Highlights',
    name2:'Bandra',
    price: 9500,
    image: 'img15.jpg',
    nature: {
        color: ['Highlights'],
        type: 'bandra'
    }
      
},
{
    id: 102,
    name: 'Dessange Salon & Spa - Haircut',
    name2:'Bandra',
    price: 5600,
    image: 'img16.jpg',
    nature: {
        color: ['Haircut'],
        type: 'bandra'
    }
      
},
{
    id: 103,
    name: 'Dessange Salon & Spa - Straightening',
    name2:'Bandra',
    price: 6500,
    image: 'img17.jpg',
    nature: {
        color: ['Straightening'],
        type: 'bandra'
    }
      
},
{
    id: 104,
    name: 'Dessange Salon & Spa - Keratin',
    name2:'Bandra',
    price: 6500,
    image: 'img18.jpg',
    nature: {
        color: ['Keratin'],
        type: 'bandra'
    }
},
{
    id: 105,
    name: 'Dessange Salon & Spa - Hairspa',
    name2:'Bandra',
    price: 3500,
    image: 'img19.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'bandra'
    }
      
},
// ++++

{
    id: 106,
    name: 'Jean Claude Olivier - Luxury Salon - Highlights',
    name2:'Bandra',
    price: 9000,
    image: 'img20.jpg',
    nature: {
        color: ['Highlights'],
        type: 'bandra'
    }
      
},
{
    id: 107,
    name: 'Jean Claude Olivier - Luxury Salon - Haircut',
    name2:'Bandra',
    price: 1500,
    image: 'img21.jpg',
    nature: {
        color: ['Haircut'],
        type: 'bandra'
    }
      
},
{
    id: 108,
    name: 'Jean Claude Olivier - Luxury Salon - Straightening',
    name2:'Bandra',
    price: 8000,
    image: 'img22.jpg',
    nature: {
        color: ['Straightening'],
        type: 'bandra'
    }
      
},
{
    id: 109,
    name: 'Jean Claude Olivier - Luxury Salon - Keratin',
    name2:'Bandra',
    price: 5000,
    image: 'img23.jpg',
    nature: {
        color: ['Keratin'],
        type: 'bandra'
    }
},
{
    id: 110,
    name: 'Jean Claude Olivier - Luxury Salon - Hairspa',
    name2:'Bandra',
    price: 2500,
    image: 'img24.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'bandra'
    }
      
},
// ++++

{
    id: 111,
    name: "A'Kreations Hair & Beyond Luxury Salon - Highlights",
    name2:'Bandra',
    price: 7000,
    image: 'img25.jpg',
    nature: {
        color: ['Highlights'],
        type: 'bandra'
    }
      
},
{
    id: 112,
    name: "A'Kreations Hair & Beyond Luxury Salon - Haircut",
    name2:'Bandra',
    price: 2500,
    image: 'img26.jpg',
    nature: {
        color: ['Haircut'],
        type: 'bandra'
    }
      
},
{
    id: 113,
    name: "A'Kreations Hair & Beyond Luxury Salon - Straightening",
    name2:'Bandra',
    price: 7500,
    image: 'img27.jpg',
    nature: {
        color: ['Straightening'],
        type: 'bandra'
    }
      
},
{
    id: 114,
    name: "A'Kreations Hair & Beyond Luxury Salon - Keratin",
    name2:'Bandra',
    price: 9500,
    image: 'img28.jpg',
    nature: {
        color: ['Keratin'],
        type: 'bandra'
    }
},
{
    id: 115,
    name: "A'Kreations Hair & Beyond Luxury Salon - Hairspa",
    name2:'Bandra',
    price: 1700,
    image: 'img29.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'bandra'
    }
      
},
// ++++

{
    id: 116,
    name: 'MAI Salon - Highlights',
    name2:'Bandra',
    price: 11000,
    image: 'img30.jpg',
    nature: {
        color: ['Highlights'],
        type: 'bandra'
    }
      
},
{
    id: 117,
    name: 'MAI Salon - Haircut',
    name2:'Bandra',
    price: 1500,
    image: 'img31.jpg',
    nature: {
        color: ['Haircut'],
        type: 'bandra'
    }
      
},
{
    id: 118,
    name: 'MAI Salon - Straightening',
    name2:'Bandra',
    price: 15000,
    image: 'img32.jpg',
    nature: {
        color: ['Straightening'],
        type: 'bandra'
    }
      
},
{
    id: 119,
    name: 'MAI Salon - Keratin',
    name2:'Bandra',
    price: 5000,
    image: 'img33.jpg',
    nature: {
        color: ['Keratin'],
        type: 'bandra'
    }
},
{
    id: 120,
    name: 'MAI Salon - Hairspa',
    name2:'Bandra',
    price: 1500,
    image: 'img34.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'bandra'
    }
      
},
// ++++

{
    id: 121,
    name: 'Bespoke Salon - Highlights',
    name2:'Bandra',
    price: 7000,
    image: 'img35.jpg',
    nature: {
        color: ['Highlights'],
        type: 'bandra'
    }
      
},
{
    id: 122,
    name: 'Bespoke Salon - Haircut',
    name2:'Bandra',
    price: 2500,
    image: 'img36.jpg',
    nature: {
        color: ['Haircut'],
        type: 'bandra'
    }
      
},
{
    id: 123,
    name: 'Bespoke Salon - Straightening',
    name2:'Bandra',
    price: 12000,
    image: 'img37.jpg',
    nature: {
        color: ['Straightening'],
        type: 'bandra'
    }
      
},
{
    id: 124,
    name: 'Bespoke Salon - Keratin',
    name2:'Bandra',
    price: 3000,
    image: 'img38.jpg',
    nature: {
        color: ['Keratin'],
        type: 'bandra'
    }
},
{
    id: 125,
    name: 'Bespoke Salon - Hairspa',
    name2:'Bandra',
    price: 2600,
    image: 'img39.jpg',
    nature: {
        color: ['Hairspa'],
        type: 'bandra'
    }
      
},
// ++++

];

let productFilter = listProducts;
showProduct(productFilter);

function showProduct(productFilter){
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');

        // create link
        let newLink = document.createElement('a');
        newLink.href = 'Untitled-' + item.id + '.html'; // replace with your link
       newLink.style.textDecoration="none";
        newItem.appendChild(newLink);


        // create image
        let newImage = new Image();
        newImage.src = item.image;
        newLink.appendChild(newImage);

        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newLink.appendChild(newTitle);

        // create name2 product
        let newTitle2 = document.createElement('div');
        newTitle2.classList.add('title');
        newTitle2.innerText = item.name2;
        newLink.appendChild(newTitle2);

        // create price
        let newPrice = document.createElement('div');
        newPrice.classList.add('price');
        newPrice.innerText = item.price.toLocaleString() + ' INR';
        newLink.appendChild(newPrice);

        list.appendChild(newItem);
    });
}

filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        // check category
        if(valueFilter.category.value != ''){
            if(item.nature.type != valueFilter.category.value){
                return false;
            }
        }
        // check color
        if(valueFilter.color.value != ''){
            if(!item.nature.color.includes(valueFilter.color.value)){
                return false;
            }
        }
        // check name
        if(valueFilter.name.value != ''){
            if(!item.name.includes(valueFilter.name.value)){
                return false;
            }
        }
        // check min price
        if(valueFilter.minPrice.value != ''){
            if(item.price < valueFilter.minPrice.value){
                return false;
            }
        }
        //  check max price
        if(valueFilter.maxPrice.value != ''){
            if(item.price > valueFilter.maxPrice.value){
                return false;
            }
        }

        return true;
    })
    showProduct(productFilter);
})