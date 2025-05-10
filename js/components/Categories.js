function Categories() {
  const categories = [
  {
    icon: "fa-dumbbell",
    name: "Strength Training",
    description: "Build muscle and increase strength through resistance exercises",
    color: "text-red-500",
    bgColor: "bg-red-100"
  },
  {
    icon: "fa-heart-pulse",
    name: "Cardio",
    description: "Improve heart health and endurance with aerobic exercises",
    color: "text-blue-500",
    bgColor: "bg-blue-100"
  },
  {
    icon: "fa-wind",
    name: "Flexibility",
    description: "Enhance range of motion and prevent injury with stretching",
    color: "text-purple-500",
    bgColor: "bg-purple-100"
  },
  {
    icon: "fa-spa",
    name: "Yoga & Pilates",
    description: "Focus on mind-body connection, balance, and core strength",
    color: "text-green-500",
    bgColor: "bg-green-100"
  },
  {
    icon: "fa-person-running",
    name: "High Intensity",
    description: "Maximize calorie burn with short bursts of intense activity",
    color: "text-orange-500",
    bgColor: "bg-orange-100"
  },
  {
    icon: "fa-mitten",
    name: "Combat Sports",
    description: "Develop coordination and full-body strength through martial arts",
    color: "text-gray-700",
    bgColor: "bg-gray-200"
  }];


  return (
    <section id="categories" className="py-16" data-id="wncb88dev" data-path="js/components/Categories.js">
      <div className="blog-container" data-id="ezvtlb15s" data-path="js/components/Categories.js">
        <div className="text-center mb-12" data-id="ojks6n0om" data-path="js/components/Categories.js">
          <span className="inline-block px-4 py-1 rounded-full bg-serene-100 text-serene-700 font-medium text-sm mb-4" data-id="25ix2vzed" data-path="js/components/Categories.js">
            Workout Types
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="98el27jov" data-path="js/components/Categories.js">Find Your Perfect Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-id="co8jwtndj" data-path="js/components/Categories.js">
            Explore different workout categories to find the perfect fit for your fitness goals, 
            preferences, and experience level.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-id="uekhbci81" data-path="js/components/Categories.js">
          {categories.map((category, index) =>
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 fade-in"
            style={{ animationDelay: `${0.1 * index}s` }} data-id="uavufyza9" data-path="js/components/Categories.js">
              
              <div className={`w-12 h-12 rounded-lg ${category.bgColor} ${category.color} flex items-center justify-center mb-4`} data-id="8ddhoskbv" data-path="js/components/Categories.js">
                <i className={`fas ${category.icon} text-xl`} data-id="q1oegab3r" data-path="js/components/Categories.js"></i>
              </div>
              
              <h3 className="text-lg font-bold mb-2" data-id="eazd57pd2" data-path="js/components/Categories.js">{category.name}</h3>
              <p className="text-gray-600" data-id="ibxiwx0rp" data-path="js/components/Categories.js">{category.description}</p>
              
              <button className="mt-4 px-4 py-2 bg-serene-50 text-serene-600 rounded-lg hover:bg-serene-100 transition-all flex items-center text-sm" data-id="kxyx6tcrm" data-path="js/components/Categories.js">
                Browse Workouts
                <i className="fas fa-chevron-right ml-2 text-xs" data-id="aqo7vqf50" data-path="js/components/Categories.js"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>);

}