export class Job{
    jobName:string;
    companyName:string;
    startPackage:string;
    endPackage:string;
    jobType:string;
    active:boolean;
    constructor(){
        this.jobName='';
        this.companyName='';
        this.startPackage='';
        this.endPackage='';
        this.jobType='';
        this.active=false;
    }
}