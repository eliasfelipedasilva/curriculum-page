const cds = require('@sap/cds');

module.exports = class UserClass extends cds.ApplicationService {
    async init() {
        this.before('CREATE', 'Users', async (req) => this.teste());
        await super.init();
    }

   async teste(){
        console.log("req")
    }
}