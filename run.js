


past = window.pageYOffset
j = 1
z = 0
function run(curr)
{
	pos=curr
  do
  {
 do
 {
   past = window.pageYOffset
   i = 0
   elements = null
  
   
     elements = null
    elements = document.getElementsByClassName('TweetTextSize js-tweet-text tweet-text')
    do
    {
      try
      {
        var item = elements.item(i) .innerHTML
        console.info(item)
       // console.info(item)
      } 
      catch (e)
      {
        console.info(e)
        break
      }
      z++
      if (item != null)
      
      //console.info(item)
      i++
    } 
    while (item != null)
      
   function move()
   {
     
     console.log("Y===="+document.documentElement.clientHeight)
     
     setTimeout(window.scrollTo(0,  window.pageYOffset+500), 3000)
   }
   move()
   
   
   //window.scrollTo(0, j * document.documentElement.clientHeight)
   curr = window.pageYOffset
   console.info('cur=' + curr)
   console.info('past=' + past)
   j++
   console.log(j)
 } 
 while (curr> past)
 if(curr == past )
 {
	if (pos == curr)
	{
	return 0;
}
   setTimeout(run,5000)
   z=z+1
 }
  }
  while(z<5)
  
}
  
   
setTimeout(run, 3000)


