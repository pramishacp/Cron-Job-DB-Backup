require('dotenv').config();

const env = process.env.NODE_ENV || 'dev'; 

const config = {

    dev: {
        app: {
            port: parseInt(process.env.DEV_APP_PORT) || 3000,
        },
        db: {
            host: process.env.DEV_DB_HOST || 'localhost',
            port: parseInt(process.env.DEV_DB_PORT) || 27017,
            name: process.env.DEV_DB_NAME || 'sample',
            username: process.env.DEV_DB_USERNAME || 'usernameDev' ,
            password: process.env.DEV_DB_PASSWORD || 'passwordDev',
            autoBackup: Boolean(process.env.DEV_DB_AUTO_BACKUP) || true ,
            removeOldBackup: Boolean(process.env.DEV_DB_REMOVE_OLD_BACKUP) || true,
            keep_last_days_backup:  parseInt(process.env.DEV_DB_KEEP_LAST_DAYS_BACKUP) || 2,
            autoBackupPath: process.env.DEV_DB_AUTO_BACKUP_PATH || '/home/dump/sample_dump'
        }
    },

    test: {
        app: {
            port: parseInt(process.env.TEST_APP_PORT) || 3000,
        },
        db: {
            host: process.env.TEST_DB_HOST || 'localhost',
            port: parseInt(process.env.TEST_DB_PORT) || 27017,
            name: process.env.TEST_DB_NAME || 'sample',
            username: process.env.TEST_DB_USERNAME || 'usernameTest' ,
            password: process.env.TEST_DB_PASSWORD || 'passwordTest',
            autoBackup: Boolean(process.env.TEST_DB_AUTO_BACKUP) || true ,
            removeOldBackup: Boolean(process.env.TEST_DB_REMOVE_OLD_BACKUP) || true,
            keep_last_days_backup:  parseInt(process.env.TEST_DB_KEEP_LAST_DAYS_BACKUP) || 2,
            autoBackupPath: process.env.TEST_DB_AUTO_BACKUP_PATH || '/home/dump/sample_dump'
        }
    },

    staging: {
        app: {
            port: parseInt(process.env.STAGING_APP_PORT) || 3000,
        },
        db: {
            host: process.env.STAGING_DB_HOST || 'localhost',
            port: parseInt(process.env.STAGING_DB_PORT) || 27017,
            name: process.env.STAGING_DB_NAME || 'sample',
            username: process.env.STAGING_DB_USERNAME || 'usernameStaging' ,
            password: process.env.STAGING_DB_PASSWORD || 'passwordStaging',
            autoBackup: Boolean(process.env.STAGING_DB_AUTO_BACKUP) || true ,
            removeOldBackup: Boolean(process.env.STAGING_DB_REMOVE_OLD_BACKUP) || true,
            keep_last_days_backup:  parseInt(process.env.STAGING_DB_KEEP_LAST_DAYS_BACKUP) || 2,
            autoBackupPath: process.env.STAGING_DB_AUTO_BACKUP_PATH || '/home/dump/sample_dump'
        }
    },

    prod: {
        app: {
            port: parseInt(process.env.PROD_APP_PORT) || 3000 ,
        },
        db: {
            host: process.env.PROD_DB_HOST || 'localhost',
            port: parseInt(process.env.PROD_DB_PORT) || 27017,
            name: process.env.PROD_DB_NAME || 'sample',
            username: process.env.PROD_DB_USERNAME || 'usernameProd' ,
            password: process.env.PROD_DB_PASSWORD || 'passwordProd',
            autoBackup: Boolean(process.env.PROD_DB_AUTO_BACKUP) || true ,
            removeOldBackup: Boolean(process.env.PROD_DB_REMOVE_OLD_BACKUP) || true,
            keep_last_days_backup:  parseInt(process.env.PROD_DB_KEEP_LAST_DAYS_BACKUP) || 2,
            autoBackupPath: process.env.PROD_DB_AUTO_BACKUP_PATH || '/home/dump/sample_dump'
        }
    }
}

module.exports = config[env];