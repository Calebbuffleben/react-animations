import RegularList from "./RegularList";
import SmallPersonListItem from './people/SmallPeopleListItem';
import LargePersonListItem from './people/LargePeopleListItem';

const people = () => [
    {
      name: 'John Doe',
      age: 27,
      hairColor: 'blonde',
      hobbies: ['biology', 'medicine', 'movies']
    },
    {
      name: 'Jane Smith',
      age: 32,
      hairColor: 'brunette',
      hobbies: ['photography', 'travel', 'reading']
    },
    {
      name: 'Alice Johnson',
      age: 24,
      hairColor: 'red',
      hobbies: ['painting', 'gardening', 'music']
    },
    {
      name: 'Bob Williams',
      age: 35,
      hairColor: 'black',
      hobbies: ['sports', 'cooking', 'coding']
    },
    {
      name: 'Eva Davis',
      age: 29,
      hairColor: 'brown',
      hobbies: ['fashion', 'fitness', 'shopping']
    },
    {
      name: 'Chris Taylor',
      age: 28,
      hairColor: 'blonde',
      hobbies: ['gaming', 'technology', 'travel']
    },
    {
      name: 'Sophie Turner',
      age: 30,
      hairColor: 'blonde',
      hobbies: ['acting', 'reading', 'yoga']
    },
    {
      name: 'Daniel Miller',
      age: 31,
      hairColor: 'brown',
      hobbies: ['photography', 'cooking', 'travel']
    },
    {
      name: 'Olivia Brown',
      age: 26,
      hairColor: 'black',
      hobbies: ['music', 'art', 'writing']
    },
    {
      name: 'William White',
      age: 33,
      hairColor: 'red',
      hobbies: ['hiking', 'gardening', 'movies']
    },
    {
      name: 'Grace Robinson',
      age: 29,
      hairColor: 'brown',
      hobbies: ['dancing', 'reading', 'travel']
    },
    {
      name: 'Michael Garcia',
      age: 34,
      hairColor: 'black',
      hobbies: ['sports', 'cooking', 'technology']
    },
    {
      name: 'Isabella Martinez',
      age: 28,
      hairColor: 'brown',
      hobbies: ['travel', 'fashion', 'painting']
    },
    {
      name: 'Liam Murphy',
      age: 27,
      hairColor: 'blonde',
      hobbies: ['music', 'gaming', 'movies']
    },
    {
      name: 'Ava Scott',
      age: 30,
      hairColor: 'brown',
      hobbies: ['reading', 'writing', 'photography']
    },
    {
      name: 'Jackson Hall',
      age: 32,
      hairColor: 'black',
      hobbies: ['sports', 'cooking', 'travel']
    },
    {
      name: 'Mia Nelson',
      age: 25,
      hairColor: 'blonde',
      hobbies: ['fitness', 'dancing', 'technology']
    },
    {
      name: 'Caleb Turner',
      age: 29,
      hairColor: 'red',
      hobbies: ['music', 'art', 'movies']
    },
    {
      name: 'Ella Foster',
      age: 31,
      hairColor: 'brunette',
      hobbies: ['reading', 'travel', 'cooking']
    }
  ];
  
  const products = () => [
    {
      name: 'Flat-Screen TV',
      price: '$300.00',
      description: 'Huge LCD screen',
      rating: 4.5
    },
    {
      name: 'Wireless Headphones',
      price: '$80.00',
      description: 'Noise-canceling Bluetooth headphones',
      rating: 4.2
    },
    {
      name: 'Smartphone',
      price: '$600.00',
      description: 'High-end mobile device with advanced features',
      rating: 4.7
    },
    {
      name: 'Laptop',
      price: '$1000.00',
      description: 'Powerful and lightweight laptop for productivity',
      rating: 4.8
    },
    {
      name: 'Digital Camera',
      price: '$500.00',
      description: 'Professional-grade camera for stunning photos',
      rating: 4.6
    },
    {
      name: 'Gaming Console',
      price: '$400.00',
      description: 'Latest gaming console with immersive graphics',
      rating: 4.4
    },
    {
      name: 'Fitness Tracker',
      price: '$50.00',
      description: 'Track your health and fitness goals with this device',
      rating: 4.0
    },
    {
      name: 'Coffee Maker',
      price: '$80.00',
      description: 'Automatic coffee maker for the perfect brew',
      rating: 4.3
    },
    {
      name: 'Smart Thermostat',
      price: '$120.00',
      description: 'Energy-efficient thermostat with smart features',
      rating: 4.5
    },
    {
      name: 'Robot Vacuum',
      price: '$200.00',
      description: 'Automated vacuum cleaner for hands-free cleaning',
      rating: 4.2
    },
    {
      name: 'Wireless Router',
      price: '$70.00',
      description: 'High-speed router for seamless internet connectivity',
      rating: 4.1
    },
    {
      name: 'Bluetooth Speaker',
      price: '$40.00',
      description: 'Portable speaker with crystal-clear sound',
      rating: 4.0
    },
    {
      name: 'Desk Chair',
      price: '$150.00',
      description: 'Ergonomic chair for comfortable work or study',
      rating: 4.6
    },
    {
      name: 'Smartwatch',
      price: '$180.00',
      description: 'Stay connected and track fitness with this smartwatch',
      rating: 4.4
    },
    {
      name: 'Outdoor Grill',
      price: '$300.00',
      description: 'Durable grill for outdoor cooking and BBQs',
      rating: 4.7
    },
    {
      name: 'Air Purifier',
      price: '$100.00',
      description: 'Clean and freshen the air in your home with this device',
      rating: 4.5
    },
    {
      name: 'Blender',
      price: '$50.00',
      description: 'Versatile blender for smoothies and food preparation',
      rating: 4.2
    },
    {
      name: 'Hiking Backpack',
      price: '$80.00',
      description: 'Durable backpack for outdoor adventures',
      rating: 4.3
    },
    {
      name: 'Smart Home Security System',
      price: '$250.00',
      description: 'Protect your home with advanced security features',
      rating: 4.6
    },
    {
      name: 'Digital Art Tablet',
      price: '$120.00',
      description: 'Create digital art with precision using this tablet',
      rating: 4.8
    }
  ];

  const List = () => {
    return (
      <>
        <RegularList
          items={people}
          resourceName="person"
          itemComponent={SmallPersonListItem}
        />
        <RegularList
          items={people}
          resourceName="person"
          itemComponent={LargePersonListItem}
        />
      </>
    )
  }

  export default List;