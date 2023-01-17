import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}

  getBooks(): Array<string> {
    return ['Torto Arado', 'Estação Carandiru', 'O sonho de um homem ridículo'];
  }
}
