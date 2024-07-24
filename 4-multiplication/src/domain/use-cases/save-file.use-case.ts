import  fs from 'fs';
export interface SaveFileUseCase {
    execute:(options:Options)=>boolean;
}

export interface Options{
    fileContent:string;
    destination?:string;
    fileName?:string;
}

export class SaveFile {
    constructor(
         /*repository:storeRepository */
    ){};
    execute({fileContent,destination='outputs',fileName='table'}:Options):boolean{
        try {
            
            fs.mkdirSync(destination,{recursive:true});
            fs.writeFileSync(`${destination}/${fileName}.txt`,fileContent);
            console.log('File Created!');
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }


}