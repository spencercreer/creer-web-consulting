import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Colors - Based on Style Guide */
    --primary: #2A4FC9;
    --primary-light: #7F97E8;
    --secondary: #272727;
    --text-dark: #272727;
    --text-light: #909090;
    --text-lighter: #909090;
    --background: #ffffff;
    --background-alt: #f8f9fa;
    --border: #e9ecef;
    --success: #28a745;
    --error: #dc3545;
    --warning: #ffc107;
    
    /* Typography - Based on Style Guide */
    --font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    --font-size-base: 16px;
    --font-size-sm: 0.875rem;
    --font-size-subheading: 18px;
    --font-size-h2: 28px;
    --font-size-h1: 40px;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    --font-size-5xl: 3rem;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;
    
    /* Borders */
    --border-radius-sm: 0.25rem;
    --border-radius-md: 0.5rem;
    --border-radius-lg: 1rem;
    
    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    
    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
    
    /* Container */
    --container-width: 1200px;
    --container-padding: 1rem;
  }

  /* Additional global styles that complement index.css */
  h1 {
    font-size: var(--font-size-h1);
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: var(--spacing-lg);
    color: var(--text-dark);
  }
  
  h2 {
    font-size: var(--font-size-h2);
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: var(--spacing-md);
    color: var(--text-dark);
  }
  
  h3 {
    font-size: var(--font-size-subheading);
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: var(--spacing-md);
    color: var(--text-dark);
  }
  
  h4 {
    font-size: var(--font-size-2xl);
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: var(--spacing-sm);
    color: var(--secondary);
  }
  
  h5 {
    font-size: var(--font-size-xl);
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: var(--spacing-sm);
    color: var(--secondary);
  }
  
  h6 {
    font-size: var(--font-size-lg);
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: var(--spacing-sm);
    color: var(--secondary);
  }
  
  p {
    margin-bottom: var(--spacing-md);
    color: var(--text-dark);
    font-size: var(--font-size-base);
    line-height: 1.6;
  }
  
  a {
    color: var(--primary);
    transition: var(--transition-normal);
    
    &:hover {
      color: var(--primary-light);
    }
  }
  
  /* Responsive adjustments */
  @media (max-width: 992px) {
    h1 {
      font-size: var(--font-size-4xl);
    }
    
    h2 {
      font-size: var(--font-size-3xl);
    }
    
    h3 {
      font-size: var(--font-size-2xl);
    }
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: var(--font-size-3xl);
    }
    
    h2 {
      font-size: var(--font-size-2xl);
    }
    
    h3 {
      font-size: var(--font-size-xl);
    }
    
    :root {
      --container-padding: 0.75rem;
    }
  }
  
  @media (max-width: 576px) {
    h1 {
      font-size: var(--font-size-2xl);
    }
    
    h2 {
      font-size: var(--font-size-xl);
    }
    
    h3 {
      font-size: var(--font-size-lg);
    }
    
    :root {
      --container-padding: 0.5rem;
    }
  }
`;

export default GlobalStyles;
