// Create sidebar
const sidebar = document.createElement('div');
sidebar.id = 'library-jobs-sidebar';

// Create iframe
const iframe = document.createElement('iframe');
iframe.id = 'library-jobs-iframe';
iframe.src = 'https://libraryjobshub.org';

// Create toggle button
const toggleButton = document.createElement('button');
toggleButton.id = 'toggle-sidebar';
toggleButton.textContent = 'Show Jobs';

// Add elements to the page
sidebar.appendChild(iframe);
document.body.appendChild(sidebar);
document.body.appendChild(toggleButton);

// Toggle sidebar visibility
toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  toggleButton.textContent = sidebar.classList.contains('open') ? 'Hide Jobs' : 'Show Jobs';
});