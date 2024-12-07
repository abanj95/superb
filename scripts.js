document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
      header.addEventListener('click', function () {
          const accordionContent = this.nextElementSibling;
          // Check if it's currently open
          const isOpen = accordionContent.style.maxHeight && accordionContent.style.maxHeight !== '0px';

          // Close all open accordions except the current one
          accordionHeaders.forEach(otherHeader => {
              const otherContent = otherHeader.nextElementSibling;
              if (otherContent !== accordionContent) {
                  otherContent.style.maxHeight = null;
                  otherContent.classList.remove('active');
              }
          });

          if (!isOpen) {
              // Open this accordion
              accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
              accordionContent.classList.add('active');
          } else {
              // Close this accordion
              accordionContent.style.maxHeight = null;
              accordionContent.classList.remove('active');
          }
      });
  });
});
