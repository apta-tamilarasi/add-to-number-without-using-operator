let a=prompt('enter the 1st number')
let b=prompt('enter the 2nd number')

const add=(a,b)=>{
	while(b!==0){
		let tem=a&b
		a=a^b
		b=tem<<1
	}
	return a
}
document.write("given number a= "+a+"<br><br>")
document.write("given number b= "+b+"<br><br>")
document.write("total is= "+add(a,b))