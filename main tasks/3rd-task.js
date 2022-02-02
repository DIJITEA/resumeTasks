function merge_objects(params) {
  let output = {};
  params.forEach(obj => {
    output[obj.name] = obj.value;
  });

  return output;
}

// Tests

let test_objects = [
  { name: "overflow", value: "hidden" },
  { name: "cursor", value: "pointer" },
];

console.log(merge_objects(test_objects));