
const diningTypes = [
    {
        type: "Classic",
        price: 2500,
        src: "../assets/classic-dining.webp",
        includes: ["3-Course Italian Menu", "Still & Sparkling Water", "Seasonal Dessert"],
    },
    {
        type: "Premium",
        price: 5000,
        src: "../assets/premium-dining.webp",
        includes: ["5-Course European Tasting Menu", "Bottle of House Wine", "Chef's Dessert Selection"],
    },
    {
        type: "Luxury",
        price: 9500,
        src: "../assets/luxury-dining.webp",
        includes: ["7-Course Private Tasting Menu", "Bottle of Luxury Champagne", "Royal Dessert & Petit Fours"],
    },
]

export { diningTypes }

const menuData = [
    {
        id: 'italian',
        number: '01',
        tag: "Chef's Picks",
        title: 'Italian',
        items: [
            {
                itemId: 'italian-01',
                name: 'Spinach & Ricotta Gnocchi', price: '1899',
                src: '../assets/spinach-ricotta-gnocchi.webp',
                ingredients: 'Spinach · Ricotta · Basil · Parmesan · Butter',
                desc: 'Delicate hand-rolled gnocchi filled with fresh ricotta and spinach, served in a silky basil emulsion with aged Parmesan.',
                spice: 1, tag: 'Signature', badge: "Chef's Special", featured: true,
            },
            {
                itemId: 'italian-02',
                name: 'Wood-Fired Neapolitan Pizza', price: '2199',
                src: '../assets/wood-fired-neapolitan-pizza.webp',
                ingredients: 'San Marzano Tomato · Buffalo Mozzarella · Charred Lemon · Roasted Vegetables',
                desc: 'Authentic Neapolitan pizza fired in our wood oven, topped with charred lemon and a medley of roasted seasonal vegetables.',
                spice: 1, tag: 'Popular',
            },
            {
                itemId: 'italian-03',
                name: 'Black Truffle Risotto', price: '3299',
                src: '../assets/black-truffle-risotto.webp',
                ingredients: 'Arborio Rice · Black Truffle · Parmigiano Reggiano · White Wine · Shallots',
                desc: 'Slow-stirred Arborio rice enriched with aged Parmigiano Reggiano and finished with freshly shaved black truffle.',
                spice: 1, tag: 'Premium', badge: 'Premium',
            },
            {
                itemId: 'italian-04',
                name: 'Wild Mushroom & Truffle Tartlet', price: '1899',
                src: '../assets/wild-mushroom-truffle-tartlet.webp',
                ingredients: 'Wild Mushrooms · Black Truffle · Cream · Thyme · Shortcrust Pastry',
                desc: 'A crisp buttery tartlet filled with sautéed wild mushrooms and cream, crowned with generous black truffle shavings.',
                spice: 1, tag: 'Seasonal',
            },
            {
                itemId: 'italian-05',
                name: 'Beef Carpaccio', price: '1999',
                src: '../assets/beef-carpaccio.webp',
                ingredients: 'Prime Beef · Rocket · Capers · Aged Balsamic · Parmigiano',
                desc: 'Paper-thin slices of prime beef tenderloin dressed with rocket, capers, shaved Parmigiano and a drizzle of aged balsamic.',
                spice: 1, tag: 'Classic',
            },
            {
                itemId: 'italian-06',
                name: 'Pan-Seared Sea Bass', price: '2999',
                src: '../assets/pan-seared-sea-bass.webp',
                ingredients: 'Sea Bass · Cherry Tomato · Basil Oil · Garlic · Capers',
                desc: 'Crispy-skinned sea bass pan-seared to perfection, served with roasted cherry tomatoes and fragrant basil oil.',
                spice: 1, tag: 'Bestseller',
            },
        ],
    },
    {
        id: 'european',
        number: '02',
        tag: 'Continental Classics',
        title: 'European',
        items: [
            {
                itemId: 'european-01',
                name: 'Seared Duck Breast', price: '3499',
                src: '../assets/seared-duck-breast.webp',
                ingredients: 'Duck Breast · Cherry Reduction · Herb Oil · Seasonal Greens',
                desc: 'Perfectly scored duck breast seared to a deep mahogany crust, served with a rich cherry reduction and aromatic herb oil.',
                spice: 1, tag: 'Signature', badge: "Chef's Special", featured: true,
            },
            {
                itemId: 'european-02',
                name: 'Pan-Seared Halibut', price: '3199',
                src: '../assets/pan-seared-halibut.webp',
                ingredients: 'Halibut · Saffron Foam · Violet Garnish · Lemon Butter',
                desc: 'Delicate halibut fillet pan-seared to a golden crust, elegantly presented with saffron foam and edible violet garnish.',
                spice: 1, tag: 'Fresh Daily',
            },
            {
                itemId: 'european-03',
                name: 'Seared Foie Gras', price: '3899',
                src: '../assets/seared-foie-gras.webp',
                ingredients: 'Duck Foie Gras · Truffle Jus · Microgreens · Brioche',
                desc: 'Luxuriously rich foie gras seared to a golden crust, served with a deep truffle jus, microgreens and toasted brioche.',
                spice: 1, tag: 'Premium', badge: 'Premium',
            },
            {
                itemId: 'european-04',
                name: 'Grilled Whole Langoustine', price: '4299',
                src: '../assets/grilled-whole-langoustine.webp',
                ingredients: 'Langoustine · Lemon Butter · Garlic · Fresh Herbs',
                desc: 'Whole langoustine grilled over open flame, basted in a fragrant lemon herb butter and served with the shell for dramatic presentation.',
                spice: 1, tag: 'Seasonal',
            },
            {
                itemId: 'european-05',
                name: 'Vanilla Panna Cotta', price: '1499',
                src: '../assets/vanilla-panna-cotta.webp',
                ingredients: 'Vanilla · Cream · Wild Berry Compote · Shortcrust Tuile',
                desc: 'A silky smooth vanilla panna cotta served with a vibrant wild berry compote and a delicate shortcrust tuile.',
                spice: 1, tag: 'Classic',
            },
        ],
    },
]

export { menuData }