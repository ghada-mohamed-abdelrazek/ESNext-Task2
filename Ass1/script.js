            // 1- Create a base class Person with properties: name and age.
            // 2-Create a subclass Teacher with property subject and method teach().
            // 3-Create a subclass Student with property major and method study().
            // 4-Create objects of Teacher and Student, then call their methods.
            // 5-override a method introduce() in both Teacher and Student.
        class Person{
                #id;
                #name;
            constructor(_id,_name){
                this.ID=_id;
                this.Name=_name;
            }
            introduce() {
                return(`ID : ${this.ID}, Name : ${this.Name}`)
            }
            set ID(_id){
                if(_id<0){
                    console.log("invalid id value")
                }
                else {
                    this.#id=_id
                }
            }
            get ID(){
                return this.#id;
            }
                set Name(_name){
                    if(_name.length<3){
                        console.log("invalid Name value")
                    }
                    else {
                        this.#name=_name
                    }
                }
            get Name(){
                return this.#name;
            }
        }
            class Teacher extends Person{ 
                constructor(_id,_name,_subject) {
                    super(_id,_name);// chaining 
                    this.subject =_subject
                }
                teach () {
                    return (` ${this.Name} is teaching ${this.subject}.`)
                }
                introduce() {
                    return(`${super.introduce()} Teach : ${this.subject}`)
                }
            }
            class Student extends Person{
                constructor(_id,_name,_major){
                    super(_id,_name);
                    this.major = _major
                }
                study() {
                    return(` ${this.Name} is Studying ${this.major}`)
                }
                introduce() {
                    return(`${super.introduce()}, Major : ${this.major}`)
                }
            }
            const teacher1 = new Teacher(30, "Karim", "Mathematics");
            const std1 = new Student(22, "Ghada", "Computer Science");

            console.log(teacher1.introduce())
            console.log(teacher1.teach())
            console.log(std1.introduce())
            console.log(std1.study())