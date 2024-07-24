import { createtable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface Runoptions {
    base:number;
    limit:number;
    show:boolean;
    name:string;
    destination:string;
};

export class serverapp{
    static run({base,limit,show,name,destination}:Runoptions){
        console.log('Server Running...');

        const table= new createtable().execute({base,limit});

        const wasCreated = new SaveFile().execute({
            fileContent:table,
            destination:`${destination}`,
            fileName:`${name}`});

        if(show) console.log(table);

        (wasCreated)? 'Was Created' : 'Failed , it cant created';
    }
}
