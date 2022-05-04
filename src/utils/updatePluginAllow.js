import { patchOneData } from "../services/CRUDServices";

const updatePluginAllow = async (pluginData, refetch) => {
    let { isAllowed, id } = pluginData;
    const { data } = await patchOneData(id, { isAllowed: !isAllowed });
    refetch();
    return data;
};
export default updatePluginAllow;