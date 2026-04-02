const sushiFood = [
    {
        name: "Dragon Roll",
        ingredients: "Shrimp Tempura, Avocado, Cucumber, Eel Sauce, Spicy Mayo",
        desc: "A bold and crispy roll topped with creamy avocado and drizzled with sweet eel sauce and spicy mayo.",
        price: 18.99,
        src: "../assets/sushi-1.webp",
    },
    {
        name: "Salmon Nigiri",
        ingredients: "Fresh Salmon, Sushi Rice, Wasabi, Soy Sauce",
        desc: "Delicate slices of fresh Atlantic salmon hand-pressed over perfectly seasoned sushi rice.",
        price: 14.99,
        src: "../assets/sushi-2.webp",
    },
    {
        name: "Spicy Tuna Roll",
        ingredients: "Tuna, Sriracha, Cucumber, Nori, Sesame Seeds",
        desc: "Premium tuna blended with sriracha heat, wrapped in nori with crunchy cucumber and sesame-crusted rice.",
        price: 15.99,
        src: "../assets/sushi-3.webp",
    },
    {
        name: "Rainbow Roll",
        ingredients: "Crab, Avocado, Tuna, Salmon, Shrimp, Yellowtail",
        desc: "A California roll base topped with a vibrant array of fresh sashimi and creamy avocado slices.",
        price: 21.99,
        src: "../assets/sushi-4.webp",
    },
    {
        name: "Volcano Roll",
        ingredients: "Scallop, Crab, Masago, Spicy Mayo, Green Onion",
        desc: "A fiery baked roll loaded with spicy scallop and crab mix, finished with masago and green onion.",
        price: 19.99,
        src: "../assets/sushi-5.webp",
    },
    {
        name: "Philadelphia Roll",
        ingredients: "Smoked Salmon, Cream Cheese, Cucumber, Nori, Sushi Rice",
        desc: "A western classic combining rich cream cheese with silky smoked salmon and refreshing cucumber.",
        price: 13.99,
        src: "../assets/sushi-6.webp",
    },
]

export { sushiFood }

const diningTypes = [
    {
        type: "Fine",
        price: 499,
        src: "../assets/fine-dining-1.webp",
        includes: ["Bottle of Champagne", "Fine Sushi Tower For 2+", "Dessert"],
    },
    {
        type: "Gold",
        price: 999,
        src: "../assets/gold-dining-2.webp",
        includes: ["Bottle of Champagne", "Secret Menu Sushi For 2+", "Dessert"],
    },
    {
        type: "Luxury",
        price: 1599,
        src: "../assets/luxury-dining-3.webp",
        includes: ["Bottle of Luxury Champagne", "Special Menu Sushi For 2+", "Royal Dessert"],
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
                name: 'Spinach & Ricotta Gnocchi', price: '1,899',
                src: '../assets/spinach-ricotta-gnocchi.webp',
                ingredients: 'Spinach · Ricotta · Basil · Parmesan · Butter',
                desc: 'Delicate hand-rolled gnocchi filled with fresh ricotta and spinach, served in a silky basil emulsion with aged Parmesan.',
                spice: 1, tag: 'Signature', badge: "Chef's Special", featured: true,
            },
            {
                itemId: 'italian-02',
                name: 'Wood-Fired Neapolitan Pizza', price: '2,199',
                src: '../assets/wood-fired-neapolitan-pizza.webp',
                ingredients: 'San Marzano Tomato · Buffalo Mozzarella · Charred Lemon · Roasted Vegetables',
                desc: 'Authentic Neapolitan pizza fired in our wood oven, topped with charred lemon and a medley of roasted seasonal vegetables.',
                spice: 1, tag: 'Popular',
            },
            {
                itemId: 'italian-03',
                name: 'Black Truffle Risotto', price: '3,299',
                src: '../assets/black-truffle-risotto.webp',
                ingredients: 'Arborio Rice · Black Truffle · Parmigiano Reggiano · White Wine · Shallots',
                desc: 'Slow-stirred Arborio rice enriched with aged Parmigiano Reggiano and finished with freshly shaved black truffle.',
                spice: 1, tag: 'Premium', badge: 'Premium',
            },
            {
                itemId: 'italian-04',
                name: 'Wild Mushroom & Truffle Tartlet', price: '1,899',
                src: '../assets/wild-mushroom-truffle-tartlet.webp',
                ingredients: 'Wild Mushrooms · Black Truffle · Cream · Thyme · Shortcrust Pastry',
                desc: 'A crisp buttery tartlet filled with sautéed wild mushrooms and cream, crowned with generous black truffle shavings.',
                spice: 1, tag: 'Seasonal',
            },
            {
                itemId: 'italian-05',
                name: 'Beef Carpaccio', price: '1,999',
                src: '../assets/beef-carpaccio.webp',
                ingredients: 'Prime Beef · Rocket · Capers · Aged Balsamic · Parmigiano',
                desc: 'Paper-thin slices of prime beef tenderloin dressed with rocket, capers, shaved Parmigiano and a drizzle of aged balsamic.',
                spice: 1, tag: 'Classic',
            },
            {
                itemId: 'italian-06',
                name: 'Pan-Seared Sea Bass', price: '2,999',
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
                name: 'Seared Duck Breast', price: '3,499',
                src: '../assets/seared-duck-breast.webp',
                ingredients: 'Duck Breast · Cherry Reduction · Herb Oil · Seasonal Greens',
                desc: 'Perfectly scored duck breast seared to a deep mahogany crust, served with a rich cherry reduction and aromatic herb oil.',
                spice: 1, tag: 'Signature', badge: "Chef's Special", featured: true,
            },
            {
                itemId: 'european-02',
                name: 'Pan-Seared Halibut', price: '3,199',
                src: '../assets/pan-seared-halibut.webp',
                ingredients: 'Halibut · Saffron Foam · Violet Garnish · Lemon Butter',
                desc: 'Delicate halibut fillet pan-seared to a golden crust, elegantly presented with saffron foam and edible violet garnish.',
                spice: 1, tag: 'Fresh Daily',
            },
            {
                itemId: 'european-03',
                name: 'Seared Foie Gras', price: '3,899',
                src: '../assets/seared-foie-gras.webp',
                ingredients: 'Duck Foie Gras · Truffle Jus · Microgreens · Brioche',
                desc: 'Luxuriously rich foie gras seared to a golden crust, served with a deep truffle jus, microgreens and toasted brioche.',
                spice: 1, tag: 'Premium', badge: 'Premium',
            },
            {
                itemId: 'european-04',
                name: 'Grilled Whole Langoustine', price: '4,299',
                src: '../assets/grilled-whole-langoustine.webp',
                ingredients: 'Langoustine · Lemon Butter · Garlic · Fresh Herbs',
                desc: 'Whole langoustine grilled over open flame, basted in a fragrant lemon herb butter and served with the shell for dramatic presentation.',
                spice: 1, tag: 'Seasonal',
            },
            {
                itemId: 'european-05',
                name: 'Vanilla Panna Cotta', price: '1,499',
                src: '../assets/vanilla-panna-cotta.webp',
                ingredients: 'Vanilla · Cream · Wild Berry Compote · Shortcrust Tuile',
                desc: 'A silky smooth vanilla panna cotta served with a vibrant wild berry compote and a delicate shortcrust tuile.',
                spice: 1, tag: 'Classic',
            },
        ],
    },
]

export { menuData }