import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    // items are array of our information and searchText for typing in input
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
console.log(items);
return items.filter( it => {
      return it.properties.title.toLowerCase().includes(searchText);
    });
   }

}
