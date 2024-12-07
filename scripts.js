document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;
    
    // Determine if the accordion is currently open
    const isOpen = accordionContent.style.maxHeight && accordionContent.style.maxHeight !== "0px";

    // Close all open accordion contents
    document.querySelectorAll('.accordion-content').forEach(panel => {
      if (panel !== accordionContent) {
        panel.style.maxHeight = null;
        panel.classList.remove('active');
        const img = panel.querySelector('.wig-image img');
        if (img) img.style.display = "none"; // Hide images in all other accordions
      }
    });

    // Toggle the clicked accordion
    if (isOpen) {
      accordionContent.style.maxHeight = null;
      accordionContent.classList.remove('active');
      const img = accordionContent.querySelector('.wig-image img');
      if (img) img.style.display = "none"; // Hide image if accordion is closing
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      accordionContent.classList.add('active');
      const img = accordionContent.querySelector('.wig-image img');
      if (img) img.style.display = "block"; // Show image if accordion is opening
    }
  });
});
