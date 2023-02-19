const { Reply } = require("./reply");

const addAIReplyButton = () => {
  const replyButton = document.querySelector(
    'div[data-testid="reply"] button'
  ) as HTMLButtonElement;

  const aiReplyButton = document.createElement("button");
  aiReplyButton.innerText = "Generate AI Reply";
  aiReplyButton.addEventListener("click", async () => {
    const tweetBox = replyButton.closest(
      'div[role="textbox"]'
    ) as HTMLInputElement;

    const tweetText = tweetBox.innerText;
    const aiReply = await Reply.generateAIReply(tweetText);
    tweetBox.innerText = aiReply;
  });
  replyButton.parentNode.insertBefore(aiReplyButton, replyButton.nextSibling);
};

// Run the function to add the AI reply button when the Twitter UI is loaded
