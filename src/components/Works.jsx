const works = [
    {
      name: "Special-Meal",
      image: "https://images.ctfassets.net/trvmqu12jq2l/6FV4Opt7wUyR91t2FXyOIr/f32972fce10fc87585e831b334ea17ef/header.jpg?q=70&w=1208&h=1080&f=faces&fit=fill", 
      link: "https://meal-search-taupe.vercel.app/",
    },
    {
      name: "Simple-Food-Show",
      image: "https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=2092&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      link: "https://simple-food-show.vercel.app/",
    },
    {
      name: "Eafrican Restaurant",
      image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
      link: "https://weafricanrestaurant.com/",
    },
    {
      name: "Couples-Task-Game",
      image: "https://plus.unsplash.com/premium_photo-1709043362697-482a4ce0f96e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y291cGxlJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D", 
      link: "https://couple-task-game.vercel.app/",
    },
    {
      name: "Api-Fetching",
      image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      link: "https://api-fetching-lac.vercel.app/",
    },
    {
      name: "Web-design-react",
      image: "https://images.unsplash.com/photo-1628277613967-6abca504d0ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      link: "https://webdesign-react.vercel.app/",
    },
    {
      name: "Ecommerse-website",
      image: "https://neilpatel.com/wp-content/uploads/2023/02/create-ecommerce-website-006.webp", 
      link: "https://ecommers-sepia.vercel.app/",
    },
    {
      name: "Music-Player",
      image: "https://www.savethestudent.org/uploads/Man-listening-music-streaming-soundwave-audio-headphones.jpg", 
      link: "https://musicplayer-dun.vercel.app/",
    },
    {
      name: "Ecommerse-website",
      image: "https://techmatrix18.com/articles/imgs/1703121210_e-commerce.png", 
      link: "https://preshtechsales.vercel.app/",
    },
    {
      name: "Weather Update",
      image: "https://as2.ftcdn.net/jpg/02/66/38/15/1000_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg", 
      link: "https://weather-update-ten-coral.vercel.app/",
    },
  ];
  
  const Works = () => {
    return (
      <section className="p-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Latest Works Sample</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <img
                src={work.image}
                alt={work.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-2 text-lg font-semibold">{work.name}</h3>
              <a
                href={work.link}
                className="text-blue-500 mt-2 inline-block hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Works;
  