// Import the Reply class from the "reply" module
const { Reply } = require("./reply");

// Function to add an AI reply button to the Twitter UI
const addAIReplyButton = () => {
  // Get the reply button element
  const replyButton = document.querySelector(
    'div[data-testid="reply"] button'
  ) as HTMLButtonElement;

  // Create a new AI reply button
  const aiReplyButton = document.createElement("button");
  aiReplyButton.innerText = "Generate AI Reply";
  
  // Add a click event listener to the AI reply button
  aiReplyButton.addEventListener("click", async () => {
    // Get the tweet box element
    const tweetBox = replyButton.closest(
      'div[role="textbox"]'
    ) as HTMLInputElement;
    
    // Get the text of the tweet box
    const tweetText = tweetBox.innerText;
    
    // Generate an AI reply to the tweet
    const aiReply = await Reply.generateAIReply(tweetText);
    
    // Replace the text of the tweet box with the AI reply
    tweetBox.innerText = aiReply;
  });
  
  // Insert the AI reply button before the reply button in the UI
  replyButton.parentNode.insertBefore(aiReplyButton, replyButton.nextSibling);
};

// Call the addAIReplyButton function when the Twitter UI is loaded
