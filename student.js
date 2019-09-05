var readLine = require("readline-sync") 
class student {
    constructor(name){
        this.name = name;
        this.schedule = [];
    
    } 
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setCourse(course){
        this.course = course;
    }
    setYear(year){
        this.year = year 
    }
    addSched(sched){
        this.schedule.push(sched)
    }
    deleteSched(){
        console.log("\n     Want to delete schedule?")
        for(let i =0; i< this.schedule.length; i++){
            console.log("Schedule "+ (i+1) +": "+ this.schedule[i])
        }
        var input = readLine.question("\n     Choose schedulde to delete(1-3)\n      Press (0) not to delete\n")
        for(let i = 0 ; i < this.schedule.length+1; i++){
            if(input == i){
                var index = i-1      
                this.schedule.splice(index , 1)
                console.log("       NEW SCHEDULE")
                for(let i =0; i< this.schedule.length; i++){
                    console.log("Schedule "+ (i+1) +": "+ this.schedule[i])
                }
            }
            if(input == 0){
                break
            }
        }
    }
    displayinfo(){
        
        console.log("")
        console.log(` Name: ${this.name} `)
        for(let i =0; i< this.schedule.length; i++){
            console.log("Schedule "+ (i+1) +": "+ this.schedule[i])
        }
        
    }
}
module.exports = student;