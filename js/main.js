document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu functionality
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const navLinks = document.querySelector('.nav-links');
  
  mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav') && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
  
  // Services data
  const services = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
      title: 'PMO Setup & Optimization',
      description: 'Establish or enhance your PMO with proven frameworks and best practices.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>`,
      title: 'Strategic Planning',
      description: 'Align your project portfolio with organizational objectives and strategy.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      title: 'Team Development',
      description: 'Build high-performing project teams through training and mentorship.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
      title: 'Performance Metrics',
      description: 'Implement effective project monitoring and reporting systems.'
    }
  ];
  
  // Approach steps data
  const approachSteps = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
      number: 1,
      title: 'Assessment',
      description: 'We evaluate your current project management maturity and identify opportunities for improvement.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
      number: 2,
      title: 'Strategy Development',
      description: 'Together, we create a tailored roadmap that aligns with your organizational goals.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
      number: 3,
      title: 'Implementation',
      description: 'We help you execute the plan with hands-on guidance and support.'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"></path></svg>`,
      number: 4,
      title: 'Continuous Improvement',
      description: 'Regular reviews and adjustments ensure sustainable success.'
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      content: 'Bedrock PMO transformed our project management capabilities. Their expertise and guidance helped us deliver a complex infrastructure project on time and under budget.',
      author: 'Lucin McPherson',
      position: 'CEO, McPherson Development'
    },
    {
      content: 'Working with Bedrock PMO has been a game-changer for our organization. Their structured approach and attention to detail have significantly improved our project success rate.',
      author: 'Michael Chen',
      position: 'Director of Operations, Innovate Construction'
    },
    {
      content: 'The team at Bedrock PMO provided invaluable support during a critical system implementation. Their expertise and commitment to excellence ensured a smooth transition with minimal disruption.',
      author: 'Fernando Rodriguez',
      position: 'VP of Technology, FinServe Inc.'
    }
  ];
  
  // Contact methods data
  const contactMethods = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
      title: 'Phone',
      details: '+1 (754) 900-0180',
      link: 'tel:+17549000180'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
      title: 'Email',
      details: 'info@bedrockpmo.com',
      link: 'mailto:info@bedrockpmo.com'
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
      title: 'Location',
      details: 'Offices in the South Florida and Boston areas',
      link: '#'
    }
  ];
  
  // Populate services
  const servicesGrid = document.querySelector('.services-grid');
  services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';
    serviceCard.innerHTML = `
      <div class="service-icon">
        ${service.icon}
      </div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <a href="#contact" class="service-link">
        Learn more
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    `;
    servicesGrid.appendChild(serviceCard);
  });
  
  // Populate approach steps
  const approachStepsContainer = document.querySelector('.approach-steps');
  approachSteps.forEach(step => {
    const stepElement = document.createElement('div');
    stepElement.className = 'approach-step';
    stepElement.innerHTML = `
      <div class="step-icon">
        ${step.icon}
      </div>
      <div class="step-content">
        <h3><span class="step-number">${step.number}.</span> ${step.title}</h3>
        <p>${step.description}</p>
      </div>
    `;
    approachStepsContainer.appendChild(stepElement);
  });
  
  // Populate testimonials
  const testimonialsGrid = document.querySelector('.testimonials-grid');
  testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    testimonialCard.innerHTML = `
      <div class="testimonial-content">
        <p>"${testimonial.content}"</p>
      </div>
      <div class="testimonial-author">
        <div class="author-info">
          <h4>${testimonial.author}</h4>
          <p>${testimonial.position}</p>
        </div>
      </div>
    `;
    testimonialsGrid.appendChild(testimonialCard);
  });
  
  // Populate contact info
  const contactInfo = document.querySelector('.contact-info');
  contactMethods.forEach(method => {
    const contactMethod = document.createElement('div');
    contactMethod.className = 'contact-method';
    contactMethod.innerHTML = `
      <div class="contact-icon">
        ${method.icon}
      </div>
      <div class="contact-details">
        <h4>${method.title}</h4>
        <a href="${method.link}">${method.details}</a>
      </div>
    `;
    contactInfo.appendChild(contactMethod);
  });
  
  // Create contact form
  const contactForm = document.querySelector('.contact-form');
  contactForm.innerHTML = `
    <div class="form-group">
      <label for="name" class="form-label">Name</label>
      <input type="text" id="name" class="form-input" required>
    </div>
    <div class="form-group">
      <label for="email" class="form-label">Email</label>
      <input type="email" id="email" class="form-input" required>
    </div>
    <div class="form-group">
      <label for="phone" class="form-label">Phone</label>
      <input type="tel" id="phone" class="form-input">
    </div>
    <div class="form-group">
      <label for="company" class="form-label">Company</label>
      <input type="text" id="company" class="form-input">
    </div>
    <div class="form-group full-width">
      <label for="message" class="form-label">Message</label>
      <textarea id="message" class="form-textarea" required></textarea>
    </div>
    <button type="submit" class="button form-submit">Send Message</button>
  `;
  
  // Form submission
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
});