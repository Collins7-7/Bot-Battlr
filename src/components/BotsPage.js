import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const [bots, setBots]= useState([])

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((r) => r.json())
      .then((allBots) => setBots(allBots));
  }, []);
  console.log(bots);

  
    function removeBot(bot){
     const removeFromList= bots.map((eachBot) => eachBot.id === bot.id ? {...eachBot, yourArmy:false} : eachBot);
       setBots(removeFromList);
    }

    function enlistBots(bot){
    const selecting= bots.map(eachBot => eachBot.id === bot.id ? {...eachBot,yourArmy:true} : eachBot);
      setBots(selecting );
    }
    function handleDelete(bot){
      setBots(bots.filter(oneBot => oneBot.id !== bot.id))
    }

    const myBotArmy = bots.filter((bot)=> bot.yourArmy)

  return (
    <div>
      <YourBotArmy bots={myBotArmy} removeBot={removeBot}
      selectedBot ={enlistBots}/>
      <BotCollection bots={bots} handleDelete={handleDelete}
      enlistBots={enlistBots}/>
    </div>
  )
}

export default BotsPage;
