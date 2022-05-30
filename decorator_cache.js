let __CACHE__ = {};
const cache = (cacheKey) => function(value, { name, kind }) {
  if(kind === 'method') {
    return function(...args) {
      if(__CACHE__[cacheKey]) return __CACHE__[cacheKey];
      const returnedValue = value.call(this, ...args);
      __CACHE__[cacheKey] = returnedValue
      return returnedValue;
    }
  };
}

class Person {

  weight = 64;
  
  @cache('cache')
  getWeight() {
    console.log('Ingreso a getWeight');
    return this.weight;
  }
 
  get peso() {
    console.log('Ingreso a peso');
    return this.weight
  }
  
  set peso(value) { this.weight = value;}
}

const p = new Person();
p.getWeight();
p.getWeight();
p.peso;
p.peso;
