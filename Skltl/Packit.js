console.log("under construction");
const fs = require ('fs');

const getFile = (Path) => 
	new Promise((resolve,reject) => {
		fs.readFile(Path, (err,data) => {
			if (err){ 
				reject(err); 
				return;}
			resolve(data);
		})
	})


getFile("index.html").then(data => console.log(data)).catch(err => console.log(err));