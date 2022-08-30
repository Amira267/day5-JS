
class  Person{
    constructor(fullName, money, sleepMood, healthRate){
          this.fullName =fullName;
          this.money = money;
      }  
      
      sleep(hrs){
          if( hrs == 7)
              this.sleepMood = "Happy";
          else if (hrs > 7)
              this.sleepMood  = "lazy";
          else 
              this.sleepMood = "tired";
      }
  
      eat(meals){
          if(meals == 3)
              this.healthRate = 100;
  
          else if (meals == 2)
              this.healthRate = 75;
  
          else
              this.healthRate = 50;
      }
  
      buy(items){
          this.money -= items*10;
      }

  } 

class empolyee extends Person{
    constructor(ID,workMood,salary,isManager){
        super(fullName, money, sleepMood, healthRate)
        this.ID=ID;

        

    }

    work(hrs){
       
        if (hrs == 8 )
        this.workMood = "happy";
       
        else if(hrs < 8)
            this.workMood = "lazy";
       
        else 
            this.workMood = "tired";
    }
    
    setSalary( salary ){
        this.salary = salary >= 1000 ? salary : -1000;
    }
     getID(){
        return this.ID;
    }

}

class office{
    constructor(){
            this.empolyees=[]
    }
    hire( empolyee ){
        this.employees[ empolyee.getID()  ] = empolyee;
    }

    fire( empolyee ){

        delete this.employees[ empolyee.getID()  ];
    }

    getEmployee( empId ){
        return this.employees[ empolyee.getID()  ];

    }

    getAllEmployees(){
        return this.employees;
    }

}




  
let addEmp = function(){
    let fName = prompt("enter full name ");
    let mang = prompt("enter is he manager ? enter yes or no") =="yes" ? true : false;    
    let sal = prompt("enter salary");
    let emp = new empolyee(fName , mang);
    emp.setSalary(sal);
    emp.sleep(9);
    emp.work(5);
    emp.eat(2);

alert(`${emp.fullName} ${emp.sleepMood} ${emp.workMood}`);
console.log(emp)
console.log(emp.workMood)


    return emp;

}
  
    

let f= new office();
while (1){
    let op = prompt(" 'add'  'mngr' 'nrml' 'q'  ");
     

    switch(op)
    {
        case "mngr":
        let act = prompt(" 'hire' 'fire' 'showall'  'showEmp'  ")
    
        if(act == "hire"){
            addEmp();
    
        }else if ( act == "fire"){
            f.fire(prompt("enter id to be deleted"));
    
        } else if (act == "showall"){
            let ret = f.getAllEmployees();
            for( i of ret ){
                console.log(`emp id is : ${i.getID()} and employee is:` );
                console.log(i);
            }    
        }else {
            let e = f.getEmployee(prompt("enter id to be shown"));    
            console.log(`emp id is : ${e.getID()} and employee is:` );
            console.log(e);

        }
        break;
        case "add":
            addEmp();
            break;

        case "q":
            break

    }

    
}
  