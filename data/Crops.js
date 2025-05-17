export const crop = [
  {
    id: 1,
    name: "Wheat",
    image: "../../assets/crops/wheat.jpg",
    scientificName: "Triticum aestivum",
    family: "Poaceae",
    varieties: [
      {
        name: "Hard Red Winter",
        description: "A variety known for its high protein content.",
      },
      {
        name: "Soft Red Winter",
        description: "A variety used for making cakes and pastries.",
      },
      {
        name: "Hard Red Spring",
        description: "A variety with high gluten content, ideal for bread.",
      },
      { name: "Durum", description: "A variety used for making pasta." },
      {
        name: "White Wheat",
        description: "A variety with a milder flavor, used for bread.",
      },
      { name: "Spelt", description: "An ancient variety with a nutty flavor." },
      {
        name: "Einkorn",
        description: "One of the oldest cultivated forms of wheat.",
      },
      { name: "Emmer", description: "An ancient variety with a rich history." },
      {
        name: "Khorasan",
        description: "A variety known for its large grains and nutty flavor.",
      },
      {
        name: "Club Wheat",
        description: "A variety with a soft texture, used for pastries.",
      },
      {
        name: "Triticale",
        description: "A hybrid of wheat and rye, known for its hardiness.",
      },
      {
        name: "Red Fife",
        description: "An heirloom variety known for its flavor.",
      },
      {
        name: "White Sonora",
        description: "A soft white wheat variety used for tortillas.",
      },
      {
        name: "Hard White",
        description: "A variety with a high protein content, used for bread.",
      },
      {
        name: "Soft White",
        description: "A low-protein variety used for pastries.",
      },
      {
        name: "Spring Wheat",
        description:
          "Wheat planted in the spring and harvested in late summer.",
      },
      {
        name: "Winter Wheat",
        description: "Wheat planted in the fall and harvested in the spring.",
      },
      {
        name: "Red Winter",
        description:
          "A variety planted in the fall and harvested in the spring.",
      },
      {
        name: "Hard Red",
        description: "A variety with a high protein content, used for bread.",
      },
      {
        name: "Soft Red",
        description: "A low-protein variety used for cakes and pastries.",
      },
      {
        name: "White Wheat",
        description: "A variety with a milder flavor, used for bread.",
      },
      {
        name: "Durum Wheat",
        description: "A hard wheat variety used for pasta.",
      },
    ],
    marketPrice: {
      local: 1500,
      national: 2000,
      international: 2500,
    },
    marketPriceUnit: "per quintal",
    marketPriceDescription:
      "The market price of wheat varies based on location and demand. The prices listed are indicative and may fluctuate based on market conditions.",
    marketPriceTrend: [
      { month: "January", price: 1500 },
      { month: "February", price: 1600 },
      { month: "March", price: 1700 },
      { month: "April", price: 1800 },
      { month: "May", price: 1900 },
      { month: "June", price: 2000 },
      { month: "July", price: 2100 },
      { month: "August", price: 2200 },
      { month: "September", price: 2300 },
      { month: "October", price: 2400 },
      { month: "November", price: 2500 },
      { month: "December", price: 2600 },
    ],
    marketPriceTrendDescription:
      "The market price trend shows the fluctuation of wheat prices over the year. Prices tend to rise during the harvest season and may drop during off-seasons.",
    description:
      "Wheat is a grass that is cultivated for its seed, which is a cereal grain. It is one of the most widely grown crops in the world and is a staple food in many countries. Wheat is used to make flour, which is then used to make bread, pasta, and other food products. It is also used as animal feed and in the production of biofuels.",
    nutrients: [
      { name: "Carbohydrates", amount: "76g" },
      { name: "Protein", amount: "13g" },
      { name: "Fat", amount: "2g" },
      { name: "Fiber", amount: "12g" },
      { name: "Vitamins", amount: "B1, B3, B5, B6, E" },
      { name: "Minerals", amount: "Iron, Magnesium, Phosphorus, Zinc" },
    ],
    healthBenefits: [
      "Rich in carbohydrates, providing energy.",
      "High in fiber, promoting digestive health.",
      "Contains essential vitamins and minerals.",
      "May help reduce the risk of heart disease.",
    ],
    cultivation: {
      soilType: "Loamy or sandy soil with good drainage.",
      climate: "Temperate climate with moderate rainfall.",
      plantingSeason: "Spring or fall, depending on the variety.",
      harvestingTime: "Typically 4-6 months after planting.",
    },
    commonDieseases: [
      {
        name: "Wheat rust",
        description:
          "A fungal disease that causes reddish-brown pustules on leaves and stems.",
      },
      {
        name: "Fusarium head blight",
        description:
          "A fungal disease that affects the heads of wheat, causing grain discoloration and reduced yield.",
      },
      {
        name: "Aphids",
        description:
          "Small sap-sucking insects that can transmit viruses and cause leaf curling.",
      },
    ],
    Pests: [
      {
        name: "Wheat stem sawfly",
        description:
          "A pest that bores into the stems of wheat plants, causing them to break.",
      },
      {
        name: "Hessian fly",
        description:
          "A small fly that lays eggs on wheat plants, and its larvae feed on the leaves.",
      },
      {
        name: "Armyworms",
        description:
          "Caterpillars that feed on the leaves of wheat plants, causing damage.",
      },
      {
        name: "Cutworms",
        description:
          "Larvae that cut off young wheat plants at the soil level.",
      },
    ],
    uses: [
      "Flour for baking",
      "Pasta production",
      "Animal feed",
      "Biofuel production",
    ],
    recipes: [
      {
        name: "Wheat Bread",
        ingredients: ["Flour", "Water", "Yeast", "Salt"],
        instructions:
          "Mix ingredients, knead dough, let rise, shape, and bake.",
      },
      {
        name: "Pasta",
        ingredients: ["Flour", "Eggs", "Salt"],
        instructions:
          "Mix ingredients, roll out dough, cut into shapes, and cook.",
      },
    ],
  },
  {
    id: 2,
    name: "Banana",
    image: "../../assets/crops/banana.jpg",
    scientificName: "Musa spp.",
    family: "Musaceae",
    varieties: [
      {
        name: "Cavendish",
        description: "The most common commercial banana variety worldwide.",
      },
      {
        name: "Plantain",
        description: "A starchy variety often cooked before eating.",
      },
      {
        name: "Red Banana",
        description: "A sweet variety with reddish-purple skin.",
      },
      {
        name: "Apple Banana",
        description: "A small, sweet variety with an apple-like flavor.",
      },
      {
        name: "Burro Banana",
        description: "A squat, tangy variety used in cooking and desserts.",
      },
    ],
    marketPrice: {
      local: 800,
      national: 1000,
      international: 1200,
    },
    marketPriceUnit: "per quintal",
    marketPriceDescription:
      "Banana prices vary depending on quality, variety, and market demand. The prices listed are indicative and may fluctuate.",
    marketPriceTrend: [
      { month: "January", price: 800 },
      { month: "February", price: 820 },
      { month: "March", price: 850 },
      { month: "April", price: 900 },
      { month: "May", price: 950 },
      { month: "June", price: 1000 },
      { month: "July", price: 1050 },
      { month: "August", price: 1100 },
      { month: "September", price: 1150 },
      { month: "October", price: 1200 },
      { month: "November", price: 1180 },
      { month: "December", price: 1150 },
    ],
    marketPriceTrendDescription:
      "Banana prices tend to rise during off-seasons and may drop when supply is high.",
    description:
      "Banana is a tropical fruit crop grown for its sweet, edible fruit. It is a staple food in many regions and is consumed fresh or used in cooking. Bananas are rich in nutrients and provide quick energy.",
    nutrients: [
      { name: "Carbohydrates", amount: "23g" },
      { name: "Protein", amount: "1.1g" },
      { name: "Fat", amount: "0.3g" },
      { name: "Fiber", amount: "2.6g" },
      { name: "Vitamins", amount: "B6, C" },
      { name: "Minerals", amount: "Potassium, Magnesium, Manganese" },
    ],
    healthBenefits: [
      "Rich in potassium, supporting heart health.",
      "Provides quick energy due to natural sugars.",
      "Contains fiber for digestive health.",
      "Supports immune function with vitamin C.",
    ],
    cultivation: {
      soilType: "Well-drained, fertile loamy soil.",
      climate: "Tropical or subtropical climate with high humidity.",
      plantingSeason: "Year-round in suitable climates.",
      harvestingTime: "9-12 months after planting.",
    },
    commonDieseases: [
      {
        name: "Panama disease",
        description:
          "A soil-borne fungal disease causing wilting and yellowing of leaves.",
      },
      {
        name: "Black Sigatoka",
        description:
          "A fungal leaf spot disease that reduces fruit yield and quality.",
      },
      {
        name: "Banana Bunchy Top Virus",
        description:
          "A viral disease causing stunted growth and 'bunchy' appearance.",
      },
    ],
    Pests: [
      {
        name: "Banana Weevil",
        description:
          "A pest that bores into the plant's stem and rhizome, weakening the plant.",
      },
      {
        name: "Nematodes",
        description:
          "Microscopic worms that attack roots, reducing plant vigor.",
      },
      {
        name: "Thrips",
        description:
          "Small insects that damage fruit and leaves, causing blemishes.",
      },
    ],
    uses: [
      "Eaten fresh",
      "Used in desserts and smoothies",
      "Banana chips",
      "Baking (banana bread, muffins)",
      "Animal feed (plantain and peels)",
    ],
    recipes: [
      {
        name: "Banana Smoothie",
        ingredients: ["Banana", "Milk", "Honey", "Ice"],
        instructions: "Blend all ingredients until smooth. Serve chilled.",
      },
      {
        name: "Banana Bread",
        ingredients: [
          "Banana",
          "Flour",
          "Sugar",
          "Eggs",
          "Butter",
          "Baking soda",
        ],
        instructions:
          "Mash bananas, mix with other ingredients, pour into a loaf pan, and bake.",
      },
    ],
  },
  {
    id: 3,
    name: "Tomato",
    image: "../../assets/crops/tomato.jpg",
    scientificName: "Solanum lycopersicum",
    family: "Solanaceae",
    varieties: [
      {
        name: "Cherry Tomato",
        description: "Small, sweet tomatoes often used in salads and snacking.",
      },
      {
        name: "Roma (Plum) Tomato",
        description: "Egg-shaped tomatoes ideal for sauces and pastes.",
      },
      {
        name: "Beefsteak Tomato",
        description:
          "Large, juicy tomatoes perfect for slicing and sandwiches.",
      },
      {
        name: "Heirloom Tomato",
        description:
          "Traditional varieties known for unique flavors and colors.",
      },
      {
        name: "Grape Tomato",
        description:
          "Small, oblong tomatoes with a firm texture and sweet taste.",
      },
    ],
    marketPrice: {
      local: 1200,
      national: 1500,
      international: 1800,
    },
    marketPriceUnit: "per quintal",
    marketPriceDescription:
      "Tomato prices fluctuate based on season, variety, and demand. The prices listed are indicative and may vary.",
    marketPriceTrend: [
      { month: "January", price: 1100 },
      { month: "February", price: 1150 },
      { month: "March", price: 1200 },
      { month: "April", price: 1300 },
      { month: "May", price: 1400 },
      { month: "June", price: 1600 },
      { month: "July", price: 1700 },
      { month: "August", price: 1800 },
      { month: "September", price: 1750 },
      { month: "October", price: 1600 },
      { month: "November", price: 1400 },
      { month: "December", price: 1200 },
    ],
    marketPriceTrendDescription:
      "Tomato prices are generally higher during off-seasons and lower during peak harvest months.",
    description:
      "Tomato is a widely cultivated fruit vegetable, used in a variety of culinary dishes worldwide. It is rich in vitamins, minerals, and antioxidants, and is consumed fresh, cooked, or processed.",
    nutrients: [
      { name: "Carbohydrates", amount: "3.9g" },
      { name: "Protein", amount: "0.9g" },
      { name: "Fat", amount: "0.2g" },
      { name: "Fiber", amount: "1.2g" },
      { name: "Vitamins", amount: "A, C, K, B6" },
      { name: "Minerals", amount: "Potassium, Manganese, Magnesium" },
      { name: "Lycopene", amount: "2573µg" },
    ],
    healthBenefits: [
      "Rich in antioxidants, especially lycopene, which may reduce risk of chronic diseases.",
      "Supports heart health.",
      "Boosts immune system with vitamin C.",
      "Promotes healthy skin and vision.",
    ],
    cultivation: {
      soilType: "Well-drained, fertile loamy soil rich in organic matter.",
      climate: "Warm, frost-free climate with plenty of sunlight.",
      plantingSeason: "Spring and summer, or year-round in tropical climates.",
      harvestingTime: "60-85 days after transplanting, depending on variety.",
    },
    commonDieseases: [
      {
        name: "Early Blight",
        description:
          "A fungal disease causing dark spots on leaves and fruit, leading to reduced yield.",
      },
      {
        name: "Late Blight",
        description:
          "A serious fungal disease that causes brown lesions on leaves, stems, and fruit.",
      },
      {
        name: "Tomato Mosaic Virus",
        description:
          "A viral disease causing mottled leaves and stunted plant growth.",
      },
    ],
    Pests: [
      {
        name: "Tomato Hornworm",
        description: "Large green caterpillars that feed on leaves and fruit.",
      },
      {
        name: "Whiteflies",
        description: "Small insects that suck sap and transmit plant viruses.",
      },
      {
        name: "Aphids",
        description:
          "Tiny insects that feed on plant sap and can cause leaf curling.",
      },
      {
        name: "Fruit Borers",
        description:
          "Larvae that bore into fruit, causing damage and spoilage.",
      },
    ],
    uses: [
      "Eaten fresh in salads and sandwiches",
      "Cooking (sauces, soups, stews)",
      "Juice and ketchup production",
      "Sun-dried tomatoes",
      "Canning and preserving",
    ],
    recipes: [
      {
        name: "Tomato Soup",
        ingredients: ["Tomatoes", "Onion", "Garlic", "Salt", "Pepper", "Cream"],
        instructions:
          "Sauté onion and garlic, add chopped tomatoes, cook until soft, blend, season, and add cream.",
      },
      {
        name: "Tomato Sauce",
        ingredients: ["Tomatoes", "Olive oil", "Garlic", "Basil", "Salt"],
        instructions:
          "Cook chopped tomatoes with olive oil and garlic, simmer, add basil and salt, blend if desired.",
      },
    ],
  },
];
