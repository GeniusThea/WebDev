var student =  require('./student')
var readLine = require("readline-sync")
var list = [] 
var count = 0
var studentNum = 0


function addStudent(){    
    let student1 = new student()
    student1.setName(readLine.question('Name: '))
    list.push(student1)
}

while(true){

    console.log("\n     OPTIONS ")
    var input1 = readLine.question("  Press '1' to add Student\n  Press '2' to exit.\n")
    if(input1 == 1){
        console.log("\n     ADD STUDENT :")
        addStudent()
        while(count!= 3){
            list[studentNum].addSched(readLine.question('Add Schedule: '))
            count++
        }
        list[studentNum].deleteSched()
    } 
    studentNum++ 
    count =0;
    if(input1 == 2){
        console.log(`\n  STUDENTS INFO`)
        for(let i = 0; i<list.length ; i++){
            list[i].displayinfo()
            
        }
        break 
           
    }
    continue
}

var http = require('http');
http.createServer(function(req,res){
    res.write("Your Beautiful")
    res.end();
    console.log("Running on localhost : 1992")
}).listen(1992);



