 const hamburger=document.getElementById('hamburger-menu');

 const frame1=document.getElementById('h-frame1');

 const frame2=document.getElementById('h-frame2');
 const main=document.getElementById('main');
 const checkout=document.getElementById('checkout');
 







 hamburger.addEventListener('click',function()
{
    frame1.classList.add('visible');
    frame2.classList.add('visible');
  
    main.style.filter='blur(5px)'
    // hamburger.style.zIndex = '9999';
   
    
    

    


})

main.addEventListener('click',function()
{
    frame1.classList.remove('visible');
    frame2.classList.remove('visible');
    main.style.filter='none';
    
    

    


})




checkout.addEventListener('click',()=>
{
    window.location.href='checkout.html';

})