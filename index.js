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
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]
 
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0] 
  }
  
  return node

    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    
    current = next.shift()
  }
 
  // if we haven't
  return null
}