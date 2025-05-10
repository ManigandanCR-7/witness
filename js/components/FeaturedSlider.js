function FeaturedSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
  {
    id: 1,
    title: "Finding Serenity in Daily Rituals",
    description: "Create calm moments that anchor your day and connect you to what truly matters.",
    image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    category: "Mindfulness",
    link: "https://www.mindful.org/daily-mindfulness-rituals-to-try"
  },
  {
    id: 2,
    title: "The Gentle Art of Forest Bathing",
    description: "Immerse yourself in nature's healing embrace and discover profound inner peace.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    category: "Nature Therapy",
    link: "https://www.nationalgeographic.com/travel/article/forest-bathing-nature-walk-health"
  },
  {
    id: 3,
    title: "Creating a Sustainable Home Sanctuary",
    description: "Transform your living space into an eco-friendly haven that nurtures both you and the planet.",
    image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    category: "Sustainable Living",
    link: "https://www.sustainablejungle.com/sustainable-living/sustainable-home-ideas"
  },
  {
    id: 4,
    title: "The Power of Slow Living",
    description: "Embrace a deliberate approach to life that prioritizes meaning over hurry.",
    image: "https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80",
    category: "Lifestyle",
    link: "https://www.slowlivingldn.com/slow-living/what-is-slow-living"
  }];


  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev === slides.length - 1 ? 0 : prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev === slides.length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? slides.length - 1 : prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="features" className="py-16" data-id="xsxfzu5l8" data-path="js/components/FeaturedSlider.js">
      <div className="blog-container" data-id="hvdw9ff2j" data-path="js/components/FeaturedSlider.js">
        <div className="text-center mb-12" data-id="06wjehtcz" data-path="js/components/FeaturedSlider.js">
          <span className="inline-block px-4 py-1 rounded-full bg-serene-100 text-serene-700 font-medium text-sm mb-4" data-id="oui0h7v55" data-path="js/components/FeaturedSlider.js">
            Featured Content
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="mdgm7are5" data-path="js/components/FeaturedSlider.js">Highlighted Articles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" data-id="nra43e1ut" data-path="js/components/FeaturedSlider.js">
            Our most impactful pieces that inspire calm, mindful living and connection with nature.
          </p>
        </div>
        
        <div className="slider-container" data-id="9qezpblhr" data-path="js/components/FeaturedSlider.js">
          {slides.map((slide, index) =>
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'block' : 'hidden'}`} data-id="sn8wmt7fw" data-path="js/components/FeaturedSlider.js">

              <a href={slide.link} target="_blank" rel="noopener noreferrer" className="cursor-pointer" data-id="ylhggdgl3" data-path="js/components/FeaturedSlider.js">
                <img
                src={slide.image}
                alt={slide.title}
                className="slide-image" data-id="u37o57mkh" data-path="js/components/FeaturedSlider.js" />
              </a>

              <div className="slide-overlay" data-id="9fqqvyf7q" data-path="js/components/FeaturedSlider.js">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm text-sm font-medium mb-3" data-id="lirrpu6yf" data-path="js/components/FeaturedSlider.js">
                  {slide.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" data-id="e529uzu56" data-path="js/components/FeaturedSlider.js">
                  {slide.title}
                </h3>
                <p className="text-white/90 mb-4 max-w-2xl" data-id="geuhd4k1a" data-path="js/components/FeaturedSlider.js">
                  {slide.description}
                </p>
                <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-white text-serene-700 rounded-lg hover:bg-serene-50 transition-all inline-flex items-center" data-id="tg3cbh951" data-path="js/components/FeaturedSlider.js">


                  Read Article
                  <i className="fas fa-arrow-right ml-2" data-id="83unqa612" data-path="js/components/FeaturedSlider.js"></i>
                </a>
              </div>
              
              {/* Navigation buttons */}
              <button
              className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-all flex items-center justify-center"
              onClick={prevSlide} data-id="g5pnfca1z" data-path="js/components/FeaturedSlider.js">

                <i className="fas fa-chevron-left" data-id="g0nictc6x" data-path="js/components/FeaturedSlider.js"></i>
              </button>
              
              <button
              className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm text-white hover:bg-white/50 transition-all flex items-center justify-center"
              onClick={nextSlide} data-id="1iairnhog" data-path="js/components/FeaturedSlider.js">

                <i className="fas fa-chevron-right" data-id="qsu2vr4c4" data-path="js/components/FeaturedSlider.js"></i>
              </button>
            </div>
          )}
        </div>
        
        <div className="slider-dots" data-id="crzfrbjgz" data-path="js/components/FeaturedSlider.js">
          {slides.map((_, index) =>
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`} data-id="c74gtinyp" data-path="js/components/FeaturedSlider.js">
          </button>
          )}
        </div>
      </div>
    </section>);

}