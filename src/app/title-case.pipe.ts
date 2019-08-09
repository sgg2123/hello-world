import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return null;

    let words = value.split(' ');
    for (let i=0; i<words.length; i++) {
      if (this.isPreposition(words[i]) && i > 0)
        words[i] = words[i].toLowerCase();
      else
        words[i] = this.toTitleCase(words[i]);
    }

    return words.join(' ');
  }

  private toTitleCase(word: string): string {
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPreposition(word: string): boolean {
    let prepositions = ['of', 'the']; // etc.

    return prepositions.includes(word.toLowerCase());
  }

}
