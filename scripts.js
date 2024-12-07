document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
      const accordionContent = button.nextElementSibling;
      const isOpen = accordionContent.style.maxHeight;
  
      // Close all panels first
      document.querySelectorAll('.accordion-content').forEach(panel => {
        if (panel !== accordionContent) {
          panel.style.maxHeight = null;
          panel.classList.remove('active');
        }
      });
  
      // Toggle current panel
      if (isOpen) {
        accordionContent.style.maxHeight = null;
        accordionContent.classList.remove('active');
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        accordionContent.classList.add('active');
      }
    });
  });
  