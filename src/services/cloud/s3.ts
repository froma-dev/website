import config from '@config/config'
const BASE_URL = config.AWS_S3_BASE_URL

const getObjectUrl = (objectName: string) => new URL(objectName, BASE_URL)

export {getObjectUrl}