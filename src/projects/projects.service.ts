import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProyectDto } from './dto/create-project.dto';
import { UpdateProyectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectsService {

  constructor(
    @InjectRepository(Project)
    private readonly projectRepository : Repository<Project>,
  ){}


  async create(createProyectDto: CreateProyectDto) {
    
    try {

      const project = this.projectRepository.create(createProyectDto);

      await this.projectRepository.save(project);


      return project;
      
    } catch (error) {
      console.error(error);
    
      throw new InternalServerErrorException('¡Help!')
    }


  }

  findAll() {
    return `This action returns all projects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proyect`;
  }

  update(id: number, updateProyectDto: UpdateProyectDto) {
    return `This action updates a #${id} proyect`;
  }

  remove(id: number) {
    return `This action removes a #${id} proyect`;
  }
}
