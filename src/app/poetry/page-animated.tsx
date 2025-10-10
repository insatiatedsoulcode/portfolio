"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { PenTool, Heart, Star, BookOpen } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const poems = [
  {
    title: "Destination",
    date: "2024",
    category: "Life",
    content: `Life always been a joy worth remembering,
    Never did I ever gave a second thought about taking a beating.
    What I am today is not what I thought to be ever,
    Really not sure when I gonna be changed forever.
    
    DEEP inside I knew that I had many dreams to achieve...
    But after facing the real world I realize that they were dreams which can never be achieved!
    Every blowing wind I tried to ride,
    Every time they threw me up so high.
    
    Still I never was depressed...
    Because I had my own way of igniting interests!
    Tried in every possible way to impress,
    But what I finally achieved every time is freaking stress!!!!
    
    Now that I am all alone listening to sad numbers all night,
    With freaking sleep eluding far away from my eyes!!!!!!
    I think about the time when I used to be the only king,
    Always winning always smiling at being the perfect human being!
    
    Don't know what I will achieve in years to come...
    Because today I am living a life of boredom!!!!
    But a small fire inside my ventricle,
    Gives me hope of trying again in wildest situation...
    For achieving the THING called DESTINATION!!!!!!!!!`,
    mood: "Reflective",
    icon: Star,
  },
  {
    title: "Days are less, times almost up",
    date: "2024",
    category: "Friendship",
    content: `Days are less, times almost up, with every tick-tock of clock I feel like my life almost dead...
    Not in my wildest dreams I thought of being away from my sweetheart friends...
    Always laughing always crying with them
    Promised them that I gonna be with them till the very end
    
    But today I am at an end where I gonna be away from those beautiful gems!
    Lived in this shit world with friends who taught me never to be afraid of any fucking bastard who threatened.
    Till now never came across a single moment when I had to ponder about what FEAR word really meant????
    
    But right now walking with my most dearest friend,
    Don't know how but finally came to know what fear really meant!!!!!
    Will miss badly - those crazy rides and honking horns on pretty gals sight walking by...
    Driving 20 miles just to have tasty gulab jamun bites...
    
    Remembering those crazy fights those silly talks makes me take beautiful down the memory rides!!!!
    Memory which are more precious to me now than I ever imagined them to be,
    Will make me weak every time I try to survive!
    
    DEEP down in my heart I know time will never be the same again,
    No matter how hard we try we can never get this life again.
    The places which were our ADDA where we used to live our life every day,
    Will now be used by some who will soon meet this END again!!!!!`,
    mood: "Nostalgic",
    icon: Heart,
  },
  {
    title: "Code and Dreams",
    date: "2024",
    category: "Technology",
    content: `In the silence of the night,
    Where algorithms dance with light,
    I weave dreams in lines of code,
    Building bridges on this digital road.
    
    Each function a verse,
    Each loop a rhyme,
    In this symphony of logic,
    I find my prime.`,
    mood: "Inspiring",
    icon: PenTool,
  },
  {
    title: "Azure Skies",
    date: "2023",
    category: "Nature",
    content: `Azure skies stretch far and wide,
    Like the cloud where my dreams reside,
    Microsoft's canvas, vast and true,
    Painting possibilities anew.
    
    In this digital expanse,
    Where innovation takes its chance,
    I find my purpose, clear and bright,
    In the endless azure light.`,
    mood: "Contemplative",
    icon: Heart,
  },
];

const categories = ["All", "Technology", "Nature", "Life", "Friendship"];
const moods = ["All", "Inspiring", "Contemplative", "Reflective", "Nostalgic"];

export default function PoetryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-6"
            >
              <div className="p-4 bg-purple-600/20 rounded-full">
                <PenTool className="w-12 h-12 text-purple-400" />
              </div>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Poetry & <span className="text-purple-400">Words</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Where technology meets emotion, and code transforms into verse. 
              A collection of thoughts, dreams, and reflections from my journey 
              as a developer and a dreamer.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Poetry Collection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-white text-center mb-12"
            >
              My Poetry Collection
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {poems.map((poem, index) => {
                const IconComponent = poem.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="w-5 h-5 text-purple-400" />
                        <span className="text-sm text-purple-400 font-medium">
                          {poem.category}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">{poem.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {poem.title}
                    </h3>

                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                        {poem.mood}
                      </span>
                    </div>

                    <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {poem.content}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-8"
            >
              Why I Write Poetry
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed mb-8"
            >
              Poetry is my bridge between the logical world of code and the emotional 
              landscape of the human experience. Each poem is a snapshot of a moment, 
              a feeling, or an insight that emerged from my journey as a developer, 
              a student, and a dreamer.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Just as I debug code to find the root cause, I write poetry to explore 
              the depths of experience and find meaning in the chaos of life.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
