//your JS code here. If required.
function getWindowSize() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  const sizeInfoDiv = document.getElementById("sizeInfo");
  if (sizeInfoDiv) {
    const sizeInfoH1 = sizeInfoDiv.querySelector("h1");
    if (sizeInfoH1) {
      sizeInfoH1.textContent = `Width: ${width} and Height: ${height}`;
    }
  }
}

// Get initial window size
getWindowSize();

// Add event listener for window resize
window.addEventListener('resize', getWindowSize);
