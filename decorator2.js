
const logger = (loggerName) => function(value, { name, kind }) {
  if(kind === 'method' || kind === 'getter') {
    return function(...args) {
      console.log(`Loggin ${name} execution with ${args.join(',')}`);
      const returnedValue = value.call(this, ...args);
      return returnedValue;
    }
  };
}

class Person {

  weight = 64;
  
  @logger('Method')
  getWeight() {
    return this.weight;
  }
  
  @logger('Getter')
  get peso() {return this.weight}
  
  set peso(value) { this.weight = value;}
}

const p = new Person();
p.getWeight(500);
p.peso;