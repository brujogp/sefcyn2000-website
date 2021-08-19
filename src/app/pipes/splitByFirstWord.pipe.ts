import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'splitByFirstWord'
})
export class SplitByFirstWordPipe implements PipeTransform {

  transform(words: string): string {
    if (words.indexOf(' ') > -1) {
      const firstWord = words.slice(0, words.indexOf(' '));
      const anotherWords = words.slice(words.indexOf(' '));

      words = firstWord + '\n' + anotherWords;
    } else {
      words = words + '\n';
    }

    return words;
  }

}
