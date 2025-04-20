function searchFood(item, cb1){
    console.log("searchin start for list for",item,".....")
    setTimeout(function item1(){
        var data = `list of ${item}`;
        cb1(item,data);
    },2000)
}
function orderFood(item,cb2){
    console.log("select ", item);
    setTimeout(()=>{
        let id = Math.floor(Math.random() * 999999);
        cb2(id);

    },2000)


}

function payment(item,id,cb){
    console.log(`payment staring for your order ${item} your id is here ${id}`);
    setTimeout(()=>{
        let status = true;
        cb(status);
    },2000);

}

let result = searchFood("burger", (item,data)=>{
    console.log(data)
    orderFood(item ,(id)=>{
        console.log("order id is here: ",id)
        payment(item,id,(data)=>{
            console.log("your order status is " , data)

        });
    });
})