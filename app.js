


function countWord() {

   let text = document.getElementById("text").value;
   
    let words = text.split(" ").length ;
   
    
   
      
   document.getElementById("best4").innerHTML=words;
     
      

     
   
     
   
   let Counter1 = 0 ;
   let Counter2 = 0 ;
   let Counter3 = 0 ;
   let Counter4 = 0 ;
   
    let Counter5 = 0 ;
    let Counter6 = 0 ;
   let Counter7 = 0 ;
   let Counter8 = 0 ;
   let Counter9 = 0 ;
   let Counter10 = 0 ;
   
   let Counter11 = 0 ;
   let Counter12 = 0 ;
   let Counter13 = 0 ;
   let Counter14 = 0 ;
   let Counter15 = 0 ;
   let Counter16 = 0 ;
   let Counter17 = 0 ;
   let Counter18 = 0 ;
   let Counter19 = 0 ;
   let Counter20 = 0 ;
   let Counter21 = 0 ;
   let Counter22 = 0 ;
   let Counter23 = 0 ;
   let Counter24 = 0 ;
   let Counter25 = 0 ;
   let Counter26 = 0 ;
   let Counter27 = 0 ;
   let Counter28 = 0 ;
   // let Counter29 = 0 ;
   
   
   
   
   
   
   
   
   
   
   
   let alif = ['ا','أ','إ','ى','آ'];
   let baa = ['ب'];
   let jim = ['ج'];
   let dal = ['د'];
   let haae = ['ه' , 'ة'];
   let ouaou = ['و'];
   let zay = ['ز'];
   let haa = ['ح'];
   let ttae = ['ط'];
   let yaa = ['ي'];
   let kaf = ['ك']; 
   let laa = ['ل'];
   let mim = ['م'];
   let noon = ['ن'];
   let sin = ['س'];

   let ine = ['ع'];
   let faa = ['ف'];
   let saad = ['ص'];
   let ppaf = ['ق'];

   let raa = ['ر'];
   let chine = ['ش'];

   let taa = ['ت'];
   let ttta = ['ث'];
   let kha = ['خ'];

   let ddal = ['ذ'];

   let daa = ['ض'];
   let ddda = ['ظ'];
   let gaa = ['غ'];

   
   
   
   for(ch of text) {
   
      
   
    if (alif.includes(ch)){
       Counter1++
       Counter5++
       Counter8++
       Counter9++
       Counter10++
       Counter11++
       Counter12++
       Counter13++
       Counter14++
       Counter18++
       Counter16++
       Counter19++
       Counter20++
       Counter15++

    }
    if (baa.includes(ch)){
       Counter2++
       
       Counter5++
       Counter8++
       Counter9++
       Counter10++
       Counter11++
       Counter12++
       Counter13++
       Counter14++
       Counter18++
       Counter16++
       Counter19++
       Counter20++
       Counter15++
    }
   
    if (jim.includes(ch)){
      Counter3++
      
      Counter5++
      Counter8++
      Counter9++
      Counter10++
      Counter11++
      Counter12++
      Counter13++
      Counter14++
      Counter18++
      Counter16++
      Counter19++
      Counter20++
      Counter15++
   }
   
   if (dal.includes(ch)){
      Counter4++
      
      Counter5++
      Counter8++
      Counter9++
      Counter10++
      Counter11++
      Counter12++
      Counter13++
      Counter14++
      Counter18++
      Counter16++
      Counter19++
      Counter20++
      Counter15++
      
   }
   
   if (haae.includes(ch)){
      
      
      Counter5++
      Counter8++
      Counter9++
      Counter10++
      Counter11++
      Counter12++
      Counter13++
      Counter14++
      Counter18++
      Counter16++
      Counter19++
      Counter20++
      Counter15++
   }
   
   if (ouaou.includes(ch)){
      Counter6++
      
      Counter8++
      Counter9++
      Counter10++
      Counter11++
      Counter12++
      Counter13++
      Counter14++
      Counter18++
      Counter16++
      Counter19++
      Counter20++
      Counter15++
   }
   
   
   if (zay.includes(ch)){
      Counter7++
      
      Counter8++
      Counter9++
      Counter10++
      Counter11++
      Counter12++
      Counter13++
      Counter14++
      Counter18++
      Counter16++
      Counter19++
      Counter20++
      Counter15++
   }
   if (haa.includes(ch)){
      
      
      Counter8++
      Counter9++
      Counter10++
      Counter11++
      Counter12++
      Counter13++
      Counter14++
      Counter18++
      Counter16++
      Counter19++
      Counter20++
      Counter15++
   }
   if (ttae.includes(ch)){
      Counter9++
      
      Counter10++
      Counter11++
      Counter12++
      Counter13++
      Counter14++
      Counter18++
      Counter16++
      Counter19++
      Counter20++
      Counter15++
      
   }
   if (yaa.includes(ch)){
      Counter10++
      
      Counter11++
      Counter12++
      Counter13++
      Counter14++
      Counter18++
      Counter16++
      Counter19++
      Counter20++
      Counter15++
      
   }
   
   if (kaf.includes(ch)){
      Counter11++
      
      Counter12++
      Counter13++
      Counter14++
      Counter18++
      Counter16++
      Counter19++
      Counter20++
      Counter15++
   }
   
   
   if (laa.includes(ch)){
      Counter12++
      Counter13++
      Counter14++
      Counter18++
      Counter16++
      Counter19++
      Counter20++
      Counter15++



   }
   
   
   if (mim.includes(ch)){
      Counter13++
      
      Counter14++
      Counter18++
      Counter16++
      Counter19++
      Counter20++
      Counter15++
   }
   
   
   
   if (noon.includes(ch)){
      Counter14++
      
      Counter18++
      Counter16++
      Counter19++
      Counter20++
      Counter15++
      
   }
   

   if (saad.includes(ch)){
      Counter18++
      
      Counter16++
      Counter19++
      Counter20++
      Counter15++
      
   }
   
   
  
   
   
   if (ine.includes(ch)){
      Counter16++
      
      Counter19++
      Counter20++
      Counter15++
   }
   
   
   if (faa.includes(ch)){
      Counter17++
      
      Counter19++
      Counter20++
      Counter15++
   }
   
   if (daa.includes(ch)){
      Counter26++
      
      Counter19++
      Counter20++
      Counter15++
   }
   
   if (ppaf.includes(ch)){
      Counter19++
      
      Counter20++
      Counter15++
   }
   
   
   if (raa.includes(ch)){
      Counter20++
      Counter15++
   }
   
   if (sin.includes(ch)){
      Counter15++
      
   }

   
   if (taa.includes(ch)){
      Counter22++
   }
   
   
   if (ttta.includes(ch)){
      Counter23++
   }
   
   
   if (kha.includes(ch)){
      Counter24++
   }
   
   
   if (ddal.includes(ch)){
      Counter25++
   }
   
   
  
   
   
   if (ddda.includes(ch)){
      Counter27++
   }
   
   
   if (gaa.includes(ch)){
      Counter28++
   }
   
   
   if (chine.includes(ch)){
      Counter21++
   }
   
   
   }
   
   
   
   document.getElementById("alif").innerHTML=Counter1;
   document.getElementById("alif1").innerHTML=Counter1;
   
   document.getElementById("baa").innerHTML=Counter2;
   document.getElementById("baa2").innerHTML=Counter2*2;
   
   document.getElementById("jim").innerHTML=Counter3;
   document.getElementById("jim3").innerHTML=Counter3*3;
   
   document.getElementById("dal").innerHTML=Counter4;
   document.getElementById("dal4").innerHTML=Counter4*4;
   
   document.getElementById("haae").innerHTML=Counter5;
   document.getElementById("haae5").innerHTML=Counter5*5;
   
   document.getElementById("ouaou").innerHTML=Counter6;
   document.getElementById("ouaou6").innerHTML=Counter6*6;
   
   document.getElementById("zay").innerHTML=Counter7;
   document.getElementById("zay7").innerHTML=Counter7*7;
   
   document.getElementById("haa").innerHTML=Counter8;
   document.getElementById("haa8").innerHTML=Counter8*8;
   
   document.getElementById("ttae").innerHTML=Counter9;
   document.getElementById("ttae9").innerHTML=Counter9*9;
   
   document.getElementById("yaa").innerHTML=Counter10;
   document.getElementById("yaa10").innerHTML=Counter10*10;
   
   document.getElementById("kaf").innerHTML=Counter11;
   document.getElementById("kaf11").innerHTML=Counter11*20;
   
   document.getElementById("laa").innerHTML=Counter12;
   document.getElementById("laa12").innerHTML=Counter12*30;
   
   
   document.getElementById("mim").innerHTML=Counter13;
   document.getElementById("mim13").innerHTML=Counter13*40;
   
   
   document.getElementById("noon").innerHTML=Counter14;
   document.getElementById("noon14").innerHTML=Counter14*50;

      
   document.getElementById("saad").innerHTML=Counter18;
   document.getElementById("saad18").innerHTML=Counter18*60;
   
  
   
   document.getElementById("ine").innerHTML=Counter16;
   document.getElementById("ine16").innerHTML=Counter16*70;
   
   document.getElementById("faa").innerHTML=Counter17;
   document.getElementById("faa17").innerHTML=Counter17*80;

   document.getElementById("daa").innerHTML=Counter26;
   document.getElementById("daa26").innerHTML=Counter26*90;

   
   
   document.getElementById("ppaf").innerHTML=Counter19;
   document.getElementById("ppaf19").innerHTML=Counter19*100;
   
   document.getElementById("raa").innerHTML=Counter20;
   document.getElementById("raa20").innerHTML=Counter20*200;
   
   document.getElementById("sin").innerHTML=Counter15;
   document.getElementById("sin15").innerHTML=Counter15*300;
   
   document.getElementById("taa").innerHTML=Counter22;
   document.getElementById("taa22").innerHTML=Counter22*400;
   
   document.getElementById("ttta").innerHTML=Counter23;
   document.getElementById("ttta23").innerHTML=Counter23*500;
   
   document.getElementById("kha").innerHTML=Counter24;
   document.getElementById("kha24").innerHTML=Counter24*600;
   
   document.getElementById("ddal").innerHTML=Counter25;
   document.getElementById("ddal25").innerHTML=Counter25*700;
   
  
   
   document.getElementById("ddda").innerHTML=Counter27;
   document.getElementById("ddda27").innerHTML=Counter27*800;
   
   document.getElementById("gaa").innerHTML=Counter28;
   document.getElementById("gaa28").innerHTML=Counter28*900;

   document.getElementById("chine").innerHTML=Counter21;
   document.getElementById("chine21").innerHTML=Counter21*1000;
   
   
   document.getElementById("text").addEventListener("keyup",countWord);
   
   
   document.getElementById("best3").innerHTML= Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*10 + Counter11*20 + Counter12*30 + Counter13*40 + Counter14*50 + Counter18*60 + Counter16*70 + Counter17*80 + Counter26*90 + Counter19*100 + Counter20*200  + Counter15*300 + Counter22*400 + Counter23*500 + Counter24*600 + Counter25*700 + Counter27*800 + Counter28*900 + Counter21*1000  ;
   
   document.getElementById("best6").innerHTML= Counter1 + Counter2 + Counter3 + Counter4 + Counter5 + Counter6 + Counter7 + Counter8 + Counter9 + Counter10 + Counter11 + Counter12 + Counter13 + Counter14 + Counter15 + Counter16 + Counter17 + Counter18 + Counter19 + Counter20 + Counter21 + Counter22 + Counter23 + Counter24 + Counter25 + Counter26 + Counter27 + Counter28 ;
   
   // document.getElementById("best7").innerHTML=words + Counter1*1 + Counter2*2 + Counter3*3 + Counter4*4 + Counter5*5 + Counter6*6 + Counter7*7 + Counter8*8 + Counter9*9 + Counter10*11 + Counter11*22 + Counter12*33 + Counter13*44 + Counter14*55 + Counter15*66 + Counter16*77 + Counter17*88 + Counter18*99 + Counter19*111 + Counter20*222 + Counter21*333 + Counter22*444 + Counter23*555 + Counter24*666 + Counter25*777 + Counter26*888 + Counter27*999 + Counter28*1111 + Counter1 + Counter2 + Counter3 + Counter4 + Counter5 + Counter6 + Counter7 + Counter8 + Counter9 + Counter10 + Counter11 + Counter12 + Counter13 + Counter14 + Counter15 + Counter16 + Counter17 + Counter18 + Counter19 + Counter20 + Counter21 + Counter22 + Counter23 + Counter24 + Counter25 + Counter26 + Counter27 + Counter28;
   












   // js for mokhames

   var salex1 = Counter1 * 1  ;
  var  salex2 = Counter2 * 2  ;
  var  salex3 = Counter3 * 3 ;
  var  salex4 = Counter4 * 4 ;
  var  salex5 = Counter5 * 5 ;
  var  salex6 = Counter6 * 6 ;
  var salex7 = Counter7 * 7 ;
  var salex8 = Counter8 * 8 ;
  var salex9 = Counter9 *  9;
  var salex10 = Counter10 * 10 ;
  var salex11 = Counter11 * 20 ;
  var salex12 = Counter12 * 30 ;
  var salex13 = Counter13 * 40 ;
  var salex14 = Counter14 * 50 ;
   var salex15 = Counter15 * 300 ;
   var salex16 = Counter16 * 70 ;
   var salex17 = Counter17 * 80 ;
   var salex18 = Counter18*60 ;
   var salex19 = Counter19 * 100 ;
   var  salex20 = Counter20 * 200 ;
   var salex21 =  Counter21*1000;
   var salex22 = Counter22 * 400 ;
   var salex23 = Counter23 * 500 ;
   var salex24 = Counter24 * 600 ;
   var salex25 = Counter25 * 700 ;
   var salex26 = Counter26*90 ;
   var salex27 = Counter27*800 ;
   var salex28 = Counter28 * 900 ;

   countorab = Counter2 + Counter6 + Counter10 + Counter14 +Counter18 + Counter22 + Counter26 ;
   countnar = Counter1 + Counter5 + Counter9 + Counter13 + Counter17 +  Counter21 + Counter25 ;
   countshaoua = Counter3 + Counter7 + Counter11 + Counter15 + Counter19 + Counter23 + Counter27 ;
   countsmaaa = Counter4 + Counter8 + Counter12 + Counter16 + Counter20 + Counter24 + Counter28 ;

   storab  = salex2 + salex6 + salex10 + salex14 + salex18  + salex22 + salex26  ;
   snar  = salex1 + salex5 + salex9 + salex13 + salex17  + salex21 + salex25  ;
   shaoua  = salex3 + salex7 + salex11 + salex15 + salex19  + salex23 + salex27  ;
   smaaa  = salex4 + salex8 + salex12 + salex16+ + salex20  + salex24 + salex28  ;

   mtorab = storab + countorab; 
   mnar = snar + countnar ;
   mhaoua = shaoua+ countshaoua;
   msmaaa = smaaa + countsmaaa ; 
   
   skoda1 = 1;
   skoda2 =2 ;
   skoda3 = 3;
   skoda4 = 4 ;

   kmtorab1 = mtorab + skoda2 ;
   kmtorab2 = mtorab - skoda1 ;
   kmtorab3 = mtorab + skoda1 ;
   kmtorab4 = mtorab - skoda2 ;


   kmnar1 = mnar - skoda3 ;
   kmnar2 = mnar - skoda1 ;
   kmnar3 = mnar + skoda1 ;
   kmnar4 = mnar - skoda2 ;

   kmhaoua1 = mhaoua + skoda2 ;
   kmhaoua2 = mhaoua + skoda4 ;
   kmhaoua3 = mhaoua  + skoda1;
   kmhaoua4 = mhaoua + skoda3 ;


   kmsmaaa1 = msmaaa - skoda3 ;
   kmsmaaa2 = msmaaa - skoda1 ;
   kmsmaaa3 = msmaaa + skoda1 ;
   kmsmaaa4 = msmaaa - skoda2 ;

 
//  document.getElementById("").innerHTML =  ;
//  document.getElementById("").innerHTML =  ;
//  document.getElementById("").innerHTML =  ;
//  document.getElementById("").innerHTML =  ;
//  document.getElementById("").innerHTML =  ;



   // فثي جذ

  



   document.getElementById("countas1").innerHTML = countnar ;
   document.getElementById("countas2").innerHTML = countorab ;
   document.getElementById("countas3").innerHTML = countshaoua ;
   document.getElementById("countas4").innerHTML =  countsmaaa ;

   document.getElementById("sstorab").innerHTML = storab ;
   document.getElementById("ssnar").innerHTML = snar ;
   document.getElementById("sshaoua").innerHTML =shaoua  ;
   document.getElementById("ssmaaa").innerHTML = smaaa ;
   document.getElementById("smtorab").innerHTML =mtorab  ;
   document.getElementById("smnar").innerHTML = mnar ;
   document.getElementById("smhaoua").innerHTML = mhaoua ;
   document.getElementById("smsmaaa").innerHTML =msmaaa  ;

  



   document.getElementById("alex1").innerHTML = salex1 ;
   document.getElementById("alex2").innerHTML = salex2 ;
   document.getElementById("alex3").innerHTML = salex3 ;
   document.getElementById("alex4").innerHTML = salex4 ;
   document.getElementById("alex5").innerHTML = salex5 ;
   document.getElementById("alex6").innerHTML = salex6 ;
   document.getElementById("alex7").innerHTML = salex7 ;
   document.getElementById("alex8").innerHTML = salex8 ;
   document.getElementById("alex9").innerHTML = salex9 ;
   document.getElementById("alex10").innerHTML = salex10 ;
   document.getElementById("alex11").innerHTML = salex11 ;
   document.getElementById("alex12").innerHTML = salex12 ;
   document.getElementById("alex13").innerHTML = salex13 ;
   document.getElementById("alex14").innerHTML = salex14 ;
   document.getElementById("alex15").innerHTML = salex15 ;
   document.getElementById("alex16").innerHTML = salex16 ;
   document.getElementById("alex17").innerHTML = salex17 ;
   document.getElementById("alex18").innerHTML = salex18 ;
   document.getElementById("alex19").innerHTML = salex19 ;
   document.getElementById("alex20").innerHTML = salex20 ;
   document.getElementById("alex21").innerHTML = salex21 ;
   document.getElementById("alex22").innerHTML = salex22 ;
   document.getElementById("alex23").innerHTML = salex23 ;
   document.getElementById("alex24").innerHTML = salex24 ;
   document.getElementById("alex25").innerHTML = salex25 ;
   document.getElementById("alex26").innerHTML = salex26 ;
   document.getElementById("alex27").innerHTML = salex27 ;
   document.getElementById("alex28").innerHTML = salex28 ;





   

 document.getElementById("storab").innerHTML = mtorab ;
 document.getElementById("storab1").innerHTML = kmtorab1 ;
 document.getElementById("storab2").innerHTML = kmtorab2 ;
 document.getElementById("storab3").innerHTML =kmtorab3  ;
 document.getElementById("storab4").innerHTML = kmtorab4 ;

 
 document.getElementById("selnare").innerHTML = mnar ;
 document.getElementById("selnare1").innerHTML = kmnar1 ;
 document.getElementById("selnare2").innerHTML = kmnar2 ;
 document.getElementById("selnare3").innerHTML = kmnar3;
 document.getElementById("selnare4").innerHTML = kmnar4 ;

 
 document.getElementById("shaouaa").innerHTML = mhaoua ;
 document.getElementById("shaouaa1").innerHTML = kmhaoua1  ;
 document.getElementById("shaouaa2").innerHTML = kmhaoua2 ;
 document.getElementById("shaouaa3").innerHTML = kmhaoua3 ;
 document.getElementById("shaouaa4").innerHTML = kmhaoua4 ;

 
 document.getElementById("smatare").innerHTML = msmaaa ;
 document.getElementById("smatare1").innerHTML =  kmsmaaa1;
 document.getElementById("smatare2").innerHTML = kmsmaaa2 ;
 document.getElementById("smatare3").innerHTML = kmsmaaa3 ;
 document.getElementById("smatare4").innerHTML = kmsmaaa4 ;







 


}

  //END js for mokhames


  //talabyate

  




