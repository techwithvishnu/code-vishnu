//REPORT CARD -------------------------------------------------------------------------------------------------------//

// console.log(  "|-------------------------------------------|")
// console.log(  "|             BABUJI CONVENT SCHOOL         |")
// console.log(  "|                   MARKSHEET               |" )
// console.log(  "|         INTERMEDICATE-MEDIUM-MARKSHEET    |" )
// console.log(  "|-------------------------------------------|" )
// console.log(  "|-------------------------------------------|" )
// console.log(  "|           NAME = VISHNU-DESHWAL           |" )
// console.log(  "|           CLASS= 12                       |" )
// console.log(  "|           ROLLNO= 1234645                 |" )
// console.log(  "|-------------------------------------------|" )
// console.log(  "|-------------------------------------------|" )
// console.log(  "|           subject-marks                   |" )
// console.log(  "|           hindi= 78                       |" )
// console.log(  "|           english= 89                     |" )
// console.log(  "|           maths= 69                       |" )
// console.log(  "|           history= 94                     |" )
// console.log(  "|-------------------------------------------|" )



//DISCOUNT OF PRODUCT----------------------------mathematical operator---------------------------------------------------------------//

// var a=200 , b=100 ,c =5000
// var a1=3 , b1=4 ,c1= 5
 
// var totalamount=a*a1+b*b1+c*c1
// //console.log(totalamount)
// var discount=totalamount*30/100
// // console.log(discount)
// var pay=totalamount-discount
// console.log(pay)

//relational operator-----------------------------------------------------------------------------------------------//


// var a=20
// var result=a<0
// console.log(result)


// var a=4>3
// console.log(a)
// var b=a>2
// console.log(b)

//comparision operator--------------------------------------------------------------------------------------------//


// var a=20
// var b="20"
// var c= a==b
// console.log(c)


// var a=20
// var b="20"
// var c= a===b
// console.log(c)

//conditional statement-----------------------------------------------------------------------------------------//

     // if statement------------------------------------------------------------------//

// var a=40
// var condition=a>0
// if(condition){
//     console.log("positive")
// }

      //if else statement------------------------------------------------------------//

// var age=18
// if(age>=21){
//     console.log("you are eligible")
// }
// else{
//     console.log("you are not eligible")
// }

     //if else if else statement----------------------------------------------------//


    //  var num=45
    //  if(num==0){
    //     console.log("no. is zero")
    //  }
    //  else if (num>0){
    //     console.log("no.is positive")
    //  }
    //  else if (num<0){
    //     console.log("no. is negative")
    //  }
    //  else{
    //     console.log("invalid no,")
    //  }


    // nested if else statement---------------------------------------------------//

    // var degree="MCA"
    // var percent=90
    // if(degree=="MCA"){
    //     console.log("degree verify")
    //     if(percent==80){
    //         console.log("job lag gyi")
    //     }
    //     else{
    //         console.log("job nhi lgi")
    //     }

    // }
    // else{
    //     console.log("not match degree")
    // }



//logical operator------------------------------------------------------------------------------------------------------------//
 

//   var day="monday"
//   var amount=400
//   if((day=="monday"||day=="wednesday"|| day=="friday")&& amount>=500){
//     console.log("go party")
//   }
//   else{
//     console.log("no party")
//   }

//unary operator-----------------------------------------------------------------------------------------------------------//

// var a=30
// a=a++
// console.log(a)

// var a=30
// a=++a
// console.log(a)

// ternary operater------------------------------------------------------------------------------------------------------//

// var a=45
// a>0? console.log("positive"): console.log("negative")

// var a=45
// var result=a>0? "positive":"negative"
// console.log(result)

//loop----------------------------------------------------------------------------------------------------------------------------//

//while------------------------------------------------------------------------------------//

// var a=2
// while(a<=10){
//       console.log("welcome")
//       a=a+1
// }


// var sp=1
// var ep=20
// while(sp<=ep){                                              table of 2
//      if(sp%2==0){
//           console.log(sp)
//      }
//      sp++
// }

// var a=2
// var b=1                                                    table of 2
// while(b<=10){
//      console.log(a*b)
//      b++
// }

// var bag=" "
// var a=1
// while(a<=10){
//      bag=bag+a
//      a++
// }
// console.log(bag)

