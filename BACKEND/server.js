
const RepositoryManager = require('./AdminRepository/RepositoryManager');

const run = async() => {
    const oRepManager = new RepositoryManager();
    await oRepManager.prepareService();
    await oRepManager.runService();
}

run();



