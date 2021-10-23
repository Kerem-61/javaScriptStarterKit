class Customer{
    constructor(id,customerNumber){
        this.id = id 
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1, "12345")
customer.name = "murat"
console.log(customer.customerNumber)

class Individual Customer extends Customer{
    constructor(firstName,id,customerNumber){
    super(id,customerNumber)
    this.firtsName = firstName
    }

}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
}

} 





