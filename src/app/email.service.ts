import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// only necessary if service had dependencies in its constructor
// eg. constructor(logService: LogService)
// injectable class means Angular should be able to inject
// dependencies of this class into its constructor
// note @Component decorator internally includes @Injectable decorator
export class EmailService {

  constructor() { }
}
