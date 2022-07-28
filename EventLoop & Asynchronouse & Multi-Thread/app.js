/* EVENT LOOP gdg ni Execution Stack ba Message Queue hyoriin dund baih procces ym.
(tuhain line of code nd CallBack function ni Asynchronous request-t bol (web api -n setTimeout() etc..) 
Exectution Stack -s WEB APIS -d tur bairluulah buguud tuhain function nii eelj bolhod Message Queue -ruu 
hiine. EvenLoop ni tuhain code g Message Queue orj irmegts Exectuction Stack ruu hiine. ) */

first();
function first(){
  console.log("Hello?");
  fun = function(a,b){
  setTimeout(()=> a(),3000); //asynchronous function
  setTimeout(()=> b(),6000);
  }
  console.log(`what is your name ?`)
};
fun(second, tird);

function second(){
  console.log("My name is Evank");
};

function tird(){
  console.log("Nice to meet you Evank");
};

// ASYNCHRONOUS (works parlel) vs SYNCHRONOUS (daraalalj ajildag)
// MULTITHREAD AND SINGLE THREAD languages

/*  `JS is single thread language, buyu function -uud ni eel daraalalaar ajildag gevch 
JS -n CALLBACK function -r browser deer ajildag WEB APIS -n setTimeout() zereg arguudiig ashiglaj 
multi-thread -r ajilah bolomj olgodog. (setTimeout(); fetch(); -  zereg... )
Tiimees aschynronous (zereg ajiladag) function -r JS multi-thread code bichih bolomjtoi.
*/