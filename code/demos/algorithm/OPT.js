const utils = require('./utils/index.js');

const resources = utils.generateSpace(10);

class OPT {
    maxMemorySize = 3;
    memorySpace = [];
    resources = [];

    constructor(resources) {
        this.resources = [...resources];
        console.log(resources)
    }

    write() {
        console.log(this.memorySpace);
        if (this.resources.length === 0) return;

        const resource = this.resources.shift();
        if (!this.memorySpace.includes(resource)) {
            if (this.memorySpace.length < this.maxMemorySize) {
                this.memorySpace.push(resource);
                return;
            }
            let replaceResourceIndex = -1;
            this.resources.forEach((resource) => {
                const find = this.memorySpace.indexOf(resource);
                if (find > -1) {
                    replaceResourceIndex = find;
                }
            });

            if (replaceResourceIndex < 0) {
                this.memorySpace.splice(0, 1, resource);
            } else {
                this.memorySpace.splice(replaceResourceIndex, 1, resource);
            }
        }
    }
}
const opt = new OPT(resources);

resources.forEach(() => {
    opt.write();
});
