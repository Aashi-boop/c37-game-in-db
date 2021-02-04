class Game 
{
    constructor()
    {

    }
    
    readState()
    {  //read gamestate from db
      var gameStateRef  = mydatabase.ref('gameState');
      gameStateRef.on("value",function(data){
        mygamestate = data.val();              //var gamestate of sketch
      })
    
    }

     gsupdate(state)
    {
      mydatabase.ref('/').update({
        gameState: state          //db gamestate
      });
    }
    
    async start()
    {
      if(mygamestate === 0)  //waiting gs
      {     
        myplayer = new Player();  //new player is created

        var playerCountRef= await mydatabase.ref("playerCount").once("value");

        if(playerCountRef.exists())
        {
          myplayercount = playerCountRef.val();
        }
        else
        {
           myplayer.readPlayerCount();
        }
       

        myform = new Form()  // new form is displayed
        myform.display();
      }
    
    }

    play()
    {
      myform.allhide();     //1

       textSize(30);    //2
       text("Game Start", 120, 100)

       Player.getallplayersInfo(); //3  //static

       if(allplayers!== undefined)
       {

        var text_ypos= 130;
        
        for(var plr in allplayers)
        {
          console.log(plr + "next")
          if(plr=== "player" + myplayer.pindex)
          {
            fill("red")
            //console.log(plr)
          }

          else
          {
            fill("black")
          }

          text_ypos += 20

          textSize(15)
          text(allplayers[plr].name + "--->" + allplayers[plr].distance, 120 ,text_ypos)
        }
       }

       if(keyDown("UP_ARROW") && myplayer.pindex !== null)
       {
         myplayer.pdistance += 30
         myplayer.updateplayerinfo();
       }
    }
}
