// Visitor tracking utility
export interface VisitorData {
  id: string;
  page: string;
  timestamp: string;
  userAgent: string;
  referrer: string;
  ip?: string;
  sessionId: string;
  isNewVisitor: boolean;
}

export interface PageStats {
  page: string;
  visits: number;
  uniqueVisitors: number;
  lastVisit: string;
}

class VisitorTracker {
  private sessionId: string;
  private isNewVisitor: boolean;

  constructor() {
    if (typeof window !== 'undefined') {
      this.sessionId = this.getOrCreateSessionId();
      this.isNewVisitor = this.checkIfNewVisitor();
    } else {
      this.sessionId = 'server-session';
      this.isNewVisitor = true;
    }
  }

  private getOrCreateSessionId(): string {
    let sessionId = localStorage.getItem('visitor_session_id');
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('visitor_session_id', sessionId);
    }
    return sessionId;
  }

  private checkIfNewVisitor(): boolean {
    const hasVisited = localStorage.getItem('has_visited_before');
    if (!hasVisited) {
      localStorage.setItem('has_visited_before', 'true');
      return true;
    }
    return false;
  }

  public trackPageVisit(page: string): void {
    const visitorData: VisitorData = {
      id: Date.now().toString(),
      page,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'direct',
      sessionId: this.sessionId,
      isNewVisitor: this.isNewVisitor
    };

    // Store visitor data
    const existingVisits = JSON.parse(localStorage.getItem('page_visits') || '[]');
    existingVisits.push(visitorData);
    localStorage.setItem('page_visits', JSON.stringify(existingVisits));

    // Update page stats
    this.updatePageStats(page);
  }

  private updatePageStats(page: string): void {
    const existingStats = JSON.parse(localStorage.getItem('page_stats') || '{}');
    
    if (!existingStats[page]) {
      existingStats[page] = {
        page,
        visits: 0,
        uniqueVisitors: 0,
        lastVisit: new Date().toISOString()
      };
    }

    existingStats[page].visits += 1;
    existingStats[page].lastVisit = new Date().toISOString();

    // Count unique visitors for this page
    const pageVisits = JSON.parse(localStorage.getItem('page_visits') || '[]');
    const uniqueSessions = new Set(
      pageVisits
        .filter((visit: VisitorData) => visit.page === page)
        .map((visit: VisitorData) => visit.sessionId)
    );
    existingStats[page].uniqueVisitors = uniqueSessions.size;

    localStorage.setItem('page_stats', JSON.stringify(existingStats));
  }

  public getPageStats(): PageStats[] {
    const stats = JSON.parse(localStorage.getItem('page_stats') || '{}');
    return Object.values(stats) as PageStats[];
  }

  public getTotalVisits(): number {
    const visits = JSON.parse(localStorage.getItem('page_visits') || '[]');
    return visits.length;
  }

  public getUniqueVisitors(): number {
    const visits = JSON.parse(localStorage.getItem('page_visits') || '[]');
    const uniqueSessions = new Set(visits.map((visit: VisitorData) => visit.sessionId));
    return uniqueSessions.size;
  }

  public getTodayVisits(): number {
    const visits = JSON.parse(localStorage.getItem('page_visits') || '[]');
    const today = new Date().toDateString();
    return visits.filter((visit: VisitorData) => 
      new Date(visit.timestamp).toDateString() === today
    ).length;
  }

  public getBlogVisits(): number {
    const stats = this.getPageStats();
    const blogStats = stats.find(stat => stat.page === '/blog');
    return blogStats ? blogStats.visits : 0;
  }

  public getHomePageVisits(): number {
    const stats = this.getPageStats();
    const homeStats = stats.find(stat => stat.page === '/');
    return homeStats ? homeStats.visits : 0;
  }

  public getRecentVisits(limit: number = 10): VisitorData[] {
    const visits = JSON.parse(localStorage.getItem('page_visits') || '[]');
    return visits
      .sort((a: VisitorData, b: VisitorData) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, limit);
  }
}

export const visitorTracker = new VisitorTracker();