function countWord3() {

   let text3 = document.getElementById("text3").value;
   text3 =text3.trim();
  
   let words = text3.split(" ").length ;
  
  
     
  document.getElementById("best43").innerHTML=words;
    
     
      
   
     
   
     
   
   let Counter71 = 0 ;
   let Counter72 = 0 ;
   let Counter73 = 0 ;
   let Counter74 = 0 ;
   
    let Counter75 = 0 ;
    let Counter76 = 0 ;
   let Counter77 = 0 ;
   let Counter78 = 0 ;
   let Counter79 = 0 ;
   let Counter710 = 0 ;
   
   let Counter711 = 0 ;
   let Counter712 = 0 ;
   let Counter713 = 0 ;
   let Counter714 = 0 ;
   let Counter715 = 0 ;
   let Counter716 = 0 ;
   let Counter717 = 0 ;
   let Counter718 = 0 ;
   let Counter719 = 0 ;
   let Counter720 = 0 ;
   let Counter721 = 0 ;
   let Counter722 = 0 ;
   let Counter723 = 0 ;
   let Counter724 = 0 ;
   let Counter725 = 0 ;
   let Counter726 = 0 ;
   let Counter727 = 0 ;
   let Counter728 = 0 ;
   // let Counter729 = 0 ;
   
   
   
   
   
   
   
   
   
   
   
   let alif3 = ['ا','أ','إ','ى','آ'];
   let baa3 = ['ب'];
   let jim3 = ['ج'];
   let dal3 = ['د'];
   let haae3 = ['ه' , 'ة'];
   let ouaou3 = ['و'];
   let zay3 = ['ز'];
   let haa3 = ['ح'];
   let ttae3 = ['ط'];
   let yaa3 = ['ي'];
   let kaf3 = ['ك']; 
   let laa3 = ['ل'];
   let mim3 = ['م'];
   let noon3 = ['ن'];
   let sin3 = ['س'];

   let ine3 = ['ع'];
   let faa3 = ['ف'];
   let saad3 = ['ص'];
   let ppaf3 = ['ق'];

   let raa3 = ['ر'];
   let chine3 = ['ش'];

   let taa3 = ['ت'];
   let ttta3 = ['ث'];
   let kha3 = ['خ'];

   let ddal3 = ['ذ'];

   let daa3 = ['ض'];
   let ddda3 = ['ظ'];
   let gaa3 = ['غ'];

   
   
   
   for(ch of text3) {
   
      
   
    if (alif3.includes(ch)){
       Counter71++
    }
    if (baa3.includes(ch)){
       Counter72++
    }
   
    if (jim3.includes(ch)){
      Counter73++
   }
   
   if (dal3.includes(ch)){
      Counter74++
      
   }
   
   if (haae3.includes(ch)){
      Counter75++
   }
   
   if (ouaou3.includes(ch)){
      Counter76++
   }
   
   
   if (zay3.includes(ch)){
      Counter77++
   }
   if (haa3.includes(ch)){
      Counter78++
   }
   if (ttae3.includes(ch)){
      Counter79++
   }
   if (yaa3.includes(ch)){
      Counter710++
   }
   
   if (kaf3.includes(ch)){
      Counter711++
   }
   
   
   if (laa3.includes(ch)){
      Counter712++
   }
   
   
   if (mim3.includes(ch)){
      Counter713++
   }
   
   
   
   if (noon3.includes(ch)){
      Counter714++
   }
   
   
   if (sin3.includes(ch)){
      Counter715++
   }
   
   
   if (ine3.includes(ch)){
      Counter716++
   }
   
   
   if (faa3.includes(ch)){
      Counter717++
   }
   
   
   if (saad3.includes(ch)){
      Counter718++
   }
   
   
   if (ppaf3.includes(ch)){
      Counter719++
   }
   
   
   if (raa3.includes(ch)){
      Counter720++
   }
   
   
   if (chine3.includes(ch)){
      Counter721++
   }
   
   
   if (taa3.includes(ch)){
      Counter722++
   }
   
   
   if (ttta3.includes(ch)){
      Counter723++
   }
   
   
   if (kha3.includes(ch)){
      Counter724++
   }
   
   
   if (ddal3.includes(ch)){
      Counter725++
   }
   
   
   if (daa3.includes(ch)){
      Counter726++
   }
   
   
   if (ddda3.includes(ch)){
      Counter727++
   }
   
   
   if (gaa3.includes(ch)){
      Counter728++
   }
   
   
   
   }


   
   
   
   document.getElementById("text3").addEventListener("keyup",countWord3);
   
   
   document.getElementById("best33").innerHTML= Counter71*1 + Counter72*2 + Counter73*3 + Counter74*4 + Counter75*5 + Counter76*6 + Counter77*7 + Counter78*8 + Counter79*9 + Counter710*10 + Counter711*20 + Counter712*30 + Counter713*40 + Counter714*50 + Counter718*60 + Counter716*70 + Counter717*80 + Counter726*90 + Counter719*100 + Counter720*200  + Counter715*300 + Counter722*400 + Counter723*500 + Counter724*600 + Counter725*700 + Counter727*800 + Counter728*900 + Counter721*1000  ;
   
   document.getElementById("best63").innerHTML= Counter71 + Counter72 + Counter73 + Counter74 + Counter75 + Counter76 + Counter77 + Counter78 + Counter79 + Counter710 + Counter711 + Counter712 + Counter713 + Counter714 + Counter715 + Counter716 + Counter717 + Counter718 + Counter719 + Counter720 + Counter721 + Counter722 + Counter723 + Counter724 + Counter725 + Counter726 + Counter727 + Counter728 ;
   
   // document.getElementById("best7").innerHTML=words + Counter71*1 + Counter72*2 + Counter73*3 + Counter74*4 + Counter75*5 + Counter76*6 + Counter77*7 + Counter78*8 + Counter79*9 + Counter710*11 + Counter711*22 + Counter712*33 + Counter713*44 + Counter714*55 + Counter715*66 + Counter716*77 + Counter717*88 + Counter718*99 + Counter719*111 + Counter720*222 + Counter721*333 + Counter722*444 + Counter723*555 + Counter724*666 + Counter725*777 + Counter726*888 + Counter727*999 + Counter728*1111 + Counter71 + Counter72 + Counter73 + Counter74 + Counter75 + Counter76 + Counter77 + Counter78 + Counter79 + Counter710 + Counter711 + Counter712 + Counter713 + Counter714 + Counter715 + Counter716 + Counter717 + Counter718 + Counter719 + Counter720 + Counter721 + Counter722 + Counter723 + Counter724 + Counter725 + Counter726 + Counter727 + Counter728;
   

   var madrid = Counter71*1 + Counter72*2 + Counter73*3 + Counter74*4 + Counter75*5 + Counter76*6 + Counter77*7 + Counter78*8 + Counter79*9 + Counter710*10 + Counter711*20 + Counter712*30 + Counter713*40 + Counter714*50 + Counter718*60 + Counter716*70 + Counter717*80 + Counter726*90 + Counter719*100 + Counter720*200  + Counter715*300 + Counter722*400 + Counter723*500 + Counter724*600 + Counter725*700 + Counter727*800 + Counter728*900 + Counter721*1000  ;

   var florance = Counter71 + Counter72 + Counter73 + Counter74 + Counter75 + Counter76 + Counter77 + Counter78 + Counter79 + Counter710 + Counter711 + Counter712 + Counter713 + Counter714 + Counter715 + Counter716 + Counter717 + Counter718 + Counter719 + Counter720 + Counter721 + Counter722 + Counter723 + Counter724 + Counter725 + Counter726 + Counter727 + Counter728 ;

 var italiano = madrid + florance ;

  skoda1 = 1;
  skoda2 =2 ;
  skoda3 = 3;
  skoda4 = 4 ;


 
 var romania1 = italiano + skoda2 ;
 var romania2 = italiano - skoda1 ;
 var romania3 = italiano + skoda1 ;
 var romania4 = italiano + skoda3 ;

 document.getElementById("nostalgy").innerHTML = italiano ;

 document.getElementById("seltalab").innerHTML = italiano ;
 document.getElementById("seltalab1").innerHTML = romania1 ;
 document.getElementById("seltalab2").innerHTML = romania2 ;
 document.getElementById("seltalab3").innerHTML =  romania3;
 document.getElementById("seltalab4").innerHTML =  romania4;

//verification
 document.getElementById("zdkh").innerHTML= kmnar1 + kmhaoua3 + kmtorab4;
 document.getElementById("drot").innerHTML= romania1 + romania3 + romania4 + italiano;
 document.getElementById("jadz").innerHTML= msmaaa + kmhaoua4 ;
 document.getElementById("saba9").innerHTML= mhaoua + kmsmaaa3 +kmsmaaa4;
 document.getElementById("fatys").innerHTML= kmsmaaa1 + kmtorab3 + kmnar4;


 //second table

 var vnar = kmnar1 + kmhaoua3 + kmtorab4;
 var vntalab =romania1 + romania3 + romania4 + italiano ;
 var vnmaa =msmaaa + kmhaoua4 ;
 var vnhaoua =mhaoua + kmsmaaa3 +kmsmaaa4 ;
 var vntorab = kmsmaaa1 + kmtorab3 + kmnar4 ;

 vnar1= vnar + skoda2 ;
 vnar2= vnar + skoda4 ;
 vnar3= vnar + skoda1 ;
 vnar4= vnar + skoda3 ;

 
 vntalab1 = vntalab + skoda2 ;
 vntalab2 = vntalab - skoda1 ;
 vntalab3 = vntalab + skoda1 ;
 vntalab4 = vntalab + skoda3 ;

 vnmaa1 = vnmaa + skoda2 ;
 vnmaa2 = vnmaa - skoda1 ;
 vnmaa3 = vnmaa + skoda1 ;
 vnmaa4 = vnmaa - skoda2 ;

 vnhaoua1 = vnhaoua - skoda3 ;
 vnhaoua2 = vnhaoua - skoda1 ;
 vnhaoua3 = vnhaoua - skoda4 ;
 vnhaoua4 = vnhaoua - skoda2 ;

 vntorab1 = vntorab - skoda3 ;
 vntorab2 = vntorab - skoda1 ;
 vntorab3 = vntorab + skoda1 ;
 vntorab4 = vntorab - skoda2 ;







 document.getElementById("xhaoua").innerHTML = vnhaoua ;
 document.getElementById("xhaoua1").innerHTML = vnhaoua1 ;
 document.getElementById("xhaoua2").innerHTML = vnhaoua2 ;
 document.getElementById("xhaoua3").innerHTML = vnhaoua3 ;
 document.getElementById("xhaoua4").innerHTML = vnhaoua4 ;

 document.getElementById("xeltalab").innerHTML = vntalab ;
 document.getElementById("xeltalab1").innerHTML = vntalab1 ;
 document.getElementById("xeltalab2").innerHTML = vntalab2 ;
 document.getElementById("xeltalab3").innerHTML = vntalab3 ;
 document.getElementById("xeltalab4").innerHTML = vntalab4 ;

 document.getElementById("xma").innerHTML = vnmaa ;
 document.getElementById("xma1").innerHTML = vnmaa1 ;
 document.getElementById("xma2").innerHTML = vnmaa2 ;
 document.getElementById("xma3").innerHTML = vnmaa3 ;
 document.getElementById("xma4").innerHTML = vnmaa4 ;

 document.getElementById("xtorab").innerHTML = vntorab ;
 document.getElementById("xtorab1").innerHTML = vntorab1 ;
 document.getElementById("xtorab2").innerHTML = vntorab2 ;
 document.getElementById("xtorab3").innerHTML = vntorab3 ;
 document.getElementById("xtorab4").innerHTML =  vntorab4;


 document.getElementById("xnar").innerHTML = vnar ;
 document.getElementById("xnar1").innerHTML = vnar1 ;
 document.getElementById("xnar2").innerHTML = vnar2 ;
 document.getElementById("xnar3").innerHTML = vnar3 ;
 document.getElementById("xnar4").innerHTML = vnar4 ;


//  var sb9 = vnar4 + xtorab4 + xtorab3 ;


 document.getElementById("zdkh1").innerHTML = vnhaoua1 + vnar3 + vnmaa4;
 document.getElementById("drot1").innerHTML = vntalab + vntalab1 + vntalab3 + vntalab4 ;
 document.getElementById("jadz1").innerHTML = vntorab + vnar4 ;

 document.getElementById("sabas").innerHTML =  vnar4 + vntorab3 + vntorab4;

 document.getElementById("fatys1").innerHTML = vntorab1 + vnmaa3 + vnhaoua4 ;



 var    jeb_nar = vntorab1 + vnmaa3 + vnhaoua4 ;
  var   mika_maa =  vntorab + vnar4;
 var    isra_haoua = vnar4 + vntorab3 + vntorab4 ;
  var   izrae_torab =  vnhaoua1 + vnar3 + vnmaa4 ;

  cjeb = jeb_nar % 3 ;
 kjeb = (jeb_nar - cjeb)/3 ;

jeb_nar22 = kjeb + kjeb + cjeb ;
jeb_nar33 = kjeb ;

document.getElementById("jeb_nar1").innerHTML = jeb_nar ;
document.getElementById("jeb_nar2").innerHTML = jeb_nar22;
document.getElementById("jeb_nar3").innerHTML = jeb_nar33 ;

cmika = mika_maa % 3 ;
kmika = (mika_maa - cmika)/3;
mika_maa22 = kmika + kmika + cmika ;
mika_maa23 = kmika  ;

document.getElementById("mika_maa1").innerHTML =mika_maa;
document.getElementById("mika_maa2").innerHTML = mika_maa22;
document.getElementById("mika_maa3").innerHTML = mika_maa23;

cisra = isra_haoua % 3 ;
kisra = (isra_haoua - cisra )/3 ;
isra_haoua22 = kisra + kisra + cisra ;
isra_haoua23 = kisra  ;

document.getElementById("isra_haoua1").innerHTML = isra_haoua; 
document.getElementById("isra_haoua2").innerHTML = isra_haoua22; 
document.getElementById("isra_haoua3").innerHTML = isra_haoua23 ;


cizra = izrae_torab % 3 ;
kcisra = (izrae_torab - cizra)/3 ;
izrae_torab22 = kcisra + kcisra + cizra ;
izrae_torab23 = kcisra ;

document.getElementById("izrae_torab1").innerHTML = izrae_torab;
document.getElementById("izrae_torab2").innerHTML = izrae_torab22;
document.getElementById("izrae_torab3").innerHTML = izrae_torab23;



document.getElementById("ouaoukha").innerHTML = izrae_torab23 + jeb_nar22;
document.getElementById("ra3ine").innerHTML = mika_maa22 + jeb_nar33 ;
document.getElementById("tayay").innerHTML = mika_maa23 + isra_haoua22 ;
document.getElementById("badale").innerHTML = izrae_torab22 + isra_haoua23 ;
document.getElementById("bataa").innerHTML = izrae_torab22 + mika_maa23;
document.getElementById("yaraa").innerHTML = isra_haoua22 + jeb_nar33;
document.getElementById("oua3ine").innerHTML = izrae_torab23 + mika_maa22 ;
document.getElementById("dakha").innerHTML = isra_haoua23 + jeb_nar22;
document.getElementById("takha").innerHTML = mika_maa23 + jeb_nar22 ;
document.getElementById("da3ine").innerHTML = isra_haoua23 + mika_maa22 ;
document.getElementById("ouyii").innerHTML = izrae_torab23 + isra_haoua22 ;
document.getElementById("bara").innerHTML = izrae_torab22 + jeb_nar33 ;




   }
   
   
   


  
   
   
   