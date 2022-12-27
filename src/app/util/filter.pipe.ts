import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(
    items: any[],
    searchText: string,
    fields: string[],
    filteredCount: any
  ): any[] {
    let newList: any[] = [];
    // return empty array if array is falsy
    if (!items) {
      return [];
    }

    // return the original array if search text is empty
    if (!searchText) {
      filteredCount.count = items.length;
      return items;
    }

    // convert the searchText to lower case
    searchText = searchText.toLowerCase();

    fields.forEach((element) => {
      newList.push(
        ...items.filter((item) => {
          if (item && item[element]) {
            return item[element].toString().toLowerCase().includes(searchText);
          }
          return false;
        })
      );
    });

    let listReturn = newList.filter((c, index) => {
      return newList.indexOf(c) === index;
    });

    filteredCount.count = listReturn.length;

    return listReturn.sort((a, b) => {
      const nameA = a.collection.toUpperCase(); // ignore upper and lowercase
      const nameB = b.collection.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }
}
