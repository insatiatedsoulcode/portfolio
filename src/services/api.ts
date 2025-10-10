/**
 * API Service for Backend Communication
 * Handles all API calls to the Python FastAPI backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://portfolio-backend-524462978803.us-central1.run.app';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactResponse {
  status: string;
  message: string;
  submission_id?: string;
  ai_response?: string;
}

interface AIGenerationRequest {
  prompt: string;
  provider?: string;
  content_type?: string;
  max_tokens?: number;
  temperature?: number;
}

interface AIGenerationResponse {
  content: string;
  provider: string;
  processing_time?: number;
  metadata?: Record<string, unknown>;
}

interface BlogPostRequest {
  topic: string;
  style?: string;
  length?: string;
  keywords?: string[];
  target_audience?: string;
}

interface BlogPostResponse {
  title: string;
  content: string;
  meta_description: string;
  tags: string[];
  word_count: number;
  reading_time: number;
}

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  /**
   * Generic API call method
   */
  private async apiCall<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, {
      ...defaultOptions,
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.detail || `API call failed: ${response.statusText}`
      );
    }

    return response.json();
  }

  /**
   * Submit contact form
   */
  async submitContactForm(data: ContactFormData): Promise<ContactResponse> {
    return this.apiCall<ContactResponse>('/api/contact/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Generate content using AI
   */
  async generateContent(request: AIGenerationRequest): Promise<AIGenerationResponse> {
    return this.apiCall<AIGenerationResponse>('/api/ai/generate', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  /**
   * Generate blog post
   */
  async generateBlogPost(request: BlogPostRequest): Promise<BlogPostResponse> {
    return this.apiCall<BlogPostResponse>('/api/ai/blog', {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  /**
   * Get available AI providers
   */
  async getAIProviders(): Promise<Record<string, unknown>> {
    return this.apiCall('/api/ai/providers');
  }

  /**
   * Check AI services health
   */
  async checkAIHealth(): Promise<Record<string, unknown>> {
    return this.apiCall('/api/ai/health');
  }

  /**
   * Get blog posts
   */
  async getBlogPosts(): Promise<Record<string, unknown>[]> {
    return this.apiCall('/api/blog/posts');
  }

  /**
   * Health check
   */
  async healthCheck(): Promise<Record<string, unknown>> {
    return this.apiCall('/health');
  }

  /**
   * Get contact form statistics
   */
  async getContactStats(): Promise<Record<string, unknown>> {
    return this.apiCall('/api/contact/stats');
  }
}

// Create singleton instance
export const apiService = new ApiService();

// Export types for use in components
export type {
  ContactFormData,
  ContactResponse,
  AIGenerationRequest,
  AIGenerationResponse,
  BlogPostRequest,
  BlogPostResponse,
};
