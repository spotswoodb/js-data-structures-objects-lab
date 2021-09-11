// Write your solution in this file!

const driver = {greeting: "hello"}

function updateDriverWithKeyAndValue(obj, key, value){
    // return Object.assign({}, obj, {[key]: value})
  const newObj = { ...obj };

  newObj[key] = value;

  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}

function deleteFromDriverByKey(obj, key){
  const newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key]
  return obj
}


// destructivelyDeleteFromDriverByKey() - this function should work the same as
// deleteFromDriverByKey() but it should mutate the driver passed in. Be sure to consider
// whether and how using dot notation vs. bracket notation might affect your solution.