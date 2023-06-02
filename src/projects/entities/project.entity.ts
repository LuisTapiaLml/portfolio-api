import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name : 'projects'
})
export class Project {

    @PrimaryGeneratedColumn('uuid')
    id_project : string;


    @Column('varchar' , {
        unique : true 
    })
    project_name : string;


    @Column('varchar')
    description : string


    @Column('tinyint',{
        default : 1
    })
    status : number


}
