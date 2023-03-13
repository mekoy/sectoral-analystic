import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "components/Layout";
import { Container } from "reactstrap";
import { ICurvesConsoContextType, useCurvesConsoContext } from "pages/context";
import DisplayConsoCurves from "pages/DisplayConsoCurves";

const App: React.FC<{}> = () => {
  const { dataFetch, isLoading }: ICurvesConsoContextType =
    useCurvesConsoContext();

  return (
    <Layout>
      {isLoading ? (
        <>
          <DisplayConsoCurves dataApi={dataFetch} />
        </>
      ) : (
        <>
          <div
            className="py-5 border-box text-center"
            style={{
              margin: "0 auto",
              background: "rgba(255, 255, 255, 0.897)",
              border: "1px solid #ccc",
            }}
          >
            <div className="spinner-border" role="status">
              <div
                className="spinner-border ml-auto"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default App;
