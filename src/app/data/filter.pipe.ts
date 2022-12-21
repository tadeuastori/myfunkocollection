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
    fieldName: string,
    fieldNumber: string,
    fieldCollection: string,
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

    // retrun the filtered array
    newList.push(
      ...items.filter((item) => {
        if (item && item[fieldNumber]) {
          return item[fieldNumber].toString().includes(searchText);
        }
        return false;
      })
    );

    newList.push(
      ...items.filter((item) => {
        if (item && item[fieldCollection]) {
          return item[fieldCollection].toLowerCase().includes(searchText);
        }
        return false;
      })
    );

    newList.push(
      ...items.filter((item) => {
        if (item && item[fieldName]) {
          return item[fieldName].toLowerCase().includes(searchText);
        }
        return false;
      })
    );

    let listReturn = newList.filter((c, index) => {
      return newList.indexOf(c) === index;
    });

    filteredCount.count = listReturn.length;

    return listReturn.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }
}