//do while loop------------------------------------------------------------------------------------------------------//

// var sp=1
// do{
//      console.log(sp)
//      sp++
// }
// while(sp<=10)

// var i=11
// do{
//      console.log(i)
//      i++
// }
// while(i<=10)

//compare while,,,do while,,,for loop-----------------------------------------------------------------------------//

// var sp=1
// while(sp<=10){
//      console.log(sp)
//      sp++
// }

// var sp=1
// do{
//      console.log(sp)
//      sp++
// }
// while(sp<=10)



// for(var sp=1;sp<=10;sp++){
//      console.log(sp)
// }    

// for loop------------------------------------------------------------------------------------------------------//

// var a=0
// for(var sp=2;sp<100;sp++){
//      if(sp%2==0){
//           a=a+sp
//      }
// }
// console.log(a)

//break statement------------------------------------------------------------------------------------------------//

// var sp=1
// while(sp<=10){
//      if(sp==5){
//           break
//      }
//      console.log(sp)
//      sp++
// }


// for(var i=1;i<=10;i++){
//      if(i==5){
//           break
//      }
//      console.log(i)
// }


// continues statement------------------------------------------------------------------------------//


// var sp=1
// while(sp<=10){
//      if(sp==5){
//           continue
//      }
//      console.log(sp)
//      sp++
// }

// var sp=1
// while(sp<=10){
//      sp++
//      if(sp==5){
//           continue
//      }
//      console.log(sp)
// }


// for(var i=1;i<=10;i++) {
//          if(i==5){
//           continue
//          }
//          console.log(i)
//      }


// nested loop -------------------------------------------------------------------------------------------//

// for(var father=1;father<=10;father++){
//      var bag=""
//      for(var son=1;son<=10;son++){
//           bag=bag+son
//      }
//      console.log(bag)
// }


// for(var father=1;father<=10;father++){
//      var bag=""
//      for(var son=10;son>=1;son--){
//           bag=bag+son
//      }
//      console.log(bag)
// }


// for(var father=1;father<=10;father++){
//      var bag=""
//      for(var son=1;son<=10;son++){
//           bag=bag+son
//           console.log(bag)
//      }
    
// }



// for(var father=1;father<=10;father++){
//      var bag=""
//      for(var son=10;son>=1;son--){
//           bag=bag+son
//           console.log(bag)
//      }
    
// }



// for(var father=1;father<=10;father++){
//      var bag=""
//      for(var son=1;son<=father;son++){
//           bag=bag+son  
//      }
//      console.log(bag)
// }



// for(var father=10;father>=1;father--){
//      var bag=""
//      for(var son=10;son>=father;son--){
//           bag=bag+son     
//      }
//      console.log(bag)
// }
                        //---------------------------------------------------------------------------//

// for(var father=1;father<=10;father++){
//      var bag=""
//      for(var son=1;son<=father;son++){
//           bag=bag+"*"+""    
//      }
//      console.log(bag)
// }



// for(var father=10;father>=1;father--){
//      var bag=""
//      for(var son=1;son<=father;son++){
//           bag=bag+"*"+""    
//      }
//      console.log(bag)
// }
             //------------------------------------------------------------------------------//
// for(var father=10;father>=1;father--){
//      var bag=""
//      for(var son=1;son<=father;son++){
//           bag=bag+"*"+""    
//      }
//      console.log(bag)
// }

// for(var father=10;father>=1;father--){
//      var bag=""
//      for(var son=10;son>=father;son--){
//           bag=bag+"*"+""    
//      }
//      console.log(bag)
// }



// ARRAY ----------------------------------------------------------------------------------------------------------------------//


// var a=[1,2,3,4,5,6]
// console.log(a)


// var name=[]
// name[0]="rakesh"
// name[1]="rohit"
// console.log(name)

// var name=[]
// for(var i=1;i<=20;i++){
//      name[i-1]=i
// }
// console.log(name)


// var a=[];
// a.push(10);
// a.push(20);
// console.log(a)


// var a=[1,2,3,4,5,6]
// var size=a.length
// console.log(size)


// var num=[12,32,15,34,65,38,67,56,92]
// var sum=0
// for(i=0;i<num.length;i++){
//      sum=sum+num[i]
// }
// console.log(sum)
