export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface UserContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: Address;
  company: string;
  jobTitle: string;
  avatar: string;
}

