// corrected


  function Human(name, age, gender, hight, weight) {
        this.name = name || 'humans`s name';
        this.age = age || 'humans`s age';
        this.gender = gender || 'humans`s gender';
        this.hight = hight || 'humans`s hight';
        this.weight = weight || 'humans`s weight';
    }

    function Worker(job, salary) {
        this.job = job || 'workers`s job';
        this.salary = salary || 'workers`s salary';
        this.work = function() {
            console.log('Working!');
        };
    }


    Worker.prototype = new Human("Oleg", 24, "Male", 180, 80);


    function Student(study, scholarship) {
        this.study = study || 'student`s study';
        this.scholarship = scholarship || 'student`s scholarship';
        this.watchTvSeries = function() {
            console.log('Watching TV series!');
        };
    }

    Student.prototype = new Human("Alex", 21, "Male");

    var newWorker1 = new Worker("haker");
    var newStudent1 = new Student("KPI");

    console.log('Worker name:', newWorker1.name + '\n' + 'Age:', newWorker1.age + '\n' + 'Gender:', newWorker1.gender + '\n' + 'Hight:', newWorker1.hight + '\n' + 'Weight:', newWorker1.weight + '\n' + 'Job:', newWorker1.job + '\n' + 'Salary:', newWorker1.salary);
    newWorker1.work();
    console.log('Student name:', newStudent1.name + '\n' + 'Age:', newStudent1.age + '\n' + 'Gender:', newStudent1.gender + '\n' + 'Hight:', newStudent1.hight + '\n' + 'Weight:', newStudent1.weight + '\n' + 'Study:', newStudent1.study + '\n' + 'Scholarship:', newStudent1.scholarship);
    newStudent1.watchTvSeries();
