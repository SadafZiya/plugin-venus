import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { RadioBtn } from "../../components/RadioBtn";
import { getOneData } from "../../services/CRUDServices";
import updatePluginAllow from "../../utils/updatePluginAllow";

function PluginPage() {
    let params = useParams();
    const fetchOnePlugin = async () => {
        const { data } = await getOneData(params.id);
        return data;
    };
    const { isLoading, error, data, refetch } = useQuery("pluginInfo", fetchOnePlugin);
    return (
        <div>
            {isLoading ? (
                <p>Loading ...</p>
            ) : error ? (
                <p>Error! {error.message}</p>
            ) : (
                data && (
                    <>
                        <Header title={data.title} />
                        <RadioBtn data={data} updateOnToggle={updatePluginAllow} refetch={refetch} />
                        <div className="container w-1/2 ml-4">
                            <p>{data.description}</p>
                        </div>
                    </>

                )
            )}
        </div>
    );
}

export default PluginPage;
