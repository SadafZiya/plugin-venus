import React from "react";
import {useQuery} from "react-query";
import Header from "../../components/Header";
import Card from "../../components/Card";
import {getPluginList} from "../../services/CRUDServices";
import updatePluginAllow from "../../utils/updatePluginAllow";

const Home = () => {
    const fetchPlugins = async () => {
        const {data} = await getPluginList();
        return data;
    };
    const {isLoading, error, data, refetch} = useQuery("pluginsData", fetchPlugins);

    return (
        <div className="">
            <Header title="Marketing Plugins"/>
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
                            <Card cardInfo={plugin}  key={plugin.id}
                                  navigateTo={`/plugin/${plugin.id}`}
                                  updateOnToggle={updatePluginAllow} refetch={refetch}/>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Home;