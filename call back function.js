console.log("-----Ice-cream----");

setTimeout(()=>
{
  console.log("eat");
},2000)
console.log("Ice Cream")


let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let order = (fruit_name, call_production) =>{
    setTimeout(function(){ 
      console.log(`${stocks.Fruits[fruit_name]} was selected`)    
     call_production();
    },2000)
  };  
  
  let production = () =>{ 
    setTimeout(()=>{
        console.log("production has started")
        setTimeout(()=>{
            console.log("The fruit has been chopped")
            setTimeout(()=>{
                console.log("Add Water and ice ...")
                setTimeout(()=>{
                    console.log("BHmmmmmmmmmmmmmmmm ...")
                    setTimeout(()=>{
                        console.log(`select container ${stocks.holder[1]} was selected`)
                        setTimeout(()=>{
                            console.log(`topping ${stocks.toppings[1]} was selected`)
                            setTimeout(()=>{
                                console.log("Serve it!!!!!!!!!")
                              },1000)
                          },1000)
                      },1000)
                  },1000)
              },1000) 
          },2000)                    
      },0000)       
 };    
  
order(0,production);