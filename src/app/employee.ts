export class Employee {
    id:number;
    fullname:string;
    currentrole:string;
    email:string;
    mobile:string;
    skills:string;
    qualification:string;
    resume:string;
    photo:string;

    constructor(id:number,fullname:string,currentrole:string,email:string,mobile:string,skills:string,qualification:string,resume:string,photo:string){
this.id=id;
this.fullname=fullname;
this.currentrole=currentrole;
this.email=email;
this.mobile=mobile;
this.skills=skills;
this.qualification=qualification;
this.resume=resume;
this.photo=photo;
}
}
