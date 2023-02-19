class ReplyAction {
  /**
   * @var string
   */
  public url: string = "";

  /**
   * @var string
   */
  public key: string = "";

  constructor() {
    console.log(`i am here too ${process.env.APIKEY} ${process.env.URI}`);
  }
  // Define the function that generates the AI reply using GPT-3
  generateAIReply = async (tweetText: string) => {
    const opts: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer  ${process.env.APIKEY}`,
      },
      body: JSON.stringify({
        prompt: tweetText,
        max_tokens: 60,
        temperature: 0.8,
        n: 1,
        stop: ["\n"],
        model: "text-davinci-003",
      }),
    };
    const response = await fetch(`${process.env.URI}`, opts);
    const { choices } = await response.json();
    const aiReply = choices[0].text.trim();
    return aiReply;
  };
}
export const Reply = new ReplyAction();
