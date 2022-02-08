const db = require ('./connection.js');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Original'},
        { name: 'Print'},
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Love',
            details: '900mm x 600mm, acrylic on canvas',
            medium: 'acrylic on canvas',
            size: '900mm x 600mm',
            description: 'Made with all the flow that love creates and provides. Thoughless, an embodiment of a pure feeling.',
            price: 800,
            quantity: 1,
            image: 'love.jpg',
            category: categories[0]._id
        },
        {
            name: "Love's child",
            details: '500mm x 400mm, acrylic on canvas',
            medium: 'acrylic on canvas',
            size: '400mm x 500mm',
            description: 'made with love in the heart',
            price: 400,
            quantity: 1,
            image: 'love-child.jpg',
            category: categories[0]._id
        },
        {
            name: 'Boundaries',
            details: '900mm x 600mm, acrylic on canvas',
            medium: 'acrylic on canvas',
            size: '900mm x 600mm',
            description: 'country is hard set, the boundaries are clear and known. This was created when I was first discovering my own boundaries, a new and powerful experience.',
            price: 800,
            quantity: 1,
            image: 'set.jpg',
            category: categories[0]._id
        },
        {
            name: 'Boundaries - Print',
            details: '900mm x 600mm, acrylic on canvas',
            description: 'country is hard set, the boundaries are clear and known. This was created when I was first discovering my own boundaries, a new and powerful experience.',
            price:  50,
            quantity: 20,
            image: 'set.jpg',
            category: categories[1]._id
        },
        {
            name: 'Sovereignty with my anger - Print',
            details: '1000mm x 1200mm, acrylic on canvas',
            description: 'country is hard set, the boundaries are clear and known. This was created when I was first discovering my own boundaries, a new and powerful experience.',
            price: 50,
            quantity: 20,
            image: 'sovereignty.jpg',
            category: categories[1]._id
        },
        // {
        //     name: 'Anger',
        //     details: '900mm x 600mm, acrylic on canvas',
        //     description: 'Bursting with life and excitment, bubbling and spilling out. This was created when I found out my ex had moved on. I was bursting with joy',
        //     image: 'anger.jpg',
        //     category: categories[0]._id,
        //     price: 800,
        //     quantity: 1
        // },
        {
            name: 'Burst',
            details: '900mm x 600mm, acrylic on canvas',
            medium: 'acrylic on canvas',
            size: '900mm x 600mm',
            description: 'Bursting with life and excitment, bubbling and spilling out. This was created when I found out my ex had moved on. I was bursting with joy',
            image: 'burst.jpg',
            category: categories[0]._id,
            price: 800,
            quantity: 1
        },
        {
            name: 'Burning',
            details: '500mm x 400mm, acrylic on canvas',
            medium: 'acrylic on canvas',
            size: '900mm x 600mm',
            description: "I grew up around bach burning. It is a normal and expected part of life. If burnings aren't done the landscape becomes dangerous. The same must be practiced inside us.",
            image: 'burning.jpg',
            category: categories[0]._id,
            price: 400,
            quantity: 1
        },
        {
            name: 'Sisters',
            details: '900mm x 600mm, acrylic on canvas',
            medium: 'acrylic on canvas',
            size: '900mm x 600mm',
            description: 'I am so lucky to have four older sisters. They have taught me how to be a woman, we have entwinded feminity because of this',
            price: 800,
            quantity: 1,
            image: 'sisters.jpg',
            category: categories[0]._id,
        },
        {
            name: 'Taking up Space',
            details: '900mm x 600mm, acrylic on canvas',
            medium: 'acrylic on canvas',
            size: '900mm x 600mm',
            description: 'Being a loud and proud Aboriginal woman, I have always recived some form of being "too much". I voice my opinions strongly, laugh loudly, and I will continue to take up as much space as I deem fit. I refuse to let the colony control how I shine.',
            price: 800,
            quantity: 1,
            image: 'taking.jpg',
            category: categories[0]._id
        },
        {
            name: 'Winthali',
            details: '900mm x 600mm, oil on canvas board',
            description: 'Winthali is the Bunuba word for fire',
            price: 800,
            quantity: 1,
            image: 'Winthali.PNG',
            category: categories[0]._id,
        },
        {
            name: 'Ray',
            details: '600mm x 450mm, acrylic on canvas',
            medium: 'acrylic on canvas',
            size: '450mm x 600mm',
            description: "The Ray are the water spirits that vistit us in our dreams. They come to us through water. They see us, but we don't see them",
            price: 800,
            quantity: 1,
            image: 'ray.jpg',
            category: categories[0]._id,
        },
        {
            name: 'Guruwa',
            details: '900mm x 600mm, acrylic on canvas',
            description: 'Guruwa is the Bunuba word for water These are all the colours seen while opening my eyes submerged in the Bandaral Ngarri (Fitzroy River)',
            price: 800,
            quantity: 1,
            image: 'guruwa.jpg',
            category: categories[0]._id,
        },
        {
            name: 'Guruwa',
            details: '900mm x 600mm, acrylic on canvas',
            description: 'Guruwa is the Bunuba word for water. These are all the colours seen while opening my eyes submerged in the Bandaral Ngarri (Fitzroy River) ',
            price: 50,
            quantity: 1,
            image: 'guruwa.jpg',
            category: categories[1]._id,
        },
        {
            name: 'rain',
            details: '500mm x 400mm, oil on canvas',
            description: 'Boon Wurrong country has lovely rainy days in their winter. There is so much beauty and growth. ',
            price: 800,
            quantity: 1,
            image: 'rain.jpg',
            category: categories[0]._id,
        },
        {
            name: 'Intergation',
            details: '900mm x 600mm, acrylic on canvas',
            medium: 'acrylic on canvas',
            size: '900mm x 600mm',
            description: 'Guruwa is the Bunuba word for water ',
            price: 800,
            quantity: 1,
            image: 'intergation.jpg',
            category: categories[0]._id,
        },
        {
            name: 'Ebbs',
            details: '330mm x 230mm, acrylic on canvas',
            description: 'The embers of fire have burnt down leaving behind  ',
            price: 80,
            quantity: 1,
            image: 'ebbs.JPG',
            category: categories[0]._id,
        },
    ]);

    console.log("products seeded");

    // await Print.deleteMany();

    // const prints = await Print.insertMany([
    //     {
    //         name: 'Set',
    //         description: 'country is hard set, the boundaries are clear and known. This was created when I was first discovering my own boundaries',
    //         price: 50,
    //         image: 'set.jpg',
    //         category: categories[1]._id
    //     },
    //     {
    //         name: 'Gurwa',
    //         description: 'country is hard set, the boundaries are clear and known. This was created when I was first discovering my own boundaries',
    //         price: 800,
    //         image: 'set.jpg',
    //         category: categories[1]._id
    //     },
    // ]);

    // console.log("prints seeded");

    await User.deleteMany();

    await User.create({
        firstName: 'Pamela',
        lastName: 'Washington',
        email: 'pamela@testmail.com',
        password: 'password12345',
        orders: [
        {
            products: [products[0]._id, products[0]._id, products[1]._id]
        }
        ]
    });

    await User.create({
        firstName: 'Obby',
        lastName: 'Bedford',
        email: 'obby.bedford@gmail.com',
        password: 'WeIn1967'
    });

    console.log('users seeded');

    process.exit();
})