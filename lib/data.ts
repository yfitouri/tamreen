export const categories = [
  { title: "Gyms", icon: "🏋️", count: "1,245 gyms", href: "/gyms" },
  { title: "Trainers", icon: "🧑‍🏫", count: "482 trainers", href: "/trainers" },
  { title: "Football", icon: "⚽", count: "1,328 events", href: "/sports" },
  { title: "Padel", icon: "🎾", count: "612 courts", href: "/sports" },
  { title: "Cycling", icon: "🚴", count: "475 routes", href: "/sports" },
  { title: "Swimming", icon: "🌊", count: "256 pools", href: "/sports" },
  { title: "Hiking", icon: "🥾", count: "212 trails", href: "/sports" },
  { title: "Healthy Food", icon: "🥗", count: "689 places", href: "/food" },
];

export const gyms = [
  { id: 1, name: "Power House Gym", city: "Tripoli", area: "Ain Zara", image: "/images/gym-power.jpg", rating: 4.8, reviews: 128, verified: true, price: "LYD 199/month", gender: "Mixed", facilities: ["Weights", "CrossFit", "Cardio", "Showers", "Parking"], description: "Premium equipment, expert coaches and a motivating community in central Tripoli.", phone: "+218 91 000 0000" },
  { id: 2, name: "Pulse Fitness", city: "Benghazi", area: "Al Hawari", image: "/images/gym-benghazi.jpg", rating: 4.6, reviews: 97, verified: true, price: "LYD 150/month", gender: "Male", facilities: ["Weights", "Boxing", "Cardio", "PT"], description: "A clean, energetic gym with boxing classes and strength coaching.", phone: "+218 92 000 0000" },
  { id: 3, name: "Ladies Fit Studio", city: "Misrata", area: "City Centre", image: "/images/gym-ladies.jpg", rating: 4.9, reviews: 75, verified: true, price: "LYD 180/month", gender: "Female", facilities: ["Women-only", "Classes", "Cardio", "Pilates"], description: "Women-focused studio with classes, privacy and friendly coaches.", phone: "+218 94 000 0000" },
];

export const trainers = [
  { id: 1, name: "Ahmed Khaled", city: "Tripoli", image: "/images/trainer-ahmed.jpg", rating: 4.9, reviews: 86, verified: true, speciality: "Strength • Conditioning • Fat Loss", price: "LYD 60/session", experience: "6 years", bio: "NASM certified trainer helping clients build strength, lose fat and move better." },
  { id: 2, name: "Sara Fit", city: "Benghazi", image: "/images/trainer-sara.jpg", rating: 4.8, reviews: 64, verified: true, speciality: "Women’s Fitness • Mobility", price: "LYD 50/session", experience: "5 years", bio: "Friendly coaching for women, beginners and sustainable progress." },
  { id: 3, name: "Omar Boxing", city: "Misrata", image: "/images/trainer-khaled.jpg", rating: 4.7, reviews: 52, verified: false, speciality: "Boxing • Weight Loss", price: "LYD 45/session", experience: "4 years", bio: "Boxing coach focused on confidence, fitness and discipline." },
];

export const foodBusinesses = [
  { id: 1, name: "Green Bowls", city: "Tripoli", area: "Ben Ashour", image: "/images/food-green.jpg", rating: 4.7, reviews: 89, verified: true, type: "Healthy Food", price: "From LYD 28", menu: ["Grilled Chicken Bowl", "Protein Power Bowl", "Tuna Rice Box"], description: "Nutritious meals made fresh with local ingredients and macro-friendly options." },
  { id: 2, name: "Protein Kitchen", city: "Benghazi", area: "Al Fuwayhat", image: "/images/food-protein.jpg", rating: 4.6, reviews: 50, verified: true, type: "Meal Prep", price: "From LYD 25", menu: ["Lean Beef Box", "Chicken Pasta", "Oats Protein Cup"], description: "Meal prep boxes for gym people, cutting and bulking." },
];

export const communityPosts = [
  { id: 1, name: "Omar M.", city: "Tripoli", sport: "Football", title: "Need 2 players", highlight: "tonight", time: "Tonight • 8:00 PM", place: "Al-Shaab Stadium", going: 4, image: "/images/football-event.svg" },
  { id: 2, name: "Salma K.", city: "Benghazi", sport: "Padel", title: "Looking for a", highlight: "padel partner", time: "Tomorrow • 6:00 PM", place: "Benghazi Padel Club", going: 3, image: "/images/padel-event.svg" },
  { id: 3, name: "Ali R.", city: "Misrata", sport: "Cycling", title: "Friday morning", highlight: "ride", time: "Friday • 7:00 AM", place: "City centre", going: 6, image: "/images/event-run.svg" },
];

export const events = [
  { id: 1, title: "Tamreen Padel Cup", date: "May 24", city: "Tripoli", place: "Win Arena", sport: "Padel", image: "/images/padel-event.svg" },
  { id: 2, title: "City Run Tripoli", date: "May 31", city: "Tripoli", place: "Martyrs’ Square", sport: "Running", image: "/images/event-run.svg" },
  { id: 3, title: "Beach Bootcamp", date: "Jun 7", city: "Zuwara", place: "Zuwara Beach", sport: "Fitness", image: "/images/hiking.svg" },
];

export const challenges = [
  { id: 1, title: "30-Day Move", desc: "Move 30 min daily", progress: 72, joined: "1.2K joined", icon: "❤️" },
  { id: 2, title: "10K Steps Daily", desc: "Hit your steps goal", progress: 55, joined: "2.8K joined", icon: "👟" },
  { id: 3, title: "Hydration Hero", desc: "Drink 2L water daily", progress: 45, joined: "945 joined", icon: "💧" },
  { id: 4, title: "Strength Starter", desc: "3 workouts per week", progress: 82, joined: "1.1K joined", icon: "💪" },
];

export const sports = [
  { name: "Football", icon: "⚽", desc: "Find players, pitches and friendly matches." },
  { name: "Padel", icon: "🎾", desc: "Find partners, courts and tournaments." },
  { name: "Cycling", icon: "🚴", desc: "Join rides, routes and cycling groups." },
  { name: "Swimming", icon: "🌊", desc: "Pools, coaches and swimming groups." },
  { name: "Hiking", icon: "🥾", desc: "Weekend trails and outdoor crews." },
  { name: "Diving", icon: "🤿", desc: "Find dive buddies and trips." },
];
