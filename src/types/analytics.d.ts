/**
 * Analytics Type Definitions
 * 
 * Type definitions for Google Analytics 4 tracking functions
 */

declare global {
  interface Window {
    dataLayer: any[];
    trackEvent: (eventName: string, eventParams?: Record<string, any>) => void;
    updateAnalyticsConsent: (granted: boolean) => void;
    analytics: {
      trackEvent: (eventName: string, eventParams?: Record<string, any>) => void;
      trackPageView: (pagePath: string, pageTitle?: string) => void;
      trackFormSubmission: (formType: string, formData?: Record<string, any>) => void;
      trackCTAClick: (ctaName: string, ctaLocation: string, destination?: string) => void;
      trackNavClick: (navItem: string, navLevel: number, destination: string) => void;
      trackExternalLink: (linkUrl: string, linkText: string, linkDomain: string) => void;
      trackScrollDepth: (scrollPercentage: number) => void;
      trackArticleRead: (articleTitle: string, articleCategory: string, readPercentage: number) => void;
      trackConsultationRequest: (dealType?: string) => void;
      trackGuideDownload: (guideName: string, guideType: string) => void;
    };
  }
}

export {};
