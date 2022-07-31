const mongoose = require('mongoose');
const config = require('./config');
const Salad = require('./models/Salads');



const run = async () => {
    await mongoose.connect(config.mongo.db, config.mongo.options);

    const collections = await mongoose.connection.db.listCollections().toArray();
    for (let coll of collections) {
        await mongoose.connection.db.dropCollection(coll.name);
    }

    const [salad1, salad2] = await Salad.create({
        title: 'Овощной салат с кунжутом, по-корейски',
        description: 'огурцы свежие, морковь, перец сладкий, лук зелёный, чеснок, перец чили, зелень укропа, кунжут, соус соевый, уксус яблочный, сахар, масло подсолнечное, соль...',
        image: 'salad1.jpg',
        price: 150
    }, {
        title: 'Помидоры по-корейски',
        description: 'помидоры, перец болгарский, зелень петрушки, зелень укропа, уксус, масло растительное, сахар, соль, паприка, кориандр, чеснок',
        image: 'salad2.jpg',
        price: 100
    });

    await mongoose.connection.close();
}
run().catch((e) => console.error(e));