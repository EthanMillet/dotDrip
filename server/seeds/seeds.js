const { User, Outfits, Clothes } = require('../models');
const conn = require('../config/connection');

conn.once('open', async () => {
  const seedData = async () => {
    try {
      // Clear existing data
      await User.deleteMany();
      await Outfits.deleteMany();
      await Clothes.deleteMany();

      // Create sample clothes
      const clothes1 = await Clothes.create({
        name: 'Shirt',
        itemUrl: 'https://www2.hm.com/en_us/productpage.1032855001.html',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Faf%2F5b%2Faf5bc2554eac0ea2a3649dc9b730751614636733.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D'
      });
      const clothes2 = await Clothes.create({
        name: 'Pants',
        itemUrl: 'https://images-dynamic-arcteryx.imgix.net/S23/1350x1710/Beta-AR-Pant-Black.jpg?auto=format%2Ccompress&q=75&ixlib=react-9.7.0&h=525&w=450',
        imageUrl: 'https://images-dynamic-arcteryx.imgix.net/S23/1350x1710/Beta-AR-Pant-Black.jpg?auto=format%2Ccompress&q=75&ixlib=react-9.7.0&h=525&w=450'
      });
      const clothes3 = await Clothes.create({
        name: 'Pants',
        itemUrl: 'https://www.ssense.com/en-us/women/product/yume-yume/black-cloud-walker-boots/10792481',
        imageUrl: 'https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/222844F113003_1/yume-yume-black-cloud-walker-boots.jpg'
      });
      
      // // Create sample outfits
      // const outfit1 = await Outfits.create({
      //   name: 'Casual Outfit',
      //   item1: clothes1._id,
      //   item2: clothes2._id
      // });
      // const outfit2 = await Outfits.create({
      //   name: 'Formal Outfit',
      //   item1: clothes2._id,
      //   item2: clothes1._id
      // });

      // Create a sample user
      await User.create({
        username: 'exampleuser',
        email: 'user@example.com',
        password: 'password123',
        clothes: [clothes1._id, clothes2._id],
        // outfits: [outfit1._id, outfit2._id]
      });

      console.log('Sample data seeded successfully.');
      process.exit(0);
    } catch (error) {
      console.error('Error seeding data:', error);
      process.exit(1);
    }
  };

  // Call the seedData function to populate the database
  seedData();
});
