import { PartialType } from '@nestjs/mapped-types';
import { CreateProyectDto } from './create-project.dto';


export class UpdateProyectDto extends PartialType(CreateProyectDto) {



}
