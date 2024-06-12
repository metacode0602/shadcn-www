import { dev } from '$app/environment';

export const WEBUI_BASE_URL = dev ? `/dev-api` : ``;
export const WEBUI_API_BASE_URL = `${WEBUI_BASE_URL}/api/v1`;

/**
 * 图片访问地址
 */
export const IMG_BASE_URL = 'https://yilabao-img.oss-cn-beijing.aliyuncs.com/ai/island'