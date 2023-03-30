import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
    getCursos(): Array<string> {
        return ['Angular', 'Node', 'Flutter']
    }
}