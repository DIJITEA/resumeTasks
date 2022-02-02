function sort_ascending(params) {
  return params.sort((a, b) => a - b);
}
function descending_sort(params) {
  return params.sort((a, b) => b - a);
}
function sort_аscending_unique(params) {
  return Array.from(new Set((params = params.sort((a, b) => a - b))));
}
function descending_sort_unique(params) {
  return Array.from(new Set((params = params.sort((a, b) => b - a))));
}
function array_max(params) {
  let max = params[0]
  params.forEach(el => {
     if (el >= max){
       max = el
     }
  }); 
  return max
}
function array_min(params) {
  let min = params[0]
  params.forEach(el => {
     if (el <= min){
       min = el
     }
  }); 
  return min
}

// Tests

let test_array = [11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0];

console.log(`Test array: ${test_array.join(' ')}`)
console.log(`Descending sort: ${descending_sort(test_array).join(' ')}`);
console.log(`Sort ascending: ${sort_ascending(test_array).join(' ')}`);
console.log(`Sort аscending without duplicates: ${sort_аscending_unique(test_array).join(' ')}`);
console.log(`Sorting in descending order without duplicates: ${descending_sort_unique(test_array).join(' ')}`);
console.log(`max ${array_max(test_array)}`);
console.log(`min ${array_min(test_array)}`);