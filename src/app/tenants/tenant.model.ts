export class Tenant {

    constructor(
        public name: string,
        public phone: string,
        public email: string,
        public property: string,
        public current_rent: string,
        public lease_period: string,
        public co_tenants: string, //may need to be an []
        public emergency_contact: string,
        public pets: string
    ) {}
}