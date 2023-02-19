import React, { FC, useEffect, useState } from "react";
import { render } from "react-dom";

interface IProps {}

export const App: FC<IProps> = () => {
  const [content, setContent] = useState("N/A");
  useEffect(() => {
    chrome.tabs.query({currentWindow: true, active: true}, tabs => {
      console.log(tabs);
      //const currentTabID = tabs.length === 0 ? 0 : tabs[0].id!;
      // chrome.tabs.sendMessage(currentTabID, '', response => {
      //   setContent(response);
      // });
    });
  }, []);

  return (
    <React.Fragment>
      <div data-testid="reply"></div>
      <div role="textarea"></div>   
      <div>{content}</div>   
    </React.Fragment>
  );
};

render(<App />, document.getElementById("app"));
