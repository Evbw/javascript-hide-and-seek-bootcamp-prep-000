function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget () {
  return document.querySelector('#nested .target')
}

function increaseRankBy (n) {
  const lis = document.querySelectorAll('.ranked-list')
     
    for (let i = 0; i < lis.length; i++) {
      lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
    }
}

function deepestChild () {
  let current = array
  let next = []
 
  
  while (current) {
    // if `current` satisfies the `criteriaFn`, then
    // return it — recall that `return` will exit the
    // entire function!
    if (criteriaFn(current)) {
      return current
    }
 
    // if `current` is an array, we want to push all of
    // its elements (which might be arrays) onto `next`
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
 
    // after pushing any children (if there
    // are any) of `current` onto `next`, we want to take
    // the first element of `next` and make it the
    // new `current` for the next pass of the `while`
    // loop
    current = next.shift()
  }
 
  // if we haven't
  return null
}