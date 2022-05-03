import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { getOneData } from "../../services/CRUDServices";

function PluginPage() {
    let params = useParams();
    const fetchOnePlugin = async () => {
        const { data } = await getOneData(params.id);
        return data;
    };
    const { isLoading, error, data } = useQuery("pluginInfo", fetchOnePlugin);
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
