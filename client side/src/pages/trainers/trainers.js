import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { apiTrainer } from "../../service/axiosConfig";
import classes from "./trainers.module.css";
import * as Icon from "react-bootstrap-icons";
import { Alert } from "@mui/material";
function Trainers() {
  const [trainerState, setTrainerState] = useState([]);
  const getToken = () => {
    return { token: localStorage.getItem("token") };
  };

  useEffect(() => {
    apiTrainer
      .get("/", { headers: getToken() })
      .then((res) => setTrainerState(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className={classes.body}>
        <div className={"container mt-3 pb-5"}>
          <div className="row g-3 ">
            <h2 className={classes.title}>Our Trainers</h2>
            {!localStorage.getItem("token") && (
              <Alert
                style={{
                  justifyContent: "center",
                  fontSize: "16px",
                  width: "500px",
                  marginLeft: "28%",
                  fontWeight: "bold",
                }}
                severity="warning"
              >
                You should login first !
              </Alert>
            )}
            {localStorage.getItem("token") && (
              <>
                {trainerState.map((trainer, index) => {
                  return (
                    <Card
                      id={classes.card}
                      className={"col-sm-12 col-md-3  p-4 "}
                      style={{
                        padding: "20px",
                        backgroundColor: '#a3a19f',
                        width: "18rem",
                        border: "dark",
                        marginRight: "40px",
                        marginLeft: "40px",
                        textAlign: "center",
                        marginTop: "40px",
                        marginBottom: "80px",
                        boxShadow: "0 0 24px 0 #000000",
                      }}
                    >
                      <Card.Img
                        className={classes.imgSize}
                        variant="top"
                        src={
                          `http://localhost:8080/${trainer.trainerImage}` ||
                          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                        }
                      />
                      <Card.Body>
                        <Card.Title>
                          {trainer.firstName} {trainer.lastName}
                        </Card.Title>
                        <Card.Text className={"my-1"}>{trainer.job}</Card.Text>
                        <Card.Text>
                          {trainer.experience}
                          <br />
                          The courses that i explain:-
                          <br />- {trainer.course}
                          <br />
                          <br />
                          <Card.Text>{trainer.about}</Card.Text>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Trainers;
