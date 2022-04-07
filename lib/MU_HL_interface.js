var MUGraphics={
  createObject     : MUcreateObject,
  generateGraphics : MUgenerateGraphics,
  exportGraphics   : MUexportGraphics,
  prepareOP        : MUprepareOP,
}

const MUleft=0;
const MUcenter=1;
const MUright=2;

const MUalphabetic=0;
const MUtop=1;
const MUhanging=2;
const MUmiddle=3;
const MUideographic=4;
const MUbottom=5;

function MUcreateObject(id, format, fontSize=0, fontFamily=0, dims=0, bg=0)
{

}

async function MUgenerateGraphics(o){
  o = MUgenerateGraphicsLowLevel(o);
  return o;
}

async function MUexportGraphics(o){
  let rv= MUexportGraphicsLowLevel(o);
  return rv;
}


function MUprepareOP(o, r, c0, a=null, b=null, c=null, d=null, e=null, f=null)
{
}

