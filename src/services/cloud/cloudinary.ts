import config from '@config/config'
const BASE_URL = config.CLOUDINARY_BASE_URL

const getImageUrl = (object: string) => `${BASE_URL}/${object}`

export {getImageUrl}