export function debounce(func,content, delay = 50){
  let id = null;
  return function(...args){

    if(id) clearTimeout(id)
    id = setTimeout(()=> {
      func.apply(content, args)
    }, delay) 
  }
}