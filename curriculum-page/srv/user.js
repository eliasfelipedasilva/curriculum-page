const cds = require('@sap/cds');
const {Users} = cds.entities('curso.curriculum.user');

module.exports = class UserClass extends cds.ApplicationService {
    async init() {
        this.before('CREATE', 'Users', async (req) => this.teste());
    
        await super.init();
    }

   async teste(){
        console.log("req")
    }

}