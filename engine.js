// function addItemsTocart(){
//     var item=document.getElementsByClassName('card');
//     var setitems=item;
//     document.getElementsByClassName('cardElements').appendChild(setitems);
// }

class RailwayForm{
    submit(){
        alert(`${this.name} Your form is submitted`);
    }
    cancel(){
        alert("Your ticket is calcelled");
    }
    constructor(name){
        this.name=name;
    }
}

let nikform=new RailwayForm("Nikhil Pandravesham");
// nikform.fill("Nikhil Pandravesham")
nikform.submit()
let samform=new RailwayForm("sam");
// samform.fill("sam");
samform.submit();
samform.cancel();
// console.log("The addition of two numbers : "+cal.add());
// console.log("The addition of two numbers : "+cal.mul());
