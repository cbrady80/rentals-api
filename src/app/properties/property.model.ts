export class Property {
    
    constructor(
        public address: string,
        public description: string,
        public current_tenants: string,
        public current_rent: string,
        public imagePath: string,
        public notes: string,
        // public maintenance_records: {},
        // public properties: Properties[]
    ) { }
}