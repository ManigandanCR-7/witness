function WorkoutCard({ workout, delay = 0 }) {
  const [reminderSet, setReminderSet] = React.useState(false);

  const handleSetReminder = (e) => {
    e.stopPropagation();
    setReminderSet(!reminderSet);
  };

  return (
    <div
      className="blog-card bg-white fade-in"
      style={{ animationDelay: `${delay}s` }} data-id="k4qstnl9w" data-path="js/components/WorkoutCard.js">

      <div className="blog-card-image" data-id="vbab3j0bp" data-path="js/components/WorkoutCard.js">
        <img
          src={workout.image}
          alt={workout.title}
          className="w-full h-full object-cover" data-id="18f8ejzpc" data-path="js/components/WorkoutCard.js" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" data-id="jemvhjomy" data-path="js/components/WorkoutCard.js">
          <a href={`#workout-details-${workout.id}`} className="px-4 py-2 bg-serene-500 text-white rounded-lg hover:bg-serene-600 transition-all m-2" data-id="q29yco4c0" data-path="js/components/WorkoutCard.js">
            View Details
          </a>
          <button onClick={handleSetReminder} className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all m-2" data-id="j6yf4ws8p" data-path="js/components/WorkoutCard.js">
            <i className={`fas fa-bell ${reminderSet ? 'text-yellow-400' : 'text-white'} mr-2`} data-id="lfhh18i2e" data-path="js/components/WorkoutCard.js"></i>
            {reminderSet ? 'Reminder Set' : 'Set Reminder'}
          </button>
        </div>
      </div>
      
      <div className="blog-card-content" data-id="xz3o7vztb" data-path="js/components/WorkoutCard.js">
        <div className="flex flex-wrap mb-3" data-id="jdhlwxn9p" data-path="js/components/WorkoutCard.js">
          {workout.categories.map((category, index) =>
          <span
            key={index}
            className="blog-tag bg-serene-50 text-serene-700" data-id="hjule9rh4" data-path="js/components/WorkoutCard.js">
              {category}
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-2 hover:text-serene-600 transition-all" data-id="vk5pdduvp" data-path="js/components/WorkoutCard.js">
          {workout.title}
        </h3>
        
        <p className="text-gray-600 mb-4" data-id="82qahxt24" data-path="js/components/WorkoutCard.js">
          {workout.description}
        </p>
        
        <div className="flex items-center justify-between" data-id="1gynzdipb" data-path="js/components/WorkoutCard.js">
          <div className="flex items-center" data-id="z5qpj0bpm" data-path="js/components/WorkoutCard.js">
            <i className="fas fa-clock text-serene-600 mr-2" data-id="d1xo1w2on" data-path="js/components/WorkoutCard.js"></i>
            <span className="text-sm text-gray-500" data-id="fc8gkrinr" data-path="js/components/WorkoutCard.js">{workout.duration}</span>
          </div>
          
          <div className="flex items-center" data-id="j8x5lujik" data-path="js/components/WorkoutCard.js">
            <span className="text-sm text-gray-500 mr-2" data-id="x6jhpfbxj" data-path="js/components/WorkoutCard.js">Difficulty:</span>
            <div className="flex" data-id="rsbr4w3a9" data-path="js/components/WorkoutCard.js">
              {[...Array(5)].map((_, i) =>
              <i key={i} className={`fas fa-circle text-xs ${i < workout.difficulty ? 'text-serene-500' : 'text-gray-300'} mr-1`} data-id="ld8bcnwwn" data-path="js/components/WorkoutCard.js"></i>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>);
}

function Workouts() {
  const workouts = [
  {
    id: 1,
    title: "Full Body HIIT",
    description: "High-intensity interval training targeting all major muscle groups with minimal equipment.",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    categories: ["HIIT", "Full Body", "Beginner-Friendly"],
    duration: "30 min",
    difficulty: 3
  },
  {
    id: 2,
    title: "Core Crusher",
    description: "Intense core workout focusing on abs, obliques and lower back for a stronger midsection.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    categories: ["Core", "Strength", "Intermediate"],
    duration: "20 min",
    difficulty: 4
  },
  {
    id: 3,
    title: "Upper Body Focus",
    description: "Build strength and definition in your shoulders, chest, back and arms with this targeted routine.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    categories: ["Upper Body", "Strength", "Advanced"],
    duration: "45 min",
    difficulty: 4
  },
  {
    id: 4,
    title: "Yoga Flow",
    description: "Gentle flow combining strength, flexibility and mindfulness for total mind-body wellness.",
    image: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwc2VyZW5lJTIweW9nYSUyMHNlc3Npb24lMjBpbiUyMGElMjB0cmFucXVpbCUyMG91dGRvb3IlMjBzZXR0aW5nJTJDJTIwZW1waGFzaXppbmclMjBtaW5kZnVsbmVzcyUyMGFuZCUyMHJlbGF4YXRpb24ufGVufDB8fHx8MTc0Njg4MjcyM3ww&ixlib=rb-4.1.0&q=80&w=200$w=800",
    categories: ["Yoga", "Recovery", "All Levels"],
    duration: "40 min",
    difficulty: 2
  },
  {
    id: 5,
    title: "Lower Body Burn",
    description: "Target your glutes, quads, hamstrings and calves with this lower body strengthening routine.",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    categories: ["Lower Body", "Strength", "Intermediate"],
    duration: "35 min",
    difficulty: 3
  },
  {
    id: 6,
    title: "Morning Energizer",
    description: "Quick, full-body workout designed to boost energy and kickstart your metabolism in the morning.",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    categories: ["Quick", "Full Body", "Morning"],
    duration: "15 min",
    difficulty: 2
  }];

  return (
    <section id="workouts" className="py-16 bg-serene-50/50" data-id="297fcq052" data-path="js/components/WorkoutCard.js">
      <div className="blog-container" data-id="twbsri4ef" data-path="js/components/WorkoutCard.js">
        <div className="text-center mb-12" data-id="qru3rgnfs" data-path="js/components/WorkoutCard.js">
          <span className="inline-block px-4 py-1 rounded-full bg-serene-100 text-serene-700 font-medium text-sm mb-4" data-id="7yo23frs0" data-path="js/components/WorkoutCard.js">
            Workout Library
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="6l1su0xmn" data-path="js/components/WorkoutCard.js">Popular Workouts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-id="pb7qoez09" data-path="js/components/WorkoutCard.js">
            Browse our collection of workouts designed for different fitness levels, goals, and time constraints.
            Set reminders to never miss your scheduled sessions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="nf27rumbh" data-path="js/components/WorkoutCard.js">
          {workouts.map((workout, index) =>
          <WorkoutCard key={workout.id} workout={workout} delay={0.1 * index} />
          )}
        </div>
      </div>
    </section>);
}