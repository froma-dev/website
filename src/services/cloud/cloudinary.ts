import config from '@config/config'
const BASE_URL = config.CLOUDINARY_BASE_URL

const getObjectUrl = (object: string) => `${BASE_URL}/${object}`

export {getObjectUrl}