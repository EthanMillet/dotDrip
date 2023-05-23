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
            itemUrl: 'https://example.com/shirt',
            imageUrl: 'https://example.com/shirt.jpg'
          });
          const clothes2 = await Clothes.create({
            name: 'Pants',
            itemUrl: 'https://example.com/pants',
            imageUrl: 'https://example.com/pants.jpg'
          });
      
          // Create sample Outfitss
          const Outfits1 = await Outfits.create({
            name: 'Casual Outfits',
            item1: clothes1._id,
            item2: clothes2._id
          });
          const Outfits2 = await Outfits.create({
            name: 'Formal Outfits',
            item1: clothes2._id,
            item2: clothes1._id
          });
      
          // Create a sample user
      
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