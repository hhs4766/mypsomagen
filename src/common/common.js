export function test_1(){
	console.log("function test_1 calling!!")
}
export function test_2(){
	console.log("fucntion test_2 calling!!")
}
export async function call(urlroot, files, mode, data){
	let result = await fetch(urlroot+files,{
		method:mode,
		headers: { 'Accept': 'application/json','Content-Type': 'application/json'},
		body:JSON.stringify(data)
	}).then(res=>res.json());
	return result;
}