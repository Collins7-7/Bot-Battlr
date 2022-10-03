import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots, selectedBot, removeBot}) {
  //your bot army code here...

  const showBots= bots.map(bot =>{
    return (
      <BotCard 
      key={bot.id}
      bot={bot}
      handleRemove={removeBot}
      enListBots={selectedBot}
      />
    )
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army
          {showBots}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
