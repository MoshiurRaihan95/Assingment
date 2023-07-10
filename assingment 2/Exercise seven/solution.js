function getAddressCity(address) {
    return address?.city ?? "Unknown";
  }
  
const address = { street: '123 Main St', country: 'USA' };
const result = getAddressCity(address);
console.log(result);