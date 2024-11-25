    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }else {
            entry.target.classList.remove('visible');
        }
        });
      });
  
      const elements = document.querySelectorAll('.stagger-element');
      elements.forEach((el) => observer.observe(el));