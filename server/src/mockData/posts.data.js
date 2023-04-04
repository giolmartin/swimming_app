const MOCK_POSTS = [
  {
    title: 'Mastering the Freestyle Technique',
    subtitle: 'Improve your swimming speed and efficiency',
    author: 'John Smith',
    excerpt:
      'Learn the essential components of the freestyle swimming technique to become a more efficient and faster swimmer...',
    postTitle: 'The Art of Freestyle Swimming',
    introduction:
      "Freestyle is the most popular swimming stroke, known for its speed and efficiency. In this article, we'll discuss the key elements of the freestyle technique to help you improve your swimming performance.",
    sections: [
      {
        sectionTitle: 'Body Position',
        contentType: 'text',
        content:
          'Maintaining a streamlined body position is crucial for reducing drag and increasing your speed in the water...',
      },
      {
        sectionTitle: 'Arm Movement',
        contentType: 'text',
        content:
          'Effective arm movement in freestyle swimming involves a combination of the catch, pull, and recovery phases...',
      },
      {
        sectionTitle: 'Leg Kick',
        contentType: 'text',
        content:
          'A strong and efficient flutter kick is essential for propelling yourself through the water...',
      },
      {
        sectionTitle: 'Breathing Technique',
        contentType: 'text',
        content:
          'Proper breathing is vital for maintaining your stamina and ensuring an efficient swimming stroke...',
      },
    ],
    conclusion:
      'By focusing on these essential elements of the freestyle technique, you can become a faster and more efficient swimmer. Remember, practice makes perfect!',
    imageUrl: 'https://example.com/images/freestyle-swimming.jpg',
    categories: ['technique', 'training', 'swimming'],
    tags: ['swimming techniques', 'swim workouts', 'swim drills', 'speed'],
    views: 3101,
    comments: [],
  },
  {
    title: 'Swimming Nutrition: What to Eat Before and After Your Swim',
    subtitle: 'Optimize your performance and recovery with the right nutrition',
    author: 'Jane Doe',
    excerpt:
      'Discover the best foods to eat before and after swimming to fuel your body, enhance performance, and promote recovery...',
    postTitle: 'Swimming Nutrition Essentials',
    introduction:
      "Proper nutrition is essential for swimmers to perform at their best and recover quickly. In this article, we'll discuss what to eat before and after swimming to optimize your performance and recovery.",
    sections: [
      {
        sectionTitle: 'Pre-Workout Meals',
        contentType: 'text',
        content:
          'A well-balanced meal 2-4 hours before swimming can help provide the energy needed for your workout...',
      },
      {
        sectionTitle: 'Pre-Swim Snacks',
        contentType: 'text',
        content:
          'If you need a quick energy boost before swimming, opt for easily digestible snacks 30-60 minutes before hitting the pool...',
      },
      {
        sectionTitle: 'Post-Workout Meals',
        contentType: 'text',
        content:
          'Refuel your body after swimming with a balanced meal containing carbohydrates, protein, and healthy fats...',
      },
      {
        sectionTitle: 'Hydration',
        contentType: 'text',
        content:
          'Staying properly hydrated is crucial for swimmers, as dehydration can negatively affect your performance...',
      },
    ],
    conclusion:
      'By consuming the right foods and staying hydrated, you can optimize your swimming performance and ensure a speedy recovery.',
    imageUrl: 'https://example.com/images/swimming-nutrition.jpg',
    categories: ['nutrition', 'training', 'swimming'],
    tags: [
      'swimming nutrition',
      'swim workouts',
      'swim drills',
      'swim recovery',
    ],
    views: 210,
    comments: [],
  },
  {
    title: 'The Ultimate Guide to Swimming Gear',
    subtitle: 'Essential equipment for every swimmer',
    author: 'John Smith',
    excerpt:
      'Discover the must-have swimming gear that will help you perform better, stay comfortable, and look stylish in the pool...',
    postTitle: 'Swimming Gear Essentials',
    introduction:
      "The right swimming gear can make a significant difference in your comfort and performance in the pool. In this guide, we'll cover the essential swimming equipment every swimmer should have.",
    sections: [
      {
        sectionTitle: 'Swimwear',
        contentType: 'text',
        content:
          'Choosing the right swimwear is crucial for both comfort and performance. Find out what to consider when selecting the perfect swimsuit...',
      },
      {
        sectionTitle: 'Goggles',
        contentType: 'text',
        content:
          'Goggles protect your eyes from chlorine and improve your visibility in the water. Learn how to choose the right pair for you...',
      },
      {
        sectionTitle: 'Swim Caps',
        contentType: 'text',
        content:
          'Swim caps help reduce drag, protect your hair from chlorine, and keep it out of your face. Discover the different types of swim caps available...',
      },
      {
        sectionTitle: 'Swimming Accessories',
        contentType: 'text',
        content:
          'From training tools to earplugs and nose clips, explore various swimming accessories that can enhance your pool experience...',
      },
    ],
    conclusion:
      'Investing in quality swimming gear can make a significant difference in your comfort and performance in the pool. Be sure to choose equipment that suits your needs and preferences.',
    imageUrl: 'https://example.com/images/swimming-gear.jpg',
    categories: ['gear', 'swimming'],
    tags: [
      'swim gear',
      'goggles',
      'swimwear',
      'swim caps',
      'swimming accessories',
      'swim training tools',
    ],
    views: 110,
    comments: [],
  },
  {
    title: 'Boost Your Swimming Performance with Dryland Training',
    subtitle: 'Strengthen your muscles and improve your overall fitness',
    author: 'Jane Doe',
    excerpt:
      'Discover how incorporating dryland training into your routine can help improve your swimming performance and overall fitness...',
    postTitle: 'Dryland Training for Swimmers',
    introduction:
      "Dryland training is an essential component of a well-rounded swimming routine. It helps build strength, flexibility, and overall fitness, ultimately improving your performance in the pool. In this article, we'll explore various dryland exercises and their benefits.",
    sections: [
      {
        sectionTitle: 'Strength Training',
        contentType: 'text',
        content:
          'Strength training exercises like squats, lunges, and pull-ups can help build the muscle groups essential for swimming...',
      },
      {
        sectionTitle: 'Cardiovascular Training',
        contentType: 'text',
        content:
          'Incorporating cardiovascular exercises such as running, cycling, or HIIT can improve your endurance and overall fitness...',
      },
      {
        sectionTitle: 'Flexibility',
        contentType: 'text',
        content:
          'Stretching and yoga can help increase your flexibility, which is crucial for efficient swimming technique...',
      },
      {
        sectionTitle: 'Injury Prevention',
        contentType: 'text',
        content:
          'Incorporating exercises that focus on injury prevention, such as core strengthening and stability work, can help keep you injury-free...',
      },
    ],
    conclusion:
      'Incorporating dryland training into your swimming routine can significantly improve your performance and overall fitness. Be sure to choose exercises that target the specific areas you want to improve and always listen to your body to prevent injuries.',
    imageUrl: 'https://example.com/images/dryland-training.jpg',
    categories: ['training', 'fitness', 'swimming'],
    tags: [
      'cross-training',
      'strength training',
      'cardiovascular training',
      'flexibility',
      'injury prevention',
    ],
    views: 31,
    comments: [],
  },
  {
    title: 'Open Water Swimming: Tips for Beginners',
    subtitle: 'Transition from the pool to the open water with ease',
    author: 'John Smith',
    excerpt:
      'Open water swimming can be a thrilling experience, but it requires a different skill set than pool swimming. Learn essential tips to help you transition...',
    postTitle: 'Open Water Swimming 101',
    introduction:
      "Open water swimming is an exhilarating experience that offers unique challenges compared to pool swimming. In this article, we'll provide helpful tips for beginners looking to transition from the pool to open water.",
    sections: [
      {
        sectionTitle: 'Get Comfortable with Your Environment',
        contentType: 'text',
        content:
          'Familiarize yourself with the open water environment, including water temperature, currents, and visibility...',
      },
      {
        sectionTitle: 'Practice Sightings',
        contentType: 'text',
        content:
          'Sighting is essential for navigating in open water. Practice lifting your head to spot landmarks while swimming...',
      },
      {
        sectionTitle: 'Adapt Your Stroke',
        contentType: 'text',
        content:
          'Adjust your swimming technique to account for choppy water, currents, and other environmental factors...',
      },
      {
        sectionTitle: 'Safety First',
        contentType: 'text',
        content:
          'Ensure your safety by swimming with a buddy, wearing a brightly colored swim cap, and using a safety buoy...',
      },
    ],
    conclusion:
      "Transitioning to open water swimming can be challenging, but with practice and the right techniques, you'll quickly adapt and enjoy the unique experience it offers.",
    imageUrl: 'https://example.com/images/open-water-swimming.jpg',
    categories: ['swimming'],
    tags: [
      'open water swimming',
      'swimming techniques',
      'endurance',
      'outdoor activities',
    ],
    views: 3101,
    comments: [],
  },
  {
    title: 'Improve Your Swimming Speed with Interval Training',
    subtitle: 'Maximize your workouts for faster results',
    author: 'Jane Doe',
    excerpt:
      'Interval training is a powerful tool to improve your swimming speed and endurance. Learn how to incorporate intervals into your swim workouts...',
    postTitle: 'Interval Training for Swimmers',
    introduction:
      "Interval training is an effective way to improve your swimming speed and endurance. By alternating between high-intensity and low-intensity intervals, you can maximize your workouts and see faster results. In this article, we'll discuss how to incorporate interval training into your swim sessions.",
    sections: [
      {
        sectionTitle: 'Understanding Interval Training',
        contentType: 'text',
        content:
          'Interval training involves alternating between periods of high-intensity and low-intensity exercise to improve both speed and endurance...',
      },
      {
        sectionTitle: 'Designing Your Interval Workouts',
        contentType: 'text',
        content:
          'Create interval workouts tailored to your goals and fitness level by adjusting the duration, intensity, and recovery time...',
      },
      {
        sectionTitle: 'Sample Swim Workouts',
        contentType: 'text',
        content:
          'Explore a variety of swim workouts that incorporate interval training to challenge yourself and improve your performance...',
      },
      {
        sectionTitle: 'Tracking Your Progress',
        contentType: 'text',
        content:
          'Monitor your progress by regularly assessing your swim times, distances, and perceived exertion during interval workouts...',
      },
    ],
    conclusion:
      'Incorporating interval training into your swim sessions can significantly improve your speed and endurance in the pool. Be sure to design workouts that are tailored to your goals and fitness level, and remember to track your progress to stay motivated and gauge your improvement.',
    imageUrl: 'https://example.com/images/interval-swimming.jpg',
    categories: ['training', 'swimming'],
    tags: ['swim workouts', 'speed', 'endurance', 'training', 'balance'],
    views: 10,
    comments: [],
  },
  {
    title: 'Top 5 Vegan Recipes for a Healthy Lifestyle',
    subtitle: 'Delicious and Nutritious Plant-Based Meals',
    author: 'Emma Green',
    date: new Date('2023-03-12T14:30:00.000Z'),
    excerpt:
      'Discover 5 delicious vegan recipes that are perfect for anyone looking to maintain a healthy lifestyle. These plant-based meals are both nutritious and satisfying.',
    introduction:
      "If you're looking to adopt a healthier lifestyle or simply want to try some new plant-based recipes, we've got you covered! In this post, we'll share our top 5 vegan recipes that are not only delicious, but also packed with essential nutrients. So, let's dive in!",
    sections: [
      {
        sectionTitle: '1. Vegan Lentil Curry',
        contentType: 'text',
        content:
          "This vegan lentil curry is a staple for anyone who loves healthy, plant-based meals. It's full of protein, fiber, and delicious flavors.",
      },
    ],
    conclusion:
      "With these 5 vegan recipes, you'll be well on your way to enjoying a healthier, more sustainable lifestyle. Give them a try, and don't be afraid to get creative in the kitchen!",
    imageUrl: 'https://example.com/vegan-recipes.jpg',
    categories: ['technique', 'nutrition', 'gear'],
    tags: ['technique', 'nutrition', 'gear'],
    views: 225,
    comments: [],
  },
  {
    title: 'The Ultimate Guide to Digital Photography',
    subtitle: 'Master Your Camera and Take Stunning Photos',
    author: 'Michael Adams',
    date: new Date('2023-02-24T09:15:00.000Z'),
    excerpt:
      'Learn the essential skills and techniques required to master digital photography. This ultimate guide will help you take your photography skills to the next level.',
    introduction:
      "Digital photography has revolutionized the way we capture and share moments. In this ultimate guide, we'll walk you through the essential skills and techniques you need to master your camera and take stunning photos. Let's get started!",
    sections: [
      {
        sectionTitle: '1. Understanding Your Camera',
        contentType: 'text',
        content:
          'To take great photos, you need to understand how your camera works. Learn about the different settings and modes available on your camera, and practice using them in various situations.',
      },
    ],
    conclusion:
      "By following this guide and practicing regularly, you'll soon become a master of digital photography. Keep experimenting, learning, and most importantly, have fun!",
    imageUrl: 'https://example.com/digital-photography.jpg',
    categories: ['Photography', 'Digital', 'Tutorial'],
    tags: ['technique', 'nutrition', 'gear'],
    views: 310,
    comments: [],
  },
];

module.exports = MOCK_POSTS;
