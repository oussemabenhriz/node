console.log("Hello word")

 const fs =require("fs")


   fs.writeFile("exemple.txt","c'est un exemple",err=>{
         if(err){console.log(err)
        }  
         else{
             console.log("you did it")
             // ------
              fs.readFile("exempla.txt",(err,file)=>{
                  if(err){
                      console.log(err)
                 }
                 else{
                     console.log(file)
                 }
             })
             
         } 
             
             
      })



      
 //const fs =require("fs")


 fs.writeFile("welcome.text","Hello node",err=>{
       if(err){console.log(err)
      }  
       else{
           console.log("Hello.text")
       }
            
          // fs.readFile("welcome.text",(err,file)=>{
                //if(err){
                  // console.log(err)
              
       // }
               //else{
                  // console.log(file)
              // }
           //})
           
       } 
           
      
 )
