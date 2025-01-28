import config from '@config/config'
const IMAGES_BASE_URL = config.AWS_S3_IMAGES_BASE_URL
const DOCUMENTS_BASE_URL = config.AWS_S3_DOCUMENTS_BASE_URL

const getDocumentUrl = (objectName: string) => new URL(objectName, DOCUMENTS_BASE_URL)
const getImageUrl = (objectName: string) => new URL(objectName, IMAGES_BASE_URL)

export {getImageUrl, getDocumentUrl}