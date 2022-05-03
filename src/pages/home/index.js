import React from "react";
import { useQuery } from "react-query";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { getAllData, patchOneData } from "../../services/CRUDServices";

const Home = () => {
    // Get all plugins
    const fetchPlugins = async () => {
        const { data } = await getAllData();
        return data;
    };
    const { isLoading, error, data, refetch } = useQuery("pluginsData", fetchPlugins);

    // Update one plugin based on isAllowed item
    const updatePluginAllow = async (pluginData) => {
        let { isAllowed, id } = pluginData;
        const { data } = await patchOneData(id, { isAllowed: !isAllowed });
        refetch();
        return data;
    };

    return (
        <div className="">
            <Header title="Marketing Plugins" />
            <div className="container">
                {isLoading ? (
                    <p>Loading ...</p>
                ) : error ? (
                    <p>Error! {error.message}</p>
                ) : (
                    data &&
                    data.length &&
                    data.map((plugin) => {
                        return (
                            <Card cardInfo={plugin} key={plugin.id} updateOnToggle={updatePluginAllow} />
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Home;