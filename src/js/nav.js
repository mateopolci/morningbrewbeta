//Class declaration
class Coffee {
    constructor(id, name, origin, price, img) {
        this.id = id;
        this.name = name;
        this.origin = origin;
        this.price = price;
        this.img = img;
    }
}
// Array init
const coffeeList = [
    new Coffee(
        1,
        'Ethiopian Yirgacheffe',
        'Ethiopia',
        18.99,
        '/src/assets/images/coffee/ethiopianYirgacheffe.png'
    ),
    new Coffee(
        2,
        'Colombian Supremo',
        'Colombia',
        16.49,
        '/src/assets/images/coffee/colombianSupremo.png'
    ),
    new Coffee(
        3,
        'Guatemalan Antigua',
        'Guatemala',
        17.75,
        '/src/assets/images/coffee/guatemalanAntigua.png'
    ),
    new Coffee(
        4,
        'Costa Rican Tarrazu',
        'Costa Rica',
        18.0,
        '/src/assets/images/coffee/costaRicanTarrazu.png'
    ),
    new Coffee(
        5,
        'Brazilian Santos',
        'Brazil',
        15.99,
        '/src/assets/images/coffee/brazillianSantos.png'
    ),
    new Coffee(
        6,
        'Honduran Marcala',
        'Honduras',
        16.25,
        '/src/assets/images/coffee/honduranMarcala.png'
    ),
    new Coffee(
        7,
        'Ethiopian Sidamo',
        'Ethiopia',
        19.75,
        '/src/assets/images/coffee/ethiopianSidamo.png'
    ),
    new Coffee(
        8,
        'Colombian Excelso',
        'Colombia',
        17.0,
        '/src/assets/images/coffee/colombianExcelso.png'
    ),
    new Coffee(
        9,
        'Guatemalan Tenango',
        'Guatemala',
        18.5,
        '/src/assets/images/coffee/guatemalanTenango.png'
    ),
    new Coffee(
        10,
        'Indonesian Sumatra',
        'Indonesia',
        20.0,
        '/src/assets/images/coffee/indonesianSumatra.png'
    ),
    new Coffee(
        11,
        'Costa Rican Brunca',
        'Costa Rica',
        17.5,
        '/src/assets/images/coffee/costaRicanBrunca.png'
    ),
];
const mobileMenu = document.getElementById('mobileMenu');
const mobileButton = document.getElementById('mobileButton');

mobileButton.addEventListener('click', (event) => {
    event.preventDefault();
    mobileMenu.classList.toggle('hidden');
});
