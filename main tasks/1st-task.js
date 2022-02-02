function type(params) {
  if (Array.isArray(params)) {
    return "array";
  }
  return typeof params;
}

// Tests

let test_array = ["str", 1, { n: 1 }, [1, 2], true, null, type, new Set()];

test_array.forEach(el => {
    console.log(type(el));
}); 