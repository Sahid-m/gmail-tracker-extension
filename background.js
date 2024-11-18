// Trigger on Installation
chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: "https://google.com" });
});

// When Extension is Clicked
chrome.action.onClicked.addListener(async () => {
  console.log("CALLED");

  const response = {
    ok: true,
  };

  if (response.ok) {
    // Set the popup back to its default state
    chrome.action.setPopup({ popup: "popup.html" });
    chrome.action.openPopup();
  } else {
    // Disable the default popup
    chrome.tabs.create({ url: "https://google.com" });
  }
});
