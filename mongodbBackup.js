const fs = require('fs');
const exec = require('child_process').exec;
const moment = require('moment');
const config = require('./config');

const empty = function (mixedVar) { /* return if variable is empty or not. */
    var undef, key, i, len;
    var emptyValues = [undef, null, false, 0, '', '0'];
    for (i = 0, len = emptyValues.length; i < len; i++) {
        if (mixedVar === emptyValues[i]) {
            return true;
        }
    }
    if (typeof mixedVar === 'object') {
        for (key in mixedVar) {
            return false;
        }
        return true;
    }
    return false;
};

const dbAutoBackUp = function () {
    if (config.db.autoBackup) { // check for auto backup is enabled or disabled
        const currentDate = moment().utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
        const newBackupDir = moment(currentDate).format("YYYY-MM-DD");
        const newBackupPath = `${config.db.autoBackupPath}/mongodump-${newBackupDir}` // New backup path for current backup process
        let beforeDate, oldBackupDir, oldBackupPath;
        if (config.db.removeOldBackup) {  // check for remove old backup after keeping # of days given in configuration
            beforeDate = moment(currentDate).utc().subtract(config.db.keep_last_days_backup, 'days').format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"); // Substract number of days to keep backup and remove old backup
            oldBackupDir = moment(beforeDate).format("YYYY-MM-DD");;
            oldBackupPath = `${config.db.autoBackupPath}/mongodump-${oldBackupDir}`;
        }
        const cmd = `mongodump --host ${config.db.host} --port ${config.db.port} --db ${config.db.name} --out ${newBackupPath}` // Command for mongodb dump process
        exec(cmd, function (error, stdout, stderr) {
            if (empty(error)) {
                if (config.db.removeOldBackup) { // check for remove old backup after keeping # of days given in configuration
                    if (fs.existsSync(oldBackupPath)) {
                        exec(`rm -rf ${oldBackupPath}`, function (err) { });
                    }
                }
            }
        });
    }
}

module.exports = {
    dbAutoBackUp: dbAutoBackUp
}