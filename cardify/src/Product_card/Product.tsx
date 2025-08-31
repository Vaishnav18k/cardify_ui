export default function Product() {
  const cards = [
    {
      id: 1,
      image: "https://img.freepik.com/free-photo/textbooks-lying-near-bookcase_23-2147845949.jpg?semt=ais_hybrid&w=740",
      title: "Master Any Subject",
      description: "Create flashcards for languages, science, history, or coding — learn anything, anytime.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&w=400",
      title: "AI-Powered Review",
      description: "Our smart algorithm predicts when you’ll forget and helps you review at the perfect time.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&w=400",
      title: "Study on the Go",
      description: "Download decks and learn offline — perfect for commutes, flights, or low-connectivity areas.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&w=400",
      title: "Beautiful & Intuitive",
      description: "Clean, minimal interface designed to keep you focused and motivated during study sessions.",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&w=400",
      title: "Share & Collaborate",
      description: "Publish your decks or invite friends to co-study — great for classrooms and teams.",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=250&w=400",
      title: "Track Your Progress",
      description: "Visual stats and streaks help you stay consistent and see how much you've improved.",
    },
  ];
  
  return (
    <>
   
      {/* Features Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-black-800 dark:text-black mb-10">
            Discover Powerful Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                  loading="lazy" // Good for performance
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="lg:p-14 p-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-center lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-3">
                Connect with Us
              </h2>
              <p className="text-xl text-indigo-100">
                Have a question or an idea? We'd love to hear from you.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <path
                  d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                  stroke="#4F46E5"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}