const cats = ["Milo","Otis", "Garfield"]

const destructivelyAppendCat = cat => cats.push(cat)
const destructivelyPrependCat = cat => cats.unshift(cat)
const destructivelyRemoveLastCat = () => cats.pop()
const destructivelyRemoveFirstCat = () => cats.shift()

const appendCat = cat => [...cats, cat]
const prependCat = cat => [cat, ...cats]

const removeFirstCat = () => cats.slice(1)
const removeLastCat = () => cats.slice(0,-1)