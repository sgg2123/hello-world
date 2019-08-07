import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// only necessary if service had dependencies in its constructor
// eg. constructor(logService: LogService)
// injectable class means angular should be able to inject dependencies of this class into its contructor
// note component decorator internally includes injectable decorator
export class EmailService {

  constructor() { }
}
