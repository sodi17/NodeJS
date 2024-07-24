export interface CreateTableUseCase{
    execute:(options:CreateTableOptions)=>string;
}
export interface CreateTableOptions{
    base:number;
    limit?:number;
}
export class createtable implements CreateTableUseCase{
    constructor(

    ){}
    execute({base,limit=10}:CreateTableOptions){
        let outputmessage='';
        let headermessage=`========================
        Tabla del ${base}\n========================\n`;
        let mult:number;
        for(let i=1 ; i<=limit;i++){
            mult=i*base;
            outputmessage+=`${base} x ${i} = ${mult}\n`;
        }
        outputmessage=headermessage+outputmessage;
        return outputmessage;
    }
}