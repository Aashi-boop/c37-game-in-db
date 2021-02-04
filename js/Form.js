class Form 
{
  constructor() 
  {
    this.input = createInput("Name");   //1
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2')
  }
  allhide()
  {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display()
  {
    fill("blue");

    //creating html elements and positioning them
    this.title.html("Car Racing Game");    //writing in html formaT   //2

    this.title.position(130, 0);  //3
    this.input.position(130, 160);
    this.button.position(250, 200);
    
    
    this.button.mousePressed(()=>{    //arrow func
      this.input.hide()
      this.button.hide()

      myplayer.pname = this.input.value();   //4
      
      myplayercount+=1;
      myplayer.pindex = myplayercount    //5
      myplayer.updateplayerinfo()   //6
      myplayer.updateCount(myplayercount);
      
      this.greeting.html("Hello " + myplayer.pname )   //7
      this.greeting.position(130, 100)
    });
  }
}

 
