import { PieChartContentWeekNov } from "components/LineChart/PieChartContentWeekNov";
import ChartModal from "components/Modal";
import React, { useState } from "react";

const styleCustom: {
  week: React.CSSProperties;
  weekBottomLabel: React.CSSProperties;
} = {
  weekBottomLabel: {
    position: "absolute",
    left: "46.13%",
    right: "34.07%",
    top: "66.85%",
    bottom: "26.48%",
    width: "158px",
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "11px",
    lineHeight: "25px",
    color: "rgb(75, 84, 97)",
    border: " 2px solid rgb(75, 84, 97)",
    background: "rgb(255, 255, 255)",
    textAlign: "center",
    borderRadius: "50px",
    zIndex: 80,
    cursor: "pointer",
  },
  week: {
    position: "absolute",
    left: "52.1%",
    right: "36.92%",
    top: "25.15%",
		bottom: "32.45%",
    border: "1px dashed rgb(97, 97, 97)",
    borderRadius: "5px",
    width: "50px",
  },
};

const WeekNovember: React.FC<{}> = ({}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const ModalWeek44Nov = () => {
    const title = "Répartition de l'éffort de sobiété";
    return (
      <ChartModal title={title} isOpen={modal} toggle={toggle}>
        <PieChartContentWeekNov />
      </ChartModal>
    );
  };
  return (
    <>
      <div style={styleCustom.weekBottomLabel} onClick={toggle}>
        Etude semaine de novembre
      </div>
      <div style={styleCustom.week}></div>
      <ModalWeek44Nov />
    </>
  );
};

export default WeekNovember;
