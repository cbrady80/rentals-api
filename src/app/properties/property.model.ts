export class Property {
    
    constructor(
        public _id: string,
        public address: string,
        public description: string,
        public current_tenants: string,
        public current_rent: string,
        public imagePath: string,
        public notes: string
    ) { }
}