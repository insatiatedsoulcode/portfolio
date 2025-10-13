"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const motion = dynamic(() => import("framer-motion").then((mod) => ({ default: mod.motion })), {
  ssr: false,
});
import { Sparkles, Send, Copy, Check } from "lucide-react";
import { apiService } from "@/services/api";

interface AIGenerationRequest {
  prompt: string;
  provider: string;
  max_tokens: number;
}

const AIContentGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("openai");
  const [maxTokens, setMaxTokens] = useState(100);
  const [generatedContent, setGeneratedContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const providers = [
    { id: "openai", name: "OpenAI GPT", icon: "🤖" },
    { id: "anthropic", name: "Anthropic Claude", icon: "🧠" },
    { id: "google", name: "Google Gemini", icon: "💎" },
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    try {
      const request: AIGenerationRequest = {
        prompt: prompt.trim(),
        provider: selectedProvider,
        max_tokens: maxTokens,
      };

      const response = await apiService.generateContent(request);
      setGeneratedContent(response.content);
    } catch (error) {
      console.error("Error generating content:", error);
      setGeneratedContent("Sorry, there was an error generating content. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async () => {
    if (generatedContent) {
      try {
        await navigator.clipboard.writeText(generatedContent);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error("Failed to copy text:", error);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          AI Content Generator
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Generate creative and intelligent content using cutting-edge AI models
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Sparkles className="w-6 h-6 mr-3 text-purple-400" />
            Create Content
          </h2>

          {/* Provider Selection */}
          <div className="mb-6">
            <label className="block text-white font-medium mb-3">AI Provider</label>
            <div className="grid grid-cols-1 gap-3">
              {providers.map((provider) => (
                <button
                  key={provider.id}
                  onClick={() => setSelectedProvider(provider.id)}
                  className={`p-3 rounded-lg border transition-all duration-200 text-left ${
                    selectedProvider === provider.id
                      ? "border-purple-500 bg-purple-500/20 text-white"
                      : "border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500"
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{provider.icon}</span>
                    <span className="font-medium">{provider.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Max Tokens */}
          <div className="mb-6">
            <label className="block text-white font-medium mb-3">
              Max Tokens: {maxTokens}
            </label>
            <input
              type="range"
              min="50"
              max="500"
              value={maxTokens}
              onChange={(e) => setMaxTokens(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-gray-400 mt-1">
              <span>50</span>
              <span>500</span>
            </div>
          </div>

          {/* Prompt Input */}
          <div className="mb-6">
            <label className="block text-white font-medium mb-3">
              Enter your prompt
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what you want to generate..."
              className="w-full h-32 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200 resize-none"
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Generating...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Generate Content
              </>
            )}
          </button>
        </motion.div>

        {/* Output Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Sparkles className="w-6 h-6 mr-3 text-purple-400" />
              Generated Content
            </h2>
            {generatedContent && (
              <button
                onClick={handleCopy}
                className="flex items-center px-3 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-lg transition-colors duration-200"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2 text-green-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </>
                )}
              </button>
            )}
          </div>

          <div className="min-h-[300px] bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
            {generatedContent ? (
              <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                {generatedContent}
              </div>
            ) : (
              <div className="text-gray-500 text-center py-12">
                <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Your generated content will appear here</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 grid md:grid-cols-3 gap-6"
      >
        <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Multiple AI Models</h3>
          <p className="text-gray-400 text-sm">
            Choose from OpenAI GPT, Anthropic Claude, and Google Gemini
          </p>
        </div>

        <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
          <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Customizable Output</h3>
          <p className="text-gray-400 text-sm">
            Control token length and fine-tune your content generation
          </p>
        </div>

        <div className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Copy className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Easy Export</h3>
          <p className="text-gray-400 text-sm">
            Copy generated content with a single click
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AIContentGenerator;