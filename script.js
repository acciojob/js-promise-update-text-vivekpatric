//your JS code here. If required.
function giveInput() {
	let prom=new Promise((resolve)=>{
		setTimeout(()=>{
			resolve("Hello, world!");
		},1000)
	})
	return prom;
}
let x=giveInput();
x.then(data){
	let div=document.getElementById("output");
	div.innerHTML=data;
}