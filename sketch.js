//1 creating global var

var mygamestate = 0;
var myplayercount=0;

var mydatabase;

var myform, myplayer, mygame;
var allplayers=[]

function setup(){
  createCanvas(400,400);
  mydatabase = firebase.database();  //2 creating db
  
  mygame = new Game();    //3 object of game cls and its methods
  mygame.readState();
  mygame.start();
}


function draw()
{
  if(myplayercount === 2)
  {
    mygame.gsupdate(1);
  }
  if(mygamestate === 1)
  {
    clear();
    mygame.play();
  }
}
