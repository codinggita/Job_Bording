export class Jobs{
    jobName:string;
    companyName:string;
    startPackage:string;
    endPackage:string;
    jobType:string;
    active:boolean;
    constructor(){
        this.companyName='';
        this.jobName='';
        this.startPackage='';
        this.endPackage='';
        this.jobType='';
        this.active=false;
    }
}