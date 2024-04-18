import { Customer } from 'fedapay';

// Configure the package with your account's secret key
import { configure } from 'fedapay';
configure('your_secret_key');

// Now you can use the Customer class to interact with the FedaPay API
let customers = await Customer.all();
