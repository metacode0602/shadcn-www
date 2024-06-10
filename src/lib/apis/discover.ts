import { WEBUI_API_BASE_URL } from '$lib/constants.js';

/**
 * 获取当前分类下的页面
 * @param category
 * @param start 从第几条开始加载数据
 * @returns
 */
export const getDiscovers = async (category: string = '', start: number) => {
    let error = null;

    const res = await fetch(`${WEBUI_API_BASE_URL}/discover`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.token}`
        }
    })
        .then(async (res) => {
            if (!res.ok) throw await res.json();
            return res.json();
        })
        .then((json) => {
            return json;
        })
        .catch((err) => {
            error = err.detail;
            console.log(err);
            return null;
        });

    if (error) {
        throw error;
    }

    return res;
};