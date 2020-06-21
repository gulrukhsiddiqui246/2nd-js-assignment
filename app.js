                //    CHAPTERS# 21-25: (STRING METHOD):

      //   Question#1:              
 var firstName =prompt("Enter your first name","Your first name is:");
 var lastName =prompt("Enter your last name","Your last name is:");
    var fullName =firstName +" "+lastName;
 alert(fullName);


       //   Question#2:  
 var a =prompt("Enter your favorite mobile phone model");
 var a =("Samsung Galaxy S6 Edge plus ");
 document.write("My favorite phone is: "+ a+ "<br>" +"Length of string is: " +a.length);


      //   Question#3:
   var a=("Pakistani");
   document.write("String: "+a+"<br>" +"index of 'n': "+ a.indexOf("n"));



        //   Question#4:
 var a ="Hello World";
 document.write("String: "+a+ "<br>" );      
 var b =a.lastIndexOf("l");
 document.write("Last index of 'l': " +b);



         //   Question#5:

    var a="Pakistani";
    document.write("String: "+a+"<br>" +"Character at index 3: "+ a.charAt("3"));       


        //   Question#6:

    var firstName =prompt("Enter your first name","Your first name is:");
   var lastName =prompt("Enter your last name","Your last name is:");
   var fullName =firstName.concat(" ",lastName);
   alert(fullName);


          //   Question#7:

  var city ="Hyderabad";
  var rePlace =city.replace("Hyder","Islam");
  document.write("City: "+city +"<br>"+"Ater repalcement: "+rePlace);



           //   Question#8:

    var message ="Ali and Sami are best friends.They play circket and football together.";
    var change =message.replace(/and/g,"&");
    document.write(change);



       //   Question#9:

    var str ="472";
    var num =Number(str);
    document.write("Value: "+str+"<br>"+"Type: String"+"<br>"+"Value: "+num+"<br>"+"Type: Number");

     

     //   Question#10:
     var text =prompt("Enter your text");
     var convert =text.toUpperCase();
     document.write("User input: "+text +"<br>"+ "Upper case: "+convert);


    //   Question#11:
   var text =prompt("Enter your text");
   var firstLetter = text.slice(0,1);
   var firstLetConvert =firstLetter.toUpperCase();
   var otherText = text.slice(1);
   var otherTextConvert = otherText.toLowerCase();
   document.write(firstLetConvert+otherTextConvert);


   

        //   Question#12:

    var num =35.36;
    var convertStr=num.toString();
    document.write("Number: "+convertStr+"<br>");
    var removeDec =convertStr.replace(".","");
    document.write("Result: "+removeDec);




            //   Question#13:
      










  

         //   Question#14:

      var A =["cake","apple pie","cookie","chips","patties"];
      var input =prompt("Welcome to ABC bakery. what do u want to order sir/ma'am?");
      var inputConvert =input.toLowerCase();  
      if(A.indexOf(inputConvert) !==-1){
       if(inputConvert==A[0]){
               alert(inputConvert+" is available at index 0 in our Bakery");
           }
           else if(inputConvert==A[1]){
               alert(inputConvert+" is available at index 1 in our Bakery");
           }
           else if(inputConvert==A[2]){
               alert(inputConvert+" is available at index 2 in our Bakery");
           }
           else if(inputConvert==A[3]){
               alert(inputConvert+" is available at index 3 in our Bakery");
           }
           else if(inputConvert==A[4]){
               alert(inputConvert+" is available at index 4 in our Bakery");
           }
      
    }
    else{
        alert("We are sorry. "+inputConvert+" is not available in our bakery")
    }
    





          //   Question#15:
       //    var password =prompt("Enter your password. it should be the combination of alphabates & Nums.");
       //    var firstChar =password.slice(0,1);
       //    var conFirstChar =parseInt(firstChar);
          

       //    for(var i=0; i<=9; i++ ){
       //        if(i ===conFirstChar){
       //               alert("Password can not begin with a number")
       //               break;
       //        }
             
       //    }
       //    for(var a=0; a<=password.length; a++){
       //        if((a >='A'&& a<= 'Z')||(a >='a'&& a<= 'z')){
       //               alert("Entered password: "+password)
       //               break;
       //        }
       //        else if(password.length<6){
       //               alert("It must at least 6 characters long")
       //               break;
       //        }
       //        else{
       //               alert("Please enter a valid password")
       //               break;
       //        }
             
       // }






        //   Question#16:
   
        var university ="University of Karachi";
        var ar =university.split('');
      
        for(var i=0; i<ar.length; i++){
        document.write(ar[i]+"<br>");
      }
            

       
     //   Question#17:
     
    var userInput ="Pakistan";
   var b =userInput.length -1;
    
   document.write("User input: "+userInput+"<br>"+"Last character of input: "+userInput.charAt(b));
                              

          
          
      //   Question#18:
      
    var a ="The quick brown fox jumps over the lazy dog";
    var aConvert =a.toLowerCase();
    var b = aConvert.match(/the/g).length;

    document.write("Text: "+a+"<br>");
    
    document.write("There are "+b+" occurences of word 'the'" );
    






              //      CHAPTERS#26-30 (MATH METHODS):


     //   Question#1:         

     var num =3.45214;
     var round =Math.round(num);
     var floorValue =Math.floor(num);
     var ceilValue =Math.ceil(num);
     document.write("Number: "+num+"<br>");
     document.write("round of value: "+round+"<br>");
     document.write("floor value: "+floorValue+"<br>");
     document.write("ceil value: "+ceilValue);


  //   2nd Method:

      var num =+prompt("Enter the value");
     if(num>0){
       var round =Math.round(num);
       var floorValue =Math.floor(num);
       var ceilValue =Math.ceil(num);
       document.write("Number: "+num+"<br>");
       document.write("round of value: "+round+"<br>");
       document.write("floor value: "+floorValue+"<br>");
       document.write("ceil value: "+ceilValue);
     }
     else if(num<0){
            var num = num*(-1);
       var round =Math.round(num);
       var floorValue =Math.floor(num);
       var ceilValue =Math.ceil(num);
       document.write("Number: "+num+"<br>");
       document.write("round of value: "+round+"<br>");
       document.write("floor value: "+floorValue+"<br>");
       document.write("ceil value: "+ceilValue); 
     }





     
     

       //   Question#2: 

 //  1st Method:
      var num =-2.673;
     var round =Math.round(num);
     var floorValue =Math.floor(num);
     var ceilValue =Math.ceil(num);
     document.write("Number: "+num+"<br>");
     document.write("round of value: "+round+"<br>");
     document.write("floor value: "+floorValue+"<br>");
     document.write("ceil value: "+ceilValue);
     

 //  2nd Method:

 var num =+prompt("Enter the value");
     if(num<0){
       var round =Math.round(num);
       var floorValue =Math.floor(num);
       var ceilValue =Math.ceil(num);
       document.write("Number: "+num+"<br>");
       document.write("round of value: "+round+"<br>");
       document.write("floor value: "+floorValue+"<br>");
       document.write("ceil value: "+ceilValue);
     }
     else if(num>0){
            var num = num*(-1);
       var round =Math.round(num);
       var floorValue =Math.floor(num);
       var ceilValue =Math.ceil(num);
       document.write("Number: "+num+"<br>");
       document.write("round of value: "+round+"<br>");
       document.write("floor value: "+floorValue+"<br>");
       document.write("ceil value: "+ceilValue); 
     }


            //   Question#3: 

    var num = -4;
    var absNum= Math.abs(num);
    document.write("The absolute value of "+num+" is "+absNum);



        //   Question#4: 

      var dice1 =(Math.random()*6);
      var dice2 =(Math.random()*6);
      var ceil1 =Math.ceil(dice1);
      var ceil2 =Math.ceil(dice2);
      document.write("random dice value: " +ceil1+"<br>"+"random dice value: " +ceil2);  




       //   Question#5:
             var head =(Math.random()*2);
             var tails =(Math.random()*2);
             var headFloor =Math.ceil(head);
             var tailsFloor =Math.ceil(tails);
             document.write(headFloor+"<br>"+"random coin value: Head" +"<br>"+tailsFloor+"<br>"+"random coin value: Tails" );     



        //   Question#6:
      var randomNum =Math.random()*100;
      var ceil =Math.ceil(randomNum);
      document.write("Random number between 1-100: "+ceil);   



       //   Question#7: 
       var weight=prompt("Enter your weight in kilograms");
       var convert =parseFloat(weight);
       document.write("The weight of user is "+convert+" kilograms");



        //   Question#8:
        var input =+prompt("Enter a number between 1 and 10");
     var randomNum =Math.random()*10;
     var ceil =Math.ceil(randomNum);
     if(input==randomNum){
            alert("Congratulations!");
     }
     else{
            alert("Try again");
     }



         




              //     CHAPTERS#31-34 (DATE METHOD):
     //   Question#1:
    var a =new Date();
    document.write(a);          
    
        

      //   Question#2:
      var monthNames=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "november", "December"];
      var a =new Date();
      var month =a.getMonth();
      var presentMonth =monthNames[month];
      document.write("Current Month: "+presentMonth);
      


      //   Question#3:
      var dayNames=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      var a =new Date();
      var day =a.getDay();
      var presentDay =dayNames[day];
      document.write("Today is: "+presentDay);
      
  



         //   Question#4:
       var dayNames=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      var a =new Date();
      var day =a.getDay();
      var presentDay =dayNames[day];
      if((presentDay==dayNames[0])||(presentDay==dayNames[6])){
             document.write("It's Fun day");
      }
     
      


       //   Question#5:

      
      var a =new Date();
      var currentDate =a.getDate();
      if(currentDate<15){
             document.write("First fifteen days of the month");
      }
      else{
       document.write("Last days of the month");  
      }
      



         //   Question#6:
    var current =new Date();
    var millisec =current.getTime();
    var minute =millisec*1000*60;
    document.write("Current date: "+current+" <br>"+" Elapsed milliseconds since january 1, 1970: " +millisec+"<br>"+" Elapsed minutes since january 1, 1970: " +minute);




           //   Question#7:
           var a =new Date();
           var currentHour =a.getHours();
           if(currentHour<=12){
                           document.write("It's AM");
                    }
          else{
                     document.write("It's PM");  
                    }






         //   Question#8:

       //   1st Method:
         var latterDate = new Date()
       
         var year =latterDate.setFullYear(2020);
         var month =latterDate.setMonth(11);
         var date =latterDate.setDate(31);
         var hours =latterDate.setHours(00);
         var minute =latterDate.setMinutes(00);
         var sec = latterDate.setSeconds(00);
       document.write("Latter Date: "+latterDate);

       // 2nd Method:
       var a =new Date("Thus, Dec 31, 2020 ,00:00:00");
       document.write(a);
        





        //   Question#9:
        var today = new Date()
        var todayMilli =today.getTime();
        var latterDate = new Date()
       
         var year =latterDate.setFullYear(2015);
         var month =latterDate.setMonth(5);
         var date =latterDate.setDate(18);
         var latterMilli =latterDate.getTime();
         var diff =todayMilli-latterMilli;
         var accu =Math.round(diff/(1000*60*60*24));
       document.write(accu+" days have passed since 1st Ramadan, 2015");

       


         //   Question#10:
         var begining =new Date()
         var year = begining.setFullYear(2015);
         var month = begining.setMonth(0);
         var date = begining.setDate(1);
         var hours =  begining.setHours(00);
         var minute =  begining.setMinutes(00);
         var sec =   begining.setSeconds(00);
         var beginingMilli =begining.getTime();
          
         var latter =new Date()
         var year =latter.setFullYear(2015);
         var month =latter.setMonth(11);
         var date =latter.setDate(5);
         var hours = latter.setHours(22);
         var minute = latter.setMinutes(50);
         var sec =  latter.setSeconds(16); 
         var latterMilli =latter.getTime();
         
         var diff =latterMilli-beginingMilli;
         var accu =Math.ceil(diff/(1000));
         
         document.write("On reference date "+latter+"<br>");
           document.write(accu+" seconds had passed since begining of 2015");








            //   Question#11:
              
     var current =new Date(); 
     document.write("current date: "+current+"<br>");
     current.setMinutes(current.getMinutes() -60);  
  
     document.write("1 hour ago, it was " +current);
       
      



              //   Question#12:
              var current =new Date(); 
                   document.write("current date: "+current+"<br>");
                   current.setFullYear(current.getFullYear() -100);  
                
                   document.write("100 years back, it was " +current);




              //   Question#13:
      var input =+prompt("Enter your age  e.g 22", "Your age is:");
     var current =new Date();
     var year =current.getFullYear();
     var birthYear =year-input;
    document.write("Your age is "+input+"<br>");
    document.write("Your birth year is " +birthYear);


         
             //   Question#14:
       var cName =("ABC coustomer");
      var month ="February";
      var numOfUnit =410;
      var charPerUnit =16;
       var netAmount =numOfUnit*charPerUnit;
       var net =netAmount.toFixed(2);
      var latePaymentCharge =350;
      var grossAmount =netAmount+latePaymentCharge;
      var gross =grossAmount.toFixed(2);
     
      document.write("Coustomer Name: "+ cName +"<br>");
      document.write("Month: "+month+"<br>");
      document.write("Number of units: "+numOfUnit+"<br>");
      document.write("Charges per unit: "+charPerUnit+"<br>");
      document.write("Net amount payable(within Due Date): "+net+"<br>");
      document.write("Late payment surcharge: "+latePaymentCharge+"<br>");
      document.write("Gross amount payable(after Due Date) "+gross);






              //    CHAPTERS#35-38 (FUNCTION):



      //   Question#1:
      function date(current){
          document.write(current);
      }

    date(new Date());



      //   Question#2:
 
    function greet(firstName,lastName){
       var firstName =prompt("Enter your first name");
       var lastName =prompt("Enter your last name");
      alert(firstName+" "+lastName)
    }
   greet();



    
      //   Question#3:
  function add(a,b){
  var a=+prompt("Enter first number");
  var b=+prompt("Enter second number");
  alert(a+b);
 }
 add();




      //   Question#4:
      var num1 =+prompt("Enter first number");
      var opr =prompt("Enter a operator");
      var num2 =+prompt("Enter second number");
     
   function calculator(num1,opr,num2){
       if(opr=="+"){
              alert(num1+num2) 
         }
        else if(opr=="-"){
               alert(num1-num2) 
        }
       else if(opr=="*"){
           alert(num1*num2)
       }
       else if(opr=="/"){
             alert(num1/num2)
         }
       else{
         alert( "Incorrect operator")
       }
        

   }
 
 calculator();



   

 //   Question#5:
 function square (x){
  var a =x * x;
  alert(a)
  };
 square(12);
  


  //   Question#6:
  function factorail(n){
         var answer =1;
         if (n == 0 || n==1){
                return answer;
         }
         else{
                for(var i=n; i>=1; i--){
                       answer=answer*i;
                }
                return answer;
         }
  }
  var n=4;
  answer=factorail(n)
  document.write("the factorial of "+ n+" is " + answer);


  //   Question#7:

// function counting(a,b){
//        var num1 =+prompt("enter a starting number");
// var num2 =+prompt("enter a ending number");
// for(var i=num1; i<=num2; i++){
//   document.write(num2+"<br>");
// }
// }
// counting();
