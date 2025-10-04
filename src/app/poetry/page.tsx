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
  {
    title: "The Journey",
    date: "2022",
    category: "Life",
    content: `From IIT's hallowed halls,
    To Microsoft's corporate walls,
    Each step a poem, each turn a verse,
    In this universe, I traverse.
    
    With every challenge faced,
    And every problem embraced,
    I write my story, line by line,
    In this grand design divine.`,
    mood: "Reflective",
    icon: Star,
  },
  {
    title: "Silent Conversations",
    date: "2021",
    category: "Philosophy",
    content: `In the quiet of my mind,
    Where thoughts and code entwined,
    I find conversations deep,
    In the silence that I keep.
    
    With every bug I fix,
    And every feature I mix,
    I speak a language pure,
    That will forever endure.`,
    mood: "Peaceful",
    icon: BookOpen,
  },
];

const categories = ["All", "Technology", "Nature", "Life", "Philosophy"];
const moods = ["All", "Inspiring", "Contemplative", "Reflective", "Peaceful"];

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
