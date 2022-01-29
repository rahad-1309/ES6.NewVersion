class student{
    constructor(sName,sID){
        this.name = sName;
        this.name = sID;
    }
}
class teacher{
    constructor(sCourse,sCourseCode,sCourseName){
        this.course = sCourse;
        this.courseCode = sCourseCode;
        this.courseName = sCourseName;
    }
}

const student1 = new student("Md.Rahad Islam",3623)
const student2 = new student("Sadia Sultana Chowa",3052)

const teacher1 = new teacher("OOP",314234224,"Md.Jahid")
const teacher2 = new teacher ("BLC",764830,"Md.Akhter Hossain")

console.log(student1,student2)
console.log(teacher1,teacher2)
console.log(teacher1.courseName,teacher2.courseName)