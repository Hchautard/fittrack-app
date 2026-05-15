export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  gender?: string;
  birthday?: string;
  config?: Record<string, any>;

  constructor(id: number, name: string, email: string, password: string, phone?: string, address?: string, city?: string, state?: string, country?: string, zip?: string, gender?: string, birthday?: string, config?: Record<string, any>) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.address = address;
    this.city = city;
    this.state = state;
    this.country = country;
    this.zip = zip;
    this.gender = gender;
    this.birthday = birthday;
    this.config = config;
  }
}
