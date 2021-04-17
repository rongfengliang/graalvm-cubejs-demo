// Cube.js configuration options: https://cube.dev/docs/config
const {PrestoDriver,PrestodbQuery} = require("@dalongrong/trino-driver")
module.exports = {
    dialectFactory: (dataSource) => {
        return PrestodbQuery
    },
    dbType: ({ dataSource } = {}) => {
        return "trino"
    },
    driverFactory: ({ dataSource } = {}) => {
        return new PrestoDriver({
            checkInterval:50
        })
    }
};