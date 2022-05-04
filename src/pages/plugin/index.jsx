import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import ToggleButton from "../../components/ToggleButton";
import { getPluginById } from "../../services/CRUDServices";
import updatePluginAllow from "../../utils/updatePluginAllow";

const PluginPage = () => {
<<<<<<< HEAD
  let params = useParams();
  const navigate = useNavigate();
  const fetchOnePlugin = async () => {
    try {
      const { data } = await getPluginById(params.id);
      return data;
    } catch (e) {
      navigate("/404");
    }
  };
  const { isLoading, error, data, refetch } = useQuery(
    "pluginInfo",
    fetchOnePlugin
  );
  return (
    <div>
      {isLoading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>Error! {error.message}</p>
      ) : (
        data && (
          <>
            <Header backTo={"/"} title={data.title} />
            <ToggleButton
              data={data}
              id={data.id}
              updateOnToggle={updatePluginAllow}
              refetch={refetch}
            />
            <div className="container w-1/2 ml-4">
              <p>{data.description}</p>
            </div>
          </>
        )
      )}
    </div>
  );
};
=======
    let params = useParams();
    const navigate = useNavigate();
    const fetchOnePlugin = async () => {
       try {
           const {data} = await getPluginById(params.id);
           return data;
       }catch (e) {
           navigate("/404");
       }
    };
    const {isLoading, error, data, refetch} = useQuery("pluginInfo", fetchOnePlugin);
    return (
        <div>
            {isLoading ? (
                <p>Loading ...</p>
            ) : error ? (
                <p>Error! {error.message}</p>
            ) : (
                data && (
                    <>
                        <Header backTo={'/'} title={data.title}/>
                        <ToggleButton data={data} updateOnToggle={updatePluginAllow} refetch={refetch}/>
                        <div className="container w-1/2 ml-4">
                            <p>{data.description}</p>
                        </div>
                    </>

                )
            )}
        </div>
    );
}
>>>>>>> c404dc6ce06b2818be681d572f06b4ca328ae904

export default PluginPage;
