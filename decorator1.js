
function logger(value, { name, kind }) {
  if(kind === 'method') {
    return function(...args) {
      console.log(`Loggin ${name} execution with ${args.join(',')}`);
      const returnedValue = value.call(this);
      return returnedValue;
    }
  };
}

@logger
class Person {
  @logger
  weight = 64;
  
  @logger
  getWeight() {
    return this.weight;
  }
  
  @logger
  get peso() {return this.weight}
  
  @logger 
  set peso(value) { this.weight = value;}
}

const p = new Person();
p.getWeight(500);
