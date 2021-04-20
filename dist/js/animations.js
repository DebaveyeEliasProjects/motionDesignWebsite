var animation = bodymovin.loadAnimation({
  container: document.querySelector(".c-logo-1"), // Required
  path: './logolottie.json', // Required
  renderer: 'svg/canvas/html', // Required
  loop: false, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
})