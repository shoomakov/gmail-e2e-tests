export class Pages {
  /**
   * Page name
   * @param {string} name
   */
  create(name) {
    let employee
    if (type === 'fulltime') {
      employee = new FullTime()
    } else if (type === 'parttime') {
      employee = new PartTime()
    } else if (type === 'temporary') {
      employee = new Temporary()
    } else if (type === 'contractor') {
      employee = new Contractor()
    }
    employee.type = type
    employee.say = function () {
      console.log(`${this.type}: rate ${this.rate}/hour`)
    }
  }
}
