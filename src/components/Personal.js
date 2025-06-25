import React from 'react';
import {
    BrainCog,
    Bot,
    Car,
    Coffee,
    Music,
    Gamepad2,
    Bike,
    Code2,
    Heart,
    Zap,
    Target,
    Instagram,
    ExternalLink,
    Mountain,
} from 'lucide-react';

const Personal = () => {
    const hobbies = [
        { icon: <Coffee size={24} />, name: 'Cafe Hopping', description: 'Always on the hunt for cozy spots and great coffee. Sometimes I even brew my own.' },
        { icon: <Mountain size={24} />, name: 'Hiking and Camping', description: 'Extreme hiking trails and survival skills is the best way to challenge myself.' },
        { icon: <Gamepad2 size={24} />, name: 'Gaming', description: 'Big fan of League of Legends. An ARAM enjoyer indeed.' },
        { icon: <Car size={24} />, name: 'Travelling', description: 'Exploring new places excites me! Whether it’s a weekend getaway or a long road trip.' },
        { icon: <Bike size={24} />, name: 'Rides', description: 'Cruising around on my scooter is my kind of therapy — chill rides, long thoughts.' },
        { icon: <Code2 size={24} />, name: 'Learning', description: 'I also explore new tools, frameworks, and backend concepts.' },
    ];
    
    const quickQA = [
        {
            question: "What's your coding fuel?",
            answer: "A perfect cup of coffee ☕. Wether brewed, espresso, or cold brew."
        },
        {
            question: "How do you handle debugging?",
            answer: "Step away, grab coffee, come back with fresh eyes and caffeinated mind"
        },
        {
            question: "What drives you?",
            answer: "Automating tasks that are repetitive and boring."
        },
        {
            question: "Best coding advice you've received?",
            answer: "Code is like a humor. When you have to explain it, it's bad."
        }
    ];

    const interests = [
        { icon: <Bot size={20} />, text: "AI" },
        { icon: <BrainCog size={20} />, text: "New Coding Ideas" },
        { icon: <Heart size={20} />, text: "Clean Code & Architecture" },
        { icon: <Zap size={20} />, text: "Performance Optimization" },
        { icon: <Target size={20} />, text: "User Experience Design" }
    ];

    // Instagram post data - you can replace with your actual post
    const instagramPost = {
        url: "https://www.instagram.com/p/DLIW6qLBsGE/?img_index=1", // Replace with your actual Instagram post URL
        imageUrl: "/path-to-your-instagram-image.jpg", // Replace with your image path or URL
        caption: "Latest adventure! Check out my recent post about coffee and coding ☕💻",
        likes: "42",
        date: "2 days ago"
    };

    return (
        <section id="personal" className="section-padding bg-gray-900/50">
            <div className="container-width">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond the Code</h2>
                    <p className="text-gray-400">The person behind the developer</p>
                </div>

                {/* Hobbies & Interests */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-center mb-12 text-blue-400">When I'm Not Coding</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hobbies.map((hobby, index) => (
                            <div key={index} className="card p-6 hover:scale-105 transition-all duration-300 hover:border-blue-500/50">
                                <div className="text-blue-400 mb-4">{hobby.icon}</div>
                                <h4 className="text-lg font-semibold mb-2">{hobby.name}</h4>
                                <p className="text-gray-400 text-sm">{hobby.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Interests */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-center mb-12 text-blue-400">What Excites Me</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {interests.map((interest, index) => (
                            <div key={index} className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700 hover:border-blue-500/50 transition-colors duration-200">
                                <span className="text-blue-400">{interest.icon}</span>
                                <span className="text-gray-300">{interest.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                        {/* Latest from Instagram */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-blue-400">Latest from Instagram</h3>
          <div className="max-w-md mx-auto">
            <div className="card p-6 hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30">
              {/* Instagram Post Preview */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Instagram size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">@driner_dev</p>
                    <p className="text-gray-400 text-sm">{instagramPost.date}</p>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg border border-purple-500/20 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Instagram size={48} className="mx-auto mb-2 text-purple-400" />
                    <p className="text-sm">Instagram Post Preview</p>
                  </div>
                </div>

                {/* Caption */}
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {instagramPost.caption}
                  </p>
                  <div className="flex items-center gap-4 text-gray-400 text-xs">
                    <span>❤️ {instagramPost.likes} likes</span>
                    <span>💬 View comments</span>
                  </div>
                </div>

                {/* Call to Action */}
                <a 
                  href={instagramPost.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all duration-200 text-white font-medium"
                >
                  <Instagram size={16} />
                  View on Instagram
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Q&A */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-blue-400">Quick Fire Questions</h3>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {quickQA.map((qa, index) => (
                            <div key={index} className="card p-6 hover:scale-105 transition-all duration-300">
                                <h4 className="text-lg font-semibold mb-3 text-purple-400">{qa.question}</h4>
                                <p className="text-gray-300">{qa.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fun Fact */}
                <div className="mt-16 text-center">
                    <div className="card p-8 max-w-2xl mx-auto bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30">
                        <h4 className="text-xl font-bold mb-4 text-blue-400">Fun Fact</h4>
                        <p className="text-gray-300 text-lg">
                            I cant start a day without a cup of coffee. I get signs of caffeine withrawal wich i think is no longer good (seriously) 😅😭
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Personal; 