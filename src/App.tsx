import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "components/Layout";
import { Container } from "reactstrap";

import { ICurvesConsoContextType, useCurvesConsoContext } from "pages/context";
import DisplayConsoCurves from "pages/DisplayConsoCurves";

const App: React.FC<{}> = () => {
  const { dataFetch }: ICurvesConsoContextType = useCurvesConsoContext();

  return (
    <Layout>
      <Container className="p-0 mt-3">
        <DisplayConsoCurves dataApi={dataFetch} />
      </Container>
    </Layout>
  );
};

export default App;